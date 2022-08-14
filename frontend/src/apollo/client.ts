import { ApolloClient, InMemoryCache } from '@apollo/client';

const serverUrl = 'http://localhost:5000/graphql';

export default new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL ?? serverUrl,
  cache: new InMemoryCache(),
});
