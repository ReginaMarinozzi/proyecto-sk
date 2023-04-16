import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Item from './Item';

const servicios = [
  {
    id: '1',
    name: 'Planificación',
    description: 'Planificación de la gestión de trabajo del área de Higiene y Seguridad Laboral con visitas a coordinar para el cumplimiento de legislación vigente y objetivos propuestos por la empresa.'
  },
  {
    id: '2',
    name: 'Supervisión',
    description: 'Supervisión, coordinación y evaluación sobre los riesgos laborales en los puestos de trabajo con fin de detectar oportunidades de mejoras y resolución de problemas; e implementación de control en la gestión de empresas tercerizadas o contratistas.'
  },
  {
    id: '3',
    name: 'Mediciones',
    description: 'Mediciones laborales, ambientales y estudios ergonómicos en los sectores de trabajo requeridos, así adoptar correcciones en los puestos y/o lugares de trabajo de ser necesario.'
  },
  {
    id: '4',
    name: 'Reportes',
    description: 'Reportes de accidentes laborales, enfermedades profesionales y contingencias ambientales. Confección de Pericias y Plan de Acción para reducir el índice de siniestralidad y administrar los registros en el Legajo Técnico.'
  },
  {
    id: '5',
    name: 'Provisión',
    description: 'Provisión de personal técnico matriculado permanente; para empresas que lo soliciten.'
  },
  {
    id: '6',
    name: 'Capacitaciones',
    description: 'Capacitaciones dinámicas en materia de Higiene y Seguridad Laboral, en prevención de accidentes Laborales y enfermedades profesionales, para los integrantes de los diferentes niveles jerárquicos, ya sean instruidos teóricamente y también entrenados en temas vinculados al bienestar laboral.'
  },
  {
    id: '7',
    name: 'Reporte de gestión',
    description: 'Reporte de gestión respecto a los avances de proceso, creación de estadísticas cuantitativas y cualitativas, informes, protocolos y documentos internos sobre las metas planteadas y los resultados generados, para presentar a nivel regional, gerencial o autoridades que requieran esta información.'
  },
  {
    id: '8',
    name: 'Liderar',
    description: 'Liderar actividades para la formación de “Brigada de Emergencia”, así realizar periódicamente el simulacro de evacuación. Autoría o actualización de estudio de Carga de Fuego.'
  },
  {
    id: '9',
    name: 'Protección Contra Incendios',
    description: 'Protección Contra Incendios. Control y recarga de matafuegos e instalación de nueva, mantenimiento y/o mejora de Red de Incendio.'
  },
  {
    id: '10',
    name: 'Responder ante auditorías',
    description: 'Responder ante auditorías internas y externas; dar respuestas y registros de acciones ante cada visita de entes controladores y reguladores; como el Ministerio de Trabajo y Seguridad Social de Santa Fe, Superintendencia de Riesgos del trabajo (SRT) y/o Aseguradoras de Riesgo de Trabajo (ART); siendo nexo con dichos agentes.'
  },
  {
    id: '11',
    name: 'Normas ISO',
    description: 'Planificación, desarrollo y ejecución y del Sistemas de Gestión en Seguridad y Salud en laboral (Normas ISO 45001) y Sistema de Gestión Ambiental en (ISO 14001); con foco en promover la mejora continua.'
  },
  {
    id: '12',
    name: 'Gestión de residuos peligrosos',
    description: 'Gestión de residuos peligrosos industriales y contaminación generada por la actividad laboral.'
  },
  {
    id: '13',
    name: 'Conductas eficientes ambientales',
    description: 'Propuestas técnicas o tecnológicas tendientes a generar conductas eficientes ambientales.'
  },
  {
    id: '14',
    name: 'Creación de manuales',
    description: 'Creación de manuales de procedimientos y grupos interdisciplinarios que puedan conformarse para la prevención de riesgos ly cumplimiento de legislaciones vigentes.'
  }
]



const CardContainer = () => {
  return (
    <Stack
    justifyContent='center' 
    px={20}
      >
      <Grid container
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
      
   >
        {servicios.map((servicio) => {
          return <Grid md={1} key={servicio.id}
          px={1}
          m={3}
          py={5} 
          sx={{ bgcolor: '#00796B', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', height: '200px' }}
        >
            <Item servicios={servicio} />
          </Grid>
        })}
      </Grid>
    </Stack>
  );
}
export default CardContainer