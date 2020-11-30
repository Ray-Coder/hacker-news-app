import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineRechartComponent extends React.Component {
   

    render() {
        return (
            <LineChart width={600} height={250} data={this.props.plot}
                margin={{ top: 30, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="story" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="middle"/>
                <Line type="monotone" dataKey="points" stroke="#0095FF" />
            </LineChart>
        )
    };
}

export default LineRechartComponent;