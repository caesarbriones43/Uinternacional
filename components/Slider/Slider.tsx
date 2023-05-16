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
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212543/Competencias_Docentes_para_la_Transformacio%CC%81n_Digital_buena_ngoolh.jpg',
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    category: 'La Universidad de los profesionales digitales',
  },
  {
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212785/pedagogia_0003_Capa_8_m0g6tq.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
  },
  {
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684211817/Tecnologi%CC%81as_de_la_Transformacio%CC%81n_Digital_BUENA_nmebjq.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Tecnologías de la Transformación Digital',
  },
  {
    image:
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212688/Maestri%CC%81a_en_Competencias_Docentes_para_la_Transformacio%CC%81n_Digital_BUENA_hxq6g3.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Licenciatura en Pedagogía',
  },
  {
    image:
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212363/Doctorado_en_Tecnologi%CC%81as_de_la_Transformacio%CC%81n_Digital_buena_yfofgx.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Doctorado en Competencias Docentes para la Transformación Digital',
  },
  {
    image:
    'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Mtria+en+Estadi%CC%81stica.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Maestría en Estadística para Ciencias Sociales',
  },
  {
    image:
    'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Esp.+en+Bioe%CC%81tica.jpg',
    category: 'La Universidad de los profesionales digitales',
    title: 'Especialidad en Bioética',
  },
  {
    image:
    'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Mtria+en+Direccio%CC%81n+e+innovacio%CC%81n+en+los+SS.jpg',
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
