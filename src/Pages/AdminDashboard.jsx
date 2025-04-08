import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Breadcrumb,
  Card,
  Row,
  Col,
  Button,
} from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.png";

const { Header, Sider, Content, Footer } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="80"
        className="!bg-black"
      >
        {/* Logo */}
        <div className="flex justify-center items-center py-4">
          <img
            src={logo}
            alt="Logo"
            className={`${collapsed ? "h-8" : "h-12"} transition-all duration-300`}
          />
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>Properties</Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        {/* Header */}
        <Header className="bg-white flex justify-between items-center px-4 shadow">
        <Button
  type="text"
  onClick={() => setCollapsed(!collapsed)}
  icon={
    collapsed ? (
      <MenuUnfoldOutlined style={{ color: "white", fontSize: 18 }} />
    ) : (
      <MenuFoldOutlined style={{ color: "white", fontSize: 18 }} />
    )
  }
/>

          <Avatar icon={<UserOutlined />} />
        </Header>

        
        <Content className="m-4">
          <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          <div className="p-6 bg-white rounded shadow">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Users" bordered={false}>0</Card>
              </Col>
              <Col span={8}>
                <Card title="Properties" bordered={false}>0</Card>
              </Col>
              <Col span={8}>
                <Card title="Active Sessions" bordered={false}>0</Card>
              </Col>
            </Row>
          </div>
        </Content>

        {/* Footer */}
        <Footer className="text-center">
          Ant Design Admin Dashboard ©2025
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
