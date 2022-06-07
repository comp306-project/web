import { Button, Box, Typography, TextField, Divider } from '@mui/material';

function Member({name}){
	return (
		<Typography
			variant='body1'
			textAlign='center'
		>
			{name}
		</Typography>
	);
}

export default function Intro(){
	return (
		<Box paddingBottom={2}>
			<Box
					paddingBottom={4}
			>
				<Typography
					variant='h3'
					textAlign='center'
					gutterBottom
				>
					Comp306 Project
				</Typography>
				<Typography
					variant='h6'
					textAlign='center'
				>
					Members: 
				</Typography>
				<Member name= 'Altay Atalay'/>
				<Member name= 'Deniz'/>
				<Member name= 'Oya'/>
				<Member name= 'Sema'/>
				<Member name= 'Ata'/>
		</Box>
		<Box paddingLeft={3}>
				<Box paddingBottom={1}>
						<Typography
								variant='h5'
						>
							Description
						</Typography>
						<Typography
								variant='body1'
						>
							Formula 1 queries
						</Typography>
				</Box>
				<Box>
						<Typography
								variant='h5'
						>
							Technologies
						</Typography>
						<Typography
								variant='body1'
						>
							Frontend: ReactJS
						</Typography>
						<Typography
								variant='body1'
						>
							DBMS: mysql  
						</Typography>
						<Typography
								variant='body1'
						>
							Backend: Python Flask  
						</Typography>
				</Box>
			</Box>
		</Box>
	);
}