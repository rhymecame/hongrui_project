import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import {Link} from 'react-router';
import {DisplayData} from './display_data';

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

const display_data = DisplayData;

export default class Residential extends React.Component{


    
   
    render(){
        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                    dataSource={display_data}
                    pagination={paginationProps}
                    renderItem={item =>(
                        <List.Item>
                            <Card headStyle={{textAlign:"center"}} title={item.title}>
                                <Link to={{pathname:"/residential_details",query:{id:item.id,type:item.type}}}target="_blank">
                                <img style={img} src={item.imglocal_url}></img></Link>
                            </Card>
                        </List.Item>
                    )}
                />
                
            </div>
        );
    };

}