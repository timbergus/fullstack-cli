const { graphql } = require('graphql');
const { buildSchema } = require('graphql');

const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
} = require('../handlers/user-handlers');

const schema = buildSchema(`
  input UserInput {
    username: String,
    password: String
  }

  type UserOutput {
    id: ID!
    username: String,
    password: String
  }

  type Query {
    getUsers: [UserOutput],
    getUser(id: ID!): UserOutput
  }

  type Mutation {
    postUser(input: UserInput): UserOutput,
    putUser(id: ID!, input: UserInput): UserOutput,
    deleteUser(id: ID!): UserOutput
  }
`);

const root = {
  getUsers: getUsers,
  getUser: getUser,
  postUser: postUser,
  putUser: putUser,
  deleteUser: deleteUser
};

module.exports.graphqlHandler = (request, reply) => {
  const { query } = request.payload;
  graphql(schema, query, root).then(result => reply(result).code(200));
};
