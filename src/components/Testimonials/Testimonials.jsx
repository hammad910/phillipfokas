import React, { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    company: 'SAMSUNG Food',
    quote:
      'The Enterpret platform is like the hero team of data analysts you always wanted - the ability to consolidate customer feedback from diverse touch points and identify both ongoing and emerging trends to ensure we focus on and build the right things has been amazing. We love the tools and support to help us train the results to our unique business and users and the Enterpret team is outstanding in every way.',
    name: 'Larisa Sheckler',
    title: 'COO, Samsung Food',
    avatar: 'https://i.pravatar.cc/88?img=5',
  },
  {
    company: 'Descript',
    quote:
      'Enterpret helps us unify feedback signals and cut through the noise so product teams can act quickly with confidence.',
    name: 'Jill McKinney',
    title: 'Director of Customer Support',
    avatar: 'https://i.pravatar.cc/88?img=47',
  },
  {
    company: 'Canva',
    quote:
      'Millions of records connected and searchable instantly. It changed how we make decisions across the org.',
    name: 'Jesse Walker',
    title: 'Head of Insights and User Advocacy',
    avatar: 'https://i.pravatar.cc/88?img=12',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const slide = testimonials[index];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={`${styles.nav} ${styles.left}`} onClick={prev} aria-label="Previous">
          <span>‹</span>
        </button>

        <div className={styles.card}>
          <div className={styles.company}>{slide.company}</div>
          <div className={styles.content}> 
            <div className={styles.bigQuote} aria-hidden="true">“</div>
            <p className={styles.quote}>{slide.quote}</p>
            <div className={styles.personRow}>
              <img className={styles.avatar} src={slide.avatar} alt={slide.name} />
              <div className={styles.personText}>
                <strong>{slide.name}</strong>
                <span>{slide.title}</span>
              </div>
            </div>
          </div>
        </div>

        <button className={`${styles.nav} ${styles.right}`} onClick={next} aria-label="Next">
          <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;


