import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppShell } from '@/components/layout/AppShell'
import { ParticlesBackground } from '@/components/background/ParticlesBackground'
import { StudentForm } from '@/components/forms/StudentForm'
import { ResultCard } from '@/components/results/ResultCard'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { predictStudent } from '@/lib/api'
import type { StudentData, PredictionResponse } from '@/types/student'

function App() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PredictionResponse | null>(null)

  const handleSubmit = async (data: StudentData) => {
    setIsLoading(true)
    setResult(null)

    try {
      const predictionResult = await predictStudent({ data })
      setResult(predictionResult)
      
      toast({
        title: t('result.title'),
        description: predictionResult.passed === 1 
          ? t('result.passed') 
          : t('result.failed'),
        variant: 'default',
      })

      // Scroll to result
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        })
      }, 100)
    } catch (error: any) {
      console.error('Prediction error:', error)
      
      let errorMessage = t('errors.unknown')
      if (error.message) {
        if (error.message.includes('Network') || error.message.includes('network')) {
          errorMessage = t('errors.network')
        } else if (error.message.includes('Server') || error.message.includes('server')) {
          errorMessage = t('errors.server')
        } else {
          errorMessage = error.message
        }
      }

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ParticlesBackground />
      <AppShell>
        <div className="max-w-4xl mx-auto space-y-8">
          <StudentForm onSubmit={handleSubmit} isLoading={isLoading} />
          {result && <ResultCard result={result} />}
        </div>
      </AppShell>
      <Toaster />
    </>
  )
}

export default App
