import React, { useState } from "react";
import Sidebar from "./comps/hud/Sidebar";
import styled from "styled-components";
import { Background, Grid, SideBar } from "./comps/hud/Hud";
import Modal from "./comps/Modal";

const App = () => {
  const [openmodal, setOpen] = useState(false);

  return (
    <Grid>
      <Sidebar></Sidebar>
      <Background>
        <Modal showModal={openmodal}>sdfaa</Modal>
      </Background>
    </Grid>
  );
};

export default App;
