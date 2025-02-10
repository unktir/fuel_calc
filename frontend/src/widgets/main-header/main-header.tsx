import { Icon } from 'shared/ui/icon';
import { Link } from 'react-router';
import { Container, Flex, Link as RadixLink, Text } from '@radix-ui/themes';

import './main-header.scss';

function MainHeader() {
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
        <Flex
          align="center"
          justify="between"
          py="4"
        >
          <Flex direction="column">
            <RadixLink
              asChild
              size="6"
              weight="medium"
              underline="none"
            >
              <Link to="/">Расчет расхода топлива</Link>
            </RadixLink>
            <Text>&#47;&#47; fuel forecast app</Text>
          </Flex>
          <Icon.Petrol className="header-icon" />
        </Flex>
      </header>
    </Container>
  );
}

export { MainHeader };
