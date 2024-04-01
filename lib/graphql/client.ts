import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const { GITHUB_TOKEN } = process.env;

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from env variables if it exists
    const token = GITHUB_TOKEN;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
        ...headers,
        authorization: `Bearer ${"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"}`,
        },
    };
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});