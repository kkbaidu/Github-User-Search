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
