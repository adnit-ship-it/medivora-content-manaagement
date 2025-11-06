import type { FormStep } from "~/types/intake-form/form";

// --- FORM STRUCTURE DATA ---
// This is the master list of all steps in the form.
export const allStepsMaster: FormStep[] = [
  {
    id: "heightWeight",
    title: "What is your height and weight? We'll calculate your BMI automatically",
    heading1: "BMI Calculation",
    displayValue: {
      condition: (answers: any) => answers.feet && answers.inches && answers.weight,
      calculate: (answers: any) => {
        const heightInInches = (answers.feet * 12) + answers.inches;
        const heightInMeters = heightInInches * 0.0254;
        const weightInKg = answers.weight * 0.453592;
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
      },
      template: "BMI: {{value}}"
    },
    questions: [
      {
        id: "feet",
        question: "Feet",
        type: "DROPDOWN",
        required: true,
        options: [1, 2, 3, 4, 5, 6, 7],
        apiType: "TEXT",
      },
      {
        id: "inches",
        question: "Inches",
        type: "DROPDOWN",
        required: true,
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        apiType: "TEXT",
      },
      {
        id: "weight",
        question: "Weight (in lbs)",
        type: "number",
        required: true,
        placeholder: "Enter your weight",
        apiType: "TEXT",
      },
    ],
  },
  {
    id: "goalWeight",
    title: "What is your goal weight?",
    heading1: "We are in this together. Your goal is our goal.",
    questions: [
      {
        id: "goalWeight",
        type: "number",
        required: true,
        placeholder: "Enter your goal weight",
        apiType: "TEXT",
        validation: ["required"], // Note: Custom validation for goal weight comparison would need to be handled differently in the new system
      },
    ],
  },
  {
    id: "triedInPast",
    heading1: "What weight loss initiatives have you tried in the past?",
    subtext: "Select all that apply.",
    questions: [
      {
        id: "pastInitiatives",
        type: "MULTISELECT",
        options: [
          "Exercise",
          "Dieting",
          "Weight-loss Supplements",
          "Intermittent Fasting",
          "None of these",
        ],
        required: true,
        apiType: "MULTISELECT",
        optionImages: [
          "/assets/images/intake-form/option-icons/triedInPast_option1.svg",
          "/assets/images/intake-form/option-icons/triedInPast_option2.svg",
          "/assets/images/intake-form/option-icons/triedInPast_option3.svg",
          "/assets/images/intake-form/option-icons/triedInPast_option4.svg",
          "/assets/images/intake-form/option-icons/triedInPast_option5.svg",
        ],
      },
    ],
  },
  {
    id: "gender",
    heading1: "Are you male or female?",
    subtext:
      "This helps us understand your body complexity and hormones so we can assess you better.",
    questions: [
      {
        id: "gender",
        type: "SINGLESELECT",
        options: ["Male", "Female"],
        required: true,
        apiType: "SINGLESELECT",
        optionImages: [
          "/assets/images/intake-form/option-icons/gender_option1.svg",
          "/assets/images/intake-form/option-icons/gender_option2.svg",
        ],
      },
    ],
  },
  {
    id: "pregnancy",
    title: "Do any of these apply to you?",
    heading1: "Safety, first.",
    renderCondition: (answers) => answers.gender === "Female",
    questions: [
      {
        id: "pregnancy",
        type: "MULTISELECT",
        options: [
          "Currently or possibly pregnant",
          "Actively trying to become pregnant",
          "Breastfeeding",
          "None of the above",
        ],
        required: false,
        displayAsRow: true,
        apiType: "MULTISELECT",
      },
    ],
  },
  {
    id: "marketing1",
    heading1: "It feels like magic, but it's metabolic science.",
    questions: [
      {
        id: "marketing1",
        type: "MARKETING",
        required: false,
        image: "/assets/images/intake-form/marketing/marketing1.png",
      },
    ],
  },
  {
    id: "marketing2",
    heading1: "What our Patient says",
    questions: [
      {
        id: "marketing2",
        type: "BEFORE_AFTER",
        required: false,
        beforeImage: "/assets/images/intake-form/before-after/before1.png",
        afterImage: "/assets/images/intake-form/before-after/after1.png",
        quote:
          "I lost 45 pounds in 6 months and feel like a completely different person. This medication changed my life!",
      },
    ],
  },
  {
    id: "marketing3",
    heading1: "How will GLP work for you?",
    questions: [
      {
        id: "marketing3",
        type: "MARKETING",
        required: false,
        image: "/assets/images/intake-form/marketing/marketing3.png",
        displayStatistics: true,
      },
    ],
  },
  {
    id: "motivation",
    title: "What is your primary reason for looking into GLP-1 medication?",
    heading1: "Improving your life requires motivation",
    questions: [
      {
        id: "motivation",
        type: "SINGLESELECT",
        options: [
          "Improve health",
          "Feel more confident",
          "Increase energy levels",
          "Other",
        ],
        required: true,
        displayAsRow: true,
        apiType: "SINGLESELECT",
      },
    ],
  },
  {
    id: "medication",
    heading1: "Are you currently taking any GLP-1 medications?",
    questions: [
      {
        id: "glp1",
        type: "SINGLESELECT",
        options: ["Yes", "No"],
        required: true,
        apiType: "SINGLESELECT",
      },
    ],
  },
  {
    id: "pace",
    title: "How is that pace for you?",
    heading1:
      "With medication, you'll lose {{weeklyLossRange}} pounds per week.",
    dynamicSubtext:
      "It will take about {{timeToGoal}} weeks to reach your goal weight of {{goalWeight}}.",
    subtext: "This is an estimate. Individual results may vary.",
    questions: [
      {
        id: "pace",
        type: "SINGLESELECT",
        options: ["That works for me", "I want it faster", "That's too fast"],
        required: true,
        apiType: "SINGLESELECT",
        optionImages: [
          "/assets/images/intake-form/option-icons/pace_option1.svg",
          "/assets/images/intake-form/option-icons/pace_option2.svg",
          "/assets/images/intake-form/option-icons/pace_option3.svg",
        ],
      },
    ],
  },
  {
    id: "perfect",
    questions: [
      {
        id: "perfect",
        type: "PERFECT",
        required: false,
        heading1: "Perfect!",
        dynamicSubtext:
          "Losing {{weight-goalWeight}}lbs is easier than you think - and it doesn't involve restrictive diets.",
        subtext:
          "Now, let's analyze your metabolism and discover how well your body processes macronutrients.",
      },
    ],
  },
  {
    id: "marketing4",
    heading1: "What our Patient says",
    questions: [
      {
        id: "marketing4",
        type: "BEFORE_AFTER",
        required: false,
        beforeImage: "/assets/images/intake-form/before-after/before2.png",
        afterImage: "/assets/images/intake-form/before-after/after2.png",
        quote:
          "After struggling with my weight for years, I finally found something that works. Down 30 pounds and counting!",
      },
    ],
  },
  {
    id: "marketing5",
    heading1: "What our Patient says",
    questions: [
      {
        id: "marketing5",
        type: "BEFORE_AFTER",
        required: false,
        beforeImage: "/assets/images/intake-form/before-after/before3.png",
        afterImage: "/assets/images/intake-form/before-after/after3.png",
        quote:
          "I never thought I could feel this confident again. The weight loss has been incredible and sustainable.",
      },
    ],
  },
  {
    id: "healthConditions1",
    title: "Do any of these apply to you?",
    heading1:
      "GLP-1 is safe, but these health conditions might prevent you from being prescribed.",
    subtext: "Your answers are completely confidential and protected by HIPAA",
    questions: [
      {
        id: "conditions1",
        type: "MULTISELECT",
        options: [
          "None of these ",
          "End-stage kidney disease (on or about to be on dialysis)",
          "End-stage liver disease (cirrhosis)",
          "Current suicidal thoughts and/or prior suicidal attempt",
          "Cancer (active diagnosis, active treatment, or in remission or cancer-free for less than 5 continuous years does not apply to non-melanoma skin cancer that was considered cured via simple excision)",
          "History of organ transplant on anti-rejection medication",
        ],
        required: true,
        displayAsRow: true,
        apiType: "MULTISELECT",
      },
    ],
  },
  {
    id: "healthConditions2",
    title: "Do any of these apply to you?",
    heading1: "A few more health questions",
    questions: [
      {
        id: "conditions2",
        type: "MULTISELECT",
        options: [
          "None of these",
          "Gallbladder disease",
          "Hypertension (high blood pressure) ",
          "Seizures",
          "Glaucoma",
          "Sleep apnea",
          "Type 2 diabetes (not on insulin)",
          "Type 2 diabetes (on insulin)",
          "Type 1 diabetes",
          "Diabetic retinopathy (diabetic eye disease), damage to the optic nerve from trauma or reduced blood flow, or blindness",
        ],
        required: true,
        displayAsRow: true,
        apiType: "MULTISELECT",
      },
    ],
  },
  {
    id: "surgicalHistory",
    heading1: "Have you had prior weight loss surgeries?",
    questions: [
      {
        id: "surgeries",
        type: "SINGLESELECT",
        options: ["Yes", "No"],
        required: true,
        apiType: "SINGLESELECT",
      },
    ],
  },
  {
    id: "marketing6",
    heading1: "What our Patient says",
    questions: [
      {
        id: "marketing6",
        type: "BEFORE_AFTER",
        required: false,
        beforeImage: "/assets/images/intake-form/before-after/before4.png",
        afterImage: "/assets/images/intake-form/before-after/after4.png",
        quote:
          "This medication gave me my life back. I have more energy, confidence, and I'm finally in control of my health.",
      },
    ],
  },
  {
    id: "currentMedications",
    heading1: "Do you currently take any medications?",
    questions: [
      {
        id: "medication",
        type: "SINGLESELECT",
        options: ["Yes", "No"],
        required: true,
        apiType: "SINGLESELECT",
        image: "/assets/images/intake-form/marketing/marketing7.png",
      },
    ],
  },
  {
    id: "motivationLevel",
    dynamicTitle: "How motivated are you to reach {{goalWeight}}lbs?",
    heading1: "Let's better understand your current state of mind.",
    questions: [
      {
        id: "motivationLevel",
        type: "SINGLESELECT",
        options: ["I'm ready", "I'm feeling hopeful", "I'm cautious"],
        required: true,
        apiType: "SINGLESELECT",
        optionImages: [
          "/assets/images/intake-form/option-icons/motivationLevel_option1.svg",
          "/assets/images/intake-form/option-icons/motivationLevel_option2.svg",
          "/assets/images/intake-form/option-icons/motivationLevel_option3.svg",
        ],
      },
    ],
  },
];


export const contactFormSteps: FormStep[] = [
  {
    id: "dob",
    title: "What is your date of birth?",
    questions: [
      {
        id: "dobMonth",
        question: "Month",
        type: "DROPDOWN",
        required: true,
        options: Array.from({ length: 12 }, (_, i) => i + 1),
        optionLabels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        apiType: "DATE",
      },
      {
        id: "dobDay",
        question: "Day",
        type: "DROPDOWN",
        required: true,
        options: Array.from({ length: 31 }, (_, i) => i + 1),
        apiType: "DATE",
      },
      {
        id: "dobYear",
        question: "Year",
        type: "DROPDOWN",
        required: true,
        options: Array.from({ length: 90 }, (_, i) => 2010 - i),
        apiType: "DATE",
      },
    ],
  },
  {
    id: "idUploadUniversal",
    title: "Please upload a government issued form of ID: Driver's License, Passport, etc",
    questionSubtext: "Be sure that your full name and photo are easily visible",
    questions: [
      {
        id: "firstName",
        question: "First Name",
        type: "text",
        required: true,
        placeholder: "Enter your first name",
        apiType: "TEXT",
        validation: ["required"],
      },
      {
        id: "lastName",
        question: "Last Name",
        type: "text",
        required: true,
        placeholder: "Enter your last name",
        apiType: "TEXT",
        validation: ["required"],
      },
      // {
      //   id: "idUploadUniversal",
      //   type: "FILE_INPUT",
      //   question: "id",
      //   displayQuestion: " ",
      //   required: true,
      //   apiType: "FILE",
      // },
    ],
  },
  {
    id: "personalInfo",
    heading1: "Let's get your contact details",
    heading2: "to complete your intake form",
    questions: [
      {
        id: "email",
        question: "Email Address",
        type: "email",
        required: true,
        placeholder: "you@example.com",
        apiType: "TEXT",
        icon: "/assets/images/intake-form/icons/email-icon.svg",
        validation: ["required", "email"],
      },
      {
        id: "phone",
        question: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "123-456-7890",
        apiType: "TEXT",
        icon: "/assets/images/intake-form/icons/phone-icon.svg",
        validation: ["required", "phone"],
      },
      {
        id: "consent",
        type: "CHECKBOX",
        required: true,
        options: ["I confirm that I am the patient completing this intake form and have reviewed all questions carefully. I attest that my answers are true, accurate, and complete to the best of my knowledge. I understand the importance of providing my doctor with complete and accurate health information for my care."],
        apiType: "SINGLESELECT",
      },
    ],
  },
];