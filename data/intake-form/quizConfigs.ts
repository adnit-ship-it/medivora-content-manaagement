import type { QuizConfig } from "~/types/intake-form/form";
import { allStepsMaster, contactFormSteps } from "./formSteps";

// GLP-1 Weight Loss Intake Form Configuration
export const glp1WeightLossQuiz: QuizConfig = {
  id: "glp1-weight-loss",
  name: "GLP-1 Weight Loss Intake Form",
  description:
    "Comprehensive medical intake form for GLP-1 weight loss medication",
  version: "1.0.0",
  progressSteps: [
    {
      id: "start",
      name: "Start",
      description: "Basic information and eligibility",
      color: "#A75809",
    },
    {
      id: "preliminary",
      name: "Preliminary",
      description: "Motivation and medication history",
      color: "#A75809",
    },
    {
      id: "health",
      name: "Health",
      description: "Medical conditions and safety",
      color: "#A75809",
    },
    {
      id: "details",
      name: "Details",
      description: "Personal information and history",
      color: "#A75809",
    },
    {
      id: "eligibility",
      name: "Eligibility",
      description: "Final review and contact information",
      color: "#A75809",
    },
  ],
  stepProgressMapping: [
    // Start section
    { stepId: "heightWeight", progressStepId: "start" },
    { stepId: "goalWeight", progressStepId: "start" },
    { stepId: "triedInPast", progressStepId: "start" },
    { stepId: "gender", progressStepId: "start" },
    { stepId: "pregnancy", progressStepId: "start" },

    // Preliminary section
    { stepId: "marketing1", progressStepId: "preliminary" },
    { stepId: "marketing2", progressStepId: "preliminary" },
    { stepId: "marketing3", progressStepId: "preliminary" },
    { stepId: "motivation", progressStepId: "preliminary" },
    { stepId: "medication", progressStepId: "preliminary" },
    { stepId: "pace", progressStepId: "preliminary" },
    { stepId: "perfect", progressStepId: "preliminary" },

    // Health section
    { stepId: "marketing4", progressStepId: "health" },
    { stepId: "marketing5", progressStepId: "health" },
    { stepId: "healthConditions1", progressStepId: "health" },
    { stepId: "healthConditions2", progressStepId: "health" },

    // Details section
    { stepId: "surgicalHistory", progressStepId: "details" },
    { stepId: "marketing6", progressStepId: "details" },
    { stepId: "currentMedications", progressStepId: "details" },
    { stepId: "motivationLevel", progressStepId: "details" },

    // Eligibility section
    { stepId: "dob", progressStepId: "eligibility" },
    { stepId: "personalInfo", progressStepId: "eligibility" },
    { stepId: "contactInfo", progressStepId: "eligibility" },
  ],
  steps: [...allStepsMaster, ...contactFormSteps],
  metadata: {
    category: "medical",
    estimatedTime: "15-20 minutes",
    targetAudience: "Adults seeking weight loss medication",
    compliance: ["HIPAA", "FDA guidelines"],
  },
};

// Export all quiz configurations
export const availableQuizzes: QuizConfig[] = [
  glp1WeightLossQuiz,
];

// Helper function to get quiz by ID
export function getQuizById(quizId: string): QuizConfig | undefined {
  return availableQuizzes.find((quiz) => quiz.id === quizId);
}

// Helper function to get progress step for a specific form step
export function getProgressStepForFormStep(
  quizConfig: QuizConfig,
  formStepId: string,
): string | undefined {
  const mapping = quizConfig.stepProgressMapping.find(
    (mapping) => mapping.stepId === formStepId,
  );
  return mapping?.progressStepId;
}

// Helper function to get all form steps for a progress step
export function getFormStepsForProgressStep(
  quizConfig: QuizConfig,
  progressStepId: string,
): string[] {
  return quizConfig.stepProgressMapping
    .filter((mapping) => mapping.progressStepId === progressStepId)
    .map((mapping) => mapping.stepId);
}
