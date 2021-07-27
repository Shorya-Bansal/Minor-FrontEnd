import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "../css/datePicker.css";


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


const getRemanningDays = () => {
    var date = new Date();
    var lastDate = new Date(date.getFullYear(), date.getMonth() + 11);
    return lastDate;
}

function DatePicker({ selectedDate, handleDateChange }) {

    const maxDate = getRemanningDays();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <div className="date-picker-main">
                <ThemeProvider theme={theme}>
                    <KeyboardDatePicker
                        minDate={new Date()}
                        maxDate={maxDate}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Select Date"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </ThemeProvider>

            </div>
        </MuiPickersUtilsProvider >
    );
}

export default DatePicker;
