import React, {Component} from 'react';
import Tile from './Tile'

class Tiles extends Component {


	asyncTask = (i) => {

		return new Promise(resolve => {console.log("piggy"); resolve(i+1)})
	}


	runAsyncTasks = () => {

		return this.asyncTask(0)
			   .then(res1 => {return asyncTask(res1);  })
			   .then(res2 => {return asyncTask(res2);  })
			   .then(res3 => {return "Everything done"})

	}


		render(){


			this.runAsyncTasks();

			return(

				<div className="tiles">
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
					<Tile/>
				</div>
				)

		}











}

export default Tiles;