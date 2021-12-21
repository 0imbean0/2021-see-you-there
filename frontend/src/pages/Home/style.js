import styled from 'styled-components';

import { ButtonRound } from '../../components';
import { COLOR, LAYOUT, Z_INDEX, EFFECT, CONTENT_AREA } from '../../constants';

export const MapViewArea = styled.section`
  width: calc(100% - ${LAYOUT.NAV_WIDTH_RIGHT});
  height: 100%;

  @media (min-width: ${LAYOUT.DEVICE_WIDTH_TABLET}) {
    ${(props) => `#_${props.lastParticipantId}`} {
      ${EFFECT.WAVE_CIRCLE}
    }
  }
`;

export const MapView = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentArea = styled.section`
  ${CONTENT_AREA.MAP}

  overflow-x: hidden;
  overflow-y: scroll;
`;

/* 참가자 추가 Section */

export const AddSection = styled.section`
  height: 19.5rem;
  background-color: ${COLOR.BACKGROUND};

  > h2 {
    padding-top: 2.5rem;
  }
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${LAYOUT.CONTENT_WIDTH_RIGHT};

  @media (max-width: ${LAYOUT.DEVICE_WIDTH_TABLET}) {
    width: ${LAYOUT.CONTENT_WIDTH_RESPONSIVE};
    max-width: ${LAYOUT.CONTENT_WIDTH_MAX};
  }
`;

export const QuickAddButton = styled(ButtonRound)`
  align-self: flex-end;
  margin: 0.125rem 0;
`;

export const InputWithButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > button {
    margin-bottom: 0.25rem;
  }
`;

/* 참가자 목록 Section */

export const ListSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: ${LAYOUT.CONTENT_BOTTOM_HEIGHT};

  & > h2 > span {
    padding-left: 0.125rem;
    font-size: 0.875rem;
    color: ${COLOR.PRIMARY_LIGHT};
  }

  & > span {
    position: absolute;
    top: 3.75rem;
    font-size: 0.65rem;
    color: ${COLOR.PLACEHOLDER};
  }

  @media (max-width: ${LAYOUT.DEVICE_WIDTH_TABLET}) {
    padding-bottom: 0;
  }
`;

/* 하단 버튼 Section */

export const BottomSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: ${LAYOUT.CONTENT_BOTTOM_HEIGHT};
  padding: 1.5rem 0 2rem;
  width: inherit;

  background-color: ${COLOR.PRIMARY_BACKGROUND};

  & > button {
    position: relative;
    overflow-x: hidden;
    ${EFFECT.SHINE}

    &:focus {
      border-style: double;
    }
  }

  @media (min-width: ${LAYOUT.DEVICE_WIDTH_TABLET}) {
    position: fixed;
    bottom: 0;
  }
`;

export const NoServiceAreaNotice = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0rem;
  width: 100%;
  height: 2.75rem;

  text-align: center;
  font-size: 0.7rem;
  color: ${COLOR.ACCENT};
  background-color: ${COLOR.PRIMARY_BACKGROUND};
`;
