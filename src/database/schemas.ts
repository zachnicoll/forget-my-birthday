export const PersonSchema = {
  name: 'Person',
  properties: {
    id: 'string', // uuid
    firstname: 'string',
    lastname: 'string',
    birthdate: 'date',
    image: 'string',
  },
  primaryKey: 'id',
};
