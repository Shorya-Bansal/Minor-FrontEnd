import apiClient from "./client";

const loginEndpoint = "/auth/login";
const registerEndPoint = "/auth/register";
const changePasswordEndPoint = "/auth/changePassword";
const deleteUserEndPoint = "/auth/deleteUser";
const profileEditEndPoint = "/auth/myAccount";
const allUserEndPoint = "/auth/get-users-list";
const editDetailsEndPoint = "/auth/editDetails";
const contactUsEndPoint = "/contact/register/contactTicket";
const contactTicketDetailsEndPoint = "/contact/contact-ticket-all";
const replyTicketEndPoint = "/contact/contact-ticket-all/reply";

const Login = (DATA) => {
  return apiClient.post(loginEndpoint, DATA);
};
const Register = (DATA) => {
  return apiClient.post(registerEndPoint, DATA);
};
const ChangePassword = (DATA) => {
  return apiClient.post(changePasswordEndPoint, DATA)
}
const DeleteAccount = (DATA) => {
  return apiClient.post(deleteUserEndPoint, DATA)
}
const AccountProfile = (DATA) => {
  return apiClient.post(profileEditEndPoint, DATA);
}
const AllUserDetails = (DATA) => {
  return apiClient.get(allUserEndPoint, DATA);
}
const EditUserDetails = (DATA) => {
  return apiClient.post(editDetailsEndPoint, DATA);
}
const ContactUsDetails = (DATA) => {
  return apiClient.post(contactUsEndPoint, DATA);
}
const ContactTicketDetails = (DATA) => {
  return apiClient.get(contactTicketDetailsEndPoint, DATA);
}
const ReplyTicket = (DATA) => {
  return apiClient.post(replyTicketEndPoint, DATA);
}

// eslint-disable-next-line
export default {
  Login,
  Register,
  ChangePassword,
  DeleteAccount,
  AccountProfile,
  AllUserDetails,
  EditUserDetails,
  ContactUsDetails,
  ContactTicketDetails,
  ReplyTicket
};
