import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import DisplayCard from './displaycard';


export default class Industry extends React.Component {

    render(){
        return(
            <div>
                <Header></Header>
                <DisplayCard></DisplayCard>
                <Footer></Footer>
            </div>

        );

    };
}