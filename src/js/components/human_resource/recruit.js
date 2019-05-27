import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Row,Col} from 'antd';

export default class Recruit extends React.Component {
    render(){
        let img = {
            width:"100%",
            height:"100%",
        }
        return (
            <div>
            <Row>
                <Col >
                    <h2>造价员</h2>
                    <p style={{fontSize:17}}>
                       1.掌握设计预算和施工预算管理，即二算管理。具体是做好二算编制工作及对比工作，对收到设计变更、技术
                       核定单、资料等进行增减预算编制。
                    </p>
                    <p style={{fontSize:17}}>
                       2.负责索赔管理，若客户不履行或未能正确履行合同约定的义务造成建筑方损失，建筑方要向客户提出赔偿要求，
                       起草索赔文件。
                    </p>
                    <p style={{fontSize:17}}>
                       3.负责工程结算，根据竣工资料编制项目工程结算书、以确定工程最终造价。
                    </p>
                    <h2>工程部经理</h2>
                    <p style={{fontSize:17}}>
                        1.全面负责工程部的管理工作，向总经理负责，并接受总经理和行政办的督导。
                    </p>
                    <p style={{fontSize:17}}>
                       2.有高度的责任心和事业心，认真钻研技术，讲求质量，做到精益求精。
                    </p>
                    <p style={{fontSize:17}}>
                       3.负责工程和技术的组织、指导及管理工作。负责工程的安装验收、安全运行、维修保养等管理工作。
                    </p>
                    <p style={{fontSize:17}}>
                       4.负责对工程部人员的调配和管理。做好技术培训等工作，发挥和调动部门员工的积极性，并按有关制度做好考核工作。
                    </p>
                    <h2>市场拓展</h2>
                    <p style={{fontSize:17}}>
                       1.负责公司业务及产品的销售。
                    </p>
                    <p style={{fontSize:17}}>
                        2.负责目标客户群体的开发。
                    </p>
                    <p style={{fontSize:17}}>
                       3.维护客户关系，保证良好沟通，适时挖掘潜在业务需求，完成二次营销。
                    </p>
                    <p style={{fontSize:17}}>
                       4.服务客户过程中与其他业务部门的有效配合协作。
                    </p>
                    <p style={{fontSize:17}}>
                       5.客户资料的维护与完善，完成上级领导交给的其他工作任务。
                    </p>
                </Col>
            </Row>
            </div>
        );
    }
}
