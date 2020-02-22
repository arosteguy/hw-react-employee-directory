import React from "react";
import {Form, FormGroup, Label, Input } from "reactstrap";

const SearchBar = props=> {
return(
    <Form>
    <FormGroup>
        <Label for="SearchTerm">Search</Label>
        <Input
          type="search"
          name="search"
          id="SearchTerm"
          placeholder="search placeholder"
          
        />
      </FormGroup>
    </Form>
     
   )
}
export default SearchBar;