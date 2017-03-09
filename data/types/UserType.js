import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        userName: { type: GraphQLString },
        age: { type: GraphQLInt },
        sex: { type: GraphQLBoolean }
    }
})
export default UserType;