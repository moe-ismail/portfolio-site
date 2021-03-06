import styled from 'styled-components'

const SectionHeader = styled.h3 `
    text-transform: uppercase;
    font-size: 0.95em;
    letter-spacing: .05em;
    color: #707070;
    &::before {
    border-top: 3px solid #0078B8;
    opacity: 0.4;
    content: '';
    display: block;
    width: 30px;
    margin-bottom: 10px;
    }
`;

export default SectionHeader;