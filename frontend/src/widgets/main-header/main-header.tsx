import { Icon } from 'shared/ui/icon';
import { Link, useLocation } from 'react-router';
import {
  Box,
  Container,
  Flex,
  Link as RadixLink,
  TabNav,
  Text,
} from '@radix-ui/themes';

import './main-header.scss';

function MainHeader() {
  const location = useLocation();

  return (
    <Container
      asChild
      flexGrow="0"
      size={{
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4',
      }}
    >
      <header className="header">
        <Box py="4">
          <Flex
            justify="between"
            align="center"
          >
            <RadixLink
              asChild
              size="6"
              weight="medium"
              underline="none"
            >
              <Link to="/">Расчет расхода топлива</Link>
            </RadixLink>
            <Icon.Petrol className="header-icon" />
          </Flex>
          <Flex
            justify="between"
            align="center"
          >
            <Text size="3">&#47;&#47; fuel forecast app</Text>
            <TabNav.Root>
              <TabNav.Link
                asChild
                active={location.pathname === '/'}
              >
                <Link to="/">Главная</Link>
              </TabNav.Link>
              <TabNav.Link
                asChild
                active={location.pathname === '/about'}
              >
                <Link to="/about">Описание</Link>
              </TabNav.Link>
              <TabNav.Link
                asChild
                active={location.pathname === '/projects'}
              >
                <Link to="/projects">Проекты</Link>
              </TabNav.Link>
              <TabNav.Link
                asChild
                active={location.pathname === '/contacts'}
              >
                <Link to="/contacts">Контакты</Link>
              </TabNav.Link>
            </TabNav.Root>
          </Flex>
        </Box>
      </header>
    </Container>
  );
}

export { MainHeader };
