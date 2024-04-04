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