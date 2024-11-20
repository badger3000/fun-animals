export type Funanimals = {
  funAnimalsCollection: {
    items: {
      breed: string;
      _id: string;
      image: {
        url: string;
        title: string;
        width: number;
        height: number;
      };
      friendliness: string;
      lifespan: string;
      name: string;
      origin: string;
      shedding: string;
      slug: string;
      shortStory: {
        json: JSON;
      };
    }[];
  };
};
export type SingleFunanimal = {
  funAnimalsCollection: {
    items: {
      breed: string;
      _id: string;
      image: {
        url: string;
        title: string;
        width: number;
        height: number;
      };
      friendliness: string;
      lifespan: string;
      name: string;
      origin: string;
      shedding: string;
      slug: string;
      shortStory: {
        json: JSON;
      };
    }[];
  };
};
