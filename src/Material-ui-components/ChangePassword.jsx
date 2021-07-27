import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";

import api from "../api/api"
import AuthContext from "../auth/context";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import "react-toastify/dist/ReactToastify.css"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0d6efd",
        },
        secondary: {
            main: "#343a40",
        },
    },
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);



function ChangePassword() {

    const [open, setOpen] = React.useState(false);

    const PasswordSchema = () => {
        return Yup.object().shape({
            CurrentPassword: Yup.string().required().min(6).max(20),
            NewPassword: Yup.string().required().min(6).max(20),
            ConfirmPassword: Yup.string().oneOf(
                [Yup.ref("NewPassword"), null],
                "Passwords must match"
            )
        });
    };
    const authContext = useContext(AuthContext);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handlePassword = async (values) => {
        try {
            handleClose();
            const User = { email: authContext.User.Email, values: values };
            const response = await api.ChangePassword(User);
            if (response.ok) {
                toast.success(response.data, {
                    autoClose: 3000
                });
            } else {
                toast.error(response.data, {
                    autoClose: 3000
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <ToastContainer />
                <button className="btn btn-outline-primary mt-3" style={{ width: "90%" }} onClick={handleClickOpen}>Change Password</button>
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}
                        style={{ width: window.innerWidth > 767 ? "500px" : "300px" }}>
                        Change Password
                    </DialogTitle>
                    <Formik
                        initialValues={{
                            CurrentPassword: "",
                            NewPassword: "",
                            ConfirmPassword: ""
                        }}
                        onSubmit={(values) => handlePassword(values)}
                        validationSchema={PasswordSchema}
                    >
                        {({
                            handleChange,
                            setFieldTouched,
                            handleSubmit,
                            errors,
                            touched,
                            values,
                            dirty,
                            isValid
                        }) => (
                            <>
                                <DialogContent dividers>
                                    <div>
                                        <Typography>
                                            Current Password
                                        </Typography>
                                        <TextField
                                            id="CurrentPassword"
                                            type="password"
                                            fullWidth
                                            onBlur={() => setFieldTouched("CurrentPassword")}
                                            onChange={handleChange("CurrentPassword")}
                                        />
                                        {touched.CurrentPassword === true ? (
                                            <span style={{ color: "red" }}>{errors.CurrentPassword}</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Typography style={{ marginTop: "1.5rem" }}>
                                            New Password
                                        </Typography>
                                        <TextField
                                            id="NewPassword"
                                            type="password"
                                            fullWidth
                                            onBlur={() => setFieldTouched("NewPassword")}
                                            onChange={handleChange("NewPassword")}
                                        />
                                        {touched.NewPassword === true ? (
                                            <span style={{ color: "red" }}>{errors.NewPassword}</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Typography style={{ marginTop: "1.5rem" }}>
                                            Confirm Password
                                        </Typography>
                                        <TextField
                                            id="ConfirmPassword"
                                            type="password"
                                            fullWidth
                                            onBlur={() => setFieldTouched("ConfirmPassword")}
                                            onChange={handleChange("ConfirmPassword")}
                                            style={{ marginBottom: "1rem" }}
                                        />
                                        {touched.ConfirmPassword === true ? (
                                            <span style={{ color: "red" }}>{errors.ConfirmPassword}</span>
                                        ) : null}
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={!(dirty && isValid)}>
                                        Save changes
                                    </Button>
                                </DialogActions>
                            </>
                        )}
                    </Formik>
                </Dialog>
            </ThemeProvider>
        </div>
    );
}

export default ChangePassword;