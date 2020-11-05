import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Menu, Switch, Dropdown } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Moon from '@icon/header/moon.svg';
import Sun from '@icon/header/sun.svg';
import { useTranslation } from 'react-i18next';

const langList = ['zh-TW', 'zh-CN', 'en-US'];

const menuList = [
    {
        type: 'home',
        text: 'header.home',
        svg: <MailOutlined />,
        route: '/',
    },
    {
        type: 'netWork',
        text: 'header.netWork',
        svg: <AppstoreOutlined />,
        route: '/netWork',
    },
    {
        type: 'job',
        text: 'header.job',
        svg: <SettingOutlined />,
        route: '/job',
    },
    {
        type: 'message',
        text: 'header.message',
        svg: <MailOutlined />,
        route: '/message',
    },
    {
        type: 'notice',
        text: 'header.notice',
        svg: <SettingOutlined />,
        route: '/notice',
    },
];

function Header(props) {
    const { handleSkinChange } = props;
    const location = useLocation();
    const { t, i18n } = useTranslation();

    // 判斷如果pathname為/，就帶入'home'，其他則把pathname最前面的/移除
    const [current, setCurrent] = useState(
        !location.pathname.replace('/', '')
            ? 'home'
            : location.pathname.replace('/', '')
    );

    // 切換語系事件
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // 語系下拉選單選項
    const lngMenu = (
        <Menu>
            {langList.map((item) => {
                return (
                    <Menu.Item key={item} onClick={() => changeLanguage(item)}>
                        <span>{t(`lang.${item}`)}</span>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <HeaderContainer>
            <Menu
                onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
            >
                {menuList.map((item) => {
                    return (
                        <Menu.Item key={item.type} icon={item.svg}>
                            <NavLink to={item.route}>{t(item.text)}</NavLink>
                        </Menu.Item>
                    );
                })}
            </Menu>

            <Switch
                checkedChildren={<Sun />}
                unCheckedChildren={<Moon />}
                defaultChecked
                onChange={(e) => handleSkinChange(e)}
            />

            <Dropdown overlay={lngMenu} trigger="click">
                <div>切換語系</div>
            </Dropdown>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;

    .ant-menu-horizontal > .ant-menu-item a,
    .anticon {
        color: ${(props) => props.theme.primaryTextColor};
    }
`;
