import client from "@/api/client";
// import { DispatchType } from "@/components/typings/page";
import { DispatchType } from "@/components/typings/page";
import { errorMessage } from "@/utility";
import { toast } from "react-toastify";

export const HandleSignInUser = async (dispatch: DispatchType, data: any) => {
  // dispatch(LOADING());
  try {
    const res = (await client.post("/user-auth/login", data)).data;

    localStorage.setItem("token", res.data?.auth_token);
    localStorage.setItem("userData", JSON.stringify(res.data?.user));
    client.defaults.headers.post["Content-Type"] = "application/json";
    client.defaults.headers.Authorization = `Bearer ${res.data?.auth_token}`;
    console.log("signin", res.data.user);
    dispatch({
      type: "SUCCESS",
      payload: {
        token: res.token,
        user: res.data?.user,
      },
    });

    return true;
  } catch (error: any) {
    console.log("error", errorMessage(error));

    dispatch({
      type: "ERROR",
      payload: errorMessage(error),
    });
    toast?.error(errorMessage(error));
    return false;
  }
};
export const SignUpUser = async (
  dispatch: DispatchType,
  data: {
    first_name: "string";
    last_name: "string";
    role: "string";
    password: "string";
    mobile: "string";
    email: "string";
  }
) => {
  try {
    const res = (await client.post("/user-auth/signup", data)).data;
    localStorage.setItem("token", res.data?.auth_token);
    localStorage.setItem("userData", JSON.stringify(res.data?.user));
    client.defaults.headers.post["Content-Type"] = "application/json";
    client.defaults.headers.Authorization = `Bearer ${res.data?.auth_token}`;

    if (res) {
      return {
        status: true,
        data: res.data?.user,
      };
    }
  } catch (error: any) {
    console.log("error signing up user", error?.response || error);
    toast?.error(errorMessage(error));
    return {
      status: false,
      data: error?.response?.data,
    };
  }
};
export const handleVerifyOtp = async (
  dispatch: DispatchType,
  data: {
    token: string;
  }
) => {
  const token = localStorage.getItem("token");
  const user: any = localStorage.getItem("userData");
  try {
    const res: any = (await client.post("/user-auth/verify-token", data)).data;
    await getCurrentUser(dispatch);

    return {
      status: true,
      data: res.data,
    };
  } catch (error: any) {
    toast?.error(errorMessage(error));
    console.log("error verifying token", error.response);
    return {
      status: false,
      data: error?.response?.data,
    };
  }
};
export const getCurrentUser = async (dispatch: DispatchType) => {
  try {
    const token = localStorage.getItem("token");
    // const user: any = localStorage.getItem("userData");
    if (token) {
      client.defaults.headers.post["Content-Type"] = "application/json";
      client.defaults.headers.Authorization = `Bearer ${token}`;
      const res = (await client.get("/learner")).data;

      dispatch({
        type: "SUCCESS",
        payload: {
          token,
          user: res.data,
        },
      });
    }
    // const res = (await client.get("")).data;
    // dispatch({
    //   type: "SUCCESS",
    //   payload: res.data,
    // });
  } catch (error: any) {
    dispatch({
      type: "LOGGED_OUT",
    });
    console.log("error fetching current user", error.response || error);
  }
};
export const signoutHandler = async (dispatch: any) => {
  try {
    localStorage.clear();

    dispatch({
      type: "LOGGED_OUT",
    });
    return true;
  } catch (error) {
    console.log("Storage already removed");
    return false;
  }
};
