import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Spinner } from '@radix-ui/themes';
import { Layout } from 'pages/layout';
import { MainProjectPage } from 'pages/main-project';
import { GeneralPage } from 'pages/general';
import { AboutPage } from 'pages/about';
import { ProjectsPage } from 'pages/projects';
import { ContactsPage } from 'pages/contacts';

function Provider() {
  return (
    <Suspense fallback={<Spinner size="3" />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={<GeneralPage />}
            />
            <Route
              path="main-project"
              element={<MainProjectPage />}
            />
            <Route
              path="about"
              element={<AboutPage />}
            />
            <Route
              path="projects"
              element={<ProjectsPage />}
            />
            <Route
              path="contacts"
              element={<ContactsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Provider;
