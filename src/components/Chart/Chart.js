
import ChartBar from './ChartBar.js'
import './Char.css'
 const Chart = (props)=>{

    const dataPointsValue = props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return(<div className="chart">
            {props.dataPoints.map(function(dataPoint){
               return <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={totalMaximum}
                
                ></ChartBar>
            })}
    </div>);

}


export default Chart;