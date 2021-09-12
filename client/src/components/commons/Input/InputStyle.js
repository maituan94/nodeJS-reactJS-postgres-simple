import styled from 'styled-components';
import { COLORS } from '../../../enum';;

const InputStyle = styled.div`
  padding-bottom: 12px;

  label {
    display: inline-block;
    color: ${COLORS.gray2};
    font-size: 14px;
    margin-bottom: 12px;
  }

  input {
    border: 1px solid ${COLORS.gray2};
    width: calc(100% - 24px);
    padding: 12px;
    font-size: 12px;
    border-radius: 5px;

    &:focus,
    &:active {
      border-color: ${COLORS.blue};
    }
  }
`;

export default InputStyle;
