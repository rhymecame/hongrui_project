import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import NewsContainer from './newscontainer';

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <NewsContainer></NewsContainer>
                <Footer></Footer>
            </div>
        );
    };
}