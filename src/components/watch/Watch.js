import { useState } from 'react';
import Typography from '@mui/material/Typography';

import style from './watch.module.css';

const Watch = () => {

    const [hhmmss, setHhmmss] = useState()

    setTimeout(() => {
        const data = new Date();
        const horas = data.getHours();
        const minutos = data.getMinutes();
        const segundos = data.getSeconds();

        setHhmmss([horas, minutos, segundos].join(':'))
    
    }, 1000)


  return (
    <Typography className={style.watch}>
        { hhmmss }
    </Typography>
  );
}

export default Watch