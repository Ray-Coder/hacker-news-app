import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class LineRechartComponent extends React.Component {
   

    render() {
        return (
            <ResponsiveContainer width="95%" height={400}>
            <LineChart  data={this.props.plot}
                margin={{ top: 40, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="story" />
                <YAxis />
                <Tooltip />
                <Legend/>
                <Line type="monotone" name="Story_Ids" dataKey="points" stroke="#0095FF" />
            </LineChart>
            </ResponsiveContainer>
            
        )
    };
}

export default LineRechartComponent;