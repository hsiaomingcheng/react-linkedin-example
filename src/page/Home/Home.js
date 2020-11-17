import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import Card from '@component/Card';
import { IdentityCard, Artdeco } from './Card';
import { apiUserInfo } from '@apis';
import { getUserInfo } from '@actions/userAction';

function Home(props) {
    // 拿取會員資料
    useEffect(() => {
        const { getUserInfo } = props;

        apiUserInfo().then(function (response) {
            // handle success
            getUserInfo(response.data);
        });
    }, []);

    return (
        <Container>
            <LeftContent>
                <Card>
                    <IdentityCard
                        avatar={props.userInfo.avatar}
                        userName={props.userInfo.userName}
                        userTitle={props.userInfo.userTitle}
                    />
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

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (e) => {
        dispatch(getUserInfo(e));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
