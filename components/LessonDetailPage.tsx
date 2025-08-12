import React, { useState } from 'react';
import { Lesson } from '../data/lessons';
import { Word } from '../types';
import VocabCard from './VocabCard';

interface LessonDetailPageProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonDetailPage: React.FC<LessonDetailPageProps> = ({ lesson, onBack }) => {
    const [activeTab, setActiveTab] = useState<'dialogue' | 'vocabulary' | 'grammar'>('dialogue');
    
    return (
        <div className="lesson-detail-page animate-fade-in">
            <div className="container">
                <button onClick={onBack} className="button button--secondary back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"></path>
                        <path d="M12 19l-7-7 7-7"></path>
                    </svg>
                    Back to Lessons
                </button>
                
                <div className="lesson-header">
                    <div className="lesson-header__badges">
                        <span className={`badge ${'level-' + lesson.hskLevel}`}>HSK {lesson.hskLevel}</span>
                        <span className="badge badge--outline">Lesson {lesson.id.replace('lesson', '')}</span>
                    </div>
                    <h1 className="lesson-title">{lesson.title}</h1>
                    <p className="lesson-description">{lesson.description}</p>
                </div>

                <div className="lesson-tabs">
                    <button 
                        className={`lesson-tab ${activeTab === 'dialogue' ? 'lesson-tab--active' : ''}`}
                        onClick={() => setActiveTab('dialogue')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Dialogue
                    </button>
                    <button 
                        className={`lesson-tab ${activeTab === 'vocabulary' ? 'lesson-tab--active' : ''}`}
                        onClick={() => setActiveTab('vocabulary')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        Vocabulary
                    </button>
                    <button 
                        className={`lesson-tab ${activeTab === 'grammar' ? 'lesson-tab--active' : ''}`}
                        onClick={() => setActiveTab('grammar')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        Grammar
                    </button>
                </div>

                {activeTab === 'dialogue' && (
                    <div className="lesson-section">
                        <div className="dialogue-container">
                            {lesson.dialogue.map((line, index) => (
                                <div key={index} className={`dialogue-line ${index % 2 === 0 ? 'dialogue-line--speakerA' : 'dialogue-line--speakerB'}`}>
                                    <p className="dialogue-line__char">{line.character}: "{line.hanzi}"</p>
                                    <p className="dialogue-line__pinyin">{line.pinyin}</p>
                                    <p className="dialogue-line__translation">{line.translation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'vocabulary' && (
                    <div className="lesson-section">
                        <div className="vocab-grid">
                            {lesson.vocabularyExplanation.map((word, index) => (
                                <VocabCard
                                    key={index}
                                    word={{char: word.hanzi, pinyin: word.pinyin, meaning: word.english, grammar: '', examples: []}}
                                    onSelect={() => {}} // No action on select in this context
                                    hskLevel={lesson.hskLevel}
                                    wordNumber={index + 1}
                                    totalWords={lesson.vocabularyExplanation.length}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'grammar' && (
                    <div className="lesson-section">
                        <div className="grammar-container">
                            <div className="grammar-point">
                                <h3 className="grammar-point__title">{lesson.grammarPoint}</h3>
                                <p className="grammar-point__structure">{lesson.structure}</p>
                                <p className="grammar-point__explanation">{lesson.explanation}</p>
                            </div>
                            
                            <div className="grammar-examples">
                                <h4 className="grammar-examples__title">Examples</h4>
                                {lesson.examples.map((example, index) => (
                                    <div key={index} className="grammar-example">
                                        <p className="grammar-example__hanzi">{example.hanzi}</p>
                                        <p className="grammar-example__pinyin">{example.pinyin}</p>
                                        <p className="grammar-example__translation">{example.translation}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonDetailPage;