import React from 'react';


export default class ConsInsOverview extends React.Component {
    render(){
        
        const imgContainer = {
            marginLeft:"20%",
            width:"100%",
           
        } 

        const img = {
            width:"100%",
            
        }

        return (
            <div class="overview_dis">
                   <div>
                   <p>作为公司核心业务，宏瑞基业地产贯彻“绿色、可持续”的开发与设计理念，
                    在北京开发了30多个精品项目，累计开发面积超过600万平方米。</p> 
                    </div>

                    <div style={imgContainer}>
                        <img style={img} src='./src/images/cons_ins.jpg'/>
                    </div>
            </div>
        );
    }
}