import { useState } from 'react'
import { OpenAI } from 'openai/client'
import type { FormFields } from '@/common/schemas/zFormFields.ts'

export const useAiGenerateText = () => {
  const [generatedText, setGeneratedText] = useState('')

  const openai = new OpenAI({
    apiKey: 'key', // НЕБЕЗОПАСНО ДЛЯ ПРОДАКШЕНА
    dangerouslyAllowBrowser: true, // Это разрешает использовать ключ в браузере
  })

  const generatePrompt = (data: FormFields) => {
    return `Ты — профессиональный копирайтер. Создай короткий текст для CV.

    Информация о человеке:
    - Job title: ${data.jobTitle}
    - Company name: ${data.company}
    - Skills: ${data.skills}
    - Additional details: ${data.additionalDetails}

    Текст должен быть на английском языке, состоять из 5-10 предложений. Так же каждый абзац оберни в тег <p>`
  }

  const handleGenerate = async (formData: FormFields) => {
    const prompt = generatePrompt(formData)

    try {
      // Используем хук useAIAgent для генерации
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Экономичная модель
        messages: [
          { role: 'system', content: 'Ты профессиональный копирайтер.' },
          { role: 'user', content: prompt },
        ],
        max_completion_tokens: 150,
        temperature: 0.7,
      })

      setGeneratedText(response.choices[0].message.content!)
    } catch (error) {
      console.error('Ошибка при генерации:', error)
      setGeneratedText('Произошла ошибка. Попробуйте еще раз.')
    }
  }

  return {
    handleGenerate,
    generatedText,
  }
}
