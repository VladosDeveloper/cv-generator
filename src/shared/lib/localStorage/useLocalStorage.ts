import { useCallback } from 'react'
import type { FormFields } from '@/shared/types/zFormFields.ts'

export const useLocalStorage = () => {
  const restoreFromLocalStorage = useCallback((key: string) => {
    try {
      const stateAsString = localStorage.getItem(key)
      return stateAsString ? (JSON.parse(stateAsString) as FormFields[]) : []
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return []
    }
  }, [])

  const saveToLocalStorage = useCallback(
    (key: string, state: FormFields) => {
      try {
        const currentItems = restoreFromLocalStorage(key)

        const updatedItems = [state, ...currentItems]

        localStorage.setItem(key, JSON.stringify(updatedItems))

        return updatedItems
      } catch (error) {
        console.error('Error saving to localStorage:', error)
        return []
      }
    },
    [restoreFromLocalStorage]
  )

  const removeFromLocalStorage = useCallback(
    (key: string, id: string) => {
      try {
        const currentItems = restoreFromLocalStorage(key)

        const filteredItems = currentItems.filter((el) => el.id !== id)

        localStorage.setItem(key, JSON.stringify(filteredItems))

        return filteredItems
      } catch (error) {
        console.error('Error removing from localStorage:', error)
        return []
      }
    },
    [restoreFromLocalStorage]
  )

  const initializeFromLocalStorage = useCallback(
    (key: string) => {
      const items = restoreFromLocalStorage(key)
      if (items.length > 0) {
        return items
      }
      return []
    },
    [restoreFromLocalStorage]
  )

  return {
    saveToLocalStorage,
    restoreFromLocalStorage,
    removeFromLocalStorage,
    initializeFromLocalStorage,
  }
}
