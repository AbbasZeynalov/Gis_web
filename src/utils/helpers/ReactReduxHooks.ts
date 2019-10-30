import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router";

// do it in such way to be able mock it in test
export const useCustomSelector = (state: any) => useSelector(state) as any;
export const useCustomDispatch = () => useDispatch() as any;
export const useCustomHistory = () => useHistory() as any;
