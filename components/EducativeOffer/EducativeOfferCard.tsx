import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Group,
  Badge,
  Title,
  Paper,
  Button,
  Flex,
  Space,
  rem,
  Center,
} from '@mantine/core';
import Link from 'next/link';
import wave from './wave.svg';

import line from './line.svg';

const mockdata = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212688/Maestri%CC%81a_en_Competencias_Docentes_para_la_Transformacio%CC%81n_Digital_BUENA_hxq6g3.jpg',
    date: 'RVOE SEP: 20211668',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Licenciatura en Pedagogía',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Lic.+en+Pedagogi%CC%81a.pdf',
  },
  {
    image:
      'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Mtria+en+Estadi%CC%81stica.jpg',
    date: 'RVOE SEP: 20221587',
    title: 'Maestría en Estadística para Ciencias Sociales',
    rvoes: 'RVOE SEP SEP: 20211668',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Estadi%CC%81stica+para+ciencias+sociales.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212543/Competencias_Docentes_para_la_Transformacio%CC%81n_Digital_buena_ngoolh.jpg  ',
    date: 'RVOE SEP: 20211667',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Competencias+docentes+para+la+transformacio%CC%81n+digital.pdf',
  },
  {
    image:
      'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Mtria+en+Direccio%CC%81n+e+innovacio%CC%81n+en+los+SS.jpg',
    date: 'RVOE SEP: 20221693',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Maestría en Dirección e Innovación en los Sistemas de Salud',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Direccio%CC%81n+e+innovacio%CC%81n+en+los+sistemas+de+salud.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212785/pedagogia_0003_Capa_8_m0g6tq.jpg',
    date: 'RVOE SEP: 20211669',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Direccio%CC%81n+e+innovacio%CC%81n+digital+en+los+sistemas+de+salud.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684212363/Doctorado_en_Tecnologi%CC%81as_de_la_Transformacio%CC%81n_Digital_buena_yfofgx.jpg',
    date: 'RVOE SEP: 20211666',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Doctorado en Competencias Docentes para la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Competencias+docentes+para+la+transformacio%CC%81n+digital.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1684211817/Tecnologi%CC%81as_de_la_Transformacio%CC%81n_Digital_BUENA_nmebjq.jpg',
    date: 'RVOE SEP: 20211665',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Doctorado en Tecnologías de la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Tecnologi%CC%81as+de+la+transformacio%CC%81n+digital.pdf',
  },
  {
    image:
      'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Doc.+en+Derecho.jpg',
    date: 'RVOE SEP: 20221694',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Doctorado en Derecho',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Derecho.pdf',
  },
  {
    image:
      'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/covers/Esp.+en+Bioe%CC%81tica.jpg',
    date: 'RVOE SEP: 20221692',
    rvoes: 'RVOE SEP SEP: 20211668',
    title: 'Especialidad en Bioética',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Especialidad+en++Bioe%CC%81tica.pdf',
  },
];

const handleClick = (link: string) => {
  window.open(
    link,
    '_blank' // <- This is what makes it open in a new window.
  );
};

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    backgroundColor: '#282a47',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
  informationButton: {
    backgroundColor: '#a68829',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#856d21',
    }),
  },
  wrapper: {
    width: '100%',
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    color: '#a68829',
    fontSize: 42,
  },
  titleCard: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: '#a68829',
    fontSize: 18,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 12,
    },
  },
  bg: {
    backgroundColor: '#101232',
  },
  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 500,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
    color: '#ffffff',
  },

  boxBtn: {
    height: 125,
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('sm')]: {
      height: 100,
    },
  },

  bgW: {
    backgroundColor: '#ffffff',
  },
  divParent: {
    display: 'flex',
    flexDirection: 'column',
  },
  spanChild: {
    margin: 'auto',
  },
}));

export function EducativeOfferCard() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      // key={article.title}
      p="md"
      radius="md"
      component="a"
      className={classes.card}
      id="offert"
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Group position="left">
        <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md" c={'#a68829'}>
          {article.date}
        </Text>
      </Group>
      <Group p={5} className={classes.boxBtn}>
        <Text className={classes.titleCard} mt={5} c={'#ffffff'} align="center">
          {article.title}
        </Text>
      </Group>

      <Group>
        <Button
          fullWidth
          className={classes.informationButton}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick(article.link);
          }}
        >
          <Text c="#ffffff">Conocer más</Text>
        </Button>
      </Group>
    </Card>
  ));

  return (
    <div className={classes.bg}>
      <div className={classes.bgW}>{/* <Image src={line.src} bg="#D6D4D4"></Image> */}</div>
      <div style={{ paddingLeft: 40, paddingRight: 40 }}>
        <Group position="center" p="xl">
          <Title
            className={classes.title}
            align="center"
            style={{ paddingTop: 50, paddingBottom: 50 }}
          >
            Oferta Educativa
          </Title>
        </Group>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} pb={100}>
          {cards}
        </SimpleGrid>
      </div>
      {/* <div className={classes.bg}>
        <Image src={wave.src}></Image>
      </div> */}
    </div>
  );
}
