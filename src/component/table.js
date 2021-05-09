import { Table, Tag, Space } from 'antd';


const TableComponent = (props) => {
    const {table} = props;
    //const {tableHeader} = columns;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>TIER NAME</th>
                        <th>TIER DESCRIPTION</th>
                        <th>CURRENT COUNT</th>
                        <th>ADDED</th>
                        <th>REMOVED</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{table.tier_name}</td>
                        <td>{table.tier_desc}</td>
                        <td>{table.current_count}</td>
                        <td>{table.added}</td>
                        <td>{table.removed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default TableComponent;