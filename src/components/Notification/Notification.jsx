import PropTypes from 'prop-types';
import { Message } from './styled-notification'

export const Notification = (props) => {

    const {
        message = "Be the first to add a tally! Woot!"
    } = props
    return (
        <Message>
            {message}
        </Message>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};