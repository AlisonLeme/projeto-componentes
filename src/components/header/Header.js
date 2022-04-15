import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Watch from '../watch/Watch'

import style from './header.module.css'

const Header = ({ children, title }) => {

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar className={style.toolBar}>
          <Box className={style.box}>
            { children }
            <Typography>
                 { title }
            </Typography>
          </Box>
            <Watch/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header