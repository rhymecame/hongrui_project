import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import MidContainer from './mid_container';



export default class AboutHongrui extends React.Component {

    render(){
        return(
            <div>
                <Header></Header>
                <MidContainer></MidContainer>
                <Footer></Footer>
            </div>

        );

    };
}