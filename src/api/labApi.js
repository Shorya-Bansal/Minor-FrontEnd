import apiClient from "./client";

const auditoriumEndPoint = "/labs/auditorium";
const allBookingEndPoint = "/labs/getAuditoriumBooking";

const getAllAuditoriumBooking = (DATA) => {
    return apiClient.get(allBookingEndPoint, { DATA });
}
const auditoriumBooking = (DATA) => {
    return apiClient.post(auditoriumEndPoint, DATA);
}

export default {
    auditoriumBooking,
    getAllAuditoriumBooking
}