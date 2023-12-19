import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetGames from "./GetGames";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphql error ${message}`);
    });
  }
});
const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const GraphqlTest = () => {
  return (
    <ApolloProvider client={client}>
      <GetGames />
    </ApolloProvider>
  );
};

export default GraphqlTest;
