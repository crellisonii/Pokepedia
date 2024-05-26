import { ENCOUNTER_CONDITION_URL, ENCOUNTER_METHOD_URL } from "../../constants";
import {
  EncounterConditionValuesType,
  EncounterConditionsType,
  EncounterMethodsType,
  NameIdArgs,
  NamedAPIResourceListType,
  PaginationArgs,
} from "../types";

import axios from "axios";

export const EncounterMethodQuery = {
  type: EncounterMethodsType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${ENCOUNTER_METHOD_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllEncounterMethodQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${ENCOUNTER_METHOD_URL}/?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const EncounterConditionQuery = {
  type: EncounterConditionsType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${ENCOUNTER_CONDITION_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllEncounterConditionQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${ENCOUNTER_CONDITION_URL}/?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const EncounterConditionValuesQuery = {
  type: EncounterConditionValuesType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${ENCOUNTER_CONDITION_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllEncounterConditionValuesQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${ENCOUNTER_CONDITION_URL}/?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
