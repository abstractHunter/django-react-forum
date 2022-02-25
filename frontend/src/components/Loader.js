import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';


function Loader() {
  	return (
		<div className='loader'>
			<LinearProgress />
			{/* <h4>Trying to connect to server, please reload the page if this lasts for a while</h4> */}
		</div>
	);
}

export default Loader
