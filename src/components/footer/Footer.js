import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import style from './footer.module.css';

const Footer = () => {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={style.toolBar}>
            <Typography>
                &copy; Todos os direitos reservados
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer