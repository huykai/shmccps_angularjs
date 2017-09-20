import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class RegionEast extends Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div data-options="region:'east',split:true" title="East" style="width:180px;">
			<ul class="easyui-tree" data-options="url:'tree_data1.json',method:'get',animate:true,dnd:true"></ul>
		</div>
      )
    }
}