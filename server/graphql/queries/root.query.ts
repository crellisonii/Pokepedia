import {
  AllBerriesQuery,
  AllBerryFirmnessQuery,
  AllBerryFlavorQuery,
  BerryFirmnessQuery,
  BerryFlavorQuery,
  BerryQuery,
} from "./berry.query";
import {
  AllContestEffectsQuery,
  AllContestsQuery,
  AllSuperContestEffectsQuery,
  ContestEffectQuery,
  ContestQuery,
  SuperContestEffectQuery,
} from "./contest.query";
import {
  AllEncounterConditionQuery,
  AllEncounterConditionValuesQuery,
  AllEncounterMethodQuery,
  EncounterConditionQuery,
  EncounterConditionValuesQuery,
  EncounterMethodQuery,
} from "./encounter.query";

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
    ContestQuery,
    AllContestsQuery,
    ContestEffectQuery,
    AllContestEffectsQuery,
    SuperContestEffectQuery,
    AllSuperContestEffectsQuery,
    EncounterMethodQuery,
    AllEncounterMethodQuery,
    EncounterConditionQuery,
    AllEncounterConditionQuery,
    EncounterConditionValuesQuery,
    AllEncounterConditionValuesQuery,
  },
});
