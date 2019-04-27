import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import styles from '../../../css/industry.css';
import { Pagination } from 'antd';

const data = [{title:'徐州翡翠城'},
];

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

export default class SafeHouse extends React.Component{

    
   
    render(){
        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                    dataSource={data}
                    pagination={paginationProps}
                    renderItem={item =>(
                        <List.Item>
                            <Card headStyle={{textAlign:"center"}} title={item.title}>
                                <img style={img} src='./src/images/safe_house.jpeg'></img>
                            </Card>
                        </List.Item>
                    )}
                />
                
            </div>
        );
    };

}