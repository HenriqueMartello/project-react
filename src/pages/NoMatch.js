import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    h3 {
        padding-bottom: 520px;
    }
`;

export const NoMatch = ()  =>
    (
        <Styles>
            <div>
                <h3>Error 404 - Page not Found</h3>
            </div>
        </Styles>
    )