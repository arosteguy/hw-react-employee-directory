import styled from "styled-components";
import { Form, Container, Jumbotron } from "reactstrap";

const white = "#000000"

export const FormWrapper = styled(Form)`
    #searchEmployeeInput {
        width: 350px;
        margin-right: 5px;
    }
    margin-bottom: 20px;
`

export const MyContainer = styled(Container)`
    * {
        text-align: center;
    }
    .jumbotron {
        margin-top: 0;
        padding-top: 20px;
    }
    
`

export const MyJumbotron = styled(Jumbotron)`
    text-align: center;
    color: ${white};
    padding: 20px 0;
    `