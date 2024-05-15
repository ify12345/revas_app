"use client";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import authReducer, { defaultAuth } from "./reducers/authReducer";
import { GlobalContextProps } from "../components/typings/page";
import genericReducer, { defaultData } from "./reducers/genericReducer";
import { handleFetchAvaliableSubjects } from "./actions/subjects";
import { handleFetchAvaliableGrades } from "./actions/grades";
import { getCurrentUser } from "./actions/auth";
import client from "@/api/client";
import axios from "axios";

export const GLobalContext = createContext<GlobalContextProps>({
  authState: defaultAuth,
  authDispatch: () => {},
  subjectsDispatch: () => {},
  subjectsState: defaultData,
  avaliableSubjectDispatch: () => {},
  avaliableSubjectsState: defaultData,
  avaliableGradesDispatch: () => {},
  avaliableGradesState: defaultData,
  countryCodeState: defaultData,
  countryCodeDispatch: () => {},
});
GLobalContext.Provider;

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [authState, authDispatch] = useReducer(authReducer, defaultAuth);
  const [subjectsState, subjectsDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [avaliableSubjectsState, avaliableSubjectDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [countryCodeState, countryCodeDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  const [avaliableGradesState, avaliableGradesDispatch] = useReducer(
    genericReducer,
    defaultData
  );
  //   const [servicesState, servicesDispatch] = useReducer(
  //     genericReducer,
  //     defaultData
  //   );
  // up is an example of additional context
  const loadData = async () => {
   
    await getCurrentUser(authDispatch);

    const res = (await axios.get("https://restcountries.com/v2/all")).data;
    countryCodeDispatch({
      type: "FETCHED_DATA",
      payload: res,
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <GLobalContext.Provider
      value={{
        authState,
        authDispatch,
        subjectsDispatch,
        subjectsState,
        avaliableSubjectDispatch,
        avaliableSubjectsState,
        avaliableGradesDispatch,
        avaliableGradesState,
        countryCodeState,
        countryCodeDispatch,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};

export default GlobalProvider;
