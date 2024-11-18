import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router';

const { Header, Content } = Layout;

const Home = () => {
  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" style={{ minWidth: 120, background: '#fff', minHeight: 48 }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout style={{ minHeight: '100vh', padding: '0 48px' }}>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          adasdasd
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
