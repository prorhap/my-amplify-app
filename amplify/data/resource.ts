import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Memo: a.model({
    content: a.string()
  })
  .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam'
  }
});