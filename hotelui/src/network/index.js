import ApolloClient  from 'apollo-boost';
const client = new ApolloClient({
    uri: "https://hotel-management-api-gql.herokuapp.com/graphql"
})

export default client;