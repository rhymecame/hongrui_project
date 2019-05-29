import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
// import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import { branchData } from './qualifications_data';


// const real_content = {
//     height:"400px",
// };

const paginationProps = {
    pageSize: 1,
    showQuickJumper: true,
    // simple:true,
      
  };



export default class BranchDetail extends React.Component{

    render(){
        let img = {
            height:"100%",
            width:"100%",
        }
        let display_data = branchData;

        return (
            <div>
                
                <List style={{marginLeft:'15%'}} grid={{gutter:12, column:1}}
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