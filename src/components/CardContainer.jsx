import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Item from './Item';

const servicios = [
  {
    id: '1',
    name: 'Supervisión',
    description: 'Supervisión, coordinación y evaluación sobre los riesgos laborales en los puestos de trabajo con fin de detectar oportunidades de mejoras y resolución de problemas; e implementación de control en la gestión de empresas tercerizadas o contratistas.',
    img: 'https://i.ibb.co/qNVjT9P/christopher-burns-Wiu3w-99t-Ng-unsplash.jpg'
  },
  {
    id: '2',
    name: 'Mediciones',
    description: 'Mediciones laborales, ambientales y estudios ergonómicos en los sectores de trabajo requeridos, así adoptar correcciones en los puestos y/o lugares de trabajo de ser necesario.',
    img: 'https://i.ibb.co/JQgH3cz/scott-blake-x-ghf9-Ljr-Vg-unsplash.jpg'
  },
  {
    id: '3',
    name: 'Reportes',
    description: 'Reportes de accidentes laborales, enfermedades profesionales y contingencias ambientales. Confección de Pericias y Plan de Acción para reducir el índice de siniestralidad y administrar los registros en el Legajo Técnico.',
    img: 'https://i.ibb.co/t4QcKtF/ahsanization-UTO8esc-GF3-M-unsplash.jpg'
  },
  {
    id: '4',
    name: 'Capacitaciones',
    description: 'Capacitaciones dinámicas en materia de Higiene y Seguridad Laboral, en prevención de accidentes Laborales y enfermedades profesionales, para los integrantes de los diferentes niveles jerárquicos, ya sean instruidos teóricamente y también entrenados en temas vinculados al bienestar laboral.',
    img: 'https://i.ibb.co/4mk7BBG/clem-onojeghuo-z-Zza888-FSKg-unsplash.jpg'
  },
  {
    id: '5',
    name: 'Protección Contra Incendios',
    description: 'Protección Contra Incendios. Control y recarga de matafuegos e instalación de nueva, mantenimiento y/o mejora de Red de Incendio.',
    img: 'https://i.ibb.co/RDxvztj/piotr-chrobot-M0-Wb-GFRTXq-U-unsplash.jpg'
  },
  {
    id: '6',
    name: 'Responder ante auditorías',
    description: 'Responder ante auditorías internas y externas; dar respuestas y registros de acciones ante cada visita de entes controladores y reguladores; como el Ministerio de Trabajo y Seguridad Social de Santa Fe, Superintendencia de Riesgos del trabajo (SRT) y/o Aseguradoras de Riesgo de Trabajo (ART); siendo nexo con dichos agentes.',
    img: 'https://i.ibb.co/HCt5T2g/christopher-burns-8-Kf-CR12oe-UM-unsplash.jpg'
  },
  {
    id: '7',
    name: 'Normas ISO',
    description: 'Planificación, desarrollo y ejecución y del Sistemas de Gestión en Seguridad y Salud en laboral (Normas ISO 45001) y Sistema de Gestión Ambiental en (ISO 14001); con foco en promover la mejora continua.',
    img: 'https://i.ibb.co/0r9nK1X/jeriden-villegas-ni-Snhf-Mji-MI-unsplash.jpg'
  },
  {
    id: '8',
    name: 'Gestión de residuos peligrosos',
    description: 'Gestión de residuos peligrosos industriales y contaminación generada por la actividad laboral.',
    img: 'https://i.ibb.co/hLRcZ4g/collab-media-VGj-Qg-LN4-B78-unsplash.jpg'
  },
  {
    id: '9',
    name: 'Conductas eficientes ambientales',
    description: 'Propuestas técnicas o tecnológicas tendientes a generar conductas eficientes ambientales.',
    img: 'https://i.ibb.co/3prYn4V/cdc-wz3ij-PHv-L54-unsplash.jpg'
  },
  {
    id: '10',
    name: 'Creación de manuales',
    description: 'Creación de manuales de procedimientos y grupos interdisciplinarios que puedan conformarse para la prevención de riesgos ly cumplimiento de legislaciones vigentes.',
    img: 'https://i.ibb.co/MCwxDWp/spencer-davis-SVf-Xl-Chg9-HI-unsplash.jpg'
  }
]


const CardContainer = () => {
  return (
    <Stack
      px={20}
    >
      <Grid container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {servicios.map((servicio) => {
          return <Grid item md={2} key={servicio.id}
            px={1}
            m={2}
            py={5}
            sx={{ bgcolor: '#00796B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '200px' }}
          >
            <Item servicios={servicio} />
          </Grid>
        })}
      </Grid>
    </Stack>
  );
}

export default CardContainer