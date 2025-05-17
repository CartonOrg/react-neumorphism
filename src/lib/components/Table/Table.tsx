import { css, Theme, withTheme } from "@emotion/react";
import {
  cellStyle,
  headerCellStyle,
  rowStyle,
  tableStyle,
} from "./table.styles";
import { Sizes } from "../../constants";
import { Typography } from "..";
type TableProps<T> = {
  inset?: boolean;
  size?: Sizes;
  theme: Theme;
  columns: Array<keyof T>;
  data: T[];
  templates?: Partial<
    Record<keyof T, (row: T, rowIdx: number, colIdx: number) => React.ReactNode>
  >;
} & Partial<React.HTMLAttributes<HTMLTableElement>>;

const Table = <T,>({
  size = "sm",
  theme,
  columns,
  data,
  templates,
  inset = true,
  ...props
}: TableProps<T>): React.ReactNode => {
  const { hoverBackground, border, shadow, borderRadius, shadowInset } = theme;

  return (
    <table {...props} css={[tableStyle(borderRadius, inset, shadow)]}>
      <tbody
        css={css({
          boxShadow: inset ? shadowInset : "unset",
        })}
      >
        <tr css={rowStyle(border)}>
          {columns.map((col) => (
            <td key={String(col)} css={[cellStyle(size), headerCellStyle]}>
              <Typography size={size} bold>
                {String(col)}
              </Typography>
            </td>
          ))}
        </tr>

        {data.map((row, rowIdx) => (
          <tr
            key={rowIdx}
            id={`row-${rowIdx}`}
            css={rowStyle(border, hoverBackground)}
          >
            {columns.map((col, colIdx) => (
              <td key={String(col)} css={[cellStyle(size)]}>
                {templates && templates[col] ? (
                  templates[col]!(row, rowIdx, colIdx)
                ) : (
                  <Typography size={size}>{String(row[col])}</Typography>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableWithTheme = withTheme(Table) as unknown as <T>(
  props: Omit<TableProps<T>, "theme">,
) => React.ReactNode;

export default TableWithTheme;
