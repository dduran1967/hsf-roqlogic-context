describe('Context', () => {
  const context = require('..');
  let instrument = 'https://yodata.io/app/smarter-agent';
  let before;
  beforeEach(() => {
    before = {
      type:       'Notification',
      instrument: instrument,
      object:     {
        agent: {
          "@type":      "Person",
          "givenName":  "Tom",
          "familyName": "Aranda",
          "telephone":  "8888888888",
          "email":      "tomaranda78@gmail.com"
        }
      }
    }
  });
  test('maps agent to contact', () => {
    expect(context.map(before)).toMatchObject({
      type:       'Notification',
      instrument: instrument,
      object:     {
        contact: {
          type:         'Person',
          givenName:    'Tom',
          familyName:   'Aranda',
          contactPoint: [
            {
              type:      'ContactPoint',
              telephone: '8888888888'
            },
            {
              type:  'ContactPoint',
              email: 'tomaranda78@gmail.com'
            }
          ]
        }
      }
    });
  });
  test('does not alter if the root instrument is not smarter-agent', () => {
    before.instrument = 'https://yodata.io/app/real-estate-digital';
    const after = context.map(before);
    expect(after).toMatchObject(before);
  })
});