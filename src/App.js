import "./App.css";
import { useState } from "react";
import { Row, Col, Divider } from "antd";
import { Button } from 'antd';
import {dataSource,columns} from "./data/tabledata.json";
//import {dataSource, columns} from "./data/table.json"


import AccordionComponent from "./component/accord-component";
import TableComponent from "./component/table";
import AntTableComponent from "./component/ant-table";


const style = { background: "#0092ff", padding: "8px 0" };

function App() {
  //State
  const [clientList, setClientList] = useState([]);

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
 




  return (
    <div>
      <Divider orientation="left">&nbsp;</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            {[
              {
                accon_title: "First",
                failed: {
                  label: "validation fileld",
                  count: 10,
                },
                success: {
                  label: "success",
                  count: 50,
                },
                warning: {
                  label: "warning",
                  count: 20,
                },
              },
              {
                accon_title: "Second",
                failed: {
                  label: "validation fileld",
                  count: 10,
                },
                success: {
                  label: "success",
                  count: 50,
                },
                warning: {
                  label: "warning",
                  count: 20,
                },
              },
              {
                accon_title: "Third",
                failed: {
                  label: "validation fileld",
                  count: 10,
                },
                success: {
                  label: "success",
                  count: 50,
                },
                warning: {
                  label: "warning",
                  count: 20,
                },
              },
            ].map((el) => (
              <AccordionComponent data={el} />
            ))}
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <AntTableComponent data={dataSource} columns={columns} />
              {/* <TableComponent data={dataSource} columns={columns} /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Divider orientation="left">&nbsp;</Divider>
        <Col span={12}>
          {clientList.map((item, i) => {
            return (
              <div>
                <span>{item.name}</span>
                <span>{item.lastname}</span>
              </div>
            );
          })}
          <button onClick={() => {setClientList(clientList.concat({ name: "Dadabhau", lastname: "Thete" }))}}>Add List</button>
        </Col>
      </Row>
      <Row>
        <Divider orientation="left">&nbsp;</Divider>
        <Col span={12}>
        
        <Button type="primary" onClick={handleIncrement}>+</Button>
        {counter}
        <Button onClick={handleDecrement}>-</Button>
     
        </Col>
      </Row>
    </div>
  );
}

export default App;
