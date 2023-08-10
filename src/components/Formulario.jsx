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
          id='contacto'
          minHeight='50vh'
          width='100%'
          alignItems='center'
          justifyContent='center'
          px={2}
          py={5}
          spacing={2}
          sx={{
            backgroundImage: 'url("https://i.ibb.co/bg3XxVc/Dise-o-sin-t-tulo-76.png")',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Stack
            mb={6}
            pt={2}
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
              mb={2}
            >
              Completá tus datos y te contactamos o podés llamarnos al +5493413760134
            </Typography>
          </Stack>
          <Form
          >
            <Grid container
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              spacing={2}
            >
              <Grid item md={6} xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Field
                  fullWidth
                  sx={{ bgcolor: '#FFFFFF', borderRadius: '5px' }}
                  component={TextField}
                  name="nombre"
                  type="nombre"
                  label="Nombre"

                />
              </Grid>
              <Grid item md={6} xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Field
                  fullWidth
                  sx={{ bgcolor: '#FFFFFF', borderRadius: '5px' }}
                  component={TextField}
                  name="apellido"
                  type="apellido"
                  label="Apellido"
                />
              </Grid>
              <Grid item md={6} xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Field
                  fullWidth
                  sx={{ bgcolor: '#FFFFFF', borderRadius: '5px' }}
                  component={TextField}
                  type="email"
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item md={6} xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Field
                  fullWidth
                  sx={{ bgcolor: '#FFFFFF', borderRadius: '5px' }}
                  component={TextField}
                  type="telefono"
                  name="telefono"
                  label="Telefono"
                />
              </Grid>
            </Grid>
            <Grid container
             sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Grid item md={12} xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Button
                  fullWidth
                  sx={{
                    marginTop: 2, padding: 1,
                    bgcolor: "#00796B", '&:hover': {
                      backgroundColor: '#006458'
                    }
                  }}
                  disabled={isSubmitting}
                  onClick={submitForm}
                  variant="contained"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Stack>
      )}
    </Formik>
  )
}

export default Formulario