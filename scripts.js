import React, { useState, useRef } from 'react';

const MindfulnessWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const NavButton = ({ children, isActive, onClick }) => (
    <button
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        fontWeight: '500',
        backgroundColor: isActive ? 'white' : 'transparent',
        color: isActive ? '#8B5CF6' : 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const Card = ({ children, style = {} }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1.5rem',
      padding: '1.5rem',
      marginBottom: '1rem',
      ...style
    }}>
      {children}
    </div>
  );

  const HomePage = () => (
    <>
      <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '2rem'}}>
        Welcome to<br />MindfulnessPro
      </h2>
      <Card>
        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Discover Inner Peace</h3>
        <p style={{color: '#4B5563'}}>Start your journey to mental wellness today</p>
        <p style={{marginTop: '1rem'}}>
          MindfulnessPro offers a unique blend of meditation techniques and psychological
          insights to help you achieve balance in your life.
        </p>
      </Card>
      <Card>
        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Guided Meditations</h3>
        <p>
          Experience tranquility with our curated selection of guided meditations.
        </p>
        <button style={{
          marginTop: '1rem',
          backgroundColor: '#111827',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '500',
          border: 'none',
          cursor: 'pointer'
        }}>
          Explore Meditations
        </button>
      </Card>
    </>
  );

  const MeditatePage = () => (
    <Card>
      <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Meditation Sessions</h2>
      <p>Choose from our selection of guided meditations to start your practice.</p>
    </Card>
  );

  const LearnPage = () => (
    <Card>
      <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Learning Resources</h2>
      <p>Explore our collection of articles and videos on mindfulness and mental wellness.</p>
    </Card>
  );

  const ProfilePage = () => (
    <Card>
      <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Your Profile</h2>
      <p>View and manage your account settings and meditation progress.</p>
    </Card>
  );

  const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const containerRef = useRef(null);

    const questions = [
      {
        question: "What is mindfulness?",
        options: [
          "Ignoring your thoughts",
          "Being aware of the present moment",
          "Thinking about the future",
          "Analyzing past events"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is NOT a common meditation technique?",
        options: [
          "Breath awareness",
          "Body scan",
          "Thought suppression",
          "Loving-kindness meditation"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the recommended duration for beginners to meditate?",
        options: [
          "5-10 minutes",
          "30-60 minutes",
          "2-3 hours",
          "As long as possible"
        ],
        correctAnswer: 0
      }
    ];

    const handleAnswer = (index) => {
      setSelectedAnswer(index);
      setTimeout(() => {
        if (index === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
          transitionToNextQuestion();
        } else {
          setShowResult(true);
        }
        setSelectedAnswer(null);
      }, 500);
    };

    const transitionToNextQuestion = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 600);
    };

    const resetQuiz = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setIsTransitioning(false);
      }, 600);
    };

    const QuestionCard = ({ question, options, onAnswer }) => (
      <div className={`question-card ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{question}</h3>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`answer-button ${selectedAnswer === index ? (index === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    );

    return (
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Mindfulness Quiz</h2>
        {!showResult ? (
          <div ref={containerRef} style={{ position: 'relative' }}>
            <QuestionCard 
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onAnswer={handleAnswer}
            />
          </div>
        ) : (
          <div className="result-card">
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Your score: {score} / {questions.length}</p>
            <button
              onClick={resetQuiz}
              className="restart-button"
            >
              Restart Quiz
            </button>
          </div>
        )}
        <style jsx>{`
          .question-card {
            background-color: white;
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .fade-in {
            animation: fadeInBounce 0.5s ease-out;
          }
          .fade-out {
            animation: fadeOutBounce 0.5s ease-in;
          }
          @keyframes fadeInBounce {
            0% { opacity: 0; transform: scale(0.9); }
            70% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeOutBounce {
            0% { opacity: 1; transform: scale(1); }
            30% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 0; transform: scale(0.9); }
          }
          .answer-button {
            display: block;
            width: 100%;
            text-align: left;
            padding: 0.75rem;
            margin-bottom: 0.5rem;
            background-color: #F3F4F6;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .answer-button:hover {
            background-color: #E5E7EB;
            transform: translateY(-2px);
          }
          .answer-button.correct {
            background-color: #10B981;
            color: white;
            animation: correctBounce 0.5s ease;
          }
          .answer-button.incorrect {
            background-color: #EF4444;
            color: white;
            animation: incorrectBounce 0.5s ease;
          }
          @keyframes correctBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes incorrectBounce {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
          }
          .result-card {
            background-color: white;
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: fadeInBounce 0.5s ease-out;
          }
          .restart-button {
            background-color: #8B5CF6;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: all 0.3s ease;
          }
          .restart-button:hover {
            background-color: #7C3AED;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    );
  };

  const pageComponents = {
    home: HomePage,
    meditate: MeditatePage,
    learn: LearnPage,
    profile: ProfilePage,
    quiz: QuizPage,
  };

  const ActivePage = pageComponents[activePage];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #8B5CF6, #EC4899)',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
        <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', color: 'white'}}>MindfulnessPro</h1>
        <button 
          style={{backgroundColor: '#111827', color: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', border: 'none', cursor: 'pointer'}}
          onClick={() => setShowRegisterModal(true)}
        >
          Register
        </button>
      </header>

      <nav style={{marginBottom: '2rem'}}>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', padding: '0.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {['Home', 'Meditate', 'Learn', 'Profile', 'Quiz'].map((page) => (
            <NavButton
              key={page}
              isActive={activePage === page.toLowerCase()}
              onClick={() => setActivePage(page.toLowerCase())}
            >
              {page}
            </NavButton>
          ))}
        </div>
      </nav>

      <main>
        <ActivePage />
      </main>

      {showRegisterModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            maxWidth: '28rem',
            width: '100%',
            margin: '1rem'
          }}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Register for MindfulnessPro</h2>
            <p style={{marginBottom: '1rem'}}>Choose an option to register:</p>
            <button style={{width: '100%', backgroundColor: '#EF4444', color: 'white', padding: '0.5rem', borderRadius: '9999px', marginBottom: '0.5rem', border: 'none', cursor: 'pointer'}}>
              Sign up with Gmail
            </button>
            <button style={{width: '100%', backgroundColor: 'black', color: 'white', padding: '0.5rem', borderRadius: '9999px', marginBottom: '1rem', border: 'none', cursor: 'pointer'}}>
              Sign up with Apple
            </button>
            <button 
              style={{width: '100%', backgroundColor: '#E5E7EB', color: '#1F2937', padding: '0.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer'}}
              onClick={() => setShowRegisterModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindfulnessWebsite;
