import React ,{Component} from "react";
import { Chart, Axis, Geom, Tooltip, Coord, Legend, Label } from "BizCharts";
import { DataView } from '@antv/data-set';
import './index.css'

class Bizchart extends Component{
    render(){
        const data = [
            { item: 'react', count: 7 },
            { item: 'angular', count: 2 },
            { item: 'vue', count: 1 },
          ];
          const dv = new DataView();
          dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          });
          const cols = {
            percent: {
              formatter: val => {
                val = (val * 100) + '%';
                return val;
              }
            }
          }   
        return <div>
            <h1>三大框架占比</h1>
            <Chart height={window.innerHeight} data={dv} scale={cols} padding={[ 80, 100, 80, 80 ]} forceFit>
            <Coord type='theta' radius={0.75} />
            <Axis name="percent" />
            <Legend position='botton' offsetY={-window.innerHeight / 2 + 300} offsetX={-100} />
            <Tooltip 
              showTitle={false} 
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
              />
            <Geom
              type="intervalStack"
              position="percent"
              color='item'
              tooltip={['item*percent',(item, percent) => {
                percent = percent * 100 + '%';
                return {
                  name: item,
                  value: percent
                };
              }]}
              style={{lineWidth: 1,stroke: '#fff'}}
              >
              <Label content='percent' formatter={(val, item) => {
                  return item.point.item + ': ' + val;}} />
            </Geom>
          </Chart>
        </div>
    }
}
export default Bizchart;