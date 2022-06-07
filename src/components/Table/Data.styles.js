import styled from 'styled-components';

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const TableRow = styled.tr`
    background-color: ${({colorData}) =>  colorData};
    height: 50px;
    text-align: center; 
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin-top: 40px;
    border-radius: 15px;
`;

export const TableHeaderRow = styled.tr`
    height: 50px;
`;

export const TableHeader = styled.th`
    background-color: #2382db;
    text-align: center;
    width: 100px;
    
    &:last-of-type{
        border-radius: 0 15px 0 0;
    }
`;

export const TableHeaderId = styled.th`
    background-color: #2382db;
    text-align: center;
    border-radius: 15px 0 0 0;
    width: 50px;
`;