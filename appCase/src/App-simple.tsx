import React from 'react';
import './App.css';
import ApplicationDetail from './pages/ApplicationDetail';

// 页面类型定义
type PageType = 'home' | 'detail' | 'workflow';

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


// 新增工作流表单组件
const initialRows = [
  { name: '', desc: '', nodes: '', owner: '', simType: '' }
];
const WorkflowForm: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="workflow-form-page">
    {/* 面包屑导航 */}
    
    {/* 顶部统计卡片区 */}
    <div className="workflow-stats" style={{display: 'flex', gap: 24, marginBottom: 24}}>
      <div style={{flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{fontSize: 16, color: '#222', fontWeight: 600, marginBottom: 8}}>总工作流</div>
        <div style={{fontSize: 32, fontWeight: 700, color: '#1890ff', display: 'flex', alignItems: 'center', gap: 8}}>
          127 <span style={{fontSize: 22}}>📊</span>
        </div>
        <div style={{fontSize: 14, color: '#16a34a', marginTop: 4}}>+12%</div>
      </div>
      <div style={{flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{fontSize: 16, color: '#222', fontWeight: 600, marginBottom: 8}}>运行中</div>
        <div style={{fontSize: 32, fontWeight: 700, color: '#1890ff', display: 'flex', alignItems: 'center', gap: 8}}>
          23 <span style={{fontSize: 22}}>🔄</span>
        </div>
        <div style={{fontSize: 14, color: '#16a34a', marginTop: 4}}>+5%</div>
      </div>
      <div style={{flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{fontSize: 16, color: '#222', fontWeight: 600, marginBottom: 8}}>已完成</div>
        <div style={{fontSize: 32, fontWeight: 700, color: '#52c41a', display: 'flex', alignItems: 'center', gap: 8}}>
          89 <span style={{fontSize: 22}}>✔️</span>
        </div>
        <div style={{fontSize: 14, color: '#16a34a', marginTop: 4}}>+8%</div>
      </div>
      <div style={{flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{fontSize: 16, color: '#222', fontWeight: 600, marginBottom: 8}}>失败</div>
        <div style={{fontSize: 32, fontWeight: 700, color: '#f5222d', display: 'flex', alignItems: 'center', gap: 8}}>
          15 <span style={{fontSize: 22}}>❌</span>
        </div>
        <div style={{fontSize: 14, color: '#f5222d', marginTop: 4}}>-3%</div>
      </div>
    </div>
    <WorkflowTable />
    <div className="form-actions" style={{marginTop: 24}}>
      <button type="button" className="secondary-btn" onClick={onBack} style={{borderRadius: 8, padding: '8px 24px', fontSize: 16, border: '1px solid #e5e7eb', background: '#fff', color: '#222', fontWeight: 500}}>返回</button>
    </div>
  </div>
);

const WorkflowTable: React.FC = () => {
  // 交互状态
  const [searchText, setSearchText] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('全部状态');
  const [filterType, setFilterType] = React.useState('全部类型');
  const [filterPriority, setFilterPriority] = React.useState('全部优先级');
  const [filteredList, setFilteredList] = React.useState(staticWorkflowList);

  // 筛选逻辑
  const handleFilter = () => {
    let result = staticWorkflowList.filter(row => {
      const matchName = searchText === '' || row.name.includes(searchText);
      const matchStatus = filterStatus === '全部状态' || row.status === filterStatus;
      const matchType = filterType === '全部类型' || row.type === filterType;
      const matchPriority = filterPriority === '全部优先级' || row.priority === filterPriority;
      return matchName && matchStatus && matchType && matchPriority;
    });
    setFilteredList(result);
  };

  React.useEffect(() => {
    handleFilter();
    // eslint-disable-next-line
  }, [searchText, filterStatus, filterType, filterPriority]);

  // 操作按钮样式
  const actionBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    height: 32,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    padding: '0 16px',
    boxShadow: '0 1px 4px #e5e7eb',
  };
  const actionBtnTypes = {
    run: {
      background: '#1890ff',
      color: '#fff',
      border: 'none',
    },
    view: {
      background: '#fff',
      color: '#1890ff',
      border: '1px solid #1890ff',
      padding: '0 12px',
    },
    edit: {
      background: '#fff',
      color: '#faad14',
      border: '1px solid #faad14',
      padding: '0 12px',
    },
  };

  // 优先级标签样式修正 textAlign 类型
  const priorityTagStyle = {
    borderRadius: 6,
    padding: '4px 12px',
    fontSize: 15,
    fontWeight: 500,
    color: '#fff',
    display: 'inline-block',
    minWidth: 32,
    textAlign: 'center' as const,
  };
  const priorityColorMap = {
    高: '#f5222d',
    中: '#faad14',
    低: '#bfbfbf',
  };

  // 操作按钮渲染，严格按图片风格
  const renderActions = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 8px' }}>
      <button style={{ background: '#1890ff', color: '#fff', border: 'none', borderRadius: 8, height: 32, padding: '0 16px', fontSize: 15, fontWeight: 500, boxShadow: '0 1px 4px #e5e7eb', cursor: 'pointer' }}>运行</button>
      <button style={{ background: '#fff', color: '#1890ff', border: '1px solid #1890ff', borderRadius: 8, height: 32, padding: '0 12px', fontSize: 15, fontWeight: 500, boxShadow: '0 1px 4px #e5e7eb', cursor: 'pointer' }}>查看</button>
      <button style={{ background: '#fff', color: '#faad14', border: '1px solid #faad14', borderRadius: 8, height: 32, padding: '0 12px', fontSize: 15, fontWeight: 500, boxShadow: '0 1px 4px #e5e7eb', cursor: 'pointer' }}>编辑</button>
    </div>
  );

  return (
    <div className="workflow-list-section" style={{marginTop: 0}}>
      {/* 搜索和筛选区 */}
      <div className="workflow-list-header" style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
        <input type="text" placeholder="搜索工作流名称或编号..." value={searchText} onChange={e => setSearchText(e.target.value)} style={{flex: '0 0 240px', padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 15, background: '#fafafa'}} />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 16px', fontSize: 15, background: '#fafafa'}}>
          <option>全部状态</option>
          <option>草稿</option>
          <option>审核中</option>
          <option>已发布</option>
        </select>
        <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 16px', fontSize: 15, background: '#fafafa'}}>
          <option>全部类型</option>
          <option>热管理仿真</option>
          <option>整车性能验证</option>
          <option>安全仿真</option>
        </select>
        <select value={filterPriority} onChange={e => setFilterPriority(e.target.value)} style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 16px', fontSize: 15, background: '#fafafa'}}>
          <option>全部优先级</option>
          <option>高</option>
          <option>中</option>
          <option>低</option>
        </select>
        <button onClick={handleFilter} style={{background: '#1890ff', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontSize: 15, fontWeight: 500, boxShadow: '0 1px 4px #e5e7eb', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'}}><span style={{fontSize: 12}}>🔍</span>筛选</button>
      </div>
      {/* 创建工作流按钮单独一行，右对齐 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: 16 }}>
        <button style={{ background: '#1890ff', border: 'none', borderRadius: 8, padding: '8px 24px', fontSize: 15, fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>创建工作流</button>
      </div>


      {/* 表格区 */}
      <table className="workflow-list-table" style={{width: '100%', marginTop: 0, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #eee', borderCollapse: 'collapse', fontSize: 15}}>
        <thead style={{background: '#fafafa'}}>
          <tr>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>工作流名称</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>类型</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>状态</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>创建人</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>创建时间</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>最后运行时间</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>应用领域</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb'}}>优先级</th>
            <th style={{padding: '16px 12px', fontWeight: 600, color: '#333', borderBottom: '1px solid #e5e7eb', textAlign: 'right'}}>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((row, idx) => (
            <tr key={idx} style={{cursor: 'pointer', background: idx % 2 === 0 ? '#f7faff' : '#fff', transition: 'background 0.2s', height: 56}}>
              <td style={{padding: '12px', fontWeight: 500, color: '#222'}}>{row.name}</td>
              <td style={{padding: '12px'}}><span className="workflow-type-tag" style={{background: '#e6f7ff', color: '#1890ff', borderRadius: 6, padding: '4px 12px', fontSize: 15, fontWeight: 500}}>{row.type}</span></td>
              <td style={{padding: '12px'}}>
                <span style={{color: statusColor[row.status], fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, fontSize: 15}}>
                  <span>{statusIcon[row.status]}</span>
                  <span>{row.status}</span>
                </span>
              </td>
              <td style={{padding: '12px'}}>{row.creator}</td>
              <td style={{padding: '12px'}}>{row.createTime}</td>
              <td style={{padding: '12px'}}>{row.lastRunTime}</td>
              <td style={{padding: '12px'}}>{row.domain}</td>
              <td style={{padding: '12px'}}>
                {/* 优先级标签渲染 */}
                <span style={{ ...priorityTagStyle, background: priorityColorMap[row.priority] }}>{row.priority}</span>
              </td>
              <td style={{padding: '8px', textAlign: 'right'}}>{renderActions()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 分页区（静态） */}
      <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 16, gap: 8}}>
        <button style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 18px', fontSize: 15, color: '#222', fontWeight: 500}}>上一页</button>
        <span style={{fontSize: 15, color: '#1890ff', fontWeight: 600}}>1</span>
        <button style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 18px', fontSize: 15, color: '#222', fontWeight: 500}}>下一页</button>
      </div>
    </div>
  );
};

// 工作流列表静态数据及类型
interface WorkflowItem {
  name: string;
  type: string;
  status: '草稿' | '审核中' | '已发布' ;
  creator: string;
  createTime: string;
  lastRunTime: string;
  domain: string;
  priority: '高' | '中' | '低';
}
const staticWorkflowList: WorkflowItem[] = [
  {
    name: '赛道仿真验证流程',
    type: '整车性能验证',
    status: '草稿',
    creator: 'jkzhan',
    createTime: '2025-07-20 09:12',
    lastRunTime: '2025-07-25 10:30',
    domain: '赛道仿真',
    priority: '高',
  },
  {
    name: '热管理仿真流程',
    type: '热管理仿真',
    status: '审核中',
    creator: 'teamA',
    createTime: '2025-07-18 14:22',
    lastRunTime: '-',
    domain: '热管理',
    priority: '中',
  },
  {
    name: '整车安全分析',
    type: '安全仿真',
    status: '已发布',
    creator: 'jkzhan',
    createTime: '2025-07-10 08:00',
    lastRunTime: '2025-07-24 16:45',
    domain: '整车安全',
    priority: '低',
  },
  {
    name: '电池包热失控流程',
    type: '安全仿真',
    status: '已发布',
    creator: 'teamB',
    createTime: '2025-07-15 11:30',
    lastRunTime: '2025-07-25 09:00',
    domain: '整车安全',
    priority: '高',
  },
  {
    name: '整车能耗分析',
    type: '整车性能验证',
    status: '审核中',
    creator: 'teamC',
    createTime: '2025-07-12 10:00',
    lastRunTime: '-',
    domain: '整车能耗',
    priority: '中',
  },
  {
    name: '热管理优化流程',
    type: '热管理仿真',
    status: '草稿',
    creator: 'jkzhan',
    createTime: '2025-07-08 09:00',
    lastRunTime: '2025-07-22 15:00',
    domain: '热管理',
    priority: '低',
  },
];
const statusColor: Record<WorkflowItem['status'], string> = {
  '草稿': '#bfbfbf',
  '审核中': '#1890ff',
  '已发布': '#52c41a'};
const statusIcon: Record<WorkflowItem['status'], string> = {
  '草稿': '🕒',
  '审核中': '⏳',
  '已发布': '✔️'
};
const priorityColor: Record<WorkflowItem['priority'], string> = {
  '高': '#f5222d',
  '中': '#faad14',
  '低': '#bfbfbf'
};

// 应用详情页面示例数据
const exampleAppDetail = {
  name: '整车动能安全',
  description: '基于MBSE方法，集成STAP的功能安全分析，支持从需求分析到安全验证的全过程开发',
  version: 'V2.1.0',
  author: 'jkzhang',
  createTime: '2024-01-15',
  updateTime: '2024-03-20',
  status: '已安装',
  category: '功能安全',
  tags: ['功能安全', 'STAP', '整车分析'],
  likes: 24,
  views: 156,
  icon: '�',
  content: `
  ## 功能描述
  本应用基于MBSE方法，集成STAP的功能安全分析工具，支持从需求分析到安全验证的全过程开发。

  ## 更新日志
  ### V2.1.0
  - 优化了用户界面
  - 修复了一些已知问题

  ### V2.0.0
  - 首次发布
  `,
  examples: [
    {
      input: '示例输入数据',
      output: '示例输出数据'
    }
  ]
};
// 如需模拟 API，可单独定义
const exampleAppDetailApi = {
  'GET /api/appDetail': {
    code: 200,
    data: exampleAppDetail
  }
};

// 模拟的应用数据请求
const fetchAppDetail = (appName: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: exampleAppDetail
      });
    }, 1000);
  });
};


const App: React.FC = () => {
  // 页面导航状态，扩展为 home | detail | workflow
  const [currentPage, setCurrentPage] = React.useState<'home' | 'detail' | 'workflow'>('home');
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
    { id: 1, name: '从工作流创建', description: '基于工作流创建新应用' },
    { id: 2, name: '从模板创建', description: '使用现有应用模板' }
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
            bVal = a.author;
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

  // 修复主页面 app 区 never 类型
  // 假设 exampleAppList 为应用列表数据，类型声明如下：
  type AppCard = {
    id: string;
    name: string;
    description: string;
    image: string;
    gradient: string;
    tags: string[];
    likes: number;
    views: number;
  };
  const exampleAppList: AppCard[] = [
    {
      id: 'app1',
      name: '热管理仿真',
      description: '热管理相关应用',
      image: '/assets/react.svg',
      gradient: 'linear-gradient(90deg,#e0f7fa,#fff)',
      tags: ['仿真', '热管理'],
      likes: 120,
      views: 300,
    },
    // ...可补充更多应用...
  ];

  return (
    <div className="app">
      {/* 页面切换：工作流管理 */}
      {currentPage === 'workflow' ? (
        <>
          <header className="app-header">
            <div className="header-left">
              <h1>工作流管理</h1>
            </div>
            <div className="user-info">
              <span>管理员</span>
              <div className="avatar">👤</div>
            </div>
          </header>
          <main className="main-content">
            {/* 左侧导航栏保持不变 */}
            <nav className="sidebar">
              <div className="logo">
                <div className="logo-icon">MBSE</div>
              </div>
              <ul className="nav-menu">
                <li className="nav-item">
                  <span className="nav-icon">⚙️</span>
                  <span>控制台</span>
                </li>
                <li className="nav-item active" onClick={() => setCurrentPage('home')}>
                  <span className="nav-icon">📱</span>
                  <span>应用中心</span>
                </li>
                <li className="nav-item active" onClick={() => setCurrentPage('workflow')}>
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
            <div className="content-area">
              <WorkflowForm onBack={() => setCurrentPage('home')} />
            </div>
          </main>
        </>
      ) : currentPage === 'detail' ? (
        <ApplicationDetail appName={currentAppName} onBack={() => setCurrentPage('home')} />
      ) : (
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
              <li className="nav-item active" onClick={() => setCurrentPage('home')}>
                <span className="nav-icon">📱</span>
                <span>应用中心</span>
              </li>
              <li className="nav-item" onClick={() => setCurrentPage('workflow')}>
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
