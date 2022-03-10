import React from 'react';
import {
  element, oneOf, string, number,
  oneOfType, shape, arrayOf, bool,
} from 'prop-types';

import Title from '../title';

import Container from './Container';

import { TableDefaultProps } from './assets/json';

function Table({
  id = TableDefaultProps.id,
  title = TableDefaultProps.title,
  header = TableDefaultProps.header,
  rows = TableDefaultProps.rows,
  headerBackground = TableDefaultProps.headerBackground,
  headerColor = TableDefaultProps.headerColor,
  striped = TableDefaultProps.striped,
  stripeColor = TableDefaultProps.stripeColor,
  background = TableDefaultProps.background,
  fontColor = TableDefaultProps.fontColor,
}) {
  const tableHead = [];

  const tableId = id || `table-${Date.now()}`;

  Object.keys(header).forEach((item) => {
    tableHead.push(
      <th
        key={`${tableId}-header-${item}`}
        id={`${tableId}-header-${item}`}
      >
        {header[item]}
      </th>,
    );
  });

  const tableBody = [];

  let rowCount = 0;

  rows.forEach((row) => {
    rowCount += 1;

    const tableRow = [];
    const tableRowId = `${tableId}-body-row-${rowCount}`;

    Object.keys(row).forEach((item) => {
      let keyCount = 0;

      Object.keys(header).forEach((headerKey) => {
        if (item === headerKey) {
          tableRow[keyCount] = (
            <td
              key={`${tableId}-body-row-${rowCount}-${item}`}
              id={`${tableId}-body-row-${rowCount}-${item}`}
            >
              {row[item]}
            </td>
          );
        }
        keyCount += 1;
      });
    });

    tableBody.push(
      <tr
        key={tableRowId}
        id={tableRowId}
      >
        {tableRow}
      </tr>,
    );
  });

  return (
    <Container
      headerColor={headerColor}
      headerBackground={headerBackground}
      striped={striped}
      stripeColor={stripeColor}
      background={background}
      fontColor={fontColor}
    >
      {title
        ? (
          <Title
            type="h2"
            text={title}
          />
        )
        : ''}
      <table
        id={tableId}
        cellSpacing={0}
      >
        <thead>
          <tr>
            {tableHead}
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </Container>
  );
}

Table.defaultProps = TableDefaultProps;

Table.propTypes = {
  id: string,
  header: shape({}).isRequired,
  rows: arrayOf(shape({}).isRequired),
  headerBackground: string,
  headerColor: string,
  striped: bool,
  stripeColor: string,
  background: string,
  fontColor: string,
};

export default Table;
