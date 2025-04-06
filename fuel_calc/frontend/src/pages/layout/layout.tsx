import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Theme, Flex, Spinner } from '@radix-ui/themes';
import { MainHeader } from 'widgets/main-header';
import { MainFooter } from 'widgets/main-footer';

const Layout = () => {
  return (
    <Theme
      asChild
      // appearance="dark"
    >
      <Flex direction="column">
        <MainHeader />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
        <MainFooter />
      </Flex>
    </Theme>
  );
};

export { Layout };
