import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  rem,
  Group,
  Badge,
  Image,
  Title,
  Center,
  Flex,
} from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    // position: 'relative',
    // paddingTop: theme.spacing.xl,
    // paddingLeft: theme.spacing.xl,
    // backgroundColor: 'blue',
    backgroundColor: '#D6D4D4',
    paddingBottom: 50,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: '#a68829',
  },

  title: {
    color: '#a68829',
  },
  subtitle: {
    color: 'black',
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
  url: string;
}

function Feature({ icon: Icon, title, description, url, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      {/* <div className={classes.content}> */}
      <Flex
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        style={{ backgroundColor: '#D6D4D4' }}
      >
        <Image src={url} width={100} height={100}></Image>
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.subtitle}>
          {title}
        </Text>
      </Flex>

      {/* </div> */}
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: 'Persistencia',
    description:
      'Capacidad para mantener el compromiso con la enseñanza y el desarrollo profesional a pesar de los desafíos que puedan surgir en el camino.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684213546/inicio-web-03_m3ww2t.svg',
  },
  {
    icon: IconCertificate,
    title: 'Integridad',
    description:
      'Compromiso de mantener altos estándares éticos en el proceso de enseñanza y aprendizaje.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684213420/inicio-web-04_at1gci.svg',
  },
  {
    icon: IconCoin,
    title: 'Eficacia',
    description:
      'Calidad del sistema educativo y con la capacidad de los estudiantes para alcanzar sus metas académicas y personales.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684213444/inicio-web-05_t7arjg.svg',
  },
  {
    icon: IconCoin,
    title: 'Resiliencia',
    description:
      'Superar los desafíos y obstáculos que se presentan en el entorno educativo y salir fortalecidos de estas situaciones.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684213710/inicio-web-06_dpmmbx.svg',
  },
];

export function Values() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  const { classes } = useStyles();

  return (
    <Container mt={75} size="xl" bg="#D6D4D4">
      <Group position="center" mb={30}>
        <Title className={classes.title} align="center">
          Nuestros Valores
        </Title>
      </Group>
      <div>
        <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 3 }]} bg="#D6D4D4">
          {items}
        </SimpleGrid>
      </div>
    </Container>
  );
}
