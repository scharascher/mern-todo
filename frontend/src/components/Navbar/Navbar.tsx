import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">Home</Link>&nbsp;
                        <Link to="/todos">Todos</Link>&nbsp;
                        <Link to="/add-todo">Add todo</Link>&nbsp;
                        <Link to="/user-info">User info</Link>
                    </Typography>
                    <Link to="/register">
                        <Button variant="contained">Register</Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="contained">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
