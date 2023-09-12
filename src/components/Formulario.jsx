import { Button, Typography, Grid, Stack } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup'


const Formulario = () => {
  
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  const sendEmail = (templateParams) => {
    emailjs.send("service_uc6qf39", "template_3l1yj0y", templateParams, "JfiehChk0njD7uTj1")
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
}
  return (

    <Formik
      initialValues={{ user_name: '', user_lastname: '', user_email: '', user_phone: '' }}
      validationSchema={Yup.object({
        user_name: Yup.string()
          .required('Requerido'),
        user_lastname: Yup.string()
          .required('Requerido'),
        user_email: Yup.string()
          .required('Requerido'),
        user_phone: Yup.string()
          .matches(phoneRegExp, 'Telefono incorrecto')
          .required('Requerido'),
      })}
      
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          sendEmail(values)
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
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
            backgroundImage: 'url("/images/imgfondo.png)',
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
                  name="user_name"
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
                  name="user_lastname"
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
                  name="user_email"
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
                  name="user_phone"
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
                  type="submit"
                  disabled={isSubmitting}
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