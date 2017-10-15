// @flow

import { createDPTable } from "../../../utils/dp-helper";
import type { State, Action } from "./constants";
import { EDIT_DISTANCE_BUTTON_CLICK } from "./constants";
import { longestString } from "../../../utils/generic-helper";
import { createDpTable as comparedTable } from "../algorithm";

const wordOne = "abcde";
const wordTwo = "abgfe";

const buttons = () => {
  const longer: string = longestString(wordOne, wordTwo);
  return Array.from(Array(longer.length + 1).keys());
};

const initialState = {
  table: createDPTable(wordOne, wordTwo),
  compared: comparedTable(wordOne, wordTwo),
  buttons: buttons(),
  row: 1,
  col: 1
};

const isSuccess = (
  table: Array<Array<string | number>>,
  row: number,
  col: number
): boolean => {
  return row + 1 === table.length && col + 1 === table[row].length;
};

const isEndOfRow = (
  table: Array<Array<string | number>>,
  row: number,
  col: number
): boolean => {
  return col + 1 === table[row].length;
};

const updateTable = (state: State, action: Action): State => {
  const table = state.table;
  const compared = state.compared;
  const row = state.row;
  const col = state.col;

  if (compared[row - 1][col - 1] === action.value) {
    console.log("greate");
    table[row][col] = action.value;
    if (!isSuccess(table, row, col)) {
      if (isEndOfRow(table, row, col)) {
        return { ...state, table: table, row: row + 1, col: 1 };
      } else {
        return { ...state, table: table, col: col + 1 };
      }
    } else {
      console.log("success");
      return { ...state, table: table };
    }
  } else {
    console.log("shit");
  }

  return state;
};

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case EDIT_DISTANCE_BUTTON_CLICK:
      return updateTable(state, action);
    default:
      return state;
  }
}
