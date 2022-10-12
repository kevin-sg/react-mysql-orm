import { useState, useEffect } from "react";
import type { AxiosResponse } from "axios";

import type { AxiosCall } from "@/models";

interface ICallEndpoint {
  (axiosCall: AxiosCall<any>): Promise<AxiosResponse<any, any>>;
}
interface IUseFetchAndLoadCustomHook {
  loading: boolean;
  callEndpoint: ICallEndpoint;
}

function useFetchAndLoad(): IUseFetchAndLoadCustomHook {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  async function callEndpoint(axiosCall: AxiosCall<any>) {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;

    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }
    return result;
  }

  function cancelEndpint() {
    setLoading(false);
    controller && controller.abort();
  }

  useEffect(() => {
    return () => {
      cancelEndpint();
    };
  }, []);

  return { loading, callEndpoint };
}

export default useFetchAndLoad;
