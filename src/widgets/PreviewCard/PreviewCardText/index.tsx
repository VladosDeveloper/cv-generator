import type { FormFields } from '@/common/schemas/zFormFields.ts'

type Props = {
  formData: FormFields
}

export const PreviewCardText = ({ formData }: Props) => {
  return (
    <>
      <p>Dear {formData.company} Team,</p>
      <p>I am writing to express my interest in the {formData.jobTitle} position.</p>
      <p>
        My experience in the realm combined with my skills in {formData.skills} make me a strong candidate for this
        role.
      </p>
      <p>{formData.additionalDetails}</p>
      <p>
        I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed
        organization.
      </p>
      <p>
        Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
      </p>
    </>
  )
}
