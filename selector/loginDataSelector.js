import { useSelector } from "react-redux";

export const GetIsAdminLoggedIn = () =>
  useSelector((state) => state.LoginData.isAdminLoggedIn);
