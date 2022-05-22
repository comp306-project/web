import * as React from 'react';

import Header from './header';
import  Mmap from './map';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
			<Header theme={theme} />
    </ThemeProvider>
  );
}

//<Mmap theme={(prefersDarkMode) ? 'dark' : 'light'}/>