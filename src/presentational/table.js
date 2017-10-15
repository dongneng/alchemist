// @flow

import React from "react";
import { Table, Button } from "react-bootstrap";

type rowProps = { row: Array<string | number> };

const Row = (props: rowProps) => (
  <tr>
    {props.row.map((item, index) => {
      return (
        <td key={index}>
          <Button>{item}</Button>
        </td>
      );
    })}
  </tr>
);

type tableProps = { table: Array<Array<string | number>> };

export default function(props: tableProps) {
  return (
    <Table>
      <tbody>
        {props.table.map((row, index) => {
          return <Row key={index} row={row} />;
        })}
      </tbody>
    </Table>
  );
}
