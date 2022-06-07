import {
    PaginationContainer,
    PreviousPage,
    NextPage,
    ChangePageBtn,
} from './Pagination.styles';

export const PaginationComponent = ({handlePaginationDecrement, handlePaginationIncrement}) => {
    return (
        <PaginationContainer>
            <ChangePageBtn onClick={handlePaginationDecrement}><PreviousPage/></ChangePageBtn>
            <ChangePageBtn onClick={handlePaginationIncrement}><NextPage/></ChangePageBtn>
        </PaginationContainer>
    );
}