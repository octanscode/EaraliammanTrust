import { useSelector } from "react-redux";

export const GetCurrActiveNavItem = () =>
  useSelector((state) => state.CurrActiveNavItem.activeNavIndex);
