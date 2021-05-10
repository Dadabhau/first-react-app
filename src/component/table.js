import { Table, Tag, Space } from 'antd';


const TableComponent = (props) => {
    const {data,columns} = props;

    return (
        <Table tableData={data} columns={columns} />
    )
}


export default TableComponent;