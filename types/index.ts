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
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
  };
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface User {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
}

export interface FestsListList {
  events: Event[];
}
