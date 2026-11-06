import React, { useState, useMemo, useCallback } from 'react';
import { vocabData } from '../data/vocab';

interface StudyTask {
  time: string;
  task: string;
  details: string;
}

interface DailyPlan {
  day: string;
  focus: string;
  tasks: StudyTask[];
}

interface StudyPlan {
  weekly_plan: DailyPlan[];
}

const StudyPlanPage: React.FC = () => {
  const [level, setLevel] = useState<number>(1);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(3);
  const [minutesPerDay, setMinutesPerDay] = useState<number>(30);
  
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'setup' | 'preview'>('setup');

  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number), []);

  const generatePlan = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPlan(null);

    try {
      const response = await fetch('/api/study-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level,
          daysPerWeek,
          minutesPerDay,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate study plan.');
      }

      if (data && data.weekly_plan) {
        setPlan(data);
        setActiveTab('preview');
      } else {
        setError('Failed to generate a valid study plan. The response was empty.');
      }
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Failed to generate study plan. Please check your API key in Settings > Secrets and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [level, daysPerWeek, minutesPerDay]);

  const renderSetup = () => (
    <div className="study-plan-setup">
      <div className="study-plan-tabs">
        <button 
          className={`study-plan-tab ${activeTab === 'setup' ? 'active' : ''}`}
          onClick={() => setActiveTab('setup')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          Setup
        </button>
        <button 
          className={`study-plan-tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
          disabled={!plan}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          Preview
        </button>
      </div>
      
      <div className="study-plan-card">
        <div className="study-plan-card-header">
          <h3 className="study-plan-card-title">Customize Your Study Plan</h3>
          <p className="study-plan-card-subtitle">Adjust the parameters below to create your personalized study schedule</p>
        </div>
        
        <div className="study-plan-card-body">
          <div className="input-group">
            <label htmlFor="hsk-level">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Your Current HSK Level
            </label>
            <select 
              id="hsk-level" 
              value={level} 
              onChange={e => setLevel(Number(e.target.value))} 
              className="input-group__select"
            >
              {hskLevels.map(l => <option key={l} value={l}>HSK {l}</option>)}
            </select>
          </div>
          
          <div className="input-group">
            <label htmlFor="days-per-week">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Study Days Per Week
              <span className="input-value">{daysPerWeek} days</span>
            </label>
            <div className="range-container">
              <input 
                id="days-per-week" 
                type="range" 
                min="1" 
                max="7" 
                value={daysPerWeek} 
                onChange={e => setDaysPerWeek(Number(e.target.value))} 
                className="input-group__range" 
              />
              <div className="range-labels">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
              </div>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="minutes-per-day">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Minutes Per Day
              <span className="input-value">{minutesPerDay} min</span>
            </label>
            <div className="range-container">
              <input 
                id="minutes-per-day" 
                type="range" 
                min="15" 
                max="90" 
                step="15" 
                value={minutesPerDay} 
                onChange={e => setMinutesPerDay(Number(e.target.value))} 
                className="input-group__range" 
              />
              <div className="range-labels">
                <span>15</span>
                <span>30</span>
                <span>45</span>
                <span>60</span>
                <span>75</span>
                <span>90</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="study-plan-card-footer">
          <button 
            onClick={generatePlan} 
            disabled={isLoading} 
            className="button button--primary generate-plan-button"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
                Generate Plan
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderPlan = () => {
    if (!plan) return null;
    return (
        <div className="study-plan-results">
            <div className="study-plan-tabs">
                <button 
                    className={`study-plan-tab ${activeTab === 'setup' ? 'active' : ''}`}
                    onClick={() => setActiveTab('setup')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    Setup
                </button>
                <button 
                    className={`study-plan-tab ${activeTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('preview')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Preview
                </button>
            </div>
            
            <div className="study-plan-card">
                <div className="study-plan-card-header">
                    <div className="plan-header-content">
                        <h2 className="plan-title">Your Personalized Study Plan</h2>
                        <div className="plan-meta">
                            <span className="plan-meta-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                HSK Level {level}
                            </span>
                            <span className="plan-meta-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {daysPerWeek} days/week
                            </span>
                            <span className="plan-meta-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                {minutesPerDay} min/day
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="plan-grid">
                    {plan.weekly_plan.map((dailyPlan: DailyPlan, index: number) => {
                        const dayNumber = dailyPlan.day.split(' ')[1];
                        return (
                            <div key={index} className="day-card">
                                <div className="day-card__header">
                                    <div className="day-number">Day {dayNumber}</div>
                                    <div className="day-card__focus">{dailyPlan.focus}</div>
                                </div>
                                <ul className="day-card__tasks">
                                    {dailyPlan.tasks.map((task: StudyTask, taskIndex: number) => (
                                        <li key={taskIndex} className="day-card__task">
                                            <div className="task-header">
                                                <span className="day-card__time">{task.time}</span>
                                                <span className="day-card__task-name">{task.task}</span>
                                            </div>
                                            <p className="day-card__task-details">{task.details}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                
                <div className="plan-footer">
                    <button
                        onClick={() => setPlan(null)}
                        className="button button--outline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        Create a New Plan
                    </button>
                    <button 
                        className="button button--primary"
                        onClick={() => {
                            // Create a text version of the plan
                            let planText = `HSK LEVEL ${level} STUDY PLAN\n`;
                            planText += `${daysPerWeek} days per week, ${minutesPerDay} minutes per day\n\n`;
                            
                            plan.weekly_plan.forEach((dailyPlan: DailyPlan) => {
                                planText += `${dailyPlan.day.toUpperCase()} - ${dailyPlan.focus}\n`;
                                dailyPlan.tasks.forEach((task: StudyTask) => {
                                    planText += `• ${task.time} - ${task.task}: ${task.details}\n`;
                                });
                                planText += `\n`;
                            });
                            
                            // Create a blob and download
                            const blob = new Blob([planText], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `hsk${level}_study_plan.txt`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Plan
                    </button>
                </div>
            </div>
        </div>
    );
  };
  
  return (
    <div className="study-plan-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">AI Study Plan</h1>
          <p className="section-subtitle">Get a personalized study schedule tailored to your goals.</p>
        </div>
        
        {error && (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        {!plan ? renderSetup() : (
          activeTab === 'setup' ? renderSetup() : renderPlan()
        )}
      </div>
    </div>
  );
};

export default StudyPlanPage;