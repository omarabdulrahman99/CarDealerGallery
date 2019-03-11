import React, {Component} from 'react';
import TileHeader from './TileHeader';
import TileBody from './TileBody';


class Tile extends Component {
	


	constructor(props){
		super(props);
		this.state = {}
		

	}






	render(){


		return(

			<div className="tile">
				<TileHeader/>
				<TileBody/>
			</div>


		)


	}







}

export default Tile;