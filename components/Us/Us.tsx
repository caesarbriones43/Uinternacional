import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
  Container,
  Group,
  Badge,
  Center,
} from '@mantine/core';
import { Values } from './Values';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.white,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    minWidth: '40%',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: '#a68829',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function Us() {
  const { classes } = useStyles();
  return (
    <>
      <div style={{ backgroundColor: '#D6D4D4'}}>
        <div style={{ padding: 50 }}>
          <Center pb={50}>
            <Title className={classes.title}>Nosotros</Title>
          </Center>
          <div className={classes.wrapper} style={{ backgroundColor: '#D6D4D4' }}>
            <div className={classes.body}>
              <Group position="center"></Group>
              <Title className={classes.title} align="center">
                Misión
              </Title>
              <Text fw={500} fz="lg" mb={5} align="justify">
                Enriquecemos el talento humano con las competencias necesarias para desarrollarse
                profesionalmente en un entorno de transformación digital.
              </Text>
              <div style={{ marginTop: 100 }}>
                <Title className={classes.title} mt={50} align="center">
                  Visión
                </Title>
                <Text fw={500} fz="lg" mb={5} align="justify">
                  Ser la universidad preferida de los estudiantes y empleadores, destacándose por su
                  excelencia académica, investigación de vanguardia y una sólida formación en
                  liderazgo y servicio.
                </Text>
              </div>
            </div>
            <Image
              src={
                'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640289693/nosotros_ntqn5b.jpg'
              }
              className={classes.image}
            />
          </div>
        </div>
        <Values />
      </div>
    </>
  );
}
