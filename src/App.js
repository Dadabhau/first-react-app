import "./App.css";
import { useState } from "react";
import { Row, Col, Divider } from "antd";
import {dataSource,columns} from "./data/tabledata.json";


import AccordionComponent from "./component/accord-component";
import TableComponent from "./component/table";
import AntTableComponent from "./component/ant-table";

const style = { background: "#0092ff", padding: "8px 0" };

function App() {
  //State
  const [clientList, setClientList] = useState([]);

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
              <AntTableComponent data={dataSource} columns={columns} />
          <div style={style}>

            {[
              {
                tier_name: "Tier 1",
                tier_desc: "Preferred",
                current_count: 32,
                added: 50,
                removed: 10,
              },
              {
                tier_name: "Tier 2",
                tier_desc: "Preferred Genric",
                current_count: 32,
                added: 50,
                removed: 10,
              },
              {
                tier_name: "Tier 3",
                tier_desc: "Genric",
                current_count: 32,
                added: 50,
                removed: 10,
              },
              {
                tier_name: "Tier 4",
                tier_desc: "Preferred Brand",
                current_count: 32,
                added: 50,
                removed: 10,
              },
            ].map((el) => (
              <TableComponent table={el} />
            ))}
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
    </div>
  );
}

export default App;
