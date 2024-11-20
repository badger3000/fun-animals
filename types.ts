export type Funanimals = {
  funAnimalsCollection: {
    items: {
      breed: string;
      _id: string;
      image: {
        url: string;
        title: string;
        width: string;
      };
      friendliness: string;
      lifespan: string;
      name: string;
      origin: string;
      shedding: string;
      slug: string;
      shortStory: {
        json: string;
      };
    }[];
  };
};
