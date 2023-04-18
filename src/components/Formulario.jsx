import { Button, Typography, Grid, Stack } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import * as React from 'react'
import * as Yup from 'yup'


const Formulario = () => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  return (

    <Formik
      initialValues={{ nombre: '', apellido: '', email: '', telefono: '' }}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required('Requerido'),
        apellido: Yup.string()
          .required('Requerido'),
        email: Yup.string()
          .required('Requerido'),
        telefono: Yup.string()
          .matches(phoneRegExp, 'Telefono incorrecto')
          .required('Requerido'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, isSubmitting }) => (

        <Stack
          height='60vh'
          px={10}
          pb={10}
          pt={10}
          spacing={2}
          sx={{
            backgroundImage: 'url("https://i.ibb.co/s2qrkrg/Disen-o-sin-ti-tulo-47.png")',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >

          <Stack
          >
            <Typography
              variant="h4"
              component="h5"
              align="center"
              color="#212121"
              fontWeight={600}
            >
              Trabajemos juntos
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              align="center"
              color="#212121"
              fontWeight={500}
              mb={5}
            >
              Completá tus datos y te contactamos
            </Typography>
          </Stack>

          <Form
          >
            <Grid container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item
                md={6}
                display='flex'
                justifyContent="center"
                alignItems="center"
              >
                <Field          
                  fullWidth
                  component={TextField}
                  name="nombre"
                  type="nombre"
                  label="Nombre"
                />
              </Grid>
              <Grid item
                md={6}
                display='flex'
                justifyContent="center"
                alignItems="center"
              >
                <Field
                  fullWidth
                  component={TextField}
                  name="apellido"
                  type="apellido"
                  label="Apellido"
                />
              </Grid>
              <Grid item
                md={6}
                display='flex'
                justifyContent="center"
                alignItems="center"
              >
                <Field
                  fullWidth
                  component={TextField}
                  type="email"
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item
                md={6}
                display='flex'
                justifyContent="center"
                alignItems="center"
              >
                <Field
                  fullWidth
                  component={TextField}
                  type="telefono"
                  name="telefono"
                  label="Telefono"
                />
              </Grid>

            </Grid>

            <Stack
            >
              <Button
                sx={{
                  marginTop: 2, padding: 1,
                  bgcolor: "#00796B", '&:hover': {
                    backgroundColor: '#006458'
                  }
                }}
                disabled={isSubmitting}
                onClick={submitForm}
                size='small'
                variant="contained"
              >
                Enviar
              </Button>
            </Stack>

          </Form>
        </Stack>
      )}

    </Formik>

  )
}

export default Formulario