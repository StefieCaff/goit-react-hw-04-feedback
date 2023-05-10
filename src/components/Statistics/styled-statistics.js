import styled from 'styled-components';

const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .stats-list {
        display: flex;
        text-align: center;
        margin-bottom: 15px;
        border: .2px solid rgba(91, 91, 91, 0.9);
        background-color: white;
    }

    .stats-item {
        display: flex;
        flex-direction: column;
        padding: 3px;
        color: rgba(91, 91, 91, 0.9);
        font-weight: bold;
        font-size: 11px;
    }
    
    .stats-message {
        font-size: 12px;
        font-weight: bold;
        color: rgba(91, 91, 91, 0.9);
    }
`;

export { StatsWrapper }