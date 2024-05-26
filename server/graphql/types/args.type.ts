import {
  GraphQLFieldConfigArgumentMap,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export const NameIdArgs: GraphQLFieldConfigArgumentMap = {
  idName: { type: GraphQLString },
};

export const PaginationArgs: GraphQLFieldConfigArgumentMap = {
  limit: { type: GraphQLInt },
  offset: { type: GraphQLInt },
};
