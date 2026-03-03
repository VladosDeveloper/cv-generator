import { useState } from 'react'
import { OpenAI } from 'openai/client'
import type { FormFields } from '@/shared/types/zFormFields.ts'

export const useAiGenerateText = () => {
  const [generatedText, setGeneratedText] = useState('')

  const openai = new OpenAI({
    apiKey: 'key',
    dangerouslyAllowBrowser: true,
  })

  const generatePrompt = (data: FormFields) => {
    return `You are a professional copywriter. Create a short text for a CV.

  Information about the person:
  - Job title: ${data.jobTitle}
  - Company name: ${data.company}
  - Skills: ${data.skills}
  - Additional details: ${data.additionalDetails}

  The text should be in English, consist of 5-10 sentences. Also wrap each paragraph in a <p> tag.`
  }

  const handleGenerate = async (formData: FormFields) => {
    const prompt = generatePrompt(formData)

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a professional copywriter.' },
          { role: 'user', content: prompt },
        ],
        max_completion_tokens: 150,
        temperature: 0.7,
      })

      setGeneratedText(response.choices[0].message.content!)
    } catch (error) {
      console.error('Error during generation:', error)
      setGeneratedText('An error occurred. Please try again.')
    }
  }

  return {
    handleGenerate,
    generatedText,
  }
}
