export const PersonSchema = {
  name: 'Person',
  properties: {
    _id: 'string', // uuid
    firstname: 'string',
    lastname: 'string',
    birthdate: 'date',
    image: 'string',
  },
  primaryKey: '_id',
};
