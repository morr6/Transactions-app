import { TOOGLE_API_LOADING, apiLoadingType } from "./Types";

export const toogleApiLoading = (): apiLoadingType => ({
  type: TOOGLE_API_LOADING,
});
