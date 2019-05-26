import React from 'react';
import { List, Card, Row } from 'antd';
import Item from 'antd/lib/list/Item';
// import styles from '../../../css/industry.css';
import { Pagination } from 'antd';
import { qulificationData } from './qualifications_data';


// const real_content = {
//     height:"400px",
// };

const paginationProps = {
    pageSize: 1,
    showQuickJumper: true,
    // simple:true,
      
  };



export default class QualificationDetail extends React.Component{

    render(){
        let img = {
            height:"100%",
            width:"100%",
        }
        let id = this.props.location.query.id;
        let display_data = qulificationData[id];
        if(id==3){
            img={
                marginLeft: '0',
                height:"120%",
                width:"120%",
            }
        }
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