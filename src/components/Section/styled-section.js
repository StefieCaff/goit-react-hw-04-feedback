import styled from 'styled-components';

const SectionWrapper = styled.div`
    margin: 30px auto;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-width: 260px;
    background: rgba(235, 235, 235, 1);
    border: 2px solid rgba(228, 84, 84, 1);
    border-radius: 3px;
    box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
    -webkit-box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
    -moz-box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
`;

const SectionHeader = styled.h2`
    text-align: center;
    font-size: 20px;
    //color:  rgba(228, 84, 84, 1);
    color: rgba(91, 91, 91, 0.9);
    margin-bottom: 20px;
`

export { SectionWrapper, SectionHeader };