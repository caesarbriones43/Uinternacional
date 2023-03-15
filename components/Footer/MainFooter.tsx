import { createStyles, Text, Container, ActionIcon, Group, rem, Image, Flex } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import brandLogoDark from '../../public/brand_logo_dark.svg';
import wave from './wave.svg';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[8],
    borderTop: `${rem(1)} solid ${theme.colors.dark[5]}`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: '100%',
    marginLeft: 10,
    // margin:10,
    // backgroundColor: 'red',
  },

  link: {
    display: 'block',
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bg: {
    backgroundColor: '#101232',
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colors.gray[4]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  brandContainer: {
    width: 165,
    // backgroundColor: 'red',
  },
  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface MainFooterProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function MainFooter({ data }: MainFooterProps) {
  const { classes, theme } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <Flex gap="md" justify="center" align="center" direction="column" wrap="wrap">
        <div className={classes.wrapper} key={group.title}>
          <Text className={classes.title}>{group.title}</Text>
          {links}
        </div>
      </Flex>
    );
  });

  return (
    <>
      <div className={classes.bg}>
        <Image src={wave.src}></Image>
      </div>

      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            {/* <MantineLogo size={30} /> */}

            <div className={classes.brandContainer}>
              <Image src={brandLogoDark.src} fit="fill"></Image>
            </div>

            <Text size="xs" color="dimmed" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            Copyright © 2023 - U. Internacional Aguascalientes | Privacidad, cookies y condiciones
            legales | Navegación
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    </>
  );
}
