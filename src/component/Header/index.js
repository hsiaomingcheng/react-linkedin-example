import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';

function Header() {
    const location = useLocation();

    // 判斷如果pathname為/，就帶入'home'，其他則把pathname最前面的/移除
    const [current, setCurrent] = useState(
        !location.pathname.replace('/', '')
            ? 'home'
            : location.pathname.replace('/', '')
    );

    return (
        <div>
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
        </div>
    );
}

export default Header;
