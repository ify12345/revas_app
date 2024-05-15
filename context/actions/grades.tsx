import client from "@/api/client";
import { DispatchType } from "@/components/typings/page";
import { errorMessage } from "@/utility";
import { toast } from "react-toastify";
import { getCurrentUser } from "./auth";

export const handleFetchAvaliableGrades = async (dispatch: DispatchType) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const res = (await client.get("/learner/available_grades")).data;
    console.log("received", res.data);

    dispatch({
      type: "FETCHED_DATA",
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: "ERROR",
    });
    console.log("error fetching all available grades", error.response);
    toast.error(errorMessage(error));
  }
};
export const handleFetchUserGrade = async (dispatch: DispatchType) => {
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
export const handleAddUserGrade = async (
  dispatch: DispatchType,
  data: {
    grade: number;
  }
) => {
  try {
    const res = (await client.post(`/learner/select_grade`, data)).data;
    await getCurrentUser(dispatch);
    // handleFetchUserGrade(dispatch);
    return true;
  } catch (error) {
    console.log("error adding subject", error);
    toast.error(errorMessage(error));
    return false;
  }
};
