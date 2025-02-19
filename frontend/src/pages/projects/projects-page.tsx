import { Link } from 'react-router';
import {
  Container,
  Flex,
  Section,
  Grid,
  Link as RadixLink,
  Progress,
  Text,
} from '@radix-ui/themes';

function ProjectsPage() {
  return (
    <Container
      asChild
      size={{
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4',
      }}
    >
      <main>
        <Section
          asChild
          size="2"
        >
          <Grid
            columns="3"
            rows="2"
            gapX="9"
            gapY="8"
            width="100%"
            align="start"
          >
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №1</Link>
              </RadixLink>
              <Progress
                value={75}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Группа сформирована, сайт в разработке
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №2</Link>
              </RadixLink>
              <Progress
                value={0}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Краткое описание состояния работы над данной лабораторной
                работой
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №3</Link>
              </RadixLink>
              <Progress
                value={0}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Краткое описание состояния работы над данной лабораторной
                работой
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №4</Link>
              </RadixLink>
              <Progress
                value={0}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Краткое описание состояния работы над данной лабораторной
                работой
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №5</Link>
              </RadixLink>
              <Progress
                value={0}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Краткое описание состояния работы над данной лабораторной
                работой
              </Text>
            </Flex>
            <Flex
              direction="column"
              gap="4"
            >
              <RadixLink
                asChild
                size="3"
                weight="bold"
              >
                <Link to="/projects">Лабораторная работа №6</Link>
              </RadixLink>
              <Progress
                value={0}
                size="3"
              />
              <Text
                as="p"
                align="center"
                size="2"
              >
                Краткое описание состояния работы над данной лабораторной
                работой
              </Text>
            </Flex>
          </Grid>
        </Section>
      </main>
    </Container>
  );
}

export { ProjectsPage };
