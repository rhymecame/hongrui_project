import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import {Link} from 'react-router';
import {infrasData} from './display_data';

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


export default class InfrastructShowPage extends React.Component{

    
    render(){
        let id = this.props.location.query.id;
        let display_data = infrasData[id];


        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                    dataSource={display_data}
                    pagination={paginationProps}
                    renderItem={item =>(
                        <List.Item>
                            <img style={img} src={item.imglocal_url}></img>
                        </List.Item>
                    )}
                />
                
            </div>
        );
    };

}