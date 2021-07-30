import apiClient from "./client";

const auditoriumEndPoint = "/labs/auditorium";
const getAuditoriumBookingEndPoint = "/labs/getAuditoriumBooking";
const getEnggPhysicsLabBookingEndPoint = "/labs/getPhysicsLabBooking";
const getAllCompProgrammingLabBookingEndPoint = "/testlabs/getAllCompProgrammingLabBooking";
const getAllDataCommLabBookingEndPoint = "/testlabs/getAllDataCommLabBooking";
const getAllHardWareLabBookingEndPoint = "/testlabs/getAllHardWareLabBooking";
const getAllDigitalLogicLabBookingEndPoint = "/testlabs/getAllDigitalLogicLabBooking";

const enggPhysicsLabEndPoint = "/labs/EnggPhysicsLab";
const compProgrammingLabEndPoint = "/testlabs/compProgammingLab";
const dataCommLabEndPoint = "/testlabs/dataCommLab";
const hardWareLabEndPoint = "/testlabs/hardWareLab";
const digitalLogicLabEndPoint = "/testlabs/digitalLogicLab";

/* ----------------- GET METHOD ROUTES-------------- */

const getAllAuditoriumBooking = (DATA) => {
    return apiClient.get(getAuditoriumBookingEndPoint, { DATA });
}
const getAllEnggPhysicsLabBooking = (DATA) => {
    return apiClient.get(getEnggPhysicsLabBookingEndPoint, { DATA });
}
const getAllCompProgrammingLabBooking = (DATA) => {
    return apiClient.get(getAllCompProgrammingLabBookingEndPoint, { DATA });
}
const getAllDataCommLabBooking = (DATA) => {
    return apiClient.get(getAllDataCommLabBookingEndPoint, { DATA });
}
const getAllHardWareLabBooking = (DATA) => {
    return apiClient.get(getAllHardWareLabBookingEndPoint, { DATA });
}
const getAllDigitalLogicLabBooking = (DATA) => {
    return apiClient.get(getAllDigitalLogicLabBookingEndPoint, { DATA });
}


/* ----------------- POST METHOD ROUTES-------------- */

const auditoriumBooking = (DATA) => {
    return apiClient.post(auditoriumEndPoint, DATA);
}
const enggPhysicsLabBooking = (DATA) => {
    return apiClient.post(enggPhysicsLabEndPoint, DATA);
}
const compProgrammingLabBooking = (DATA) => {
    return apiClient.post(compProgrammingLabEndPoint, DATA);
}
const dataCommLabBooking = (DATA) => {
    return apiClient.post(dataCommLabEndPoint, DATA);
}
const hardWareLabBooking = (DATA) => {
    return apiClient.post(hardWareLabEndPoint, DATA);
}
const digitalLogicLabBooking = (DATA) => {
    return apiClient.post(digitalLogicLabEndPoint, DATA);
}

export default {
    getAllAuditoriumBooking,
    getAllEnggPhysicsLabBooking,
    getAllCompProgrammingLabBooking,
    getAllDataCommLabBooking,
    getAllHardWareLabBooking,
    getAllDigitalLogicLabBooking,

    auditoriumBooking,
    enggPhysicsLabBooking,
    compProgrammingLabBooking,
    dataCommLabBooking,
    hardWareLabBooking,
    digitalLogicLabBooking
}