import styled from 'styled-components';

const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
    color: rgba(91, 91, 91, 0.9);
    font-weight: bold;
    font-size: 11px;
    border: 1.5px solid rgba(91, 91, 91, 0.9);
    border-radius: 3px;
    background: white;
    box-shadow: 1px 3px 4px 1px rgba(0,0,0,0.33);
    -webkit-box-shadow: 3px 1px 8px 1px rgba(0,0,0,0.33);
    -moz-box-shadow: 1px 3px 4px 1px rgba(0,0,0,0.33);
    cursor: pointer;
    transition-duration: 1s;
    -webkit-transition-duration: 0.4s; /* Safari */

    &:hover,
    &:focus,
    &:active {
        transition-duration: 1s;
        box-shadow: 0px 1px 122px 24px rgba(228,84,84,0.66);
        -webkit-box-shadow: 0px 1px 122px 24px rgba(228,84,84,0.66);
        -moz-box-shadow: 0px 1px 122px 24px rgba(228,84,84,0.66);
        border-color: rgba(228, 84, 84, 1);
    }

    & > span {
        margin-bottom: 5px;
    }

    .icon {
        padding: 3px;
    }

`;

export { Button, FeedbackWrapper}