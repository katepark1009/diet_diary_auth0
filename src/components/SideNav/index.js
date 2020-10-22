import React, { Fragment } from 'react'
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  YoutubeOutlined,
  StarOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const SideNav = ({ collapsed, isLoggedIn }) => {
  const history = useHistory();

  const handleClick = ({ key }) => {
    switch(key) {
      case 'home':
        history.push('/')
        break;
      default:
        return undefined
    }
  }
  return (
    <div style={{ width: 200, marginTop: '50px' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => history.push('/')}>
          Home
        </Menu.Item>
        {isLoggedIn && 
          <Fragment>
            <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => history.push('/profile')}>
              Profile
            </Menu.Item>
            <Menu.Item key="diary" icon={<YoutubeOutlined />} onClick={() => history.push('/diary')}>
              YouTube Diary
            </Menu.Item>
            <Menu.Item key="trending" icon={<ThunderboltOutlined />} onClick={() => history.push('/trending')}>
              Trending Videos
            </Menu.Item>
            <Menu.Item key="vip" icon={<StarOutlined />} onClick={() => history.push('/vip')}>
              VIP
            </Menu.Item>
          </Fragment>}        
      </Menu>
    </div>
  )
}

export default SideNav