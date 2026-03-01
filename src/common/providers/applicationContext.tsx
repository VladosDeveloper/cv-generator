import {
  type Context,
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react'
import type { FormFields } from '@/common/schemas/zFormFields.ts'

type ContextType = {
  applications: FormFields[] | undefined
  setApplications: Dispatch<SetStateAction<FormFields[] | undefined>>
}

const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [applications, setApplications] = useState<FormFields[]>()

  return <Context.Provider value={{ applications, setApplications }}>{children}</Context.Provider>
}

export const useApplicationsContext = () => {
  const ctx = useContext(Context)

  if (!ctx) {
    throw new Error('useMyContext should use in ContextProvider')
  }
  return ctx
}
