import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { createPieChart } from './pie.js';
import { createLineGraph } from './linegraph.js'; // Import the createLineGraph function
import '../css/Dashboard.css'

const Dashboard = () => {
  const [students, setStudents] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  const [chartConfig, setChartConfig] = useState(null); // State to hold chart config
  const [lineChartConfig, setLineChartConfig] = useState(null); // State to hold line chart config

  useEffect(() => {
    axios.get('http://localhost:3001/dashboard')
    .then(res => {
      if(res.data.ok) {
        setStudents(res.data.student);
        setAdmin(res.data.admin);
        setBooks(res.data.book);

        // After setting state variables, generate pie chart configuration
        const newChartConfig = createPieChart('pieChartContainer', students, admin, books);
        setChartConfig(newChartConfig);

        // Generate line chart configuration
        const newLineChartConfig = createLineGraph('lineGraphContainer');
        setLineChartConfig(newLineChartConfig);
      }
    }).catch(err => console.log(err));
  }, [students, admin, books]); // Include state variables in dependency array

  return (
    <div className='all'>
      <div className="dashboard">
        <div className="dashboard-box">
          <h2>Total Books</h2> 
          <h2>{books}</h2>
        </div>
        <div className="dashboard-box">
          <h2>Total Students</h2> 
          <h2>{students}</h2>
        </div>
        <div className="dashboard-box">
          <h2>Total Admins</h2> 
          <h2>{admin}</h2>
        </div>
      </div>
      <div className="flex-gap-4" style={{ textAlign: 'center' }}> {/* Apply textAlign: center */}
        <div className='flex' style={{ gap: '4px', display: 'inline-block' }}> {/* Apply display: inline-block */}
          {/* Render HighchartsReact with the pie chart configuration */}
          {chartConfig && <HighchartsReact highcharts={Highcharts} options={chartConfig} />}
          {/* Render HighchartsReact with the line chart configuration */}
  
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-box">
          <h2>Number of Users this Month</h2> 
          <h2>100</h2>
        </div>
        <div className="dashboard-box">
          <h2>User per Month</h2> 
          <h2>20</h2>
        </div>
        <div className="dashboard-box">
          <h2>Total Number of Users</h2> 
          <h2>250</h2>
        </div>
      </div>
      <div className="flex-gap-4" style={{ textAlign: 'center' }}> {/* Apply textAlign: center */}
        <div className='flex' style={{ gap: '4px', display: 'inline-block' }}> {/* Apply display: inline-block */}

          {/* Render HighchartsReact with the line chart configuration */}
    
          {lineChartConfig && <HighchartsReact highcharts={Highcharts} options={lineChartConfig} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
