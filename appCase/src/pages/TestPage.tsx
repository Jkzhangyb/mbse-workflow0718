import React from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import { AppstoreOutlined, PlayCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TestPage: React.FC = () => {
  return (
    <div style={{ 
      padding: '24px',
      background: '#fff',
      minHeight: '100%',
      border: '2px solid green' 
    }}>
      <div style={{ 
        background: 'yellow', 
        padding: '20px', 
        marginBottom: '20px',
        border: '1px solid red' 
      }}>
        <h1 style={{ color: 'red', fontSize: '24px' }}>测试页面 - 应该可见</h1>
        <p style={{ color: 'blue', fontSize: '16px' }}>如果你看到这个，说明组件正在渲染</p>
      </div>
      
      <Title level={2}>
        <AppstoreOutlined /> 应用中心测试
      </Title>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="测试应用"
            hoverable
            actions={[
              <Button type="primary" icon={<PlayCircleOutlined />}>
                打开应用
              </Button>
            ]}
          >
            <Paragraph>这是一个测试应用，用于验证基本功能是否正常。</Paragraph>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="另一个应用"
            hoverable
            actions={[
              <Button type="primary" icon={<PlayCircleOutlined />}>
                打开应用
              </Button>
            ]}
          >
            <Paragraph>这是另一个测试应用，用于验证布局是否正确。</Paragraph>
          </Card>
        </Col>
      </Row>
      
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        background: 'lightblue',
        border: '1px solid navy' 
      }}>
        <h3>调试信息</h3>
        <ul>
          <li>当前时间: {new Date().toLocaleString()}</li>
          <li>组件状态: 正常渲染</li>
          <li>路由: /test</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
