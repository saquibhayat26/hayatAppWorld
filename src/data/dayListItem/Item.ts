import { ItemData } from "./types";

export const DATA: ItemData[] = [
  ...Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    day: index + 1,
  })),
];
