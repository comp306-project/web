import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {Box, Link} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}
