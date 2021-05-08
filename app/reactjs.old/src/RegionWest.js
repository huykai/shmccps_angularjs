import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const layoutStyle = {
  //align:
  width: '200px',
  //height: ''
};

const layoutCustomStyle = {
  //align:
  padding: '10px'
  //height: ''
};

export default class RegionWest extends Component {
    constructor(props) {
      super(props);
			console.log("RegionWest props = ",props);
      //console.log("RegionWest props = ",props);
      //let ParentWidth = props.width;
      //let ParentHeight = props.height ;
      //console.log("RegionNorth ParentWidth = ",ParentWidth);
      //console.log("RegionNorth ParentHeight = ",ParentHeight);
      //layoutStyle.width = ParentWidth + 'px';
      //layoutStyle.height = ParentHeight + 'px';
      this.state = {
          //parentwidth: ParentWidth, parentheight: ParentHeight,
          pagewidth: props.width , pageheight: props.height
      };

      //layoutStyle.width = '1000px';
      //layoutStyle.height = '800px';
      //layoutPanelStyle.width = '500px';
      //layoutPanelStyle.height = '200px';
      //layoutStyle.width = this.state.pagewidth + 'px' ;
      //layoutStyle.height = this.state.pageheight + 'px' ;
      console.log('RegionWest layoutStyle = ',layoutStyle)
    }
    

    render() {
      return (
        <div data-options="region:'west',split:true" title="数据查询项" style={layoutStyle}>
						<div className="easyui-accordion" data-options="fit:true,border:false">
							<div title="LTE" style={layoutCustomStyle}>
								<div className="easyui-panel" style={{width:"450px",padding:"5px"}}>
									<ul id="tree_lte_item" name="lte_recorditem" className="easyui-tree" data-options="url:'./reactjs/data/tree_lte_item.json',method:'get',animate:true,checkbox:true"></ul>
								</div>
							</div>

							<div title="GSM/UMTS" data-options="selected:true" style={layoutCustomStyle}>
								<div className="easyui-panel" style={{width:"450px",padding:"5px"}}>
									<ul id="tree_gsm_item" name="gsm_recorditem" className="easyui-tree" data-options="url:'./reactjs/data/tree_gsm_item.json',method:'get',animate:true,checkbox:true"></ul>
								</div>
							</div>
						</div>
				</div>
      )
    }
}