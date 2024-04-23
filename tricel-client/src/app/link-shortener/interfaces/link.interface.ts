export interface BaseLink {
  name: string;
  short_url: string;
  url: string;
}

type UUID = string;

export type Link = BaseLink & {
  id: UUID;
  lifetime: Date;
  visibility: string;
};

export interface LinkRootObject {
  count: number;
  next: string | null;
  previous: string | null;
  results: Link[];
}
