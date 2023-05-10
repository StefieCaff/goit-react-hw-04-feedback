import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons';
import { Logo } from '../Logo/Logo.jsx';
import { StatsWrapper } from './styled-statistics';
import { SectionWrapperLogo } from 'components/Logo/styled-logo';

export const Statistics = ( props) => {
   const  {
        good = 0,
        neutral = 0,
        bad = 0,
        total = 0,
        positivePercentage = 0
    } = props;

    
    return (
        <StatsWrapper>
            <SectionWrapperLogo>
                <Logo />
            </SectionWrapperLogo>
            <ul className="stats-list">
                <li className="stats-item">
                    <StatisticsImg
                        message="FIRE!"
                        icon = "good-fire"
                    />
                    <p style={{
                        color: "#e45454",
                        fontSize: 16
                    }}>
                        {good}</p>
                </li>
                <li className="stats-item">
                    <StatisticsImg
                        message="MEH!"
                        icon = "neutral-meh"
                    />
                    <p style={{
                        color: "#b4b4b4",
                        fontSize: 16
                    }}>
                        {neutral}</p>
                </li>
                <li className="stats-item">
                    <StatisticsImg
                        message="STINKY!"
                        icon="bad-stinky"
                    />
                    <p style={{
                        color: "#a9da50",
                        fontSize: 15,
                    }}>
                        {bad}</p>
                </li>
            </ul>
            <div>
                <p className="stats-message">
                    Thanks! {total} total tallies. {positivePercentage}% are
                    <span style={{
                        color: "#e45454",
                        fontSize: 15
                    }}> FIRE</span> tallies.
                </p>
            </div>
        </StatsWrapper>
    );
};


const StatisticsImg = (props) => {
    const {
        message = "How's it?",
        icon = "logo",
    } = props;

    return (
            <div>
                <SVG
                    width = "70"
                    height = "70"
                    name={icon}
                />
                <p className="stats-message">{message}</p>
            </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

StatisticsImg.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}