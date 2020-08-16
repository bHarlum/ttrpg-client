import { atom } from "recoil";

export type Layout = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  static?: boolean;
}

export const layoutState = atom<Layout[]>({
  key: "layoutState",
  default: [
    {i: "a", x: 0, y: 0, w: 1, h: 2, static: true},
    {i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: "c", x: 4, y: 0, w: 4, h: 4},
    {i: 'inventory-container', x: 4, y: 0, w: 4, h: 2},
    {i: "alex-component", x: 4, y: 0, w: 4, h: 4}
  ]
})