import { createStyles, Text, SimpleGrid, Container, rem, Group, Badge } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: '#101232',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: '#a68829',
  },

  title: {
    color: '#a68829',
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: 'Persistencia',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconCertificate,
    title: 'Integridad',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconCoin,
    title: 'Eficacia',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
  {
    icon: IconCoin,
    title: 'Resiliencia',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];

export function Values() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} size="xl">
      <Group position="center" mb={30}>
        <Badge size="xl" c="#ffffff" bg={'#101232'}>
          Nuestros Valores
        </Badge>
      </Group>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
