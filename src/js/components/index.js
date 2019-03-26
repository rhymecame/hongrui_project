import React from 'react';
import Header from './header';
import Footer from './footer';
import NewsContainer from './newscontainer';

export default class Index extends React.Component{
    render(){
        return(
          <div>
              <Header></Header>
              <NewsContainer></NewsContainer>
              <Footer></Footer>
          </div>
        );
    };
}