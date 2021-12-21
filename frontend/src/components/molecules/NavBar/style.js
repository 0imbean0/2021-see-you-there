import styled, { css } from 'styled-components';
import { COLOR, EFFECT, LAYOUT, Z_INDEX } from '../../../constants';

const styleNavRight = css`
  position: fixed;
  top: 0;
  right: 0;
  width: ${LAYOUT.NAV_WIDTH_RIGHT};
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.25);
`;

const styleNavFull = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
`;

export const Nav = styled.nav`
  ${(props) => (props.hasMapView ? styleNavRight : styleNavFull)};

  margin: 0 auto;
  height: ${LAYOUT.NAV_HEIGHT};

  background-color: ${COLOR.PRIMARY};
  z-index: ${Z_INDEX.NAVBAR};

  & * {
    font-size: 0.9rem;
  }

  @media (max-width: ${LAYOUT.DEVICE_WIDTH_TABLET}) {
    width: 100%;
    box-shadow: 0 0.375rem 0.5rem rgba(0, 0, 0, 0.15);
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > * {
      margin: 0.125rem 1rem 0;
    }

    @media (max-width: ${LAYOUT.CONTENT_WIDTH_MAX}) {
      width: 100%;

      & > * {
        margin: 0.125rem 0.125rem 0;
      }
    }

    & button {
      display: flex;
      align-items: center;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > img {
    width: 8.25rem;
  }
`;
