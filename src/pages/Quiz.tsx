import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question: 'What is the primary purpose of an Applicant Tracking System (ATS)?',
    options: [
      'To design websites',
      'To screen and organize job applications',
      'To create social media posts',
      'To host databases',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Why are relevant keywords important in a resume?',
    options: [
      'They make the resume longer',
      'They help match your resume with job requirements',
      'They replace your work experience',
      'They guarantee a job offer',
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does skill gap analysis help you identify?',
    options: [
      'Your missing or underdeveloped skills',
      'Your internet speed',
      'Your resume file size',
      'Your email password',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which section should clearly highlight your relevant work history?',
    options: [
      'Work Experience',
      'Browser History',
      'References Only',
      'Footer',
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the purpose of tailoring a resume for a job?',
    options: [
      'To use more pages',
      'To match relevant skills and experience to the role',
      'To remove all technical skills',
      'To use a different font every time',
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is a good approach when preparing for an interview?',
    options: [
      'Avoid learning about the company',
      'Research the role and practice relevant questions',
      'Memorize unrelated information',
      'Wait until the interview begins',
    ],
    correctAnswer: 1,
  },
  {
    question: 'What does job matching help a candidate do?',
    options: [
      'Find roles relevant to their skills and profile',
      'Automatically guarantee employment',
      'Delete old applications',
      'Replace interview preparation',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of these is considered a soft skill?',
    options: [
      'Communication',
      'JavaScript syntax',
      'Database indexing',
      'HTML markup',
    ],
    correctAnswer: 0,
  },
  {
    question: 'How can AI career tools assist job seekers?',
    options: [
      'By providing resume analysis and career insights',
      'By attending interviews for them',
      'By guaranteeing a job',
      'By replacing all professional decisions',
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is an important step after identifying a skill gap?',
    options: [
      'Ignore the missing skill',
      'Create a plan to learn and improve that skill',
      'Remove the skill from your resume',
      'Stop applying for jobs',
    ],
    correctAnswer: 1,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const question = questions[currentQuestion];

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setError('Please select an answer before continuing.');
      return;
    }

    setError('');

    const isCorrect =
      selectedAnswer === question.correctAnswer;

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setIsComplete(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer(null);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setError('');
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <main className="min-h-screen bg-background px-6 py-10">
        <div className="container-custom max-w-2xl">
          <div className="rounded-3xl border border-border/50 bg-card p-8 text-center shadow-lg md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg">
              <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            </div>

            <p className="mb-2 text-sm font-semibold text-secondary">
              QUIZ COMPLETE
            </p>

            <h1 className="text-3xl font-bold text-primary md:text-4xl">
              Great work!
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              You scored{' '}
              <span className="font-bold text-primary">
                {score} out of {questions.length}
              </span>
              .
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleRestart}
                className="btn-primary"
              >
                Try Again
              </button>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-semibold text-primary transition-colors hover:bg-muted"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="container-custom max-w-3xl">
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4 text-secondary" />
            Career Assessment
          </div>
        </div>

        <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-lg md:p-10">
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-primary">
                Question {currentQuestion + 1} of {questions.length}
              </span>

              <span className="text-sm text-muted-foreground">
                {Math.round(
                  ((currentQuestion + 1) / questions.length) * 100
                )}
                %
              </span>
            </div>

            <div
              className="h-2 overflow-hidden rounded-full bg-muted"
  role="progressbar"
  aria-label="Quiz progress"
  aria-valuemin={0}
  aria-valuemax={questions.length}
  aria-valuenow={currentQuestion + 1}
            >
              <div
                className="h-full rounded-full bg-secondary transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestion + 1) / questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <fieldset>
            <legend className="text-xl font-bold leading-relaxed text-primary md:text-2xl">
              {question.question}
            </legend>

            <div className="mt-8 space-y-4">
              {question.options.map((option, index) => (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border hover:border-secondary/50 hover:bg-muted/50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => {
                      setSelectedAnswer(index);
                      setError('');
                    }}
                    className="h-4 w-4 accent-secondary"
                  />

                  <span className="font-medium text-foreground">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div
            className="mt-5 min-h-6"
            aria-live="polite"
            aria-atomic="true"
          >
            {error && (
              <p className="text-sm font-medium text-destructive">
                {error}
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-primary inline-flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1
                ? 'Finish Quiz'
                : 'Submit Answer'}
              <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Quiz;