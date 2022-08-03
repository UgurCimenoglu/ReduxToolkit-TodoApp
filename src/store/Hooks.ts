import { AppDispatch, RootState } from "./ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
