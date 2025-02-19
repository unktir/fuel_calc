import { Link } from 'react-router';
import {
  Container,
  Flex,
  Section,
  Text,
  Button,
  Grid,
  Progress,
  Link as RadixLink,
} from '@radix-ui/themes';

function GeneralPage() {
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
          <Flex
            direction="column"
            align="center"
            gap="9"
          >
            <Flex
              direction="column"
              gap="4"
            >
              <Text
                as="p"
                align="center"
              >
                Данный сайт создан для проверки этапов рабочего процесса над
                лабораторными работами студентов МО-424Б по предмету
                “Администрирование информационных систем”
              </Text>
              <Text
                as="p"
                align="center"
              >
                Преподаватель - Сазонова Екатерина Юрьевна
              </Text>
            </Flex>
            <Button asChild>
              <Link to="main-project">Основной проект</Link>
            </Button>
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
                maxWidth="300px"
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
              </Flex>
            </Grid>
          </Flex>
        </Section>
      </main>
    </Container>
  );
}

export { GeneralPage };
