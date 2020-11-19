import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Home(){
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} 
                color="inherit" aria-label="menu">
                    <HiddenMenu />
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                Pets
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
            <h2>Home Page</h2>
            <Incrementer />
        </div>)
}

function HiddenMenu(){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return <div>
            <MenuIcon onClick={handleClick}/>
            <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
        </div>
}

function Incrementer(){
    const [counter, changeValue] = useState(1);

    function plusCount(){
        changeValue(counter+1)
    }

return <div><h4>{counter}</h4>
        <Button onClick={plusCount} variant="contained" color="primary">
        Increment++
        </Button>
    </div>
}

export default Home