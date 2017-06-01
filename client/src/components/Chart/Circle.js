import React, {Component} from 'react';
import {PieChart} from 'react-easy-chart';

class Circle extends Component{

    render(){

        return(
            <PieChart
                padding={50}
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
            />
        );
    }
}
export default Circle;
