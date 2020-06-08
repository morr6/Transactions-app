import { deleteModeType, TOOGLE_DELETE_MODE } from "./Types";

export const toogleDeleteMode = (): deleteModeType => ({
  type: TOOGLE_DELETE_MODE,
});
