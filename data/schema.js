import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import user from './queries/user';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user,
        }
    })
})
export default schema