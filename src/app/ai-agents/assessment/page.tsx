'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import {
  aiQuestions,
  calculateAiResult,
  encodeAiResultsToUrl,
  AssessmentAnswer,
} from '@/lib/assessment-scoring'
import { Button } from '@/components/shared'

export default function AiAssessmentPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const currentQuestion = aiQuestions[currentIndex]
  const isLastQuestion = currentIndex === aiQuestions.length - 1
  const progress = ((currentIndex + 1) / aiQuestions.length) * 100

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId)
  }

  const handleNext = () => {
    if (!selectedAnswer) return

    const newAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answerId: selectedAnswer },
    ]
    setAnswers(newAnswers)

    if (isLastQuestion) {
      const result = calculateAiResult(newAnswers)
      const params = encodeAiResultsToUrl(result)
      router.push(`/ai-agents/results?${params}`)
    } else {
      setCurrentIndex((prev) => prev + 1)
      const nextQuestion = aiQuestions[currentIndex + 1]
      const existingAnswer = newAnswers.find(
        (a) => a.questionId === nextQuestion.id
      )
      setSelectedAnswer((existingAnswer?.answerId as string) || null)
    }
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      const prevQuestion = aiQuestions[currentIndex - 1]
      const existingAnswer = answers.find(
        (a) => a.questionId === prevQuestion.id
      )
      setSelectedAnswer((existingAnswer?.answerId as string) || null)
    }
  }

  const isAnswerSelected = (answerId: string) => selectedAnswer === answerId

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-navy-500 mb-2">
              <span>
                Question {currentIndex + 1} of {aiQuestions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium">
                  AI Authorization Assessment
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-semibold text-navy-900 mb-8">
                {currentQuestion.question}
              </h1>

              <div className="space-y-3">
                {currentQuestion.answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswerSelect(answer.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      isAnswerSelected(answer.id)
                        ? 'border-teal-500 bg-teal-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isAnswerSelected(answer.id)
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {isAnswerSelected(answer.id) && (
                          <CheckCircle2 size={16} className="text-white" />
                        )}
                      </div>
                      <span
                        className={`text-body ${
                          isAnswerSelected(answer.id)
                            ? 'text-navy-900 font-medium'
                            : 'text-navy-700'
                        }`}
                      >
                        {answer.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentIndex === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-navy-600 hover:text-navy-900 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <Button
              onClick={handleNext}
              icon={!isLastQuestion}
              className={!selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {isLastQuestion ? 'See Results' : 'Next'}
              {!isLastQuestion && <ArrowRight size={18} />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
