import styled from 'styled-components';
import { COLORS } from '../../enum';

const StoreListStyle = styled.div`
    
    .title {
        position: relative;
        font-size: 28px;
        font-weight: 400;
        color: ${COLORS.green};

        &:after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: ${COLORS.greenBackground};
        }
    }

    .button-list {
        margin-top: 15px;
        margin-bottom: 15px;
        text-align: right;
        .add-new-store{
            padding: 15px 20px;
            background: ${COLORS.greenButtonBackground};
            border: none;
            color: white;
            font-weight: 500;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                transition: opacity 1s;
                opacity: 0.8;
            }
        }
    }
    table {
        border-collapse: collapse;
        width: 100%;
        tr {
            td, th {
                border: 1px solid ${COLORS.gray2};
                padding: 8px;
            }
            &:nth-child(even) {
                background-color: ${COLORS.evenTrTableBackground};
            }
            &:hover{
                background-color: ${COLORS.grayHoverTable};
            }
            th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: ${COLORS.greenHeaderBackground};
                color: white;
            }
            .empty-store {
                text-align: center;
            }
        }
    }
    .store-form {
        overflow: auto;
        height: 100%;
        .modal-header {
            h2 {
                color: ${COLORS.green}
            }
            svg {
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
            }
        }

        .error {
            font-size: 14px;
            color: ${COLORS.red};
            width: 80%;
            text-align: right;
            margin: auto;
        }
        .form-item {
            width: 80%;
            margin: auto;
            display: flex;
            align-items: center;
            font-size: 20px;
            margin-top: 10px;
            .label {
                width: 20%;
                font-size: 20px;
            }
            input {
                width: 80%;
                font-size: 20px;
                padding: 5px 10px;
            }
            
            &.add-employee {
                display: block;
            }

            .employee-form {
                width: 50%;
                input, select {
                    width: 80%;
                    padding: 5px 10px;
                    font-size: 16px;
                }
                .error{
                        margin: 0
                }
                &:first-child { 
                    .error {
                        width: calc(80% + 25px);
                    }
                }
            }
            
            &.address {
                input {
                    font-size: 16px;
                    padding: 5px 10px;
                    width: 30%;
                    &:first-child {
                        margin-right: 0;
                    }
                    &:not(:first-child) {
                        margin-left: 3%;
                    }
                }
            }
        }
        button {
            font-size: 18px;
            width: fit-content;
            padding: 10px;
            background: ${COLORS.greenButtonBackground};
            cursor: pointer;
            border-width: 0;
            border-radius: 5px;
            color: white;
            &:hover{
                transition: opacity 1s;
                opacity: 0.8;
            }
        }
        .array-field {
            position: relative;
            padding: 15px 0px;
            border-bottom: 1px solid ${COLORS.gray2};
            svg {
                position: absolute;
                top: 40%;
                right: 5%;
                font-size: 25px;
                color: red;
                cursor: pointer;
            }
        }
        .save-button {
            position: absolute;
            padding: 8px 35px;
            right: 20px;
            bottom: 15px;
        }
    }
`;
export default StoreListStyle;