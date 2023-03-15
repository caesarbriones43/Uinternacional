import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Container,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      //   radius="md"
      c="red"
      sx={{ backgroundImage: `url(${image})`,backgroundColor:'red'}}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Conocer mas
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288690/oferta-educativa_0001_Capa_4_hbtolw.jpg',
    title: 'La Universidad de los profesionales digitales!',
    category: 'Maestria en Competencias Docentes para la Transformacion Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288692/oferta-educativa_0002_Capa_3_bovhht.jpg',
    title: 'La Universidad de los profesionales digitales!',
    category: 'Doctorado en Direccion e Innovacion Digital en los Sistemas de Salud',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288689/oferta-educativa_0000_Capa_5_vs6cj9.jpg',
    title: 'La Universidad de los profesionales digitales!',
    category: 'Doctorado en Tecnologias de la Transformacion Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288694/oferta-educativa_0003_Capa_6_vxtt3o.jpg',
    title: 'La Universidad de los profesionales digitales!',
    category: 'Licenciatura en Pedagogia',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288695/oferta-educativa_0004_Capa_2_jneirn.jpg',
    title: 'La Universidad de los profesionales digitales!',
    category: 'Doctorado en Competencias Docentes para la Transformacion Digital',
  },
];

export function Slider() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      withIndicators
      loop
      //   slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
