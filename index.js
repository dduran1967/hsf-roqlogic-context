const {Context} = require('yodata-context');
const context = new Context({
  '@type':     'type',
  '@id':       'id',
  'agent':     'contact',
  'telephone': {
    key: 'contactPoint',
    val: props => {
      const value = props && props.value;
      return value ? {type: 'ContactPoint', telephone: value} : undefined;
    }
  },
  'email':     {
    key: 'contactPoint',
    val: props => {
      const value = props && props.value;
      return value ? {type: 'ContactPoint', email: value} : undefined;
    }
  }
});
module.exports = {
  map(message) {
    return (message && message.instrument && message.instrument === 'https://yodata.io/app/smarter-agent') ? context.map(message) : message;
  }
};