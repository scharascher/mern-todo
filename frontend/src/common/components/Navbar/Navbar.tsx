import React from 'react';
import 'common/components/Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LogoutButton from 'common/containers/LogoutButton/LogoutButton';
import { connect } from 'react-redux';
import { RootState } from 'app/rootReducer';

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

interface Props {
    isAuthenticated: boolean | undefined;
}

const Navbar: React.FC<Props> = ({ isAuthenticated }) => {
    const classes = useStyles();

    const getViewByIsAuthenticated = (): React.ReactNode => {
        switch (isAuthenticated) {
            case true:
                return (
                    <>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/todos">Todos</Link>&nbsp;
                            <Link to="/add-todo">Add todo</Link>&nbsp;
                        </Typography>
                        <LogoutButton />
                    </>
                );
            case false:
                return (
                    <>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">Home</Link>&nbsp;
                        </Typography>
                        <Link to="/register">
                            <Button variant="contained">Register</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="contained">Login</Button>
                        </Link>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>{getViewByIsAuthenticated()}</Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state: RootState): Props => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
