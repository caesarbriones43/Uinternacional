import { Flex, Button, createStyles, Center, Title, Container, Text } from '@mantine/core';

export function OurObjective() {
  const useStyles = createStyles((theme) => ({
    title: {
      color: '#a68829',
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
      marginBottom: theme.spacing.md,
    },
  }));
  const { classes } = useStyles();

  return (
    <Flex
      mih={50}
      bg="white"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Container p={40}>
        <Center>
          <Title className={classes.title}>Nuestro Objetivo</Title>
        </Center>
        <Center>
          <Text align="center" style={{ fontStyle: 'italic', fontSize: 20 }}>
            U Internacional ha desarrollado una oferta educativa basada en los retos de la
            transformación digital. Nuestro objetivo es que descubras cómo utilizar los
            conocimientos de una disciplina y la tecnología para que desarrolles todo tu potencial
            profesional.
          </Text>
        </Center>
      </Container>
    </Flex>
  );
}
