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
  BackgroundImage,
  Center,
  Box,
  Flex,
} from '@mantine/core';

import { useViewportSize } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    // height: rem(440),
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
  registerButton: {
    textDecoration: 'none',
    backgroundColor: '#a68829',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#a68829',
    }),
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
  const { height, width } = useViewportSize();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  return (
    <BackgroundImage src={image} radius="sm" w={width} h={height}>
      <Flex
        p={40}
        h={height}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Button
          className={classes.registerButton}
          color="#a68829"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick(
              'https://docs.google.com/forms/d/1nVwxFYPDjQnEt8lkCZAutkC_sfKXi-NqvdT4VGEKwu0/prefill'
            );
          }}
        >
          <Text c="#ffffff">Inscribete Ahora</Text>
        </Button>
      </Flex>
    </BackgroundImage>
  );
}

const data = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288690/oferta-educativa_0001_Capa_4_hbtolw.jpg',
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    category: 'La Universidad de los profesionales digitales',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288692/oferta-educativa_0002_Capa_3_bovhht.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288689/oferta-educativa_0000_Capa_5_vs6cj9.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Tecnologías de la Transformación Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288694/oferta-educativa_0003_Capa_6_vxtt3o.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Licenciatura en Pedagogia',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288695/oferta-educativa_0004_Capa_2_jneirn.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Competencias Docentes para la Transformación Digital',
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
