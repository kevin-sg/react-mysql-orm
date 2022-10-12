import { ReactElement, Dispatch, SetStateAction, createContext, useState } from "react";

import type { UserModel } from "@/models";

interface IUserProviderProps {
  children: ReactElement | ReactElement[];
}

interface IUserContextProps {
  userData: InitialUserState;
  setUserData: Dispatch<SetStateAction<InitialUserState>>;
}

interface InitialUserState {
  users: UserModel[];
  isLoading?: boolean;
  error?: {};
}

const initialState: InitialUserState = {
  users: [],
  isLoading: false,
  error: {},
};

export const UserContext = createContext({} as IUserContextProps);

export function UserProvider({ children }: IUserProviderProps) {
  const [userData, setUserData] = useState(initialState as InitialUserState);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
}
