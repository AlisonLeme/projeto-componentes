import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function App() {
  return (
    <>
      <Header title={'Cadastro de clientes'}>
        <PersonAddAltIcon sx={{ mr: 2 }}/>
      </Header>
      <Form />
      <Footer />
    </>
  );
}

export default App;
