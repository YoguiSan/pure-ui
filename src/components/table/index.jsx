import React from 'react';
import {
  string, shape, arrayOf, bool,
} from 'prop-types';

import Title from '../title';
import Grid, { Row, Column } from '../grid';

import Container from './Container';

import { TableDefaultProps } from './assets/json';

function Table({
  id = TableDefaultProps.id,
  title = TableDefaultProps.title,
  header = TableDefaultProps.header,
  rows = TableDefaultProps.rows,
  headerBackground = TableDefaultProps.headerBackground,
  headerColor = TableDefaultProps.headerColor,
  bordered = TableDefaultProps.bordered,
  borderColor = TableDefaultProps.borderColor,
  headerBordered = TableDefaultProps.headerBordered,
  headerBorderColor = TableDefaultProps.headerBorderColor,
  striped = TableDefaultProps.striped,
  stripeColor = TableDefaultProps.stripeColor,
  background = TableDefaultProps.background,
  fontColor = TableDefaultProps.fontColor,
  fullHeight = TableDefaultProps.fullHeight,
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
      bordered={bordered}
      borderColor={borderColor}
      headerBordered={headerBordered}
      headerBorderColor={headerBorderColor}
      fullHeight={fullHeight}
    >
      {title
        ? (
          <Grid>
            <Row narrow condensed>
              <Column narrow condensed extraSmall={12}>
                <Title
                  type="h2"
                  text={title}
                />
              </Column>
            </Row>
          </Grid>
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
  title: string,
  header: shape({}).isRequired,
  rows: arrayOf(shape({}).isRequired),
  headerBackground: string,
  headerColor: string,
  striped: bool,
  bordered: bool,
  headerBordered: bool,
  borderColor: string,
  headerBorderColor: string,
  stripeColor: string,
  background: string,
  fontColor: string,
};

export default Table;
