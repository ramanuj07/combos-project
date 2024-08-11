import React from "react";
import styled from "styled-components";

type ComboData = {
  comboUID: string;
  comboName: string;
  displayName: string;
  skuId: string;
  status: string;
  defaultMedia: string;
  media: string[];
  metadataMap: {
    [key: string]: {
      name: string;
      values: string[];
      label: string;
      groupName: string;
      isPartOfView: boolean | null;
    };
  };
  currentWorkflowId: string | null;
  hasDraft: boolean;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

const TableContainerWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

const TableRow: React.FC<{ isFirstRow?: boolean }> = ({
  isFirstRow,
  children,
}) => (
  <tr
    style={{
      backgroundColor: isFirstRow ? "#f2f2f2" : "white",
      borderBottom: "1px solid #ddd",
    }}
  >
    {children}
  </tr>
);

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
`;

const Chip = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-block;
  margin-right: 4px;
`;

const Toggle = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.value ? "#4CAF50" : "#ccc")};
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.value ? "22px" : "2px")};
    background-color: white;
    transition: left 0.3s;
  }
`;

interface CombosDataTableProps {
  comboData: ComboData[];
}

const CombosDataTable: React.FC<CombosDataTableProps> = ({ comboData }) => {
  return (
    <PageContainer>
      <TableContainerWrapper>
        <TableContainer>
          <tbody>
            <TableRow isFirstRow>
              <TableCell>Name</TableCell>
              <TableCell>Sku Id</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Metadata</TableCell>
              <TableCell>hasDraft</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            {comboData && comboData.length > 0 ? (
              comboData.map((combo) => (
                <TableRow key={combo.comboUID}>
                  <TableCell>{combo.displayName}</TableCell>
                  <TableCell>{combo.skuId}</TableCell>
                  <TableCell>{combo.status}</TableCell>
                  <TableCell>
                    {Object.values(combo.metadataMap).map((metadata, i) => (
                      <Chip key={`${combo.comboUID}-${i}`}>
                        {metadata.values[0]}
                      </Chip>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Toggle value={combo.hasDraft} />
                  </TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No data available</TableCell>
              </TableRow>
            )}
          </tbody>
        </TableContainer>
      </TableContainerWrapper>
    </PageContainer>
  );
};
export default CombosDataTable;
