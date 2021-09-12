import styled from 'styled-components';
import { COLORS } from '../../enum';

const MegaMenuStyle = styled.div`
  .menu {
    .list {
      padding-left: 0;
      margin: 0;
      list-style-type: none;
      height: calc(100vh - 81px);

      .title {
        padding: 15px 20px;
        border-bottom: 1px solid ${COLORS.grayOpacity};
        border-top: 1px solid ${COLORS.grayOpacity};
        background: ${COLORS.lightGreen}
      }
      
      .sub-list {
        .sub-item {
          color: ${COLORS.gray2};

          div {
            display: flex;
            padding: 15px 15px 15px 0;
            align-items: center;
            cursor: pointer;

            svg {
              left: 0;
              width: 22px;
              margin-right: 15px;
            }
          }

          &:hover {
            color: ${COLORS.green};
          }

          &.active{ 
            color: ${COLORS.green};
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export default MegaMenuStyle;
