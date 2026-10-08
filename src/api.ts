export const API_BASE_URL = 'http://127.0.0.1:8000'

export interface PredictionRequest {
  Administrative: number
  Administrative_Duration: number
  Informational: number
  Informational_Duration: number
  ProductRelated: number
  ProductRelated_Duration: number
  BounceRates: number
  ExitRates: number
  PageValues: number
  SpecialDay: number
  OperatingSystems: number
  Browser: number
  Region: number
  TrafficType: number
  Weekend: boolean
  Month: 'Feb' | 'Mar' | 'May' | 'June' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
  VisitorType: 'Returning_Visitor' | 'New_Visitor' | 'Other'
}

export interface PredictionResponse {
  purchase_probability: number
  prediction: string
  model_agreement: {
    rf: number
    xgb: number
    catboost: number
  }
  agreement: 'strong' | 'moderate' | 'weak'
}

export async function predictPurchase(payload: PredictionRequest): Promise<PredictionResponse> {
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Prediction service returned ${response.status}`)
  }

  return response.json() as Promise<PredictionResponse>
}
