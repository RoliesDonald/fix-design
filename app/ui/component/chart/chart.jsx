"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styles from "./chart.module.css"

const data = [
    {
        name: 'January',
        order: 4000,
        done: 2400,
        rework: 1400,
        amt: 2400,
    },
    {
        name: 'February',
        order: 3000,
        done: 1398,
        rework: 1338,
        amt: 2210,
    },
    {
        name: 'March',
        order: 2000,
        done: 9800,
        rework: 5700,
        amt: 2290,
    },
    {
        name: 'April',
        order: 2780,
        done: 3908,
        rework: 1308,
        amt: 2000,
    },
    {
        name: 'May',
        order: 1890,
        done: 4800,
        rework: 3400,
        amt: 2181,
    },
    {
        name: 'June',
        order: 2390,
        done: 3800,
        rework: 2300,
        amt: 2500,
    },
];

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mountly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
                    <Legend />
                    <Line type="monotone" dataKey="order" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="done" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    <Line type="monotone" dataKey="rework" stroke="var(--mainRed)" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

