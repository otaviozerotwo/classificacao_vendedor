import type { ClassificationRequest } from '../interfaces/ClassificationRequest';
import type { ClassificationResponse } from '../interfaces/ClassificationResponse';

export async function classificationApi(payload: ClassificationRequest): Promise<ClassificationResponse> {
  const response = await fetch(
    import.meta.env.VITE_API_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  if (!response.ok) {
    const error = await response.json()

    throw new Error(error.message)
  }

  return response.json() as Promise<ClassificationResponse>
}