import styled from 'styled-components';

const SectionWrapperLogo = styled.div`
    margin: 20px auto;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const TitleTeardrop = styled.div`
    align-items: center;
    display: inline-block;
    position: relative;
    border: 3px solid #e45454;
    border-radius: 0px 50% 50% 50%;
    transform: rotate(45deg); /* Angle at the top */
    height: 8rem;
    width: 8rem;
    margin: 30px 10px 0;

    .tear {
    transform: rotate(-45deg);
    position: absolute;
    padding: 15px 5px 5px 5px;
    }

    .logo{ 
        position: relative;
        padding-left: 20px;
        fill: #e45454;
    }
    .logo-title{
        position: relative;
        padding-right: 10px;
        color: #e45454;
    }
`;

const Teardrop = styled.div`
    align-items: center;
    display: inline-block;
    border: 2.5px solid #e45454;
    border-radius: 0px 50% 50% 50%;
    transform: rotate(45deg); /* Angle at the top */
    height: 2rem;
    width: 2rem;
    margin: 20px 10px 5px 10px;

    div {
    padding: 6px;
    transform: rotate(-45deg);
    position: absolute;
    top: 0;
    }

    .logo{
      position: relative;
      fill: #e45454;
    }
`;

export { SectionWrapperLogo, TitleTeardrop, Teardrop }
