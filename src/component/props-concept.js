import { Collapse } from 'antd';
const { Panel } = Collapse;


const PropsConcept = (props) => {
 const {expensesinfo} = props;

    return(
        <Collapse defaultActiveKey={["1"]}>
            {expensesinfo.map((el,i)=>(
                   <Panel header={el.title} key={i}>
                   <p>{el.amount}</p>
                   <p>{el.date}</p>
                 </Panel>
            ))}
     
      </Collapse>
    )
}

export default PropsConcept;