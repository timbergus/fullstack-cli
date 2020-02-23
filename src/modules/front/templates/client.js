import ApolloClient from 'apollo-boost';

import typeDefs from './schema.graphql';

import { GET_COUNTER } from './queries';

const defaults = {
  counter: {
    __typename: 'Counter',
    value: 0,
  },
};

const resolvers = {
  Mutation: {
    modifyCounter: (_, { amount }, { cache }) => {
      const { counter } = cache.readQuery({
        query: GET_COUNTER,
      });
      cache.writeData({
        data: {
          counter: {
            ...counter,
            value: counter.value + amount,
          },
        },
      });
    },
  },
};

export default new ApolloClient({
  uri: 'https://localhost:3500',
  clientState: {
    resolvers,
    defaults,
    // Only used for introspection in Apollo Client DevTools.
    typeDefs,
  },
});
