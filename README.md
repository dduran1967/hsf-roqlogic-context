# hsf-roqlogic-context
A custom context helper for RoqLogic


## Usage
```javascript
const context = require('hsf-roqlogic-context')

const originalMessage = {
  type:       'Notification',
  instrument: 'https://yodata.io/app/smarter-agent',
  object:     {
    agent: {
      "@type":    "Person",
      givenName:  "Bob",
      familyName: "Smith",
      telephone:  "800-867-5309",
      email:      "bob@example.com"
    }
  }
}

const result = context.map(originalMessage);

/**
{
  type: 'Notification',
  instrument: 'https://yodata.io/app/smarter-agent',
  object: {
    contact: {
      type: 'Person',
      givenName: 'Bob',
      familyName: 'Smith',
      contactPoint: [
        {
          type: 'ContactPoint',
          telephone: '800-867-5309'
        },
        {
          type: 'ContactPoint',
          email: 'bob@example.com'
        }
      ]
    }
  }
}
**/
```