import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Menu, Switch } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Moon from '@icon/header/moon.svg';
import Sun from '@icon/header/sun.svg';

function Header(props) {
    const { handleSkinChange } = props;
    const location = useLocation();

    // 判斷如果pathname為/，就帶入'home'，其他則把pathname最前面的/移除
    const [current, setCurrent] = useState(
        !location.pathname.replace('/', '')
            ? 'home'
            : location.pathname.replace('/', '')
    );

    return (
        <HeaderContainer>
            <Menu
                onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
            >
                <Menu.Item key="home" icon={<MailOutlined />}>
                    <NavLink to="/">首頁</NavLink>
                </Menu.Item>
                <Menu.Item key="netWork" icon={<AppstoreOutlined />}>
                    <NavLink to="/netWork">人脈</NavLink>
                </Menu.Item>
                <Menu.Item key="job" icon={<SettingOutlined />}>
                    <NavLink to="/job">職缺</NavLink>
                </Menu.Item>
                <Menu.Item key="message" icon={<MailOutlined />}>
                    <NavLink to="/message">訊息</NavLink>
                </Menu.Item>
                <Menu.Item key="notice" icon={<MailOutlined />}>
                    <NavLink to="/notice">通知</NavLink>
                </Menu.Item>
            </Menu>

            <Switch
                checkedChildren={<Sun />}
                unCheckedChildren={<Moon />}
                defaultChecked
                onChange={(e) => handleSkinChange(e)}
            />
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;

    .ant-menu-horizontal > .ant-menu-item a {
        color: ${(props) => props.theme.primaryColor};
    }
`;
