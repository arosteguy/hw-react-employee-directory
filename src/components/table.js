import React from "react";
import { Table } from "reactstrap";
import Row from "./row";

const DirectoryTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.onClick}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.employees.map(employee => (
          <Row
          key={employee.login.uuid}
          image={employee.picture.thumbnail}
          name={employee.name.first + " " + employee.name.last}
          email={employee.email}
          dob={employee.dob.date.slice(0, 10)}
          ></Row>
        ))};
        </tr>
      </tbody>
    </Table>
  );
}

export default DirectoryTable;