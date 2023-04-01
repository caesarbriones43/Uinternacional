import { createStyles, Text, SimpleGrid, Container, rem, Group, Badge, Image } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(150),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: '#101232',
    zIndex: 1,
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
      <div className={classes.overlay} />

      <div className={classes.content}>
        {/* <Image src={logoPersistencia.src} width={100} height={125}></Image> */}
        <Image src={url}  width={110} height={120}></Image>
        {/* <Icon size={rem(38)} className={classes.icon} stroke={1.5} /> */}
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: 'Persistencia',
    description:
      'Capacidad para mantener el compromiso con la enseñanza y el desarrollo profesional a pesar de los desafíos que puedan surgir en el camino.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1680344352/persistencia_spbw4s.svg',
  },
  {
    icon: IconCertificate,
    title: 'Integridad',
    description:
      'Compromiso de mantener altos estándares éticos en el proceso de enseñanza y aprendizaje.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1680344360/integridad_tndbzd.svg',
  },
  {
    icon: IconCoin,
    title: 'Eficacia',
    description:
      'Calidad del sistema educativo y con la capacidad de los estudiantes para alcanzar sus metas académicas y personales.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1680344358/eficacia_rj334q.svg',
  },
  {
    icon: IconCoin,
    title: 'Resiliencia',
    description:
      'Superar los desafíos y obstáculos que se presentan en el entorno educativo y salir fortalecidos de estas situaciones.',
    url: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1680344356/resiliencia_yftb2p.svg',
  },
];

export function Values() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} size="xl" bg="#ffffff">
      <Group position="center" mb={30}>
        <Badge size="xl" c="#ffffff" bg={'#101232'} >
          Nuestros Valores
        </Badge>
      </Group>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50} >
        {items}
      </SimpleGrid>
    </Container>
  );
}
