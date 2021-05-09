import { Collapse } from "antd";
import { Card } from "antd";
const { Panel } = Collapse;

const AccordionComponent = (props) => {
  const { data } = props;

  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header={data.accon_title}>
        <Card title={data.failed.label} style={{ width: 300 }}>
          <p>{data.failed.count}</p>
        </Card>
        <Card title={data.success.label} style={{ width: 300 }}>
          <p>{data.success.count}</p>
        </Card>
        <Card title={data.warning.label} style={{ width: 300 }}>
          <p>{data.warning.count}</p>
        </Card>
      </Panel>
    </Collapse>
  );
};



export default AccordionComponent;