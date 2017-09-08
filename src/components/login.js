import React, { Component } from 'react';
import { PageHeader, FormControl, FormGroup, Button, Alert } from 'react-bootstrap';

import Main from './main';


const ErrorMsg = (props) => {
    if (props.message) {
        return (
            <Alert bsStyle="warning">
                {props.message}
            </Alert>
        )
    } else {
        return null;
    }
}

export default class Login extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleSubmit(event) {
        let username = this.username.value;
        let password = this.password.value;
        this.props.login(username, password);
        event.preventDefault();
    }

    render() {
        return (
            <Main loading={this.props.loading} >
                <div style={style.table} className="table">
                    <div style={style.tableCell} className="table-cell">
                        <div style={style.container} className="container bg-secondary">
                            <PageHeader bsClass="page-header text-center">LOGIN</PageHeader>
                            <ErrorMsg message={this.props.authError} />
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <FormControl
                                        name="username"
                                        inputRef={ref => this.username = ref}
                                        type="email"
                                        placeholder="EMAIL" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        name="password"
                                        inputRef={ref => this.password = ref}
                                        type="password"
                                        placeholder="PASSWORD" />
                                </FormGroup>
                                <Button
                                    bsSize="large"
                                    type="submit" block>
                                    Login
                    </Button>
                            </form>
                            {/* <button onClick={this.props.fbLogin} >Fb Login</button> */}
                        </div>
                    </div>
                </div>
            </Main>

        );
    }
}


const style = {
    table: {
        display: 'table',
        margin: 0,
        height: '100vh'
    },
    tableCell: {
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    container: {
        maxWidth: '90%',
        padding: '30px 15px',
        borderRadius: 5,
        width: 300
    },
}
