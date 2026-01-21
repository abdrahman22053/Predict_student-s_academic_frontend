import axios from 'axios'
import type { PredictionRequest, PredictionResponse, ApiError } from '@/types/student'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function predictStudent(
  data: PredictionRequest
): Promise<PredictionResponse> {
  try {
    const response = await apiClient.post<PredictionResponse>('/predict', data)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with error
        const apiError: ApiError = {
          message: error.response.data?.detail || 'Server error',
          detail: error.response.statusText,
        }
        throw apiError
      } else if (error.request) {
        // Request made but no response
        const apiError: ApiError = {
          message: 'No response from server',
          detail: 'Network error or server is down',
        }
        throw apiError
      }
    }
    // Other errors
    const apiError: ApiError = {
      message: 'An unexpected error occurred',
      detail: String(error),
    }
    throw apiError
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    const response = await apiClient.get('/')
    return response.status === 200
  } catch {
    return false
  }
}
