import styled from 'styled-components';
import { COLORS } from '../../../enum';

const DropDownStyle = styled.div`
  .list {
    display: ${({ open }) => open ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    margin: 0;
    background-color: ${COLORS.white};
    width: 100%;
    font-size: 14px;
    box-shadow: 0px 3px 4px #ccc;
    z-index: 999;
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 10px 15px;
      &:not(:first-child){
        border-top: 1px solid ${COLORS.grayOpacity}
      }
      a {
        color: ${COLORS.black};
      }

      &:hover {
        background-color: ${COLORS.greenBackground};
        a {
          color: ${COLORS.white};
        }
      }
    }
  }

  .label {
    font-size: 14px;
    background: transparent;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }

    i {
      margin-left: 20px;
    }
  }
`;

export default DropDownStyle;
