import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        React & Material Ui Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default Navbar;