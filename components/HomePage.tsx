import React from 'react';
import { vocabData } from '../data/vocab';
import ThreeBackground from './ThreeBackground';

interface HomePageProps {
  onGetStartedClick: () => void;
  navigateToLearn: () => void;
  onSelectHSKLevel?: (level: number) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-card__icon-wrapper">
            {icon}
        </div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onGetStartedClick, navigateToLearn, onSelectHSKLevel }) => {
    const hskLevels = Object.keys(vocabData).map(Number);

    return (
        <div className="homepage animate-fade-in">
            <ThreeBackground />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-section__container">
                    <h1 className="hero-section__title">
                        Master Chinese Vocabulary, <br /> One Word at a Time.
                    </h1>
                    <p className="hero-section__subtitle">
                        Your all-in-one platform for HSK test preparation. Interactive, engaging, and designed for effective learning.
                    </p>
                    <button
                        onClick={onGetStartedClick}
                        className="button button--primary hero-section__cta"
                    >
                        Get Started - It's Free
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose HSK Hub?</h2>
                        <p className="section-subtitle">Everything you need to succeed in one place.</p>
                    </div>
                    <div className="features-grid">
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="feature-card__icon" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" /></svg>}
                            title="Comprehensive Vocabulary"
                            description="Access complete vocabulary lists for all HSK levels, from 1 to 6, with detailed information."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="feature-card__icon" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                            title="Adaptive Practice"
                            description="Solidify your knowledge with smart flashcards that focus on words you need to review."
                        />
                         <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="feature-card__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            title="AI-Enhanced Quizzes"
                            description="Test yourself with multiple-choice questions and get AI feedback on your own sentences."
                        />
                         <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="feature-card__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>}
                            title="Personalized Study Plans"
                            description="Get a custom, AI-generated study plan tailored to your goals and schedule."
                        />
                    </div>
                </div>
            </section>

            {/* HSK Levels Section */}
            <section id="levels" className="levels-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Explore HSK Levels</h2>
                        <p className="section-subtitle">A structured path from beginner to advanced.</p>
                    </div>
                    <div className="levels-grid">
                        {hskLevels.map(level => (
                             <button
                               key={level}
                               className="level-card"
                               onClick={() => {
                                 if (typeof onSelectHSKLevel === 'function') {
                                   onSelectHSKLevel(level);
                                 }
                                 navigateToLearn();
                               }}
                               tabIndex={0}
                               aria-label={`Open HSK Level ${level}`}
                             >
                                 <div className="level-card__level-number">{level}</div>
                                 <h3 className="level-card__title">HSK Level</h3>
                             </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
