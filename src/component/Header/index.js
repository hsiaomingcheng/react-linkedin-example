import React, { useState, useEffect } from 'react';
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

const langList = ['zh-TW', 'zh-CN', 'en-US']; // 之後可以提到外層，作為外層所傳入的props，(或是模擬後端傳來的api語系清單)

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

const meList = [
    {
        type: 'account',
        title: '設定和隱私',
    },
    {
        type: 'management',
        title: '文章和活動',
    },
    {
        title: '登出',
    },
];

function Header(props) {
    const { handleSkinChange } = props;
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState(t('lang.zh-TW'));

    // 判斷如果pathname為/，就帶入'home'，其他則把pathname最前面的/移除
    const [current, setCurrent] = useState(
        !location.pathname.replace('/', '')
            ? 'home'
            : location.pathname.replace('/', '')
    );

    // 切換語系事件
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(t(`lang.${lng}`));
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

    console.log('123');

    return (
        <HeaderContainer>
            {/* 選單 */}
            <Menu
                onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
                triggerSubMenuAction="click"
            >
                {menuList.map((item) => {
                    return (
                        <Menu.Item key={item.type} icon={item.svg}>
                            <NavLink to={item.route}>{t(item.text)}</NavLink>
                        </Menu.Item>
                    );
                })}
                <Menu.SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title="我"
                >
                    <Menu.ItemGroup title="帳戶">
                        <Menu.Item key="setting:1">設定和隱私</Menu.Item>
                        <Menu.Item key="setting:2">說明</Menu.Item>
                        <Menu.Item key="setting:3">預言</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="管理">
                        <Menu.Item key="setting:4">文章和活動</Menu.Item>
                        <Menu.Item key="setting:5">職缺廣告帳戶</Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
            </Menu>

            {/* 亮色暗色切換 */}
            <Switch
                checkedChildren={<Sun />}
                unCheckedChildren={<Moon />}
                defaultChecked
                onChange={(e) => handleSkinChange(e)}
            />

            {/* 語系切換 */}
            <Dropdown overlay={lngMenu} trigger="click">
                <div>{currentLang}</div>
            </Dropdown>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    padding: 0 30px;
    background: ${(props) => props.theme.header.backgroundColor};

    .ant-menu-horizontal {
        border-bottom: none;
        background: none;
    }

    .ant-menu-horizontal > .ant-menu-item a,
    .ant-menu-submenu-title,
    .anticon {
        color: ${(props) => props.theme.primaryTextColor};
    }
`;
