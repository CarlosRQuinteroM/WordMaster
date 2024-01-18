import { useState } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, IconButton, Modal } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import Help from "./Help";
import Statistic from "./Statistic";
import Settings from "./Settings";

const StyledAppBar = styled(AppBar)`
  justify-content: center;
  max-width: 760px;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  color: gray;
  max-width: 80%;
`;

const StyledButtomIcom = styled(IconButton)`
  transition: 0.8s !important;
  &:hover {
    background-color: #c7e6c8 !important;
    color: #6ab96d !important;
    transform: scale(1.1) !important;
  }
`;
const Header = () => {
  const customStyles = {
    backgroundColor: "transparent",
    color: "gray",
    border: "none",
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleOpenModal = (icon) => {
    setSelectedIcon(icon);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedIcon(null);
  };

  return (
    <StyledAppBar style={customStyles} elevation={0} position="static">
      <StyledToolbar>
        <StyledButtomIcom onClick={() => handleOpenModal(<Statistic />)}>
          <SignalCellularAltIcon style={{ fontSize: "30px" }} />
        </StyledButtomIcom>

        <StyledButtomIcom
          color="inherit"
          onClick={() => handleOpenModal(<Settings />)}
        >
          <SettingsIcon style={{ fontSize: "30px" }} />
        </StyledButtomIcom>

        <StyledButtomIcom
          color="inherit"
          onClick={() => handleOpenModal(<Help />)}
        >
          <HelpIcon style={{ fontSize: "30px" }} />
        </StyledButtomIcom>
        <Modal open={openModal} onClose={handleCloseModal}>
          <StyledModalContent>{selectedIcon}</StyledModalContent>
        </Modal>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
