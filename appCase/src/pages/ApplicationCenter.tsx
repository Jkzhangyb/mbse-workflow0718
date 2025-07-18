import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Button, 
  Space, 
  Tag, 
  Input, 
  Select, 
  Tabs, 
  Row, 
  Col,
  Avatar,
  Typography,
  Tooltip,
  Badge,
  Carousel,
  Empty,
  Spin
} from 'antd';
import { 
  AppstoreOutlined, 
  UnorderedListOutlined,
  PlusOutlined,
  SearchOutlined,
  HeartOutlined,
  HeartFilled,
  PlayCircleOutlined,
  SettingOutlined,
  StarOutlined,
  EyeOutlined,
  DownloadOutlined,
  RightOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { Application } from '../types';
import './ApplicationCenter.scss';

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

export const ApplicationCenter: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTab, setSelectedTab] = useState('all');
  const [favoriteApps, setFavoriteApps] = useState<Set<string>>(new Set());

  // 模拟数据
  const mockApplications: Application[] = [
    {
      id: '1',
      name: '空调热管理',
      description: '车辆空调系统热管理分析与仿真，支持多种工况下的热力学计算',
      version: '2.1.0',
      domain: '热管理',
      author: '张工程师',
      createdAt: '2024-01-15',
      updatedAt: '2024-03-20',
      isRecommended: true,
      isFavorite: false,
      isOwned: false,
      tags: ['热管理', '仿真', '空调'],
      category: 'simulation',
      status: 'active',
      icon: '🌡️',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '2',
      name: '电池管理系统',
      description: '新能源汽车电池管理系统设计与优化，包含电池包热管理和安全监控',
      version: '1.8.5',
      domain: '电池',
      author: '李工程师',
      createdAt: '2024-02-10',
      updatedAt: '2024-03-25',
      isRecommended: true,
      isFavorite: false,
      isOwned: true,
      tags: ['电池', 'BMS', '新能源'],
      category: 'design',
      status: 'active',
      icon: '🔋',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '3',
      name: '车身结构分析',
      description: '车身结构强度分析，支持多种材料属性和载荷条件的有限元分析',
      version: '3.2.1',
      domain: '结构',
      author: '王工程师',
      createdAt: '2024-01-20',
      updatedAt: '2024-03-18',
      isRecommended: false,
      isFavorite: false,
      isOwned: false,
      tags: ['结构', '强度', 'CAE'],
      category: 'analysis',
      status: 'active',
      icon: '🚗',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '4',
      name: '动力总成匹配',
      description: '动力总成参数匹配与优化，包含发动机、变速箱、电机等关键部件',
      version: '2.0.3',
      domain: '动力',
      author: '刘工程师',
      createdAt: '2024-02-05',
      updatedAt: '2024-03-22',
      isRecommended: true,
      isFavorite: false,
      isOwned: false,
      tags: ['动力', '匹配', '优化'],
      category: 'optimization',
      status: 'active',
      icon: '⚙️',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '5',
      name: '自动驾驶仿真',
      description: '自动驾驶算法仿真测试平台，支持多种交通场景和传感器模型',
      version: '1.5.2',
      domain: '智能驾驶',
      author: '陈工程师',
      createdAt: '2024-01-30',
      updatedAt: '2024-03-15',
      isRecommended: false,
      isFavorite: false,
      isOwned: true,
      tags: ['自动驾驶', '仿真', 'AI'],
      category: 'simulation',
      status: 'active',
      icon: '🤖',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '6',
      name: '车辆动力学',
      description: '车辆动力学建模与仿真，包含悬架、转向、制动等子系统',
      version: '2.3.0',
      domain: '动力学',
      author: '赵工程师',
      createdAt: '2024-02-15',
      updatedAt: '2024-03-28',
      isRecommended: false,
      isFavorite: false,
      isOwned: false,
      tags: ['动力学', '悬架', '操控'],
      category: 'simulation',
      status: 'active',
      icon: '🏎️',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  useEffect(() => {
    setLoading(true);
    // 模拟加载延迟
    setTimeout(() => {
      setApplications(mockApplications);
      setFilteredApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = applications;

    // 根据选项卡过滤
    if (selectedTab === 'favorites') {
      filtered = filtered.filter(app => favoriteApps.has(app.id));
    } else if (selectedTab === 'owned') {
      filtered = filtered.filter(app => app.isOwned);
    }

    // 根据分类过滤
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(app => app.category === selectedCategory);
    }

    // 根据搜索关键词过滤
    if (searchKeyword) {
      filtered = filtered.filter(app => 
        app.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        app.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchKeyword.toLowerCase()))
      );
    }

    setFilteredApplications(filtered);
  }, [applications, selectedTab, selectedCategory, searchKeyword, favoriteApps]);

  const handleSearch = (value: string) => {
    setSearchKeyword(value);
  };

  const handleFavorite = (appId: string) => {
    const newFavorites = new Set(favoriteApps);
    if (newFavorites.has(appId)) {
      newFavorites.delete(appId);
    } else {
      newFavorites.add(appId);
    }
    setFavoriteApps(newFavorites);
  };

  const handleOpenApplication = (app: Application) => {
    navigate(`/app/${app.id}`);
  };

  const handleOpenWorkflow = (app: Application) => {
    navigate(`/app/${app.id}/workflow`);
  };

  const handleCreateApplication = () => {
    navigate('/app/new');
  };

  const categories = [
    { label: '全部', value: 'all' },
    { label: '仿真分析', value: 'simulation' },
    { label: '设计优化', value: 'design' },
    { label: '结构分析', value: 'analysis' },
    { label: '参数优化', value: 'optimization' }
  ];

  const tabItems = [
    {
      key: 'all',
      label: `全部 (${applications.length})`,
    },
    {
      key: 'favorites',
      label: `我收藏的 (${favoriteApps.size})`,
    },
    {
      key: 'owned',
      label: `我发布的 (${applications.filter(app => app.isOwned).length})`,
    }
  ];

  const recommendedApps = applications.filter(app => app.isRecommended);

  const renderApplicationCard = (app: Application) => (
    <Card
      key={app.id}
      className="application-card"
      hoverable
      cover={
        <div className="card-cover">
          <div className="card-thumbnail">
            <span className="app-icon">{app.icon}</span>
          </div>
          <div className="card-overlay">
            <Space>
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={() => handleOpenApplication(app)}
              >
                打开应用
              </Button>
              <Button
                icon={<SettingOutlined />}
                onClick={() => handleOpenWorkflow(app)}
              >
                工作流
              </Button>
            </Space>
          </div>
        </div>
      }
      actions={[
        <Tooltip title="收藏">
          <Button
            type="text"
            icon={favoriteApps.has(app.id) ? <HeartFilled /> : <HeartOutlined />}
            onClick={() => handleFavorite(app.id)}
            className={favoriteApps.has(app.id) ? 'favorite-active' : ''}
          />
        </Tooltip>,
        <Tooltip title="查看详情">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handleOpenApplication(app)}
          />
        </Tooltip>,
        <Tooltip title="下载">
          <Button
            type="text"
            icon={<DownloadOutlined />}
          />
        </Tooltip>
      ]}
    >
      <div className="card-content">
        <div className="card-header">
          <Title level={4} className="app-name">
            {app.name}
            {app.isOwned && <Badge dot color="green" />}
          </Title>
          <Text type="secondary" className="app-version">
            v{app.version}
          </Text>
        </div>
        
        <Paragraph 
          className="app-description"
          ellipsis={{ rows: 2, tooltip: app.description }}
        >
          {app.description}
        </Paragraph>
        
        <div className="card-meta">
          <div className="app-tags">
            {app.tags.slice(0, 3).map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            {app.tags.length > 3 && (
              <Tag>+{app.tags.length - 3}</Tag>
            )}
          </div>
          
          <div className="app-author">
            <Avatar size="small" icon={<UserOutlined />} />
            <Text type="secondary" className="author-name">
              {app.author}
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );

  const renderApplicationList = (app: Application) => (
    <Card key={app.id} className="application-list-item">
      <div className="list-content">
        <div className="list-left">
          <div className="app-icon-wrapper">
            <span className="app-icon">{app.icon}</span>
          </div>
          <div className="app-info">
            <div className="app-header">
              <Title level={4} className="app-name">
                {app.name}
                {app.isOwned && <Badge dot color="green" />}
              </Title>
              <Text type="secondary" className="app-version">
                v{app.version}
              </Text>
            </div>
            <Text type="secondary" className="app-description">
              {app.description}
            </Text>
            <div className="app-meta">
              <span className="app-domain">{app.domain}</span>
              <span className="app-author">创建者：{app.author}</span>
              <span className="app-date">更新时间：{app.updatedAt}</span>
            </div>
          </div>
        </div>
        
        <div className="list-right">
          <div className="app-tags">
            {app.tags.slice(0, 3).map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          
          <div className="app-actions">
            <Space>
              <Button
                type="text"
                icon={favoriteApps.has(app.id) ? <HeartFilled /> : <HeartOutlined />}
                onClick={() => handleFavorite(app.id)}
                className={favoriteApps.has(app.id) ? 'favorite-active' : ''}
              />
              <Button
                type="primary"
                onClick={() => handleOpenApplication(app)}
              >
                打开应用
              </Button>
              <Button
                onClick={() => handleOpenWorkflow(app)}
              >
                工作流
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="application-center">
      {/* 推荐应用轮播 */}
      {recommendedApps.length > 0 && (
        <div className="recommended-section">
          <Title level={3} className="section-title">
            <StarOutlined /> 推荐应用
          </Title>
          <Carousel
            className="recommended-carousel"
            autoplay
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
          >
            {recommendedApps.map(app => (
              <div key={app.id} className="carousel-item">
                <Card
                  className="recommended-card"
                  hoverable
                  cover={
                    <div className="recommended-cover">
                      <span className="app-icon">{app.icon}</span>
                      <div className="recommended-overlay">
                        <Button
                          type="primary"
                          size="large"
                          icon={<RightOutlined />}
                          onClick={() => handleOpenApplication(app)}
                        >
                          立即体验
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <div className="recommended-content">
                    <Title level={4}>{app.name}</Title>
                    <Text type="secondary">{app.description}</Text>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {/* 筛选工具栏 */}
      <div className="filter-toolbar">
        <div className="toolbar-left">
          <Search
            placeholder="搜索应用..."
            allowClear
            enterButton={<SearchOutlined />}
            onSearch={handleSearch}
            style={{ width: 300 }}
          />
          
          <Select
            placeholder="选择分类"
            value={selectedCategory}
            onChange={setSelectedCategory}
            style={{ width: 150 }}
            options={categories}
          />
        </div>
        
        <div className="toolbar-right">
          <Space>
            <Button
              type={viewMode === 'card' ? 'primary' : 'default'}
              icon={<AppstoreOutlined />}
              onClick={() => setViewMode('card')}
            >
              卡片视图
            </Button>
            <Button
              type={viewMode === 'list' ? 'primary' : 'default'}
              icon={<UnorderedListOutlined />}
              onClick={() => setViewMode('list')}
            >
              列表视图
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreateApplication}
            >
              创建应用
            </Button>
          </Space>
        </div>
      </div>

      {/* 应用列表 */}
      <div className="applications-section">
        <Tabs
          activeKey={selectedTab}
          onChange={setSelectedTab}
          items={tabItems}
          className="applications-tabs"
        />
        
        <div className="applications-content">
          {loading ? (
            <div className="loading-container">
              <Spin size="large" />
            </div>
          ) : filteredApplications.length === 0 ? (
            <Empty
              description={
                selectedTab === 'favorites' ? '暂无收藏的应用' :
                selectedTab === 'owned' ? '暂无发布的应用' :
                searchKeyword ? '未找到匹配的应用' : '暂无应用'
              }
            />
          ) : (
            <div className={`applications-grid ${viewMode}`}>
              {viewMode === 'card' ? (
                <Row gutter={[24, 24]}>
                  {filteredApplications.map(app => (
                    <Col key={app.id} xs={24} sm={12} md={8} lg={6}>
                      {renderApplicationCard(app)}
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="applications-list">
                  {filteredApplications.map(renderApplicationList)}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCenter;
