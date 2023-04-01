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
} from '@mantine/core';
import Link from 'next/link';

import line from './line.svg';

const mockdata = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288690/oferta-educativa_0001_Capa_4_hbtolw.jpg',
    date: 'RVOE: 20211667',
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Maestr%C3%ADa+en+Competencias+Docentes+para+la+Transformación+Digital.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288692/oferta-educativa_0002_Capa_3_bovhht.jpg',
    date: 'RVOE: 20211669',
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Dirección+e+Innovación+Digital+en+los+Sistemas+de+Salud.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288689/oferta-educativa_0000_Capa_5_vs6cj9.jpg',
    date: 'RVOE: 20211665',
    title: 'Doctorado en Tecnologías de la  Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Doctorado+en+Tecnolog%C3%ADas+de+la+Transformación+Digital.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288694/oferta-educativa_0003_Capa_6_vxtt3o.jpg',
    date: 'RVOE: 20211668',
    title: 'Licenciatura en Pedagogia',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Licenciatura+en+Pedagog%C3%ADa.pdf',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288695/oferta-educativa_0004_Capa_2_jneirn.jpg',
    date: 'RVOE: 20211666',
    title: 'Doctorado en Competencias Docentes para la  Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/doc-docente.pdf',
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
  },
  bg: {
    backgroundColor: '#101232',
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 500,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
    color: '#ffffff',
  },

  bgW: {
    backgroundColor: '#ffffff',
  },
}));

export function EducativeOfferCard() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Paper key={article.title} p="md" radius="md" component="a" href="#" className={classes.card} id="offert">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md" c={'#a68829'}>
        {article.date}
      </Text>
      <Text className={classes.title} mt={5} c={'#ffffff'}>
        {article.title}
      </Text>
      <Flex
        mih={10}
        mt={10}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        className={classes.wrapper}
      >
        {/* <a
          target="_blank"
          href={article.link}
          rel="noopener noreferrer"
          style={{
            textDecoration: 'inherit',
            color: 'inherit',
            cursor: 'auto',
          }}
        > */}
        {/* <Link href="https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto+-+Doctorado+en+Tecnolog%C3%ADas+de+la+Transformaci%C3%B3n+Digital.pdf"> */}
        <Button
          fullWidth
          className={classes.informationButton}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick(article.link);
          }}
        >
          <Text c="#ffffff">Conocer más</Text>
        </Button>
        {/* </a> */}
        {/* </Link> */}
      </Flex>
    </Paper>
  ));

  return (
    <div className={classes.bg}>
      <div className={classes.bgW}>
        <Image src={line.src}></Image>
      </div>
      <Container py="xl">
        <Group position="center" p="xl">
          <Badge size="xl" c="#ffffff" bg={'#a68829'}>
            Oferta Educativa
          </Badge>
          <Title order={2} className={classes.titleMain} align="justify" mt="sm">
            En nuestra institución educativa, ofrecemos programas diseñados para preparar a nuestros
            estudiantes para una carrera exitosa y satisfactoria en una amplia variedad de campos
            profesionales.
          </Title>
        </Group>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} >
          {cards}
        </SimpleGrid>
      </Container>
    </div>
  );
}
