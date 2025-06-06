import { withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { Typography } from "..";
import {
  StyledHeaderTd,
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTr,
} from "./table.styles";

type TableProps<T> = {
  inset?: boolean;
  size?: Sizes;
  columns: Array<keyof T>;
  data: T[];
  templates?: Partial<
    Record<keyof T, (row: T, rowIdx: number, colIdx: number) => React.ReactNode>
  >;
  tableStyle?: React.CSSProperties;
  tableColumnLabelStyle?: React.CSSProperties;
  tableRowValueStyle?: React.CSSProperties;
} & Partial<React.HTMLAttributes<HTMLTableElement>>;

const Table = <T,>({
  size = "sm",
  columns,
  data,
  templates,
  inset = true,
  tableStyle,
  tableColumnLabelStyle,
  tableRowValueStyle,
  ...rest
}: TableProps<T>): React.ReactNode => {
  return (
    <StyledTable $inset={inset} $tableStyle={tableStyle} {...rest}>
      <StyledTBody $inset={inset}>
        <StyledTr>
          {columns.map((col) => (
            <StyledHeaderTd key={String(col)} $size={size}>
              <Typography size={size} bold labelStyle={tableColumnLabelStyle}>
                {String(col)}
              </Typography>
            </StyledHeaderTd>
          ))}
        </StyledTr>

        {data.map((row, rowIdx) => (
          <StyledTr key={rowIdx} id={`row-${rowIdx}`}>
            {columns.map((col, colIdx) => (
              <StyledTd key={String(col)} $size={size}>
                {templates && templates[col] ? (
                  templates[col]!(row, rowIdx, colIdx)
                ) : (
                  <Typography size={size} labelStyle={tableRowValueStyle}>
                    {String(row[col])}
                  </Typography>
                )}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTBody>
    </StyledTable>
  );
};

const TableWithTheme = withTheme(Table) as unknown as <T>(
  props: Omit<TableProps<T>, "theme">,
) => React.ReactNode;

export default TableWithTheme;
