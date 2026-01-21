export interface StudentData {
  school: string
  sex: string
  age: number
  address: string
  famsize: string
  Pstatus: string
  Medu: number
  Fedu: number
  Mjob: string
  Fjob: string
  reason: string
  guardian: string
  traveltime: number
  studytime: number
  failures: number
  schoolsup: string
  famsup: string
  paid: string
  activities: string
  nursery: string
  higher: string
  internet: string
  romantic: string
  famrel: number
  freetime: number
  goout: number
  Dalc: number
  Walc: number
  health: number
  absences: number
  G1: number
  G2: number
}

export interface PredictionRequest {
  data: StudentData
}

export interface PredictionResponse {
  passed: number
  proba_passed: number
}

export interface ApiError {
  message: string
  detail?: string
}
