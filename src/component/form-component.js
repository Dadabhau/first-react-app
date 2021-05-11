import { Form, Input, InputNumber, Button, Select, Radio, Checkbox } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useState } from "react";
const { Option } = Select;

const FormComponent = (props) => {
    const {data} = props;
    const [form] = useForm();

 const [isdemo, setIsdemo] = useState(false);

    return (
        <Form name="contact" form={form}>
      <Form.Item name="fname" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="mail" label="Email" rules={[{ type: 'email'}]}>
        <Input />
      </Form.Item>
      <Form.Item name="Phone" label="Phone" type="number">
        <InputNumber />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={(e)=>{console.log('select', e)}}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
      <Form.Item name="comment" label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="yesno">
        <Radio.Group onChange={(e)=>{console.log('radio', e)}} >
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
    </Radio.Group>
      </Form.Item>
      <Form.Item name="checked" >
      <Checkbox  onChange={(e)=>{setIsdemo(e.target.checked)}} checked={isdemo} value={isdemo}>Checkbox</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={()=>{
            let formdata = form.getFieldsValue(true);

            formdata.checked = isdemo;

            console.log(formdata)}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
}

export default FormComponent;