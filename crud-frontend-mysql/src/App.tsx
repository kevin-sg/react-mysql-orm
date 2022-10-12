import { ReactElement, useContext, useEffect } from "react";

import { HomePage } from "@/pages";
import { getUsers } from "@/services";
import { UserContext } from "@/contexts";
import { useFetchAndLoad } from "@/hooks";

function App(): ReactElement {
  const { setUserData } = useContext(UserContext);

  const { callEndpoint } = useFetchAndLoad();

  useEffect(() => {
    (async () => {
      const { data } = await callEndpoint(getUsers());
      setUserData((prev) => ({ ...prev, users: data.results.data }));
    })();
  }, []);

  return <HomePage />;
}

export default App;
