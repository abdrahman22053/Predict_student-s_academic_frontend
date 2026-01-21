import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, TrendingUp, AlertCircle } from 'lucide-react'
import type { PredictionResponse } from '@/types/student'

interface ResultCardProps {
  result: PredictionResponse
}

export function ResultCard({ result }: ResultCardProps) {
  const { t } = useTranslation()

  const isPassed = result.passed === 1
  const probability = Math.round(result.proba_passed * 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{t('result.title')}</CardTitle>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Badge
                variant={isPassed ? 'success' : 'failure'}
                className="text-lg px-4 py-2"
              >
                {isPassed ? (
                  <>
                    <CheckCircle2 className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
                    {t('result.passed')}
                  </>
                ) : (
                  <>
                    <XCircle className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
                    {t('result.failed')}
                  </>
                )}
              </Badge>
            </motion.div>
          </div>
          <CardDescription>{t('app.subtitle')}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Probability Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-neon-violet" />
                <span className="font-semibold text-lg">{t('result.probability')}</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
                {probability}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${probability}%` }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className={`h-full rounded-full ${
                  probability >= 70
                    ? 'bg-gradient-to-r from-green-400 to-green-600'
                    : probability >= 50
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : 'bg-gradient-to-r from-red-400 to-red-600'
                }`}
              />
            </div>
          </motion.div>

          {/* Advice Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`p-4 rounded-lg border-2 ${
              isPassed
                ? 'bg-success/10 border-success/20'
                : 'bg-failure/10 border-failure/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                  isPassed ? 'text-success' : 'text-failure'
                }`}
              />
              <div>
                <h3 className="font-semibold mb-2">{t('result.advice.title')}</h3>
                <p className="text-sm leading-relaxed">
                  {isPassed ? t('result.advice.success') : t('result.advice.failure')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-4 pt-4 border-t"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">
                {result.passed === 1 ? '✓' : '✗'}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t('result.title')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-violet">
                {probability}%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t('result.probability')}
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
