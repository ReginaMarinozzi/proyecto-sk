import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Stack, Typography, Grid, TextField } from '@mui/material';

const Formulario = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Stack
        sx={{ bgcolor: '#4CAF50' }}
        p={10}
        spacing={2}

      >
        <Typography
          variant="h4"
          component="h5"
          align="center"
          color="#212121"
          fontWeight={600}
        >
          ¿Qué estás esperando? Completá tus datos y te contactamos
        </Typography>
        <Grid container
          justifyContent="center"
          spacing={2}
        >
          <Form>
            <Grid item
              md={6}
            >
              <label htmlFor="firstName">Nombre</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />
            </Grid>

            <Grid item
              md={6}
            >
              <label htmlFor="lastName">Apellido</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" />
            </Grid>

            <Grid item
              md={6}
            >
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </Grid>
            <Grid item
              md={6}
            >
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Escriba su consulta"
              />
            </Grid>
            <Grid item
              md={6}
            >
              <Button type="submit">Enviar</Button>
            </Grid>
          </Form>

        </Grid>
      </Stack>
    </Formik>

  )
}

export default Formulario;