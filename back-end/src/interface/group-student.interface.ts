export interface CreateGroupStudentInput {
  group_id: number
  student_id: number
  incident_count: number
}

export interface UpdateGroupStudentInput {
  id: number
  group_id: number
  student_id: number
  incident_count: number
}
