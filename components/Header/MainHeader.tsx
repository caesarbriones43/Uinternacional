import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Image,
  Affix,
  Transition,
} from '@mantine/core';
import { useDisclosure, useViewportSize, useWindowScroll } from '@mantine/hooks';

import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconSchool,
  IconChevronDown,
} from '@tabler/icons-react';
import brandLogo from '../../public/brand_logo.svg';
import brandLogoDark from '../../public/brand_logo_dark.svg';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  brandContainer: {
    width: 165,
    // backgroundColor: 'red',
  },

  registerButton: {
    textDecoration: 'none',
    backgroundColor: '#101232',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#101232',
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconSchool,
    title: 'Licenciatura en Pedagogía',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Lic.+en+Pedagogi%CC%81a.pdf',
  },
  {
    icon: IconSchool,
    title: 'Maestría en Competencias Docentes para la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Competencias+docentes+para+la+transformacio%CC%81n+digital.pdf',
  },
  {
    icon: IconSchool,
    title: 'Maestría en Estadística para Ciencias Sociales',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Estadi%CC%81stica+para+ciencias+sociales.pdf',
  },
  {
    icon: IconSchool,
    title: 'Maestría en Dirección e Innovación en los Sistemas de Salud',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Mtria.+en+Direccio%CC%81n+e+innovacio%CC%81n+en+los+sistemas+de+salud.pdf',
  },
  {
    icon: IconSchool,
    title: 'Doctorado en Derecho',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Derecho.pdf',
  },
  {
    icon: IconSchool,
    title: 'Doctorado en Dirección e Innovación Digital en los Sistemas de Salud',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Direccio%CC%81n+e+innovacio%CC%81n+digital+en+los+sistemas+de+salud.pdf',
  },
  {
    icon: IconSchool,
    title: 'Doctorado en Tecnologías de la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Tecnologi%CC%81as+de+la+transformacio%CC%81n+digital.pdf',
  },
  {
    icon: IconSchool,
    title: 'Doctorado en Competencias Docentes para la Transformación Digital',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Doc.+en+Competencias+docentes+para+la+transformacio%CC%81n+digital.pdf'    ,
  },
  {
    icon: IconSchool,
    title: 'Especialidad en Bioética',
    link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Folleto.+Especialidad+en++Bioe%CC%81tica.pdf',
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();
  const { height, width } = useViewportSize();

  const { classes, theme } = useStyles();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };
  const links = mockdata.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      onClick={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick(item.link);
      }}
    >
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color="#a68829" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Affix position={{ top: 0 }}>
      <Transition transition="slide-up" mounted={scroll.y > -2}>
        {(transitionStyles) => (
          <Box style={transitionStyles}>
            <Header w={width} height={65} px="md">
              <Group position="apart" sx={{ height: '100%' }}>
                <div className={classes.brandContainer}>
                  <Image
                    src={theme.colorScheme === 'dark' ? brandLogoDark.src : brandLogo.src}
                    fit="fill"
                  ></Image>
                </div>
                <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                  <a href="/" className={classes.link}>
                    Nosotros
                  </a>
                  <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                    <HoverCard.Target>
                      <a href="#" className={classes.link}>
                        <Center inline>
                          <Box component="span" mr={5}>
                            Oferta Educativa
                          </Box>
                          <IconChevronDown size={16} color={'#a68829'} />
                        </Center>
                      </a>
                    </HoverCard.Target>

                    <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                      <Divider
                        my="sm"
                        mx="-md"
                        color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                      />

                      <SimpleGrid cols={2} spacing={0}>
                        {links}
                      </SimpleGrid>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <a
                    onClick={(e: any) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleClick('https://campus.iinternacional.edu.mx/moodle30/');
                    }}
                    className={classes.link}
                  >
                    Campus Virtual
                  </a>
                </Group>

                <Group className={classes.hiddenMobile}>
                  <Button className={classes.registerButton} color="#101232">
                    <Text
                      c="#a68829"
                      onClick={(e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleClick(
                          'https://inscripciones.iinternacional.edu.mx/'
                        );
                      }}
                    >
                      Inscríbete Ahora
                    </Text>
                  </Button>
                </Group>

                <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  className={classes.hiddenDesktop}
                />
              </Group>
            </Header>

            <Drawer
              opened={drawerOpened}
              onClose={closeDrawer}
              size="100%"
              padding="md"
              title={
                <Image
                  src={theme.colorScheme === 'dark' ? brandLogoDark.src : brandLogo.src}
                  fit="fill"
                ></Image>
              }
              className={classes.hiddenDesktop}
              zIndex={1000000}
            >
              <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                <a href="/" className={classes.link}>
                  Nosotros
                </a>
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Oferta Educativa
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}>{links}</Collapse>
                <a
                  onClick={(e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick('https://campus.iinternacional.edu.mx/moodle30/');
                  }}
                  className={classes.link}
                >
                  Campus Virtual
                </a>
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
              </ScrollArea>
            </Drawer>
          </Box>
        )}
      </Transition>
    </Affix>
  );
}
