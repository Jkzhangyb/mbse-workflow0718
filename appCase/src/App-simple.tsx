import React from 'react';
import './App.css';
import ApplicationDetail from './pages/ApplicationDetail';

// 页面类型定义
type PageType = 'home' | 'detail';

// 模拟应用数据
const applications = [
  {
    id: 1,
    name: '整车动能安全',
    icon: '�',
    description: '基于MBSE方法，集成STAP的功能安全分析，支持从需求分析到安全验证的全过程开发',
    category: '功能安全',
    author: 'jkzhang',
    status: '已安装',
    tags: ['功能安全', 'STAP', '整车分析'],
    likes: 24,
    views: 156
  },
  {
    id: 2,
    name: '空调热管理',
    icon: '❄️',
    description: '汽车空调系统热管理分析与仿真，支持多种工况下的热力学计算和性能优化',
    category: '热管理',
    author: 'jkzhang',
    status: '已安装',
    tags: ['热管理', '空调', '仿真'],
    likes: 18,
    views: 203
  },
  {
    id: 3,
    name: '整车集成',
    icon: '�',
    description: '整车系统集成分析工具，支持多学科优化和系统级仿真验证',
    category: '车身动力学',
    author: 'jkzhang',
    status: '已安装',
    tags: ['系统集成', '多学科', '优化'],
    likes: 32,
    views: 189
  },
  {
    id: 4,
    name: '电池管理系统',
    icon: '�',
    description: '新能源汽车电池管理系统设计与优化，包含电池包热管理和安全监控',
    category: '电控',
    author: 'jkzhang',
    status: '可安装',
    tags: ['电池', 'BMS', '新能源'],
    likes: 15,
    views: 142
  },
  {
    id: 5,
    name: '车身结构分析',
    icon: '🏗️',
    description: '车身结构强度分析，支持多种材料属性和载荷条件的有限元分析',
    category: '车身动力学',
    author: 'jkzhang',
    status: '已安装',
    tags: ['结构', '强度', 'CAE'],
    likes: 21,
    views: 167
  },
  {
    id: 6,
    name: '动力总成匹配',
    icon: '⚙️',
    description: '动力总成参数匹配与优化，包含发动机、变速箱、电机等关键部件',
    category: '车身动力学',
    author: 'jkzhang',
    status: '已安装',
    tags: ['动力', '匹配', '优化'],
    likes: 28,
    views: 195
  }
];

// 推荐应用数据
const recommendedApps = [
  {
    id: 1,
    name: '空调热管理',
    description: '汽车空调系统热管理分析，支持多种工况下的热力学计算和性能优化',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    name: '整车集成',
    description: '整车系统集成分析工具，支持多学科优化和系统级仿真验证',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    name: '电池管理系统',
    description: '新能源汽车电池管理系统设计与优化，包含电池包热管理和安全监控',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    name: '车身结构分析',
    description: '车身结构强度分析，支持多种材料属性和载荷条件的有限元分析',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 5,
    name: '动力总成匹配',
    description: '动力总成参数匹配与优化，包含发动机、变速箱、电机等关键部件',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 6,
    name: '智能驾驶辅助',
    description: 'ADAS系统设计与仿真，支持多种传感器融合和决策算法验证',
    image: '/api/placeholder/400/200',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
];

// 表格列配置类型
interface TableColumn {
  key: string;
  title: string;
  width: number;
  visible: boolean;
  sortable: boolean;
}

// 排序类型
type SortOrder = 'asc' | 'desc' | null;

const App: React.FC = () => {
  // 页面导航状态
  const [currentPage, setCurrentPage] = React.useState<PageType>('home');
  const [currentAppName, setCurrentAppName] = React.useState<string>('');

  const [selectedCategory, setSelectedCategory] = React.useState<string>('全部');
  const [selectedTab, setSelectedTab] = React.useState<string>('全部');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [showCreateDropdown, setShowCreateDropdown] = React.useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = React.useState(0);
  
  // 表格相关状态
  const [columns, setColumns] = React.useState<TableColumn[]>([
    { key: 'name', title: '名称', width: 200, visible: true, sortable: true },
    { key: 'version', title: '最新版本', width: 100, visible: true, sortable: true },
    { key: 'category', title: '应用方向', width: 120, visible: true, sortable: true },
    { key: 'author', title: '创建人', width: 100, visible: true, sortable: true },
    { key: 'createTime', title: '创建时间', width: 120, visible: true, sortable: true },
    { key: 'updateTime', title: '更新时间', width: 120, visible: true, sortable: true },
    { key: 'actions', title: '操作', width: 120, visible: true, sortable: false }
  ]);
  const [sortField, setSortField] = React.useState<string | null>(null);
  const [sortOrder, setSortOrder] = React.useState<SortOrder>(null);
  const [showColumnSettings, setShowColumnSettings] = React.useState(false);
  const [resizingColumn, setResizingColumn] = React.useState<{ key: string; startX: number; startWidth: number } | null>(null);
  
  const categories = ['全部', '热管理', '电控', '车身动力学', '功能安全'];
  
  const createAppTypes = [
    { id: 1, name: '从数据创建应用', description: '基于现有数据创建新应用' },
    { id: 2, name: '从模板创建应用', description: '使用现有应用模板' },
    { id: 3, name: '空白应用', description: '从零开始创建新应用' },
    { id: 4, name: '导入应用', description: '从文件导入现有应用' }
  ];

  // 轮播导航函数
  const nextSlide = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % recommendedApps.length);
  };

  const prevSlide = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + recommendedApps.length) % recommendedApps.length);
  };

  // 获取当前显示的轮播项（显示3个）
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentCarouselIndex + i) % recommendedApps.length;
      visibleSlides.push(recommendedApps[index]);
    }
    return visibleSlides;
  };

  // 点击外部关闭下拉菜单
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCreateDropdown && !(event.target as Element).closest('.create-app-dropdown')) {
        setShowCreateDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showCreateDropdown]);

  // 自动轮播
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % recommendedApps.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  // 表格功能函数
  const handleSort = (field: string) => {
    const column = columns.find(col => col.key === field);
    if (!column?.sortable) return;
    
    if (sortField === field) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else if (sortOrder === 'desc') {
        setSortField(null);
        setSortOrder(null);
      } else {
        setSortOrder('asc');
      }
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleColumnResize = (e: React.MouseEvent, columnKey: string) => {
    e.preventDefault();
    const column = columns.find(col => col.key === columnKey);
    if (!column) return;

    setResizingColumn({
      key: columnKey,
      startX: e.clientX,
      startWidth: column.width
    });
  };

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!resizingColumn) return;

    const deltaX = e.clientX - resizingColumn.startX;
    const newWidth = Math.max(50, resizingColumn.startWidth + deltaX);

    setColumns(prev => prev.map(col => 
      col.key === resizingColumn.key 
        ? { ...col, width: newWidth }
        : col
    ));
  }, [resizingColumn]);

  const handleMouseUp = React.useCallback(() => {
    setResizingColumn(null);
  }, []);

  React.useEffect(() => {
    if (resizingColumn) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [resizingColumn, handleMouseMove, handleMouseUp]);

  const toggleColumnVisibility = (columnKey: string) => {
    setColumns(prev => prev.map(col => 
      col.key === columnKey 
        ? { ...col, visible: !col.visible }
        : col
    ));
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  // 页面导航函数
  const handleAppClick = (appName: string) => {
    setCurrentAppName(appName);
    setCurrentPage('detail');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentAppName('');
  };
  
  const filteredApps = React.useMemo(() => {
    let filtered = applications.filter(app => {
      // 根据标签页筛选
      if (selectedTab === '我收藏的') {
        // 这里应该根据实际的收藏状态筛选，目前先返回部分应用作为示例
        return app.likes > 20;
      } else if (selectedTab === '我发布的') {
        // 这里应该根据实际的发布者筛选，目前先返回部分应用作为示例
        return app.author === 'jkzhang' && app.status === '已安装';
      }
      
      // 根据分类筛选
      if (selectedCategory !== '全部') {
        return app.category === selectedCategory;
      }
      
      return true;
    });

    // 排序逻辑
    if (sortField && sortOrder) {
      filtered.sort((a, b) => {
        let aVal: any = '';
        let bVal: any = '';

        switch (sortField) {
          case 'name':
            aVal = a.name;
            bVal = b.name;
            break;
          case 'version':
            aVal = 'v1.0.0'; // 模拟版本数据
            bVal = 'v1.0.0';
            break;
          case 'category':
            aVal = a.category;
            bVal = b.category;
            break;
          case 'author':
            aVal = a.author;
            bVal = b.author;
            break;
          case 'createTime':
            aVal = '2024-01-15'; // 模拟创建时间
            bVal = '2024-01-15';
            break;
          case 'updateTime':
            aVal = '2024-03-20'; // 模拟更新时间
            bVal = '2024-03-20';
            break;
          default:
            return 0;
        }

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          const result = aVal.localeCompare(bVal);
          return sortOrder === 'asc' ? result : -result;
        }

        return 0;
      });
    }

    return filtered;
  }, [selectedTab, selectedCategory, sortField, sortOrder]);

  return (
    <div className="app">
      {/* 根据当前页面状态渲染不同内容 */}
      {currentPage === 'detail' ? (
        <>
          {/* 顶部标题栏 */}
          <header className="app-header">
            <div className="header-left">
              <h1>应用中心</h1>
            </div>
            <div className="user-info">
              <span>管理员</span>
              <div className="avatar">👤</div>
            </div>
          </header>

          {/* 主要内容区域 */}
          <main className="main-content">
            {/* 左侧导航 */}
            <nav className="sidebar">
              <div className="logo">
                <div className="logo-icon">MBSE</div>
              </div>
              <ul className="nav-menu">
                <li className="nav-item">
                  <span className="nav-icon">⚙️</span>
                  <span>控制台</span>
                </li>
                <li className="nav-item active">
                  <span className="nav-icon">📱</span>
                  <span>应用中心</span>
                </li>
                <li className="nav-item">
                  <span className="nav-icon">🔄</span>
                  <span>工作流管理</span>
                </li>
                <li className="nav-item">
                  <span className="nav-icon">🧩</span>
                  <span>组件管理</span>
                </li>
                <li className="nav-item">
                  <span className="nav-icon">🛠️</span>
                  <span>工具服务</span>
                </li>
                <li className="nav-item">
                  <span className="nav-icon">📊</span>
                  <span>模型及数据管理</span>
                </li>
                <li className="nav-item">
                  <span className="nav-icon">👥</span>
                  <span>用户及权限管理</span>
                </li>
              </ul>
            </nav>

            {/* 应用详情页面 */}
            <div className="content-area">
              <ApplicationDetail 
                appName={currentAppName} 
                onBack={handleBackToHome} 
              />
            </div>
          </main>
        </>
      ) : (
        <>
          {/* 应用中心首页 */}
          {/* 顶部标题栏 */}
          <header className="app-header">
            <div className="header-left">
              <h1>应用中心</h1>
            </div>
            <div className="user-info">
              <span>管理员</span>
              <div className="avatar">👤</div>
            </div>
          </header>

      {/* 主要内容区域 */}
      <main className="main-content">
        {/* 左侧导航 */}
        <nav className="sidebar">
          <div className="logo">
            <div className="logo-icon">MBSE</div>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span>控制台</span>
            </li>
            <li className="nav-item active">
              <span className="nav-icon">📱</span>
              <span>应用中心</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">�</span>
              <span>工作流管理</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">�</span>
              <span>组件管理</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">�️</span>
              <span>工具服务</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">�️</span>
              <span>模型及数据管理</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">👥</span>
              <span>用户及权限管理</span>
            </li>
          </ul>
        </nav>

        {/* 右侧内容区域 */}
        <div className="content-area">
          {/* 推荐应用轮播 */}
          <div className="recommended-section">
            <div className="carousel-container">
              <button className="carousel-nav prev" onClick={prevSlide}>❮</button>
              <div className="carousel-track">
                {getVisibleSlides().map((app, index) => (
                  <div 
                    key={`${app.id}-${index}`} 
                    className="carousel-slide"
                    onClick={() => app.name === '空调热管理' && handleAppClick(app.name)}
                    style={{ cursor: app.name === '空调热管理' ? 'pointer' : 'default' }}
                  >
                    <div className="slide-image" style={{ background: app.gradient }}>
                      <div className="slide-overlay">
                        <div className="slide-content">
                          <h3>{app.name}</h3>
                          <p>{app.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-nav next" onClick={nextSlide}>❯</button>
              
              {/* 轮播指示器 */}
              <div className="carousel-indicators">
                {recommendedApps.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentCarouselIndex ? 'active' : ''}`}
                    onClick={() => setCurrentCarouselIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 主要内容区域 */}
          <div className="main-content-wrapper">
            {/* 应用列表 */}
            <div className="applications-main full-width">
              {/* 标签页导航 */}
              <div className="tab-navigation">
                <div className="tab-left">
                  <button className={selectedTab === '全部' ? 'tab-btn active' : 'tab-btn'} onClick={() => setSelectedTab('全部')}>全部</button>
                  <button className={selectedTab === '我收藏的' ? 'tab-btn active' : 'tab-btn'} onClick={() => setSelectedTab('我收藏的')}>我收藏的</button>
                  <button className={selectedTab === '我发布的' ? 'tab-btn active' : 'tab-btn'} onClick={() => setSelectedTab('我发布的')}>我发布的</button>
                </div>
                
                <div className="tab-right">
                  <div className="view-controls">
                    <button className={viewMode === 'grid' ? 'view-btn active' : 'view-btn'} onClick={() => setViewMode('grid')}>
                      <svg width="16" height="16" viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" fill="currentColor"/><rect x="9" y="1" width="6" height="6" fill="currentColor"/><rect x="1" y="9" width="6" height="6" fill="currentColor"/><rect x="9" y="9" width="6" height="6" fill="currentColor"/></svg>
                    </button>
                    <button className={viewMode === 'list' ? 'view-btn active' : 'view-btn'} onClick={() => setViewMode('list')}>
                      <svg width="16" height="16" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="2" fill="currentColor"/><rect x="1" y="7" width="14" height="2" fill="currentColor"/><rect x="1" y="12" width="14" height="2" fill="currentColor"/></svg>
                    </button>
                  </div>
                  <select className="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="全部类型">全部类型</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="create-app-dropdown">
                    <button 
                      className="create-btn"
                      onClick={() => setShowCreateDropdown(!showCreateDropdown)}
                    >
                      创建应用 ▼
                    </button>
                    {showCreateDropdown && (
                      <div className="dropdown-menu">
                        {createAppTypes.map(type => (
                          <div key={type.id} className="dropdown-item">
                            <div className="dropdown-item-name">{type.name}</div>
                            <div className="dropdown-item-desc">{type.description}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 分类筛选 */}
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* 应用列表 */}
              {viewMode === 'list' ? (
                <div className="app-table">
                  <div className="table-controls">
                    <button 
                      className="column-settings-btn"
                      onClick={() => setShowColumnSettings(!showColumnSettings)}
                    >
                      ⚙️ 列设置
                    </button>
                    {showColumnSettings && (
                      <div className="column-settings-dropdown">
                        <div className="column-settings-title">选择显示列</div>
                        {columns.map(column => (
                          <label key={column.key} className="column-setting-item">
                            <input
                              type="checkbox"
                              checked={column.visible}
                              onChange={() => toggleColumnVisibility(column.key)}
                            />
                            <span>{column.title}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          {columns.filter(col => col.visible).map(column => (
                            <th 
                              key={column.key} 
                              style={{ width: `${column.width}px` }}
                              className={`resizable-header ${column.sortable ? 'sortable' : ''}`}
                            >
                              <div className="header-content">
                                <span 
                                  className="header-title"
                                  onClick={() => column.sortable && handleSort(column.key)}
                                >
                                  {column.title}
                                  {column.sortable && (
                                    <span className="sort-icon">
                                      {getSortIcon(column.key)}
                                    </span>
                                  )}
                                </span>
                                <div 
                                  className="resize-handle"
                                  onMouseDown={(e) => handleColumnResize(e, column.key)}
                                />
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredApps.map(app => (
                          <tr key={app.id}>
                            {columns.filter(col => col.visible).map(column => (
                              <td key={column.key} style={{ width: `${column.width}px` }}>
                                {column.key === 'name' && (
                                  <div className="table-app-name">
                                    <span className="table-app-icon">{app.icon}</span>
                                    <div>
                                      <div className="table-app-title">{app.name}</div>
                                      <div className="table-app-description">{app.description}</div>
                                    </div>
                                  </div>
                                )}
                                {column.key === 'version' && 'v1.0.0'}
                                {column.key === 'category' && (
                                  <span className="table-category-tag">{app.category}</span>
                                )}
                                {column.key === 'author' && app.author}
                                {column.key === 'createTime' && '2024-01-15'}
                                {column.key === 'updateTime' && '2024-03-20'}
                                {column.key === 'actions' && (
                                  <div className="table-actions">
                                    <button className="table-action-btn">复制</button>
                                    <button className="table-action-btn delete">删除</button>
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className={`app-grid ${viewMode}`}>
                  {filteredApps.map(app => (
                    <div key={app.id} className="app-card">
                      <div className="app-icon">{app.icon}</div>
                      <div className="app-info">
                        <h3>{app.name}</h3>
                        <p className="app-author">{app.author}</p>
                        <p className="app-description">{app.description}</p>
                        <div className="app-tags">
                          {app.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                        <div className="app-stats">
                          <span className="stat">👍 {app.likes}</span>
                          <span className="stat">👁️ {app.views}</span>
                          <span className="stat">⭐ 1</span>
                          <span className="more">···</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
        </>
      )}
    </div>
  );
};

export default App;
