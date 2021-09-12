import styled from 'styled-components';
import { COLORS } from '../../../enum'

const ToastStyle = styled.div`
  position: fixed;
  min-width: 150px;
  top: ${({ top }) => top !== '0' ? top : '100px'};
  padding: 15px 10px;
  background-color ${({ type }) => {
    switch (type) {
      case 'error': return COLORS.red;
      case 'success': return COLORS.greenBackground;
      default: return COLORS.white;
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'error': return COLORS.white;
      case 'success': return COLORS.white;
      default: return COLORS.black;
    }
  }};
  z-index: 999;

  &.left {
    left: ${({ left }) => left !== '0' ? left : '10px'};
  }

  &.right {
    right: ${({ right }) => right !== '0' ? right : '10px'};
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20px;
    height: 20px;
    background: transparent;
    transform: translateY(-50%);
    
    &:before,
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15px;
      height: 1px;
      background-color: ${({ type }) => {
        switch (type) {
          case 'error': return COLORS.white;
          case 'success': return COLORS.white;
          default: return COLORS.black;
        }
      }};
    }

    &:before {
      transform: translate(-50%,-50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
`;

export default ToastStyle;
