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
} from '@mantine/core';
import image from './image.svg';
import { Values } from './Values';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',
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
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Group position="center">
              <Badge size="xl" c="#ffffff" bg={'#101232'}>
                Nosotros
              </Badge>
            </Group>
            <Title className={classes.title}>Misión</Title>
            <Text fw={500} fz="lg" mb={5}>
              Enriquecemos el talento humano con las competencias necesarias para desarrollarse
              profesionalmente en un entorno de transformación digital
            </Text>
            <Title className={classes.title} mt={50}>
              Visión
            </Title>
            <Text fw={500} fz="lg" mb={5}>
              Enriquecemos el talento humano con las competencias necesarias para desarrollarse
              profesionalmente en un entorno de transformación digital
            </Text>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
      <Values />
    </>
  );
}
