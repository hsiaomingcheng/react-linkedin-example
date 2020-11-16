import React from 'react';
import styled from 'styled-components/macro';

function Artdeco() {
    return (
        <Container>
            <p className="title">Ming-Cheng Hsiao</p>

            <a
                className="footer-link card-padding"
                href="https://tw.yahoo.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                深入探索
            </a>
        </Container>
    );
}

export default Artdeco;

const Container = styled.div`
    .title {
        font-size: 17px;
        font-weight: 600;
        line-height: 1.41176;
    }
`;
