import styled from 'styled-components';
import { COLORS } from '../../../enum';

const CardStyle = styled.div`
  padding: 16px 12px;
  border: 1px solid ${COLORS.gray};
  box-shadow: 0 0 4px ${COLORS.gray};
  border-radius: 5px;

  img {
    width: 100%;
  }

  .store-info {
    margin-top: 24px;
  }

  ul {
    margin-top: 16px;

    li {
      font-size: 12px;
      padding: 10px 0;

      span.label {
        color: ${COLORS.gray2};
        display: inline-block;
        min-width: 120px;
      }
    }
  }

  .edit-card {
    margin: 20px 0;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 3px;
    background-color: ${COLORS.gray};
    transition: all ease .5s;

    &:hover {
      background-color: ${COLORS.greenBackground};
      color: ${COLORS.white};
    }
  }

  @media (min-width: 992px) {
    width: 350px;
  }
`;

export default CardStyle;
