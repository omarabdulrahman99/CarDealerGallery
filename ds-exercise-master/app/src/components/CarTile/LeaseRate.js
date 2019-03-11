import React from 'react';



const LeaseRate = () => {

	//maybe from props in future
	const leaseamount = "$158";
	const leasemonth = " /mo";
	const lease = "LEASE";

	return (


		<div className="leasecenter">
		
				<div className="leasecard">
					<div className="leasetext1">{leaseamount}</div>
					<div className="leasetext2">{leasemonth}</div>
				</div>

				<div className="leasetext3">{lease}</div>

		</div>

		)


}

export default LeaseRate;