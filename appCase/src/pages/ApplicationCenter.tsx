import React, { useState } from 'react';
import { 
  Button, 
  Space, 
  Input, 
  Table,
  Tag,
  Card
} from 'antd';
import { 
  AppstoreOutlined, 
  UnorderedListOutlined,
  PlusOutlined,
  SearchOutlined,
  CopyOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const { Search } = Input;

// 简化的应用类型
interface SimpleApp {
  key: string;
  name: string;
  version: string;
  domain: string;
  author: string;
  createDate: string;
  updateDate: string;
}

export const ApplicationCenter: React.FC = () => {
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  
  // 简化的测试数据
  const simpleApps: SimpleApp[] = [
    {
      key: '1',
      name: '空调热管理',
      version: '2.1.0',
      domain: '热管理',
      author: '张工程师',
      createDate: '2024-01-15',
      updateDate: '2024-03-20'
    },
    {
      key: '2', 
      name: '电池管理系统',
      version: '1.8.5',
      domain: '电池',
      author: '李工程师',
      createDate: '2024-02-10',
      updateDate: '2024-03-25'
    },
    {
      key: '3',
      name: '车身结构分析',
      version: '3.2.1', 
      domain: '结构',
      author: '王工程师',
      createDate: '2024-01-20',
      updateDate: '2024-03-18'
    }
  ];

  // 表格列配置
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '最新版本',
      dataIndex: 'version',
      key: 'version',
      render: (version: string) => `v${version}`,
    },
    {
      title: '应用方向',
      dataIndex: 'domain', 
      key: 'domain',
      render: (domain: string) => <Tag color="blue">{domain}</Tag>,
    },
    {
      title: '创建人',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '创建时间',
      dataIndex: 'createDate',
      key: 'createDate',
    },
    {
      title: '更新时间', 
      dataIndex: 'updateDate',
      key: 'updateDate',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button 
            type="text" 
            icon={<CopyOutlined />}
            onClick={() => console.log('复制')}
          >
            复制
          </Button>
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />}
            onClick={() => console.log('删除')}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  console.log('ApplicationCenter 渲染，viewMode:', viewMode);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>应用中心</h1>
        <Space>
          <Button 
            type={viewMode === 'card' ? 'primary' : 'default'}
            icon={<AppstoreOutlined />}
            onClick={() => {
              console.log('切换到卡片视图');
              setViewMode('card');
            }}
          >
            卡片视图
          </Button>
          <Button 
            type={viewMode === 'list' ? 'primary' : 'default'}
            icon={<UnorderedListOutlined />}
            onClick={() => {
              console.log('切换到列表视图');
              setViewMode('list');
            }}
          >
            列表视图
          </Button>
          <Button type="primary" icon={<PlusOutlined />}>
            创建应用
          </Button>
        </Space>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Search 
          placeholder="搜索应用..." 
          style={{ width: 300 }} 
          enterButton={<SearchOutlined />}
        />
      </div>

      {viewMode === 'list' ? (
        <div>
          <h2>应用表格</h2>
          <Table 
            columns={columns} 
            dataSource={simpleApps} 
            pagination={false}
          />
        </div>
      ) : (
        <div>
          <h2>应用卡片</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {simpleApps.map((app) => (
              <Card
                key={app.key}
                title={app.name}
                extra={<Tag color="blue">{app.domain}</Tag>}
                actions={[
                  <Button key="copy" type="text" icon={<CopyOutlined />}>复制</Button>,
                  <Button key="delete" type="text" danger icon={<DeleteOutlined />}>删除</Button>
                ]}
              >
                <p><strong>版本:</strong> v{app.version}</p>
                <p><strong>创建人:</strong> {app.author}</p>
                <p><strong>创建时间:</strong> {app.createDate}</p>
                <p><strong>更新时间:</strong> {app.updateDate}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationCenter;
