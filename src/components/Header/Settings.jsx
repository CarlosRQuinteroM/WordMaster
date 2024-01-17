import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const StyledSettingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna */
  gap: 20px;
  padding: 20px;
  justify-self: center;

  & .top {
    color: #2e3239;
    font-size: 18px;
    font-weight: 700;
    border-radius: 7px;
    display: flex;
    min-height: 38px;
    padding: 0 25px;
    text-align: center;
    background-color: #e5ecff;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const StyledSettingsItem = styled.div`
  & #main_title {
    color: #2e3239;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2px;
  }
`;

const StyledNumberGrid = styled.div`
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const StyledNumber = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 6px 14px;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? "#528d4e" : "#e9edf7")};
  color: ${(props) => (props.isSelected ? "#e9edf7" : "gray")};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #528d4e;
    color: #e9edf7;
  }
`;

function Settings() {
  const { numColumns, setNumColumns } = useContext(AppContext);

  const handleClick = (number) => {
    setNumColumns(number);
  };

  return (
    <StyledSettingsContainer>
      <div className="top">Settings</div>
      <StyledSettingsItem>
        <div id="main_title">Number of Letters</div>
        <StyledNumberGrid>
          {Array.from({ length: 8 }, (_, index) => (
            <StyledNumber
              key={index + 4}
              onClick={() => handleClick(index + 4)}
              isSelected={numColumns === index + 4}
            >
              {index + 4}
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
