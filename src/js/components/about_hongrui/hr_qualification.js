import React from 'react';
import styles from '../../../css/about_hongrui.css';


export default class HRQualification extends React.Component {

    render(){
        

        let container = {
            width: '100%',
            height: '100%', 
        };

        let fill = {
            height:'150px',
        }


        return (
            <div style={container}>
                    <h1>专业承包资质：</h1>
                    <p style={{fontSize:17}}>
                    防水防腐保温工程专业承包贰级；
                    </p>
                    <p style={{fontSize:17}}>
                    建筑装修装饰工程专业承包贰级；
                    </p>
                    <p style={{fontSize:17}}>
                    ******
                    </p>
                    <div style={fill}></div>
            

                    <img class="img" src="./src/images/qualification.jpg"></img>

                    <div style={fill}></div>
                
                    
            </div>
        );
    }
}