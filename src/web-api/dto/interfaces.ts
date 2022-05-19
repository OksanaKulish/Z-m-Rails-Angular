export interface Post {
  author: string;
  authorId: number;
  id: number;
  likes: number;
  popularity: number;
  reads: number;
  tags: Tags;
}

export enum Tags {
  tech = 0,
  health,
  history,
  politics,
  culture,
  science,
  startups
}
