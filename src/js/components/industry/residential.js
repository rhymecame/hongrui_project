import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import {Link} from 'react-router';

const data = [{title:'芳甸别墅'},{title:'贾汪南湖湖心岛'},{title:'南京艾菲国际'},
{title:'泰州华泽天下'},{title:'姜堰泰达星河湾'},{title:'江阴山水绿城'},{title:'泰州西堤阳光'},{title:'扬州林溪山庄'},{title:'合肥滨湖金龙小区'},{title:'Title 10'},{title:'Title 11'}];

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
        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                    dataSource={data}
                    pagination={paginationProps}
                    renderItem={item =>(
                        <List.Item>
                            <Card headStyle={{textAlign:"center"}} title={item.title}>
                                <Link to="/residential_details" target="_blank"><img style={img} src='./src/images/header.jpg'></img></Link>
                            </Card>
                        </List.Item>
                    )}
                />
                
            </div>
        );
    };

}