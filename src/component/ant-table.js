import { Table, Tag, Space } from 'antd';

const AntTableComponent = (props) => {
    const {data,columns} = props;
    return(
        <Table dataSource={data} columns={columns} />

    )
}


  
  
export default AntTableComponent;