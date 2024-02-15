import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/navbar';

const { Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout>
      <NavBar />
      <Content
        style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer
        }}
      >
          <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
