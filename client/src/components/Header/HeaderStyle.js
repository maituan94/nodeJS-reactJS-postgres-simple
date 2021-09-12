import styled from 'styled-components';
import { COLORS } from '../../enum';

const HeaderStyle = styled.header`
  position: relative;
  background-color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.gray};
  box-shadow: 0px 0px 4px ${COLORS.gray};
  width: 100%;
  overflow-x: hidden;

  &::after {
    content: '';
    clear: both;
    display: table;
  }

  .left-block {
    position: relative;
    float: left;
    padding: 20px;
    color: ${COLORS.green};
    display: flex;
    align-items: center;

    svg {
      margin-top: 4px;
      margin-right: 20px;
      font-size: 24px;
    }

    .company-name {
      font-size: 24px;
      font-weight: 400;
    }
  }

  .right-block {
    position: fixed;
    right: -30%;
    transition: right 0.5s ease;
    z-index: 9;
    top: 70px;
    width: 30%;
    height: calc(100vh - 70px);
    box-shadow: 0 0 6px #ccc;
    background-color: #fff;

    &::after {
      content: '';
      clear: both;
      display: table;
    }

    .info-item {
      position: relative;
      padding: 10px;
      color: #0F1817;

      &:first-child {
        padding: 30px 10px;
      }

      .icon-cart {
        width: 18px;
      }

      .number {
        position: absolute;
        display: block;
        text-align: center;
        padding: 1px 0;
        width: 12px;
        height: 10px;
        border-radius: 100%;
        background-color: ${COLORS.green};
        top: 6px;
        left: 24px;
        color: ${COLORS.white};
        font-size: 8px;
        z-index: 1
      }

      .icon-email {
        width: 16px;
      }

      .language .label {
        padding: 0;
      }
    }

    .info {
      position: relative;
      font-size: 16px;
      padding: 0 36px;

      img {
        position: absolute;
        top:50%;
        left: 0;
        transform: translateY(-32%);
        width: 30px;
        height: 30px;
        border-radius: 100%;
      }

      .title {
        position: absolute;
        left: 36px;
        top: 16px;
        font-size: 10px;
        color: ${COLORS.gray};
      }
    }
  }

  &.active .right-block {
    right: 0;
  }

  .icon-toggle-menu {
    position: absolute;
    right: 20px;
    top: 50%;
    background: transparent;
    width: 20px;
    height: 16px;
    transform: translateY(-50%);

    span {
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      height: 2px;
      background-color: ${COLORS.greenBackground};

      &:first-child {
        top: 0;
      }

      &:last-child {
        top: 100%;
      }
    }

    .active& span {
      display: none;

      &:first-child {
        display: block;
        top: 50%;
        transform: rotate(45deg);
      }

      &:last-child {
        display: block;
        top: 50%;
        transform: rotate(-45deg);
      }
    }
  }

  @media (min-width: 768px) {
    overflow-x: unset;
    height: 80px;

    .right-block {
      position: relative;
      right: auto;
      float: right;
      width: auto;
      height: auto;
      top: unset;
      box-shadow: unset;
      height: inherit;

      .info-item {
        float: right;
        border-left: 1px solid #ccc;
        padding: 30px;

        .number {
          top: 30%;
          left: 50%;
        }
      }
    }
    .icon-toggle-menu {
      display: none;
    }
  }
`;

export default HeaderStyle;