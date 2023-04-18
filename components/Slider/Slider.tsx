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
import capa1 from '../../public/images/capa_1.jpg';

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
    <BackgroundImage src={image} radius="sm">
      <Flex
        p={40}
        h={height}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      ></Flex>
    </BackgroundImage>
  );
}

const data = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834368/pedagogia_0011_Capa_0_hij6i9.jpg',
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    category: 'La Universidad de los profesionales digitales',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834367/Mtria_en_Estadi%CC%81stica_cu1vog.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834367/Mtria_en_Direccio%CC%81n_e_innovacio%CC%81n_en_los_SS_azrial.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Tecnologías de la Transformación Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834367/pedagogia_0002_Capa_9_tlnrpr.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Licenciatura en Pedagogía',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834362/Doc._en_Derecho_t64one.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Competencias Docentes para la Transformación Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834361/pedagogia_0003_Capa_8_alh9k8.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Maestría en Estadística para Ciencias Sociales',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834361/pedagogia_0000_Capa_11_bsdhwx.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Especialidad en Bioética',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834360/pedagogia_0001_Capa_10_mv3eim.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Maestría en Dirección e Innovación en los Sistemas de Salud',
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
      height="100%"
      pt={60}
      //   slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
