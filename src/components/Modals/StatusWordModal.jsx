import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import { INVALID_WORD, WINNER, LOSER } from "../../utils";

const StyledModalContent = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  width: 350px;
  height: 150px;
  transform: translate(-50%);
  background-color: white;
  padding: 10px;
  color: gray;
  max-width: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RestartButton = styled.button`
  background-color: ${({ colorstatus }) => colorstatus};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ colorstatus }) =>
      colorstatus !== WINNER ? "#45a049" : "#A07F45"};
  }
`;

function StatusWordModal({ status }) {
  const { setRestartGame } = useContext(AppContext);
  function getStatus() {
    switch (status) {
      case INVALID_WORD:
        return (
          <StyledModalContent>
            <Text>Invalid Word!</Text>
          </StyledModalContent>
        );
      case WINNER:
        return (
          <StyledModalContent>
            <Text>Winner Winner Chicken Dinner</Text>
            <RestartButton
              colorstatus="#4caf50"
              onClick={() => setRestartGame(true)}
            >
              Restart Game
            </RestartButton>
          </StyledModalContent>
        );
      case LOSER:
        return (
          <StyledModalContent>
            <Text>Loser Loser No Chicken No Dinner </Text>
            <RestartButton
              colorstatus="#EC7C40"
              onClick={() => setRestartGame(true)}
            >
              Restart Game
            </RestartButton>
          </StyledModalContent>
        );
      default:
        return <StyledModalContent>Error</StyledModalContent>;
    }
  }

  return <>{getStatus()}</>;
}

StatusWordModal.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusWordModal;
