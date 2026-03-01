import { createContext, type Dispatch, type PropsWithChildren, type SetStateAction, useContext, useState } from 'react'

type ContextType = {
  toasterVisibility: ToasterType
  setToasterVisibility: Dispatch<SetStateAction<ToasterType>>
}

type ToasterType = {
  visibility: boolean
}

const ToasterContext = createContext<ContextType | null>(null)

export const ToasterProvider = ({ children }: PropsWithChildren) => {
  const [toasterVisibility, setToasterVisibility] = useState<ToasterType>({
    visibility: false,
  })

  return (
    <ToasterContext.Provider value={{ toasterVisibility, setToasterVisibility }}>{children}</ToasterContext.Provider>
  )
}

export const useToasterContext = () => {
  const ctx = useContext(ToasterContext)

  if (!ctx) {
    throw new Error('useToasterContext should use in ToasterContext')
  }
  return ctx
}
