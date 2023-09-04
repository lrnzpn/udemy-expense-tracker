import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
  const valArr = props.dataPoints.map(data => data.value)
  const totalMax = Math.max(...valArr)

  return <div className="chart">
    {
      props.dataPoints.map(data => 
        <ChartBar 
          value={data.value} 
          maxValue={totalMax} 
          label={data.label}
          key={data.label}
          />)
    }
  </div>
}

export default Chart;