import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const Table = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Age</TableHeader>
          <TableHeader>City</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.city}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
