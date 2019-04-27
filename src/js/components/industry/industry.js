import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import DisplayCard from './displaycard';
import {Router,Route,hashHistory} from 'react-router';
import GreenWisdom from './greenwisdom';
import Infrastructure from './infrastructure';
import EstateDev from './estate_dev';
import ConsIns from './cons_ins';


export default class Industry extends React.Component {

    render(){
        return(
            <div>
                
                {/* <DisplayCard></DisplayCard> */}
                <Router history={hashHistory}>
                    <Route exact path="/industry" component={DisplayCard}></Route>
                    <Route path="/industry/greenwisdom" component={GreenWisdom}></Route>
                    <Route path="/industry/infrastructure" component={Infrastructure}></Route>
                    <Route path="/industry/estate_dev" component={EstateDev}></Route>
                    <Route path="/industry/cons_ins" component={ConsIns}></Route>
                    {/* <Route path="/hr" component={HumanResource}></Route> */}
                </Router>
                
            </div>

        );

    };
}