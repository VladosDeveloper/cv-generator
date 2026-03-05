import { useState } from 'react'
import { type SubmitHandler } from 'react-hook-form'
import { useApplicationsContext } from '@/app/providers'
import { LocalStorageApplicationKey } from '@/shared/constants/consts'
import { localStorageService } from '@/shared/lib/localStorage'
import type { FormFields } from '@/shared/types/zFormFields'

export const useApplicationForm = () => {
  const { saveToLocalStorage, removeFromLocalStorage } = localStorageService()
  const { applications, setApplications } = useApplicationsContext()

  const [data, setData] = useState<FormFields>()
  const [isLoading, setIsLoading] = useState(false)
  const [previousId, setPreviousId] = useState<string>('')

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true)

    const filteredItems = removeFromLocalStorage(LocalStorageApplicationKey, previousId)
    setApplications(filteredItems)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const modifiedItem: FormFields = { ...data, id: crypto.randomUUID() }

    setPreviousId(modifiedItem.id!)
    const updatedListItems = saveToLocalStorage(LocalStorageApplicationKey, modifiedItem)
    setApplications(updatedListItems)

    setData({
      ...modifiedItem,
    })
    setIsLoading(false)
  }

  return {
    onSubmit,
    applications,
    data,
    isLoading,
    setPreviousId,
    setData,
  }
}
