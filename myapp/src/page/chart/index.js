import React,{Component} from 'react';
import BizchartBurce from '../../component/bizchartburce';
import Bizchart from '../../component/bizchartbin';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Char extends Component {
    constructor(){
        super()
        this.state={
            current: 'mail',
            char:false
        }
    }  
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
          char : !this.state.char
        });
      }
    
  render() {
    return (
      <div>
    <Menu
        onClick={this.handleClick}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="bar-chart" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled={!this.state.char}>
          <Icon type="pie-chart" />Navigation Two
        </Menu.Item>
        <Menu.Item key="alipay" disabled={this.state.char}>
        <Icon type="area-chart" />Navigation three
        </Menu.Item>
      </Menu>
          {
              this.state.char?
              <BizchartBurce/>
              :<Bizchart/>
          }
            
      </div>
    );
  }
}
export default Char;