import {contentGqlFetcher} from "./fetch";
import {Funanimals} from "../types";
import {error} from "console";

export const getAnimals = async () => {
  const query = `#graphql
    query Funanimals {
      funAnimalsCollection {
        items {
          breed
          _id
          image {
            url
            title
            width
          }
          friendliness
          lifespan
          name
          origin
          shedding
          slug
        }
      }
    }
  `;
  const data = await contentGqlFetcher<Funanimals>({query});
  if (!data) {
    throw error("no animals");
  }
  return data;
};
