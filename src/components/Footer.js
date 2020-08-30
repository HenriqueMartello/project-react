import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #282c34;
    }

    .footer {
        color: #bbb;

        &:hover {
            color: white;
        }
    }

    h6 {
        margin-left: auto;
        margin-right: auto;
    }

`;

export const Footer = () => (
    <Styles>
        <Navbar expand="lg" className="footer">
            <h6>&copy;{new Date().getFullYear()} Érik Soluções - All Rights Reserved</h6>
        </Navbar>
    </Styles>
)