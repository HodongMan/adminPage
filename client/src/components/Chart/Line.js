import React, {Component} from 'react';
import {LineChart} from 'react-easy-chart';

class Line extends Component{

    render(){

        let data = [{x : 1, y : 20}, {x : 2, y : 10}, {x : 3, y : 25},];
        return(
            <LineChart
            xType={'text'}
            axes
            dataPoints
            width={500}
            height={250}
            interpolate={'cardinal'}
            data={[
              [
                { x: '월', y: 20 },
                { x: '화', y: 10 },
                { x: '수', y: 33 },
                { x: '목', y: 45 },
                { x: '금', y: 15 }
              ], [
                { x: '월', y: 10 },
                { x: '화', y: 15 },
                { x: '수', y: 13 },
                { x: '목', y: 15 },
                { x: '금', y: 10 }
              ]
            ]}
            />
        );
    }
}

export default Line;
