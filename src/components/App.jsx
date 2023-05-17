import { useState, useEffect } from "react"


/* components/ styled Components */
import { LogoTitle } from './Logo/Logo.jsx';
import { Section } from './Section/Section.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.jsx";

/* ************************************************************************* */
export const App = () => {
//set state
  const [feedback, setFeedback] = useState(() => {
    const lSFeedback = JSON.parse(localStorage.getItem('feedback'));
    return lSFeedback || {good:0, neutral: 0, bad:0};
  });

// add feedback to local storage
  useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
}, [feedback]);
//get feedback from local storage
  useEffect(() => {
    const feedback = JSON.parse(localStorage.getItem('feedback'));
    if (feedback) {
      setFeedback(feedback);
    }
  }, [] )
  
/* helper functions*/
  
// calculate total tallies on state change
  const countTotalFeedback = () => {
    return (feedback.good + feedback.bad + feedback.neutral);
  }

// constant for notification logic
  const total = countTotalFeedback()
  
// calculate positive tallies on state change
  const countPositiveFeedbackPercentage = () => {
    return (
    isNaN(Math.round((feedback.good / countTotalFeedback()) * 100))
      ? 0
        : Math.round((feedback.good / countTotalFeedback()) * 100)
    );
  };

//event handlers
  const handleGoodFeedback = () => {
    setFeedback(prev => ({ ...prev, good: prev.good + 1}));
  }
  
  const handleNeutralFeedback = () => {
    setFeedback(prev => ({ ...prev, neutral: prev.neutral + 1}));
  }
 
  const handleBadFeedback = () => {
    setFeedback(prev => ({ ...prev, bad: prev.bad + 1}));
  }
  
    return (
      <> 
        <LogoTitle />
        <Section title="How did your espresso taste today?">
          <FeedbackOptions
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            onGoodFeedback={handleGoodFeedback}
            onNeutralFeedback={handleNeutralFeedback}
            onBadFeedback={handleBadFeedback}
          />
          {
            total === 0
              ? (
                <Notification message = "There are no tallies yet. Click an option above to add a tally, Woot!"/>
              )
              : (
                <Statistics
                  good={feedback.good}
                  neutral={feedback.neutral}
                  bad={feedback.bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
                  />
              )
          }
        </Section>
      </>
    );
};
