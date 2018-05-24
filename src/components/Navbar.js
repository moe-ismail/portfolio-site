import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


const HeaderLink = `
font-family: "Karla", "Helvetica Neue", Helvetica, sans-serif !important;
font-size: 0.85em;
font-weight: normal;
text-transform: uppercase;
color: #f2f2f2;
padding: 0;
margin: 0;
text-decoration: none;
`;

const StyledLink = styled(Link)`
${BaseLink}
&:hover, &:active, &:focus {
    color: #f2f2f2;;
}
`;

class Navbar extends React.Component {
    render() {
        const { title } = this.props
        return (
            <nav className="navbar">
                <div className="container">
                    <StyledLink to={('/')} className="sliding">
                    {title}
                    </StyledLink>
                    <StyledLink
                       to={('/about')}
                       className="slding float-right"
                       style={{ marginTop: '4px '}}

                    >
                      About & Contact
                    </StyledLink>
                </div>
            </nav>
        );
    }
}

export default Navbar;