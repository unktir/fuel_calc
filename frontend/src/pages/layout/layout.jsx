import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <Suspense fallback="">
      <Outlet />
    </Suspense>
  );
};

export { Layout };
