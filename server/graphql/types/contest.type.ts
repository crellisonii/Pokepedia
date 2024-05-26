import {
  EffectType,
  FlavorTextType,
  NameType,
  NamedAPIResourceType,
} from "./shared.type";
import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const ContestNameType = new GraphQLObjectType({
  name: "ContestName",
  fields: () => ({
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  }),
});

export const ContestType = new GraphQLObjectType({
  name: "Contest",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    berry_flavor: { type: NamedAPIResourceType },
    names: { type: new GraphQLList(ContestNameType) },
  }),
});

export const ContestEffectType = new GraphQLObjectType({
  name: "ContestEffect",
  fields: () => ({
    id: { type: GraphQLInt },
    appeal: { type: GraphQLInt },
    jam: { type: GraphQLInt },
    effect_entries: { type: new GraphQLList(EffectType) },
    flavor_text_entries: { type: new GraphQLList(FlavorTextType) },
  }),
});

export const SuperContestEffectType = new GraphQLObjectType({
  name: "SuperContestEffect",
  fields: () => ({
    id: { type: GraphQLInt },
    appeal: { type: GraphQLInt },
    flavor_text_entries: { type: new GraphQLList(FlavorTextType) },
    moves: { type: new GraphQLList(NamedAPIResourceType) },
  }),
});
