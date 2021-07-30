import apiClient from "./client";

const auditoriumEndPoint = "/labs/auditorium";
const getAuditoriumBookingEndPoint = "/labs/getAuditoriumBooking";
const enggPhysicsLabEndPoint = "/labs/EnggPhysicsLab";
const getEnggPhysicsLabBookingEndPoint = "/labs/getPhysicsLabBooking";

const getAllAuditoriumBooking = (DATA) => {
    return apiClient.get(getAuditoriumBookingEndPoint, { DATA });
}
const getAllEnggPhysicsLabBooking = (DATA) => {
    return apiClient.get(getEnggPhysicsLabBookingEndPoint, { DATA });
}

const auditoriumBooking = (DATA) => {
    return apiClient.post(auditoriumEndPoint, DATA);
}
const enggPhysicsLabBooking = (DATA) => {
    return apiClient.post(enggPhysicsLabEndPoint, DATA);
}

export default {
    auditoriumBooking,
    getAllAuditoriumBooking,
    getAllEnggPhysicsLabBooking,
    enggPhysicsLabBooking
}