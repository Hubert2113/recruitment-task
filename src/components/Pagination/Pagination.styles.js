import styled from 'styled-components';
import {ArrowLeft} from '@styled-icons/bootstrap/ArrowLeft';
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PreviousPage = styled(ArrowLeft)`
    width: 20px;
    transition: transform 100ms linear;

    &:active{
        transform: scale(0.8);
    }
`;

export const NextPage = styled(ArrowRight)`
    width: 20px;
    transition: transform 100ms linear;

    &:active{
        transform: scale(0.8);
    }
`;

export const ChangePageBtn = styled.button`
    border: none;
    border-radius: 100%;
    background-color: rgba(255,255,255,0);
`;