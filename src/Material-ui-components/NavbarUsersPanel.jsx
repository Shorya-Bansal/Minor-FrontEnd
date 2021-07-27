import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import AuthContext from "../auth/context";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
/* 
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
*/
import { makeStyles } from '@material-ui/core/styles';

import "../css/navbar.css"



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));



export default function NavbarUsers(user) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const authContext = useContext(AuthContext);

    const customStyle = {
        main_button: {
            color: "#404040",
            cursor: "pointer",
            top: "0%",
            height: authContext.Width.sideWidth < "80%" ? "55px" : "51px"
        },
        dropdown_content: {
            width: "100%",
            fontFamily: "Lato"
        },
        dropdown_icon: { marginRight: "0.5rem" },
        dropdown_link: {
            textDecoration: "none",
            color: "black"
        }
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <div
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={customStyle.main_button}
                >Users
                </div>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                zIndex: "1"
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                        style={{
                                            width: "100%",
                                            color: "black"
                                        }}>

                                        <Link to="/register"
                                            style={customStyle.dropdown_link}>
                                            <MenuItem style={customStyle.dropdown_content} >
                                                Register User
                                            </MenuItem>
                                        </Link>
                                        <Link to="/allUsers"
                                            style={customStyle.dropdown_link}  >
                                            <MenuItem style={customStyle.dropdown_content} >
                                                User Details
                                            </MenuItem>
                                        </Link>
                                        <Link to="/allContactTickets"
                                            style={customStyle.dropdown_link}  >
                                            <MenuItem style={customStyle.dropdown_content} >
                                                Tickets
                                            </MenuItem>
                                        </Link>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
