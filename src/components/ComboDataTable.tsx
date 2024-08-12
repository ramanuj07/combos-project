import styled from "styled-components";
import comboData from "../utils/ComboData.json";

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
  padding: 20px;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableRow = styled.tr<{ isFirstRow?: boolean }>`
  background-color: ${(props) =>
    props.isFirstRow ? "skyblue" : "transparent"};
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  font-weight: ${(props) => (props.isFirstRow ? "bold" : "normal")};
  white-space: wrap;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 3px;
  background-color: #f1f1f1;
  border-radius: 5px;
  font-size: 12px;
`;

const CombosDataTable = () => {
  const headers = [
    "Name",
    "Sku Id",
    "Status",
    "Metadata",
    "Has Draft",
    "Actions",
  ];

  return (
    <PageContainer>
      <TableContainer>
        <tbody>
          <TableRow isFirstRow={true}>
            {headers.map((header, index) => (
              <TableCell key={index} isFirstRow={true}>
                {header}
              </TableCell>
            ))}
          </TableRow>

          {comboData.map((combo) => (
            <TableRow key={combo.comboUID}>
              <TableCell>{combo.displayName}</TableCell>
              <TableCell>{combo.skuId}</TableCell>
              <TableCell>{combo.status}</TableCell>
              <TableCell>
                {Object.keys(combo.metadataMap).map((key) => (
                  <Chip key={key}>
                    {combo.metadataMap[key].name}:{" "}
                    {combo.metadataMap[key].values.join(", ")}
                  </Chip>
                ))}
              </TableCell>
              <TableCell>{combo.hasDraft ? "Yes" : "No"}</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </PageContainer>
  );
};

export default CombosDataTable;
