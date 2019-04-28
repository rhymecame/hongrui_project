import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import NewsContainer from './newscontainer';
require('../../../css/link.css')

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <NewsContainer></NewsContainer>
            </div>
        );
    };
}