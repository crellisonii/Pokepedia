import {
  BERRY_FIRMNESS_URL,
  BERRY_FLAVOR_URL,
  BERRY_URL,
} from "../../constants";
import {
  BerryFirmnessType,
  BerryFlavorType,
  BerryType,
  NameIdArgs,
  NamedAPIResourceListType,
  PaginationArgs,
} from "../types";

import axios from "axios";

export const BerryQuery = {
  type: BerryType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllBerriesQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_URL}?limit=${args.limit}&offset=${args.offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const BerryFirmnessQuery = {
  type: BerryFirmnessType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_FIRMNESS_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllBerryFirmnessQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_FIRMNESS_URL}/?limit=${args.limit}&offset=${args.offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const BerryFlavorQuery = {
  type: BerryFlavorType,
  args: NameIdArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_FLAVOR_URL}/${args.idName}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const AllBerryFlavorQuery = {
  type: NamedAPIResourceListType,
  args: PaginationArgs,
  resolve: async (_, args) => {
    try {
      const url = `${BERRY_FLAVOR_URL}/?limit=${args.limit}&offset=${args.offset}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
