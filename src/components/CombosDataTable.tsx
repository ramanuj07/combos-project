import styled from "styled-components";

const PageContainer = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr<{ isFirstRow?: boolean }>`
  background-color: ${(props) =>
    props.isFirstRow ? "skyblue" : "transparent"};
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

interface TableData {
  id: number;
  cells: string[];
}

const tableData: TableData[] = [
  {
    id: 1,
    cells: ["Name", "Sku Id", "Status", "Metadata", "hasDraft", "Actions"],
  },
  {
    id: 2,
    cells: [
      "Display name data",
      "skuId data",
      "Status data",
      "MetadataMap in chip form",
      "toggle showing hasDraft",
      "Edit",
    ],
  },
];

const CombosDataTable = () => {
  return (
    <PageContainer>
      <TableContainer>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={row.id} isFirstRow={rowIndex === 0}>
              {row.cells.map((cell, cellIndex) => (
                <TableCell key={`row${row.id}-col${cellIndex + 1}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </PageContainer>
  );
};

export default CombosDataTable;
