import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';
import IMAGES from './images';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(15),
    paddingBottom: rem(15),
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
    backgroundColor:'#957a25'
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color:'#101232'
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: rem(0.5),
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',

  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

export function Goals({ supTitle, description, data }: FeaturesImagesProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="#101232" >{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={25}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 15 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
