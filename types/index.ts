// export interface Fest {
//   id: string;
//   name: string;
//   slug: string;
//   venue: string;
//   address: string;
//   performers: string;
//   date: string;
//   time: string;
//   description: string;
//   image: string;
// }

export interface Fest {
  id: number;
  attributes: {
    name: string;
    slug: string;
    venue: string;
    address: string;
    date: string;
    time: string;
    performers: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
}

export interface FestsListList {
  events: Event[];
}
