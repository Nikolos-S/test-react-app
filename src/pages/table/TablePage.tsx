import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Combobox } from './Combobox';
import { TableComponent } from './TableComponent';

const TablePage: React.FC = () => {

  return (
    <div className="container mt-5">
        <Form className="row d-flex justify-content-between mb-5">
          <Combobox />
        <Form.Group className="col-3">
          <InputGroup>
            <Form.Control
              type="date"
            />
          </InputGroup>
        </Form.Group>
        </Form>
        <TableComponent />
    </div>
  )
}
export { TablePage };