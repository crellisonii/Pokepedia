import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { NameType, NamedAPIResourceType } from "./shared.type";

export const EncounterMethodsType = new GraphQLObjectType({
  name: "EncounterMethods",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    order: { type: GraphQLInt },
    names: { type: new GraphQLList(NameType) },
  }),
});

export const EncounterConditionsType = new GraphQLObjectType({
  name: "EncounterCondition",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    names: { type: new GraphQLList(NameType) },
    values: { type: new GraphQLList(NamedAPIResourceType) },
  }),
});

export const EncounterConditionValuesType = new GraphQLObjectType({
  name: "EncounterConditionValue",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    condition: { type: NamedAPIResourceType },
    names: { type: new GraphQLList(NameType) },
  }),
});
