import React, { Component } from 'react';
import loader from '../images/loader.gif';


export default class Main extends Component {

    render() {
        return (
            <div id="main">
                <Loader loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

const style = {
    loadingContainer: {
        position: 'fixed',
        display: 'table',
        margin: 0,
        height: '100vh',
        backgroundColor: 'rgba(255,255,255, 1)',
        width: '100%'
    },
    loading: {
        display: 'table-cell',
        verticalAlign: 'middle'
    }
}

const Loader = (props) => {
    if (props.loading) {
        return (
                <div style={style.loadingContainer} className="table loading-container">
                    <div style={style.loading} className="loading">
                        <div className="container text-center">
                            <img src={loader} alt="" />
                        </div>
                    </div>
                </div>
        )
    } else {
        return null;
    }
}



