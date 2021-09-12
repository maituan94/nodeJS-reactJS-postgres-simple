import styled from 'styled-components';
import { COLORS } from '../../../enum';

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${COLORS.gray2};
    opacity: 0.7;
  }

  .modal-body {
    position: absolute;
    overflow-y: hidden;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 90vw;
    z-index: 2;
    background-color: ${COLORS.white};
    height: 60vh;
    top: 10%;
    padding: 20px;
    max-height: 70vh;
    min-width: 40vw;
    padding-bottom: 70px;
  }
`;

export default ModalStyle;
