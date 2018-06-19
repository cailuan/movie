import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";
import "./index.css";

class Topics extends Component {
  render() {
    return (
      <div className="topics">
        <ul className="topics-ul">
          <li>
            <NavLink activeClassName="selected" to="/topics/underway">about react</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/topics/compeled">react upgrade</NavLink>
          </li>
        </ul>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Topics;