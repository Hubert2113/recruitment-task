import styled from 'styled-components';
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    background-color: #0062ff;
    padding: 10px 0;
    align-items: center;
`;

export const SeachInput = styled.input`
    padding: 5px 10px;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 10px;

    &:focus{
        outline: none;
    }
`;

export const SubmitBtn = styled.button`
    background-color: rgba(255,255,255,0);
    border: none;
    border-radius: 100%;
    padding: 5px;
    margin-left: -50px;
`;

export const SearchIcon = styled(SearchAlt)`
    width: 20px;
`;