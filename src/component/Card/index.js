import React from 'react';
import styled from 'styled-components/macro';

function Card(props) {
    return <Container>{props.children}</Container>;
}

export default Card;

const Container = styled.div`
    margin: 0 0 8px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 5px 4px 0px rgb(0 0 0 / 0.1);
    overflow: hidden;

    .card-padding {
        padding: 12px;
    }

    .seperate-line {
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
`;
