import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from "react-redux"
import {getSearchResults} from  "../Redux/Zomato Redux/action"
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination'
import DataContainer from "./DataContainer"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const colorTheme = createMuiTheme({
    palette: {
      primary: {main: '#d50000'},
      secondary: {main: '#f44336'},
    },
  });
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          display: 'none',
          [theme.breakpoints.up('sm')]: {
            display: 'block',
          },
          fontFamily:"sans-serif"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
        buttonRoot:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        }
      }));
      const HomePage = () => {
        const classes = useStyles();
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
            setAge(event.target.value);
        };
        const dispatch = useDispatch()
        const[query,setQuery] = useState("")
        const [active,setActive] = useState(1)
        const handleSearch = () => {
            dispatch(getSearchResults(query))
        }
        const data = useSelector((state)=>state.zomato.data)
        console.log(data)
        const handlePage = (event,value) => {
            setActive(value)
    }
    return (
        <div>
            <div className={classes.root}>
                <MuiThemeProvider theme={colorTheme}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.title} variant="h4" noWrap>
                                Zomato
                            </Typography>
                            <br />
                            <div className={classes.search}>
                                <TextField
                                    style={{width:"500px"}}
                                    value={query} 
                                    onChange={(e)=>setQuery(e.target.value)} 
                                    id="standard-basic" 
                                    variant="outlined"
                                    placeholder="Search..."
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            <SearchIcon onClick={handleSearch} variant="outlined" />
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div>
            <div className={classes.buttonRoot}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Price(low to high)</MenuItem>
                        <MenuItem value={20}>Price(high to low)</MenuItem>
                    </Select>
                </FormControl>
                <Typography>Refine By</Typography>
                <ButtonGroup variant="contained"  aria-label="contained primary button group">
                    <Button>Cost</Button>
                    <Button>Rating</Button>
                </ButtonGroup>
                <List style={{width:"700px"}}>
                {data.map((item)=>{
                    return <DataContainer key={item.id} item={item.restaurant} />
                    })}
                </List>
                <Pagination count={1} page={active} color="secondary" onChange={handlePage} />
            </div>
        </div>
    );
}

export default HomePage