import React from 'react';
import styled from 'styled-components/macro';
import Card from '@component/Card';
import { IdentityCard, Artdeco } from './Card';

function Home(props) {
    console.log('props', props);
    return (
        <Container>
            <LeftContent>
                <Card>
                    <IdentityCard />
                </Card>

                <Card>
                    <Artdeco />
                </Card>
            </LeftContent>
            <CenterContent>
                <Card>center</Card>
            </CenterContent>
            <RightContent>
                <Card>right</Card>
            </RightContent>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 49px;
`;
const LeftContent = styled.div`
    width: 216px;

    .footer-link {
        display: flex;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.9);

        &:hover {
            background: rgba(0, 0, 0, 0.08);
        }
    }
`;
const CenterContent = styled.div`
    margin: 0 25px;
    width: 552px;
`;
const RightContent = styled.div`
    width: 312px;
`;
