import { SectionWrapperLogo, TitleTeardrop, Teardrop } from './styled-logo.js'

import { SVG } from '../Logo/Icons'

const Logo = () => {
 
    return (
            <Teardrop>
            <div>
                <SVG
                    width = "20"
                    height = "20"
                    name="logo"
                />
            </div>
            </Teardrop> 
    );
   
};

const LogoTitle = () => {

    return (
        <SectionWrapperLogo>
            <TitleTeardrop>
            <div className="tear">
                <SVG
                    width = "50"
                    height = "50"
                    name="logo" 
                />
                <p className="logo-title">Espresso Cafe!</p>
            </div>
            </TitleTeardrop>
        </SectionWrapperLogo>
    );
};

export  {Logo, LogoTitle }