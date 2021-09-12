import styled from 'styled-components';
import { COLORS } from '../../../enum';;

const CheckboxStyle = styled.div`
  input {
    opacity: 0;
    position: absolute;
		z-index: 12;

    &:focus,
    &:checked {
      outline: none !important;
    }

    &:checked + label {
      color: ${COLORS.black};
      border: 1px solid ${COLORS.black};

      &:before {
        border: none;
        background-color: ${COLORS.greenBackground};
      }

      &:after {
        content: '✓';
        position: absolute;
        top: 49%;
        left: -23px;
        color: ${COLORS.white};
        transform: translateY(-50%);
      }
    }
  }

  label {
    display: block;
    position: relative;
    margin: 20px 0 20px 24px;
    padding: 12px;
    border: 1px solid ${COLORS.gray};
    border-radius: 3px;
    color: ${COLORS.gray};

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -24px;
      transform: translateY(-50%);
      border: 1px solid ${COLORS.gray};
      width: 14px;
      height: 14px;
    }
  }
`;

export default CheckboxStyle