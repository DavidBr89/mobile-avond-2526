import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

// Custom typed hook voor de useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom typed hook voor de useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
