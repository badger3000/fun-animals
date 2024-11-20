import {contentGqlFetcher} from "./fetch";
import {Funanimals, SingleFunanimal} from "../../types";
import {error} from "console";
export const getAnimalsPost = async (slug: string) => {
  const query = `#graphql
  query Funanimals($where: FunAnimalsFilter) {
  funAnimalsCollection(where: $where) {
    items {
      breed
      _id
      image {
        url
        title
        width
        height
      }
      friendliness
      lifespan
      name
      origin
      shedding
      slug
      shortStory {
        json
      }
    }
  }
}
`;
  const data = await contentGqlFetcher<SingleFunanimal>({
    query,
    variables: {where: {slug}},
  });
  if (!data) {
    throw error("no single post for animal");
  }
  return data;
};
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
            height
          }
          name
          origin
          slug
          shortStory {
            json
          }
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
