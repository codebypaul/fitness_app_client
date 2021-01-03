import styled from 'styled-components'

const AuthBtn = styled.button`
    border: .05rem solid white;
    border-radius: .5rem;
    padding: .5rem 1rem;
    background: transparent;
    color: white;
    margin: 0 .5rem;
    &:hover {
        background: white;
        color: #1D3557;
        font-weight: bold;
    }
`

export { AuthBtn }