import PropTypes from 'prop-types';
import sprite from '../../images/icons.svg';

export const SVG = (props) => {
const {
    width = "25",
    height = "25",
    name = "logo"
} = props
        
    return (
        <svg className="logo icon" width={width} height={height}>
            <use href={`${sprite}#${name}`}></use>
        </svg>
    )
};

SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string
}