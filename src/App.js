import React, {useState, useEffect} from 'react';

import Header from './header';
import Intro from './intro'

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Button, Box, Typography, TextField, Divider, InputAdornment } from '@mui/material';

function POST(path, data) {
	return fetch(`http://localhost:5000${path}`,
	{
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	  }
	)
}

export default function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	);

	// q1
	const [q1_raceid, q1_set_raceid] = useState(1009);
	const [q1_driverid, q1_set_driverid] = useState(1);
	const [q1_res, q1_set_res] = useState(null);
	// q2
	const [q2_firstdriverid, q2_set_firstdriverid] = useState(1);
	const [q2_seconddriverid, q2_set_seconddriverid] = useState(830);
	const [q2_raceid, q2_set_raceid] = useState(1009);
	const [q2_res, q2_set_res] = useState(null);
	// q3
	const [q3_raceid, q3_set_raceid] = useState(1000);
	const [q3_res, q3_set_res] = useState(null);
	// q4
	const [q4_circuit_ref, q4_set_circuit_ref] = useState('Istanbul Park');
	const [q4_res, q4_set_res] = useState(null);
	// q5
	const [q5_res, q5_set_res] = useState(null);
	// q6

	return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
		<Header theme={theme} />
		<Intro />
		
		<Box>
			<Divider variant='middle'>Query 1</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>

				<TextField
					label="Race id"
					helperText="Please enter"
					type="number"
					value={q1_raceid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q1_set_raceid(e.target.value);}}
				/>

				<TextField
					label="Driver id"
					helperText="Please enter"
					type="number"
					value={q1_driverid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q1_set_driverid(e.target.value);}}
				/>

				<Button variant="outlined" onClick={() => {
					POST('/find_average_laptime_by_race_id_and_driver_id', 
						JSON.stringify({race_id : q1_raceid, driver_id : q1_driverid}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
							q1_set_res(data[0]['AVG(LAP.milliseconds)/1000']);
						});
				}}>find_average_laptime_by_race_id_and_driver_id</Button>
			</Box>
			<Box paddingLeft={2} paddingTop={3}>
				{q1_res !== null && 
					<TextField 
						label='Avg Lap Time'
						InputProps={{
							readOnly: true,
							endAdornment: <InputAdornment position="end">sec</InputAdornment>
						}}
						defaultValue={q1_res}
					/>
				}
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 2</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>

				<TextField
					label="First driver id"
					helperText="Please enter"
					type="number"
					value={q2_firstdriverid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q2_set_firstdriverid(e.target.value);}}
				/>

				<TextField
					label="second_driver_id"
					helperText="Please enter"
					type="number"
					value={q2_seconddriverid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q2_set_seconddriverid(e.target.value);}}
				/>

				<TextField
					label="Race id"
					helperText="Please enter"
					type="number"
					value={q2_raceid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q2_set_raceid(e.target.value);}}
				/>

				<Button variant="outlined" onClick={() => {
					POST('/average_pace_difference_by_race', 
						JSON.stringify({race_id : q2_raceid, first_driver_id : q2_firstdriverid, second_driver_id : q2_seconddriverid}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
							console.log(data);
							q2_set_res(data[0]['AVG(lap1.milliseconds - lap2.milliseconds) / 1000']);
						});
				}}>average_pace_difference_by_race</Button>
			</Box>
			<Box paddingLeft={2} paddingTop={2}>
				{q2_res !== null && 
					<TextField 
						label='Avg Pace Diff'
						InputProps={{
							readOnly: true,
							endAdornment: <InputAdornment position="end">sec</InputAdornment>
						}}
						defaultValue={q2_res}
					/>
				}
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 3</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>

				<TextField
					label="Race id"
					helperText="Please enter"
					type="number"
					value={q3_raceid}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q3_set_raceid(e.target.value);}}
				/>

				<Button variant="outlined" onClick={() => {
					POST('/average_race_results_by_pitstop_single_race', 
						JSON.stringify({race_id : q3_raceid}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>average_race_results_by_pitstop_single_race</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 4</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>

				<TextField
					label="Circuit"
					helperText="Please enter"
					value={q4_circuit_ref}
					sx={{paddingRight: '7px'}}
					onChange={(e) => {q4_set_circuit_ref(e.target.value);}}
				/>

				
				<Button variant="outlined" onClick={() => {
					POST('/average_race_results_by_pitstop_all_races_at_circuit', 
						JSON.stringify({circuit_ref : q4_circuit_ref}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>average_race_results_by_pitstop_all_races_at_circuit</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 5</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>
				<Button variant="outlined" onClick={() => {
					POST('/find_countries_wins', 
						JSON.stringify({position : 2}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>find_countries_wins</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 6</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>
				<Button variant="outlined" onClick={() => {
					POST('/find_country_drivers', 
						JSON.stringify({nationality : 'British'}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>find_country_drivers</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 7</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>
				<Button variant="outlined" onClick={() => {
					POST('/find_drivers_who_have_been_in_position', 
						JSON.stringify({year : 2014}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>find_drivers_who_have_been_in_position</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 8</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>
				<Button variant="outlined" onClick={() => {
					POST('/average_pitstop_of_drivers', 
						JSON.stringify({race_id : 1002}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>average_pitstop_of_drivers</Button>
			</Box>
		</Box>

		<Box>
			<Divider variant='middle'>Query 9</Divider>
			<Box paddingLeft={2}>
				<Typography
					variant='body1'
					paddingTop={2}
					paddingBottom={3}
					textAlign='center'
				>
					Average lap time of a driver for a given race (in seconds)
				</Typography>
				<Button variant="outlined" onClick={() => {
					POST('/average_position_of_drivers_ascend', 
						JSON.stringify({race_year : 2001}))
						.then((response) => {
							if(response.ok){
								return response.json();
							}
						})
						.then((data) => {
							console.log(data);
							data = JSON.parse(data);
						});
				}}>average_position_of_drivers_ascend</Button>
			</Box>
		</Box>

    </ThemeProvider>
  );
}
