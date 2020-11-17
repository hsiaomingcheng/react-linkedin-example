import React from 'react';
import styled from 'styled-components/macro';
import avatarLocal from '@assets/image/avatar.png';

function IdentityCard(props) {
    return (
        <Container>
            <div className="info-box seperate-line card-padding">
                <img
                    className="avatar"
                    src={props.avatar ? props.avatar : avatarLocal}
                />
                <p className="name">{props.userName}</p>
                <p className="title">{props.userTitle}</p>
            </div>

            <a
                className="footer-link card-padding"
                href="https://tw.yahoo.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                儲存的內容
            </a>
        </Container>
    );
}

export default IdentityCard;

const Container = styled.div`
    position: relative;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background: url('https://static-exp3.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm')
            50% 50% no-repeat;
        background-size: 462px;
        width: 100%;
        height: 54px;
    }

    .info-box {
        position: relative;
        text-align: center;
        .avatar {
            border-radius: 50%;
            border: solid 2px #fff;
            background: #fff;
            width: 72px;
            height: 72px;
        }
        .name {
            font-size: 17px;
            font-weight: 600;
            line-height: 24px;
        }
        .title {
            font-size: 13px;
            line-height: 16px;
            color: rgba(0, 0, 0, 0.6);
        }
    }
`;
