import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from "../MainPage.jfif"


const colorTheme = createMuiTheme({
  palette: {
    primary: {main: '#d50000'},
    secondary: {main: '#f44336'},
  },
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundImage:`url(${Image})`,
    height:500,
    width:1400
  },
  title: {
    flexGrow: 1,
  },
  container:{
      
  }
}));

const MainPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <MuiThemeProvider theme={colorTheme}>
            <Container>
                
            </Container>
          </MuiThemeProvider>
        </div>
    )
}

export default MainPage