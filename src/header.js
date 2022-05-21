
import { Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Header = ({theme}) => {
	return (
		<Box display='flex' justifyContent='flex-end' paddingRight='10px' paddingTop='10px'>
			<Link href='https://github.com/comp306-project'  target="_blank" rel="noreferrer" underline='none'>
				<Box
					display= 'inline-flex'
					flexWrap= 'wrap'
					alignItems= 'center'
					color= {theme.palette.text.primary}
					fontWeight= 'Medium'
					sx={[
						{
							'&:hover': {
								color: theme.palette.text.secondary,
							},
						},
					]}
				>
					<GitHubIcon fontSize='small'/>
					<Box margin='5px' fontSize='18px'>Github</Box>
				</Box>
			</Link>
		</Box>
	);
}