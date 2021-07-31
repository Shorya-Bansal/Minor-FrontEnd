import apiClient from "./client";

const getAuditoriumBookingEndPoint = "/labs/getAuditoriumBooking";
const getEnggPhysicsLabBookingEndPoint = "/labs/getPhysicsLabBooking";
const getAllCompProgrammingLabBookingEndPoint = "/testlabs/getAllCompProgrammingLabBooking";
const getAllDataCommLabBookingEndPoint = "/testlabs/getAllDataCommLabBooking";
const getAllHardWareLabBookingEndPoint = "/testlabs/getAllHardWareLabBooking";
const getAllDigitalLogicLabBookingEndPoint = "/testlabs/getAllDigitalLogicLabBooking";
const getAllVLSILabBookingEndPoint = "/testlabs/getAllVLSILabBooking";
const getAllCNTLabBookingEndPoint = "/testlabs/getAllCNTLabBooking";
const getAllSCESLabBookingEndPoint = "/testlabs/getAllSCESLabBooking";
const getAllInfoSecurityLabBookingEndPoint = "/testlabs/getAllInfoSecurityLabBooking";
const getAllAdvanceNetLabBookingEndPoint = "/testlabs/getAllAdvanceNetLabBooking";
const getAllWirelessSensLabBookingEndPoint = "/testlabs/getAllWirelessSensLabBooking";
const getAllMathModelLabBookingEndPoint = "/testlabs/getAllMathModelLabBooking";
const getAllGenericCompLabBookingEndPoint = "/testlabs/getAllGenericCompLabBooking";
const getAllAppliedChemLabBookingEndPoint = "/testlabs/getAllAppliedChemLabBooking";
const getAllSponsProjectLabBookingEndPoint = "/testlabs/getAllSponsProjectLabBooking";
const getAllMedicalInfoLabBookingEndPoint = "/testlabs/getAllMedicalInfoLabBooking";
const getAllEBusinessLabBookingEndPoint = "/testlabs/getAllEBusinessLabBooking";
const getAllEnvScienceLabBookingEndPoint = "/testlabs/getAllEnvScienceLabBooking";
const getAllBEEALabBookingEndPoint = "/testlabs/getAllBEEALabBooking";

const auditoriumEndPoint = "/labs/auditorium";
const enggPhysicsLabEndPoint = "/labs/EnggPhysicsLab";
const CompProgrammingLabEndPoint = "/testlabs/CompProgrammingLab";
const dataCommLabEndPoint = "/testlabs/dataCommLab";
const hardWareLabEndPoint = "/testlabs/hardWareLab";
const digitalLogicLabEndPoint = "/testlabs/digitalLogicLab";
const VLSILabEndPoint = "/testlabs/VLSILab";
const CNTLabEndPoint = "/testlabs/CNTLab";
const SCESLabEndPoint = "/testlabs/SCESLab";
const InfoSecurityLabEndPoint = "/testlabs/InfoSecurityLab";
const AdvanceNetLabEndPoint = "/testlabs/AdvanceNetLab";
const WirelessSensLabEndPoint = "/testlabs/WirelessSensLab";
const MathModelLabEndPoint = "/testlabs/MathModelLab";
const GenericCompLabEndPoint = "/testlabs/GenericCompLab";
const AppliedChemLabEndPoint = "/testlabs/AppliedChemLab";
const SponsProjectLabEndPoint = "/testlabs/SponsProjectLab";
const MedicalInfoLabEndPoint = "/testlabs/MedicalInfoLab";
const EBusinessLabEndPoint = "/testlabs/EBusinessLab";
const EnvScienceLabEndPoint = "/testlabs/EnvScienceLab";
const BEEALabEndPoint = "/testlabs/BEEALab";

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
const getAllVLSILabBooking = (DATA) => {
    return apiClient.get(getAllVLSILabBookingEndPoint, { DATA });
}
const getAllCNTLabBooking = (DATA) => {
    return apiClient.get(getAllCNTLabBookingEndPoint, { DATA });
}
const getAllSCESLabBooking = (DATA) => {
    return apiClient.get(getAllSCESLabBookingEndPoint, { DATA });
}
const getAllInfoSecurityLabBooking = (DATA) => {
    return apiClient.get(getAllInfoSecurityLabBookingEndPoint, { DATA });
}
const getAllAdvanceNetLabBooking = (DATA) => {
    return apiClient.get(getAllAdvanceNetLabBookingEndPoint, { DATA });
}
const getAllWirelessSensLabBooking = (DATA) => {
    return apiClient.get(getAllWirelessSensLabBookingEndPoint, { DATA });
}
const getAllMathModelLabBooking = (DATA) => {
    return apiClient.get(getAllMathModelLabBookingEndPoint, { DATA });
}
const getAllGenericCompLabBooking = (DATA) => {
    return apiClient.get(getAllGenericCompLabBookingEndPoint, { DATA });
}
const getAllAppliedChemLabBooking = (DATA) => {
    return apiClient.get(getAllAppliedChemLabBookingEndPoint, { DATA });
}
const getAllSponsProjectLabBooking = (DATA) => {
    return apiClient.get(getAllSponsProjectLabBookingEndPoint, { DATA });
}
const getAllMedicalInfoLabBooking = (DATA) => {
    return apiClient.get(getAllMedicalInfoLabBookingEndPoint, { DATA });
}
const getAllEBusinessLabBooking = (DATA) => {
    return apiClient.get(getAllEBusinessLabBookingEndPoint, { DATA });
}
const getAllEnvScienceLabBooking = (DATA) => {
    return apiClient.get(getAllEnvScienceLabBookingEndPoint, { DATA });
}
const getAllBEEALabBooking = (DATA) => {
    return apiClient.get(getAllBEEALabBookingEndPoint, { DATA });
}


/* ----------------- POST METHOD ROUTES-------------- */

const auditoriumBooking = (DATA) => {
    return apiClient.post(auditoriumEndPoint, DATA);
}
const enggPhysicsLabBooking = (DATA) => {
    return apiClient.post(enggPhysicsLabEndPoint, DATA);
}
const CompProgrammingLabBooking = (DATA) => {
    return apiClient.post(CompProgrammingLabEndPoint, DATA);
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
const VLSILabBooking = (DATA) => {
    return apiClient.post(VLSILabEndPoint, DATA);
}
const CNTLabBooking = (DATA) => {
    return apiClient.post(CNTLabEndPoint, DATA);
}
const SCESLabBooking = (DATA) => {
    return apiClient.post(SCESLabEndPoint, DATA);
}
const InfoSecurityLabBooking = (DATA) => {
    return apiClient.post(InfoSecurityLabEndPoint, DATA);
}
const AdvanceNetLabBooking = (DATA) => {
    return apiClient.post(AdvanceNetLabEndPoint, DATA);
}
const WirelessSensLabBooking = (DATA) => {
    return apiClient.post(WirelessSensLabEndPoint, DATA);
}
const MathModelLabBooking = (DATA) => {
    return apiClient.post(MathModelLabEndPoint, DATA);
}
const GenericCompLabBooking = (DATA) => {
    return apiClient.post(GenericCompLabEndPoint, DATA);
}
const AppliedChemLabBooking = (DATA) => {
    return apiClient.post(AppliedChemLabEndPoint, DATA);
}
const SponsProjectLabBooking = (DATA) => {
    return apiClient.post(SponsProjectLabEndPoint, DATA);
}
const MedicalInfoLabBooking = (DATA) => {
    return apiClient.post(MedicalInfoLabEndPoint, DATA);
}
const EBusinessLabBooking = (DATA) => {
    return apiClient.post(EBusinessLabEndPoint, DATA);
}
const EnvScienceLabBooking = (DATA) => {
    return apiClient.post(EnvScienceLabEndPoint, DATA);
}
const BEEALabBooking = (DATA) => {
    return apiClient.post(BEEALabEndPoint, DATA);
}

export default {
    getAllAuditoriumBooking,
    getAllEnggPhysicsLabBooking,
    getAllCompProgrammingLabBooking,
    getAllDataCommLabBooking,
    getAllHardWareLabBooking,
    getAllDigitalLogicLabBooking,
    getAllVLSILabBooking,
    getAllCNTLabBooking,
    getAllSCESLabBooking,
    getAllInfoSecurityLabBooking,
    getAllAdvanceNetLabBooking,
    getAllWirelessSensLabBooking,
    getAllMathModelLabBooking,
    getAllGenericCompLabBooking,
    getAllAppliedChemLabBooking,
    getAllSponsProjectLabBooking,
    getAllMedicalInfoLabBooking,
    getAllEBusinessLabBooking,
    getAllEnvScienceLabBooking,
    getAllBEEALabBooking,

    auditoriumBooking,
    enggPhysicsLabBooking,
    CompProgrammingLabBooking,
    dataCommLabBooking,
    hardWareLabBooking,
    digitalLogicLabBooking,
    VLSILabBooking,
    CNTLabBooking,
    SCESLabBooking,
    InfoSecurityLabBooking,
    AdvanceNetLabBooking,
    WirelessSensLabBooking,
    MathModelLabBooking,
    GenericCompLabBooking,
    AppliedChemLabBooking,
    SponsProjectLabBooking,
    MedicalInfoLabBooking,
    EBusinessLabBooking,
    EnvScienceLabBooking,
    BEEALabBooking
}