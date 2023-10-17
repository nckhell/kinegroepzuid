export type TeamMemberType = {
  firstName: string
  lastName: string
  role: string
  description: string
  imageFileName: string
  specialitities: string[]
  imageWidth: string
  imageHeight: string
  phone: string
  appointmentUrl?: string
  appointmentHtml?: string
  geconventioneerd?: boolean
  backgroundPosition?: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  maxWidth?: string
  exception?: string
}

export type TeamType = Array<TeamMemberType>
