import {
  AllBerriesQuery,
  AllBerryFirmnessQuery,
  AllBerryFlavorQuery,
  BerryFirmnessQuery,
  BerryFlavorQuery,
  BerryQuery,
} from "./berry.query";

import { GraphQLObjectType } from "graphql";

export const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    BerryQuery,
    AllBerriesQuery,
    BerryFirmnessQuery,
    AllBerryFirmnessQuery,
    BerryFlavorQuery,
    AllBerryFlavorQuery,
  },
});
