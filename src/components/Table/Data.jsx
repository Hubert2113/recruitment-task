import {
    TableContainer,
    TableRow,
    Table,
    TableHeader,
    TableHeaderRow,
    TableHeaderId,
} from './Data.styles';

export const DataComponent = ({data}) => {
    return (
        <TableContainer>
            <Table>
                <thead>
                    <TableHeaderRow>
                        <TableHeaderId>ID</TableHeaderId>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Year</TableHeader>
                    </TableHeaderRow>
                </thead>
                <tbody>
                    <TableRow key={data.id} colorData={data.color}>
                        <td style={{borderRadius: '0 0 0 15px'}}>{data.id}</td>
                        <td>{data.name}</td>
                        <td style={{borderRadius: '0 0 15px 0'}}>{data.year}</td>
                    </TableRow>
                </tbody>
            </Table>
        </TableContainer>
    );
}