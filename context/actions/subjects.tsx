import client from "@/api/client";
import { DispatchType } from "@/components/typings/page";
import { errorMessage } from "@/utility";
import { toast } from "react-toastify";
export const handleFetchUserSubjects = async (dispatch: DispatchType) => {
  try {
    const res = (await client.get(`/learner/subjects`)).data;
    dispatch({
      type: "FETCHED_DATA",
      payload: res.data,
    });
  } catch (error) {
    console.log("error fetching user subjects", error);
    toast.error(errorMessage(error));
  }
};
export const handleFetchAvaliableSubjects = async (dispatch: DispatchType) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const res = (await client.get("/learner/available_subjects")).data;

    dispatch({
      type: "FETCHED_DATA",
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: "ERROR",
    });
    console.log("error fetching all available subjects", error.response);
    toast.error(errorMessage(error));
  }
};
export const handleAddUserSubject = async (
  dispatch: DispatchType,
  data: string[]
) => {
  try {
    const res = (await client.post(`/learner/subjects/add`, data)).data;

    handleFetchUserSubjects(dispatch);
    return true;
  } catch (error) {
    console.log("error adding subject", error);
    toast.error(errorMessage(error));
    return false;
  }
};
