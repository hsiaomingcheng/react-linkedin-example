import React from 'react';
import styled from 'styled-components/macro';

function IdentityCard() {
    return (
        <Container>
            <div className="info-box seperate-line card-padding">
                <img
                    className="avatar"
                    src="https://media-exp1.licdn.com/dms/image/C5103AQGvRmyxIzcbIQ/profile-displayphoto-shrink_100_100/0?e=1611187200&v=beta&t=hiuoOignDa1HBaEbJnEPTO9OmcjwKbfHQVbJFF2Kj6A"
                />
                <p className="title">Ming-Cheng Hsiao</p>
                <p className="sub-title">front-end web developer 前端工程師</p>
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
            width: 72px;
            height: 72px;
        }
        .title {
            font-size: 17px;
            font-weight: 600;
            line-height: 24px;
        }
        .sub-title {
            font-size: 13px;
            line-height: 16px;
            color: rgba(0, 0, 0, 0.6);
        }
    }
`;
