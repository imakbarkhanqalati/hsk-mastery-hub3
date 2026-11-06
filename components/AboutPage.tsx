import React from 'react';

interface AboutPageProps {}

const PILLARS = [
  {
    code: '01 · LEXICAL PRECISION',
    title: 'Complete HSK 1–6 Vocabulary Lexicon',
    desc: 'Over 5,000 deduplicated Mandarin entries aligned with official HSK 1–6 standards, complete with tone-marked Pinyin, grammatical classifications, and bilingual example sentences.',
  },
  {
    code: '02 · MULTI-SENSORY MASTERY',
    title: 'Animated Stroke & Speech Studio',
    desc: 'Interactive Mi Zi Ge (米字格) stroke order animations with freehand brush tracing paired with live Mandarin speech recognition and syllable tone diagnostics.',
  },
  {
    code: '03 · CONTINUOUS PROGRESS',
    title: 'Adaptive Recall & Offline Study',
    desc: 'Daily word goals, streak telemetry, scheduled study reminders, and local Service Worker caching so you can review flashcards and vocabulary anywhere—even offline.',
  },
];

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About HSK Hub</h1>
          <p className="section-subtitle">
            An editorial-grade Mandarin learning workspace engineered for structured HSK 1–6 mastery, character stroke precision, and active recall.
          </p>
        </div>

        <div className="about-editorial-layout">
          {/* Mission Banner Card */}
          <section className="about-mission-card">
            <div className="about-mission-card__seal font-noto-sc" aria-hidden="true">
              汉
            </div>
            <div className="about-mission-card__body">
              <span className="about-kicker">OUR MISSION &amp; METHODOLOGY</span>
              <h2 className="about-mission-card__title">
                Bridging Textbook Rigor with Interactive Character &amp; Tone Technology
              </h2>
              <p className="about-mission-card__text">
                HSK Hub was designed to eliminate fragmented Mandarin study tools. By combining structured textbook curriculum units (<em>Mastering Chinese · 会通汉语</em>), an instant 5,000+ word searchable lexicon, animated character stroke guides, and real-time pronunciation feedback, learners can progress from HSK 1 survival phrases to HSK 6 fluency in one unified workspace.
              </p>
            </div>
          </section>

          {/* 3-Column Core Pillars Grid */}
          <section className="about-pillars-grid" aria-label="Platform Pillars">
            {PILLARS.map(pillar => (
              <div key={pillar.code} className="about-pillar-card">
                <span className="about-pillar-card__meta">{pillar.code}</span>
                <h3 className="about-pillar-card__title">{pillar.title}</h3>
                <p className="about-pillar-card__desc">{pillar.desc}</p>
              </div>
            ))}
          </section>

          {/* Creator & Contact Section */}
          <section className="about-contact-card">
            <div className="about-contact-card__left">
              <span className="about-kicker">CONNECT &amp; COLLABORATE</span>
              <h2 className="about-contact-card__title">Get in Touch</h2>
              <p className="about-contact-card__desc">
                Have curriculum feedback, partnership inquiries, or feature suggestions for HSK Hub? Reach out directly through any of the channels below.
              </p>
            </div>

            <div className="about-contact-links">
              <a href="mailto:akq.qalati@gmail.com" className="about-contact-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>akq.qalati@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/imakbarkhanqalati/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-pill"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>linkedin.com/in/imakbarkhanqalati</span>
              </a>

              <a
                href="https://github.com/imakbarkhanqalati"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-pill"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>github.com/imakbarkhanqalati</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;