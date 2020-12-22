import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper className="footer bg-dark mt-5">
            <div className="container text-center">
                <span className="">@2020 Product of team 5</span>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    background: var(--schemeGradient);
    color: white;
`
export default Footer;