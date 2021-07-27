import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import AuthContext from "../auth/context";

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

export default function NavbarAccount(user) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const authContext = useContext(AuthContext);

    const customStyle = {
        main_button: {
            height: "70px",
            padding: "0px 20px",
            color: "black",
            top: "0%"
        },
        dropdown_content: {
            width: authContext.Width.sideWidth < "80%" ? "215px" : "100%",
            fontFamily: "Lato"
        },
        dropdown_icon: { marginRight: "0.5rem" },
        dropdown_link: {
            textDecoration: "none",
            color: "black"
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("image");
        authContext.SetUser(null);
        window.location = "/login";
    };

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
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={customStyle.main_button}
                >
                    <img
                        src={localStorage.getItem("image")}
                        alt="profile"
                        className="profile-image" />
                    {authContext.Width.sideWidth < "80%" ? user.value.Name : null}
                </Button>
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
                                        <InputLabel style={{ color: "black", padding: "0.5rem 1rem" }}>Welcome!</InputLabel>

                                        <Link to="/myAccount"
                                            style={customStyle.dropdown_link}>
                                            <MenuItem style={customStyle.dropdown_content} >
                                                <AccountCircleIcon style={customStyle.dropdown_icon} />My Account
                                            </MenuItem>
                                        </Link>
                                        <Link to="/settings"
                                            style={customStyle.dropdown_link}  >
                                            <MenuItem style={customStyle.dropdown_content} >
                                                <SettingsIcon style={customStyle.dropdown_icon} />Settings
                                            </MenuItem>
                                        </Link>
                                        <Link to="/contactUs"
                                            style={customStyle.dropdown_link}>
                                            <MenuItem style={customStyle.dropdown_content} >
                                                <HelpIcon style={customStyle.dropdown_icon} />Contact Us
                                            </MenuItem>
                                        </Link>
                                        <MenuItem style={customStyle.dropdown_content} onClick={handleLogout}>
                                            <ExitToAppIcon style={customStyle.dropdown_icon} /> Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div >
    );
}
