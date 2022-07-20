type TeamMemberType = {
  firstName: string
  lastName: string
  description: string
  imageFileName: string
  specialitities: string[]
}

export type TeamType = Array<TeamMemberType>
