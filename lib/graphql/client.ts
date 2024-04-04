import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.GITHUB_TOKEN;

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