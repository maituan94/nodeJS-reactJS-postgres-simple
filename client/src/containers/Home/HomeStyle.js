import styled from 'styled-components';
import { COLORS } from '../../enum';

const HomeStyle = styled.div`
  .body {
    position: relative;

    .left-block {
      position: absolute;
      left: -250px;
      width: 250px;
      border-right: 1px solid #E4E7EC;
      background-color: #fff;
      box-shadow: 0px 0px 4px ${COLORS.gray};
      transition: left 0.5s ease;
      height: calc(100vh - 70px);
      overflow-y: auto;
      z-index: 9;
    }

    &.active .left-block {
      left: 0;
    }

    .right-block {
      width: calc(100% - 48px);
      padding: 40px 24px;
    }
  }

  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${COLORS.white};
    opacity: 0.7;
    z-index: 99;
  }

  .loader {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    transform: translate(-50%, -50%);
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3498db;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (min-width: 768px) {
    .body {
      display: flex;

      .left-block {
        position: relative;
        left: unset;
        height: unset;
        overflow-y: unset;
      }
    }
  }

  @media (min-width: 992px) {
    .body {
      .left-block {
        width: 350px;
      }
      .right-block {
        width: calc(100% - 350px);
      }
    }
  }
`;

export default HomeStyle;