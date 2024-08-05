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
