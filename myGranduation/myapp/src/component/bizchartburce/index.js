import React ,{Component} from "react";
import { Chart, Axis, Geom, Tooltip, Legend } from "BizCharts";
import { DataSet } from '@antv/data-set';
import "./index.css";
class BizchartBurce extends Component {
    
    render(){
        const data = [
            { month: 'Feb', vue: 100000, angular: 300000 ,react :780000},
            { month: 'Mar', vue: 119100, angular: 300100 ,react :790000 },
            { month: 'Apr', vue: 132000, angular: 300200 ,react :930000 },
            { month: 'May', vue: 150050, angular: 300010 ,react :985000 },
            { month: 'Jun', vue: 170500, angular: 300500 ,react :1105000 },
            { month: 'Jul', vue: 191000, angular: 390000 ,react :1100500 },
            { month: 'Aug', vue: 195000, angular: 401500 ,react :1190000 },
            { month: 'Sep', vue: 200000, angular: 430000 ,react :1201000 },
            { month: 'Oct', vue: 219000, angular: 485000 ,react :1500000 },
            { month: 'Nov', vue: 225000, angular: 509000 ,react :1700000 },
            { month: 'Dec', vue: 201000, angular: 409000 ,react :1200000 },
            { month: 'Jan', vue: 230000, angular: 500900 ,react :1750000 }
          ]; 
          const ds = new DataSet();
          const dv = ds.createView().source(data);
          dv.transform({
            type: 'fold',
            fields: [ 'vue', 'angular','react' ], // 展开字段集
            key: 'city', // key字段
            value: 'temperature', // value字段
          });
          console.log(dv);
          const cols = {
            month: {
              range: [ 0, 1 ]
            }
          }
        return <div className="bizchartbure">
            <h1>2017前端三大框架比较</h1>
             <Chart height={400} data={dv} scale={cols} forceFit>
            <Legend />
            <Axis name="month" />
            <Axis name="temperature" label={{formatter: val => `${val}`}}/>
            <Tooltip crosshairs={{type : "y"}}/>
            <Geom type="line" position="month*temperature" size={2} color={'city'} shape={'smooth'} />
            <Geom type='point' position="month*temperature" size={4} shape={'circle'} color={'city'} style={{ stroke: '#fff', lineWidth: 1}} />
            </Chart>
        </div>
    }
}
export default BizchartBurce;