import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/background-image.jpg';

//CSS
const Styles = styled.div`
    .jumbo {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: black;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome!</h1>
                <p>Learn something with us!</p>
            </Container>
        </Jumbo>
    </Styles>
)