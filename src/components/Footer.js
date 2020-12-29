import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper className="footer mt-5">
            <div className="container text-center">
                <span className="">@2020 Product of team 5</span>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    background: #1D3557;
    color: white;
`
export default Footer;