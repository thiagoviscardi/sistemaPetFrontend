import styled from 'styled-components'

interface GridStylesProps {
    width?: any
    alignCenter?: boolean
    onlyWeb?: boolean
  }

export const Table = styled.table<GridStylesProps>`
    width: 100%;
    background-color:#fff;
    padding:20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
    background-color:red;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Td = styled.td<GridStylesProps>`
    padding-top:15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : 'auto')};
    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;
export const Th = styled.th<GridStylesProps>`
    text-align:start;
    border-bottom: inset;
    padding-bottom: 5px;
    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;
