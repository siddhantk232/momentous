const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type user {
    name: String!
  }

  type RootQuery {
    users: [user]!
  }
  schema {
      query: RootQuery
  }
`);
