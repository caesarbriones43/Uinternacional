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

import line from './line.svg';

const mockdata = [
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288690/oferta-educativa_0001_Capa_4_hbtolw.jpg',
    date: 'RVOE: 123456789',
    title: 'Maestria en Competencias Docentes para la Transformacion Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288692/oferta-educativa_0002_Capa_3_bovhht.jpg',
    date: 'RVOE: 123456789',
    title: 'Doctorado en Direccion e Innovacion Digital en los Sistemas de Salud',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288689/oferta-educativa_0000_Capa_5_vs6cj9.jpg',
    date: 'RVOE: 123456789',
    title: 'Doctorado en Tecnologias de la Transformacion Digital',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288694/oferta-educativa_0003_Capa_6_vxtt3o.jpg',
    date: 'RVOE: 123456789',
    title: 'Licenciatura en Pedagogia',
  },
  {
    image:
      'https://res.cloudinary.com/dslc2vjcz/image/upload/v1640288695/oferta-educativa_0004_Capa_2_jneirn.jpg',
    date: 'RVOE: 123456789',
    title: 'Doctorado en Competencias Docentes para la Transformacion Digital',
  },
];

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
    flex: 1,
    textDecoration: 'none',
    backgroundColor: '#a68829',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#a68829',
    }),
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
    <Paper key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md" c={'#a68829'}>
        {article.date}
      </Text>
      <Text className={classes.title} mt={5} c={'#ffffff'}>
        {article.title}
      </Text>
      {/* <Button color="dark">Saber mas</Button> */}
      <Flex
        mih={10}
        mt={10}
        // bg="rgba(0, 0, 0, .3)"
        // gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Button className={classes.informationButton}>
          <Text c="#101232">Conocer Mas</Text>
        </Button>
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
          <Title order={2} className={classes.titleMain} align="center" mt="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque magnam neque
            molestiae perspiciatis, id earum quis, ducimus odio deserunt fugiat non qui minus magni
            ex. Quas id animi velit!
          </Title>
        </Group>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </div>
  );
}
