import { useSelector } from "react-redux";

export const GetCurrActiveNavItem = () => {
  console.log(
    "Inside GetCurrActiveNavItem Selector and Use Selector is ",
    useSelector
  );
  useSelector((state) => state.CurrActiveNavItem.activeNavIndex);
};
