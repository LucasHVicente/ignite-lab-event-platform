import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7cegf0x0801z7giwrgu80/master',
    cache: new InMemoryCache()
})