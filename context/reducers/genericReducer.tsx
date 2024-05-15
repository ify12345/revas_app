import { actionProps, genericStateType } from "../../components/typings/page";

export default function genericReducer(
  state: genericStateType,
  { payload, type }: actionProps
) {
  switch (type) {
    case "LOADING":
      return { ...state, error: null, loading: true };
    case "FETCHED_DATA":
      return {
        error: null,
        loading: false,
        data: payload,
      };

    case "ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export const defaultData = {
  error: null,
  data: [],
  loading: false,
};
