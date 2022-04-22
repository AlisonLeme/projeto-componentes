import { useState } from "react";

import { Container, Box, Typography } from "@mui/material";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Exibir from "./components/exibir/Exibir";
import Footer from "./components/footer/Footer";

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function App() {
  const [clientes, setClientes] = useState([])

  return (
    <>
      <Header title={'Cadastro de clientes'}>
        <PersonAddAltIcon sx={{ mr: 2 }}/>
      </Header>
      <Container maxWidth ='lg'>
        <Form clientes={clientes} setClientes={setClientes}/>
        <Box sx={{ border: 1,  mt: 10, mb:10}}>
          <Typography align="center" variant="h5">
            Lista de Clientes
          </Typography>
          <Exibir clientes={clientes}/>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
