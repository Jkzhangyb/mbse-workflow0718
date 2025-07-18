import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, Space } from 'antd';
import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined, 
  UserOutlined, 
  SettingOutlined, 
  LogoutOutlined,
  AppstoreOutlined,
  ProjectOutlined,
  FileTextOutlined,
  DatabaseOutlined,
  TeamOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './MainLayout.scss';
import '../styles/debug.scss';

const { Header, Sider, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <AppstoreOutlined />,
      label: <Link to="/">应用中心</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects">项目管理</Link>,
    },
    {
      key: '/workflows',
      icon: <FileTextOutlined />,
      label: <Link to="/workflows">工作流</Link>,
    },
    {
      key: '/data',
      icon: <DatabaseOutlined />,
      label: <Link to="/data">数据管理</Link>,
    },
    {
      key: '/team',
      icon: <TeamOutlined />,
      label: <Link to="/team">团队协作</Link>,
    },
    {
      key: '/analytics',
      icon: <BarChartOutlined />,
      label: <Link to="/analytics">分析报告</Link>,
    },
  ];

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      key: 'divider',
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const handleUserMenuClick = (e: any) => {
    switch (e.key) {
      case 'logout':
        // 处理退出登录
        console.log('退出登录');
        break;
      case 'profile':
        // 处理个人资料
        console.log('个人资料');
        break;
      case 'settings':
        // 处理系统设置
        console.log('系统设置');
        break;
    }
  };

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.startsWith('/app/')) {
      return ['/'];
    }
    return [path];
  };

  return (
    <Layout className="main-layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        className="main-sidebar"
      >
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <AppstoreOutlined />
            </div>
            {!collapsed && (
              <div className="logo-text">
                <span className="logo-title">MBSE Platform</span>
                <span className="logo-subtitle">工作流平台</span>
              </div>
            )}
          </div>
        </div>
        
        <Menu
          mode="inline"
          selectedKeys={getSelectedKeys()}
          items={menuItems}
          className="sidebar-menu"
        />
      </Sider>
      
      <Layout className="main-content-layout">
        <Header className="main-header">
          <div className="header-left">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="collapse-button"
            />
          </div>
          
          <div className="header-right">
            <Space size="middle">
              <Dropdown
                menu={{ 
                  items: userMenuItems,
                  onClick: handleUserMenuClick 
                }}
                trigger={['click']}
                placement="bottomRight"
              >
                <div className="user-profile">
                  <Avatar size={32} icon={<UserOutlined />} />
                  <span className="user-name">管理员</span>
                </div>
              </Dropdown>
            </Space>
          </div>
        </Header>
        
        <Content className="main-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
