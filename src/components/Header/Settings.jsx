import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import UseSwitchesBasic from "./Switch";

function Settings() {
  const { wordLength, setWordLength } = useContext(AppContext);

  const handleClick = (number) => {
    setWordLength(number);
  };

  return (
    <ModalStyled>
      <Top>Settings</Top>
      <div className="data">
        <Container>
          <div className="info">
            <MainTitle className="flex data">Number of Letters</MainTitle>
            <Numbers className="flex data">
              {Array.from({ length: 8 }, (_, index) => (
                <NumberCheckbox
                  key={index + 4}
                  onClick={() => handleClick(index + 4)}
                >
                  <LabelCheck>
                    <CheckText
                      isselect={wordLength === index + 4 ? "true" : undefined}
                    >
                      {index + 4}
                    </CheckText>
                  </LabelCheck>
                </NumberCheckbox>
              ))}
            </Numbers>
            <hr></hr>
          </div>
          <ToggleArea>
            <div className="main_title ">Dark Mode</div>
            <div className="main_desc ">Change dark and light mode</div>
            <div className="checkbox">
              <UseSwitchesBasic defaultChecked />
            </div>
          </ToggleArea>
          <hr></hr>
        </Container>
      </div>
    </ModalStyled>
  );
}

export default Settings;

const ModalStyled = styled.div`
  position: relative;
  left: 50%;
  height: 100%;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  transform: translateX(-50%);
  border-radius: 7px;
  z-index: 1000;

  & .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  & .data {
    padding: 10px 0 20px;
  }
`;

const Top = styled.div`
  color: #2e3239;
  font-size: 18px;
  font-weight: 700;
  border-radius: 7px;
  display: flex;
  min-height: 38px;
  padding: 0 25px;
  text-align: center;
  background: #e5ecff;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Container = styled.div`
  min-width: 480px;
  padding: 0 10px;
`;

const MainTitle = styled.div`
  color: #2e3239;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const Numbers = styled.div`
  margin-bottom: 10px;
  justify-content: center;
`;
const NumberCheckbox = styled.div`
  margin-left: 7px;
`;

const LabelCheck = styled.label`
  color: gray;
  font-family: var(--font_family);
  font-size: 16px;
  line-height: 32px;
  display: table-cell;
  vertical-align: top;
`;

const CheckText = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 6px 14px;
  border-radius: 5px;
  color: ${({ isselect }) => (isselect ? "#e9edf7" : "gray")};
  background: ${({ isselect }) => (isselect ? "#6bba6b" : "#e9edf7")};
  transition: 0.2s;
  font-weight: 700;
`;
const ToggleArea = styled.div`
  text-align: left;
  max-width: 84%;
  display: inline-block;
  & .main_title {
    color: #2e3239;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2px;
  }
  & .main_desc {
    color: #818692;
    font-size: 14px;
  }
  .checkbox {
    width: 48px;
    margin: 10px auto 0;
    position: absolute;
    margin-top: -35px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
