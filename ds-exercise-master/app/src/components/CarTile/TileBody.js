import React from 'react';
import ClaimButton from './ClaimButton';
import LeaseRate from './LeaseRate';
import CarImg from './CarImg';


const TileBody = () => {


	



	return(


			<div className="tilebody">
				<LeaseRate className="leaserate"/>
			  <div className="claimbtncontainer">
				<ClaimButton className="claimbutton"/>
			  </div>
			  <div className="carimg">
			  	<CarImg />
			  </div>
			</div>


		)



}

export default TileBody;