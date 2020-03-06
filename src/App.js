import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import Table from "./components/table";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import { MyContainer } from "./styles";
// import { results as employeeList } from "./utils/employeeInfo";

const App = () => {
  const [employeeInfo, setEmployeeInfo]= useState({
  employees: []
  });
  
  const { employees } = employeeInfo;

  const handleChange = (e) => {
    e.preventDefault();


  const searchInput = e.target.value.toLowerCase(); 
    let newEmployee = [];
      if (searchInput !== "") {
    newEmployee = employeeInfo.filter(employee => {
      return (
        searchInput === employee.name.first.toLowerCase().slice(0, searchInput.length) ||
        searchInput === employee.name.last.toLowerCase().slice(0, searchInput.length)
    )
  })
  }else {
  newEmployee = employeeInfo;
  }
  setEmployeeInfo({ employees: newEmployee })
  }
  const handleOnClick = () => {

  setEmployeeInfo({ employees: employees.sort(sortByName)})
  }

  function sortByName ( Name1, Name2) {
    const firstName = Name1.name.first.toLowerCase();
    const lastName = Name2.name.first.toLowerCase();
    let comparison = 0;
    if (firstName > lastName) {
      comparison = 1;
    }else if (firstName < lastName) {
      comparison = -1;
    }
      return comparison
  } 
  return (
    <MyContainer>
   <Row>
     <Col>
       <Header></Header>
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3}} >
       <SearchBar handleChange= {handleChange}>
       </SearchBar>
        
    </Col>
  </Row>
  <Row>
    <Col>
      <Table employees={employees} onClick={handleOnClick}></Table>
    </Col>
    </Row>
  </MyContainer>
 );
}





export default App;
