import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Spinner } from '@radix-ui/themes';
import { Layout } from 'pages/layout';
import { MainPage } from 'pages/main';

function Provider() {
  return (
    <Suspense fallback={<Spinner size="3" />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={<MainPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Provider;
