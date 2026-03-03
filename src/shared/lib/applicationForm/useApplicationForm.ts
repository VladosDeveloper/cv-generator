import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useApplicationsContext } from '@/app/providers'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import type { FormFields } from '@/shared/types/zFormFields.ts'

export const useApplicationForm = () => {
  const {
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormFields>()

  const { saveToLocalStorage, removeFromLocalStorage } = useLocalStorage()
  const { applications, setApplications } = useApplicationsContext()

  const [data, setData] = useState<FormFields>()
  const [isLoading, setIsLoading] = useState(false)
  const [previousId, setPreviousId] = useState<string>('')

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true)

    const filteredItems = removeFromLocalStorage(LocalStorageKeys.ApplicationKey, previousId)
    setApplications(filteredItems)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const modifiedItem: FormFields = { ...data, id: crypto.randomUUID() }

    setPreviousId(modifiedItem.id!)
    const updatedListItems = saveToLocalStorage(LocalStorageKeys.ApplicationKey, modifiedItem)
    setApplications(updatedListItems)

    setData({
      ...modifiedItem,
    })
    setIsLoading(false)
  }

  const resetFormHandler = () => {
    setPreviousId('')
    reset()
  }

  const jobTitle = watch('jobTitle')?.trim()
  const company = watch('company')
  const isJobTitleFieldDirty = jobTitle?.length > 0

  return {
    jobTitle,
    company,
    isJobTitleFieldDirty,
    resetFormHandler,
    onSubmit,
    isSubmitSuccessful,
    applications,
    data,
    isLoading,
  }
}
