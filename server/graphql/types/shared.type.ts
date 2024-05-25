import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const NamedAPIResourceType = new GraphQLObjectType({
  name: "NamedAPIResource",
  fields: {
    name: { type: GraphQLString },
    url: { type: GraphQLString },
  },
});

export const NamedAPIResourceListType = new GraphQLObjectType({
  name: "NamedAPIResourceList",
  fields: {
    count: { type: GraphQLInt },
    next: { type: GraphQLString },
    previous: { type: GraphQLString },
    results: { type: new GraphQLList(NamedAPIResourceType) },
  },
});

export const NameType = new GraphQLObjectType({
  name: "Name",
  fields: {
    name: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  },
});

export const APIResourceType = new GraphQLObjectType({
  name: "APIResource",
  fields: {
    url: { type: GraphQLString },
  },
});

export const DescriptionType = new GraphQLObjectType({
  name: "Description",
  fields: {
    description: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  },
});

export const EffectType = new GraphQLObjectType({
  name: "Effect",
  fields: {
    effect: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  },
});

export const EncounterType = new GraphQLObjectType({
  name: "Encounter",
  fields: {
    max_level: { type: GraphQLInt },
    min_level: { type: GraphQLInt },
    condition_values: { type: new GraphQLList(NamedAPIResourceType) },
    chance: { type: GraphQLInt },
    method: { type: NamedAPIResourceType },
  },
});

export const FlavorTextType = new GraphQLObjectType({
  name: "FlavorText",
  fields: {
    flavor_text: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
    version_group: { type: NamedAPIResourceType },
  },
});

export const GenerationGameIndexType = new GraphQLObjectType({
  name: "GenerationGameIndex",
  fields: {
    game_index: { type: GraphQLInt },
    generation: { type: NamedAPIResourceType },
  },
});

export const MachineVersionDetailType = new GraphQLObjectType({
  name: "MachineVersionDetail",
  fields: {
    machine: { type: APIResourceType },
    version_group: { type: NamedAPIResourceType },
  },
});

export const VerboseEffectType = new GraphQLObjectType({
  name: "VerboseEffect",
  fields: {
    effect: { type: GraphQLString },
    short_effect: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  },
});

export const VersionEncounterDetailType = new GraphQLObjectType({
  name: "VersionEncounterDetail",
  fields: {
    version: { type: NamedAPIResourceType },
    max_chance: { type: GraphQLInt },
    encounter_details: { type: new GraphQLList(EncounterType) },
  },
});

export const VersionGameIndexType = new GraphQLObjectType({
  name: "VersionGameIndex",
  fields: {
    game_index: { type: GraphQLInt },
    version: { type: NamedAPIResourceType },
  },
});

export const VersionGroupFlavorTextType = new GraphQLObjectType({
  name: "VersionGroupFlavorText",
  fields: {
    text: { type: GraphQLString },
    language: { type: NamedAPIResourceType },
  },
});

export const LanguageType = new GraphQLObjectType({
  name: "Language",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    official: { type: GraphQLBoolean },
    iso639: { type: GraphQLString },
    iso3166: { type: GraphQLString },
    names: { type: new GraphQLList(NameType) },
  },
});
