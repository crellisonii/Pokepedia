import {
  CONTEST_EFFECT_URL,
  CONTEST_TYPE_URL,
  SUPER_CONTEST_EFFECT_URL,
} from "../../constants";
import {
  ContestEffectType,
  ContestType,
  NameIdArgs,
  NamedAPIResourceListType,
  PaginationArgs,
  SuperContestEffectType,
} from "../types";

import axios from "axios";

export const ContestQuery = {
  type: ContestType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${CONTEST_TYPE_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllContestsQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${CONTEST_TYPE_URL}?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      console.log(`🚀 ~ resolve: ~ response.data:`, response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const ContestEffectQuery = {
  type: ContestEffectType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${CONTEST_EFFECT_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllContestEffectsQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${CONTEST_EFFECT_URL}?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const SuperContestEffectQuery = {
  type: SuperContestEffectType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${SUPER_CONTEST_EFFECT_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllSuperContestEffectsQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, { limit, offset }) => {
    try {
      const url = `${SUPER_CONTEST_EFFECT_URL}?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
