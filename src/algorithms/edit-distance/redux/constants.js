// @flow

export const EDIT_DISTANCE_BUTTON_CLICK: string = "EDIT_DISTANCE_BUTTON_CLICK";

export type State = {
  table: Array<Array<string | number>>,
  +compared: Array<Array<number>>,
  buttons: Array<number>,
  row: number,
  col: number
};

export type Action = { type: string, value: number };
