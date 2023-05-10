import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons.jsx'
import { Button, FeedbackWrapper } from '../FeedbackOptions/styled-feedback-options.js'
 
export const FeedbackOptions = (props) => {
    const {
        good = "good",
        neutral= "neutral",
        bad = "bad",
        onGoodFeedback,
        onNeutralFeedback,
        onBadFeedback
    } = props

    return (
        <FeedbackWrapper>
            <Button
                type="button"
                name={good}
                onClick={onGoodFeedback}
                className="good-hover"
            >
                <SVG
                    width="40"
                    height="40"
                    name="good"
                />
                <span>Good</span>
            </Button>
            <Button
                type="button"
                name={neutral}
                onClick={onNeutralFeedback}
                className="neutral-hover"
            >
                <SVG
                    width="40"
                    height="40"
                    name="neutral"
                />
                <span>Meh</span>
            </Button>
            <Button
                type="button"
                name={bad}
                onClick={onBadFeedback}
            >
                <SVG
                    width="40"
                    height="40"
                    name="bad"
                />
                <span>Bad</span>
            </Button>
        </FeedbackWrapper>
    )
};


FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onGoodFeedback: PropTypes.func.isRequired,
    onNeutralFeedback: PropTypes.func.isRequired,
    onBadFeedback: PropTypes.func.isRequired
};