import { clientAxios } from "@/config";
import { loadAbort } from "@/utilities";

export function getUsers() {
  return {
    call: clientAxios.get("/user"),
    controller: loadAbort(),
  };
}
