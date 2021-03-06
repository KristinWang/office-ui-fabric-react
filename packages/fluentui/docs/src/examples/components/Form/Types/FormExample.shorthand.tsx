import * as React from 'react';
import { Form, Button } from '@fluentui/react-northstar';

const fields = [
  {
    label: 'First name',
    name: 'firstName',
    id: 'first-name-shorthand',
    key: 'first-name',
    required: true
  },
  {
    label: 'Last name',
    name: 'lastName',
    id: 'last-name-shorthand',
    key: 'last-name',
    required: true
  },
  {
    label: 'I agree to the Terms and Conditions',
    control: { as: 'input' },
    type: 'checkbox',
    id: 'conditions-shorthand',
    key: 'conditions'
  },
  { control: { as: Button, content: 'Submit' }, key: 'submit' }
];

const FormExample = () => (
  <Form
    onSubmit={() => {
      alert('Form submitted');
    }}
    fields={fields}
  />
);

export default FormExample;
