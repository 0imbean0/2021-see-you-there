import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HomePage from './pages/Home';
import BlankPage from './pages/Blank';
import { NavBar } from './components';
import {
  ParticipantContextProvider,
  MapViewContextProvider,
  SnackbarContextProvider,
} from './contexts';
import { ROUTE, REACT_QUERY_DEV_TOOL } from './constants';


const ErrorPage = lazy(() => import(/* webpackChunkName: "Error" */ './pages/Error'));
const ExpiredPage = lazy(() => import(/* webpackChunkName: "Expired" */ './pages/Expired'));
const MidpointPage = lazy(() =>
  import(/* webpackChunkName: "Midpoint" */ /* webpackPrefetch: true */ './pages/Midpoint')
);
const NotFoundPage = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));


export const App = () => {
  const queryClient = new QueryClient();

  queryClient.setDefaultOptions({
    queries: {
      staleTime: Infinity,
      retry: 0,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <SnackbarContextProvider>
          <ParticipantContextProvider>
              <NavBar />
              <Suspense fallback={<BlankPage />}>
                <Switch>
                  <Route exact path={ROUTE.HOME.PATH}>
                    <HomePage />
                  </Route>
                  <Route exact path={ROUTE.MIDPOINT.PATH}>
                    <MapViewContextProvider>
                      <MidpointPage />
                    </MapViewContextProvider>
                  </Route>

                  <Route exact path={ROUTE.ERROR.PATH}>
                    <ErrorPage />
                  </Route>
                  <Route exact path={ROUTE.EXPIRED.PATH}>
                    <ExpiredPage />
                  </Route>
                  <Route exact path={ROUTE.NOT_FOUND.PATH}>
                    <NotFoundPage />
                  </Route>
                </Switch>
              </Suspense>
          </ParticipantContextProvider>
        </SnackbarContextProvider>
      </Router>
      <ReactQueryDevtools panelProps={REACT_QUERY_DEV_TOOL} />
    </QueryClientProvider>
  );
};
