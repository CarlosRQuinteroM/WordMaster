import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const StyledSettingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna */
  gap: 20px;
  padding: 20px;
  justify-self: center;
  & h2 {
  }
`;

const StyledSettingsItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const StyledNumberGrid = styled.div`
  display: flex;
`;

const StyledNumber = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  curs`;

function Settings() {
  const { setNumColumns } = useContext(AppContext);
  const handleClick = (number) => {
    setNumColumns(number);
  };

  return (
    <StyledSettingsContainer>
      <h2>Settings</h2>
      <StyledSettingsItem>
        <h3>Word size</h3>
        <StyledNumberGrid>
          {Array.from({ length: 6 }, (_, index) => (
            <StyledNumber
              key={index + 5}
              onClick={() => handleClick(index + 5)}
            >
              {index + 5}
            </StyledNumber>
          ))}
        </StyledNumberGrid>
      </StyledSettingsItem>
      <StyledSettingsItem>Configuración 2</StyledSettingsItem>
      <StyledSettingsItem>Configuración 3</StyledSettingsItem>
      {/* Agrega más elementos según sea necesario */}
    </StyledSettingsContainer>
  );
}

export default Settings;
