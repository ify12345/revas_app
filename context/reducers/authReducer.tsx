import { actionProps, authStateType } from "../../components/typings/page";
import { USERDATA } from "../../components/typings/page";
export default function authReducer(
  state: authStateType,
  { type, payload }: actionProps
): authStateType {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, error: null };

    case "ERROR":
      return { ...state, loading: false, error: payload };
    case "SUCCESS":
      return { ...state, loading: false, data: payload, loggedIn: true };
    case "SIGNEDUP":
      return { ...state, loading: false, data: payload, loggedIn: false };
    case "LOGGED_OUT":
      return defaultAuth;

    default:
      return state;
  }
}

export const defaultAuth: authStateType = {
  loggedIn: false,
  data: null,
  error: null,

  loading: false,
};
