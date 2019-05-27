import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import {Link} from 'react-router';
import {estateDevData} from './display_data';

// const real_content = {
//     height:"400px",
// };

const paginationProps = {
    showQuickJumper: true,
    // simple:true,
      
  };

let img = {
    height:"100%",
    width:"100%",
}

export default class Residential extends React.Component{


    
    render(){

        let id = this.props.location.query.id;
        // if(id==undefined){
        //     id=1;
        // }
        let display_data = estateDevData[id];

        console.log('this.props.location');
        console.log(this.props.location);
        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                    dataSource={display_data}
                    pagination={paginationProps}
                    renderItem={item =>(
                        <List.Item>
                            <Card headStyle={{textAlign:"center"}} title={item.title}>
                                <img style={img} src={item.imglocal_url}></img>
                            </Card>
                        </List.Item>
                    )}
                />
                
            </div>
        );
    };

}