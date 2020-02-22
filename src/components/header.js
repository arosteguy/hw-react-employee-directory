import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Employee Directory</h1>
          <p className="lead">Click on carets to filter by heading or use the search bar to narrow your results.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
