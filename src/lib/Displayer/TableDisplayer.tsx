import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Table } from "../components";

export interface TableData {
  id: string;
  title: string;
  author: string;
  published: boolean;
}

export const TableDisplayer = (): React.ReactNode => {
  const rows: TableData[] = [
    { id: "1", title: "Book 1", author: "Author 1", published: true },
    { id: "2", title: "Book 2", author: "Author 2", published: false },
    { id: "3", title: "Book 3", author: "Author 3", published: true },
  ];

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Table</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <Table<TableData>
          size="md"
          columns={["id", "title", "author", "published"]}
          data={rows}
          templates={{
            title: (row) => <span>{row.title}</span>,
            author: (row) => <span>{row.author}</span>,
            id: (row) => <span>{row.id}</span>,
            published: (row) => <span>{row.published ? "✅" : "❌"}</span>,
          }}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
