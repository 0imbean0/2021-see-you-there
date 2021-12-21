import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Nav, Title } from './style';
import { ROUTE, PATHS } from '../../../constants';
import { logo } from '../../../assets';

export const NavBar = () => {
  const { pathname } = useLocation();

  const hasMapView = PATHS.MAP_VIEW.includes(pathname);

  return (
    <Nav hasMapView={hasMapView}>
      <div>
        <NavLink to={ROUTE.HOME.PATH}>
          <Title>
            <img src={logo} alt="logo" />
            <h2 className="sr-only">여기서만나</h2>
          </Title>
        </NavLink>
      </div>
    </Nav>
  );
};
