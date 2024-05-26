import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { NameType, NamedAPIResourceType } from "./shared.type";

export const BerryFlavorMapType = new GraphQLObjectType({
  name: "BerryFlavorMap",
  fields: () => ({
    potency: { type: GraphQLInt },
    flavor: { type: NamedAPIResourceType },
  }),
});

export const BerryType = new GraphQLObjectType({
  name: "Berry",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    growth_time: { type: GraphQLInt },
    max_harvest: { type: GraphQLInt },
    natural_gift_power: { type: GraphQLInt },
    size: { type: GraphQLInt },
    smoothness: { type: GraphQLInt },
    soil_dryness: { type: GraphQLInt },
    firmness: { type: NamedAPIResourceType },
    item: { type: NamedAPIResourceType },
    natural_gift_type: { type: NamedAPIResourceType },
    flavors: { type: new GraphQLList(BerryFlavorMapType) },
  }),
});

export const BerryFirmnessType = new GraphQLObjectType({
  name: "BerryFirmness",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    berries: { type: new GraphQLList(BerryType) },
    names: { type: new GraphQLList(NameType) },
  }),
});

export const FlavorBerryMapType = new GraphQLObjectType({
  name: "FlavorBerryMap",
  fields: () => ({
    potency: { type: GraphQLInt },
    berry: { type: NamedAPIResourceType },
  }),
});

export const BerryFlavorType = new GraphQLObjectType({
  name: "BerryFlavor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    berries: { type: new GraphQLList(FlavorBerryMapType) },
    contest_type: { type: NamedAPIResourceType },
    names: { type: new GraphQLList(NameType) },
  }),
});
