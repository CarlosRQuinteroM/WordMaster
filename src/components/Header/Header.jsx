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
  max-width: 50vw;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const StyledModalContent = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  color: gray;
`;

const Header = () => {
  const customStyles = {
    backgroundColor: "white",
    color: "gray",
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
    <StyledAppBar style={customStyles} position="static">
      <StyledToolbar>
        <IconButton
          color="inherit"
          onClick={() => handleOpenModal(<Statistic />)}
        >
          <SignalCellularAltIcon />
        </IconButton>

        <IconButton
          color="inherit"
          onClick={() => handleOpenModal(<Settings />)}
        >
          <SettingsIcon />
        </IconButton>

        <IconButton color="inherit" onClick={() => handleOpenModal(<Help />)}>
          <HelpIcon />
        </IconButton>
        {/* Modal */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <StyledModalContent>{selectedIcon}</StyledModalContent>
        </Modal>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
