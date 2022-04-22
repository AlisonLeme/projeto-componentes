import { useState } from 'react';
import { Formik } from 'formik';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
  MenuItem,
} from '@mui/material';

import { initialValues, validationSchema } from './formValues';

import style from './form.module.css'

const Form = ({ clientes, setClientes }) => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          let novoCliente = {
            name:values.name,
            phone:values.phone
          }

          setClientes([
            ...clientes,
            novoCliente
          ])

          window.alert('Dados cadastrados!')
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {

            return (
              <form onSubmit={handleSubmit} className={style.form}>
                <Container maxWidth='md'>
                  <Box className={style.box}>
                    <Typography component='h6' variant='h6' color='primary' gutterBottom>
                        Nome
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.name && touched.name}>
                      <InputLabel>
                        Ex: Alison Leme
                      </InputLabel>
                      <OutlinedInput
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        label='Ex.. Alison Leme'
                      >
                      </OutlinedInput>
                      <FormHelperText>
                        { errors.name && touched.name ? errors.name : null }
                      </FormHelperText>
                    </FormControl>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom>
                        Telefone
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.phone && touched.phone}>
                      <InputLabel>
                        Ex.. 99853-2222
                      </InputLabel>
                      <OutlinedInput
                        name='phone'
                        value={values.phone}
                        fullWidth
                        onChange={handleChange}
                        label='Ex.. 99853-2222'
                        >   
                        </OutlinedInput>
                      <FormHelperText>
                        { errors.phone && touched.phone ? errors.phone : null }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md'>
                  <Box className={style.box}>
                    <Typography component='h6' variant='h6' color='primary' gutterBottom>
                      Endereço
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.address && touched.address}>
                      <InputLabel>
                        Ex.. Rua, Ciclano da Silva, 23
                      </InputLabel>
                      <OutlinedInput
                        name='address'
                        onChange={handleChange}
                        variant='outlined'
                        label='Ex.. Rua, Ciclano da Silva, 23'
                      />
                      <FormHelperText>
                        {errors.address && touched.address ? errors.address : null}
                      </FormHelperText>
                    </FormControl>
        
                    <Typography component='h6' variant='h6' color='primary' gutterBottom>
                      Cidade
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.city && touched.city}>
                      <InputLabel>
                        Ex: Sorocaba
                      </InputLabel>
                      <OutlinedInput
                        name='city'
                        onChange={handleChange}
                        variant='outlined'
                        label='Ex.. Sorocaba'
                      />
                      <FormHelperText>
                        {errors.city && touched.city ? errors.city : null}
                      </FormHelperText>
                    </FormControl>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom>
                        Estado
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.state && touched.state}>
                      <InputLabel>
                        Escolha o estado
                      </InputLabel>
                      <Select
                        name='state'
                        value={values.state}
                        fullWidth
                        onChange={handleChange}
                        label='Escolha o estado'
                      >
                        <MenuItem value="SP">SP</MenuItem>
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="MG">MG</MenuItem>
                        <MenuItem value="BA">BA</MenuItem>
                        <MenuItem value="CE">CE</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="DF">DF</MenuItem>
                      </Select>
                      <FormHelperText>
                        { errors.state && touched.state ? errors.state : null }
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md'>
                  <Box textAlign='right'>
                    <Button type='submit' variant='contained' color='secondary'>
                      Cadastrar cliente
                    </Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
    </>
  );
}
export default Form;