import React from 'react';
import './NodeResultPanel.scss';

interface NodeResultPanelProps {
  visible: boolean;
  onClose: () => void;
  nodeData: {
    id: string;
    label: string;
    tool?: string;
    type: string;
    customName?: string;
  } | null;
}

// 构造假的需求数据
const getMockRequirements = (tool?: string) => {
  if (tool?.toLowerCase() === 'polarion') {
    return [
      {
        id: 'REQ-001',
        title: '整车主动安全系统性能要求',
        description: '车辆应配备AEB自动紧急制动系统，在车速20-80km/h范围内，对静态和动态障碍物的制动响应时间不超过0.8秒',
        priority: 'High',
        status: 'Approved',
        category: '主动安全'
      },
      {
        id: 'REQ-002',
        title: '被动安全约束系统要求',
        description: '安全气囊系统应在碰撞发生后30ms内完成充气，并满足Euro NCAP五星安全标准',
        priority: 'High',
        status: 'Approved',
        category: '被动安全'
      },
      {
        id: 'REQ-003',
        title: '车辆稳定性控制要求',
        description: 'ESP电子稳定程序应能在0.1秒内检测到车辆失控状态，并在0.15秒内实施纠正措施',
        priority: 'High',
        status: 'Under Review',
        category: '主动安全'
      },
      {
        id: 'REQ-004',
        title: '动力系统燃油经济性要求',
        description: '综合工况油耗应不超过6.5L/100km，满足国六排放标准',
        priority: 'Medium',
        status: 'Approved',
        category: '性能'
      },
      {
        id: 'REQ-005',
        title: '车身结构强度要求',
        description: '车身结构应通过40%偏置碰撞测试，A柱变形量不超过150mm',
        priority: 'High',
        status: 'Approved',
        category: '被动安全'
      },
      {
        id: 'REQ-006',
        title: '制动系统性能要求',
        description: '100km/h-0制动距离不超过38米，制动踏板行程不超过踏板总行程的60%',
        priority: 'High',
        status: 'Approved',
        category: '性能'
      },
      {
        id: 'REQ-007',
        title: '转向系统响应要求',
        description: '转向系统应具备渐进式助力特性，低速时轻便，高速时沉稳，转向比应在12:1-16:1之间',
        priority: 'Medium',
        status: 'Under Review',
        category: '性能'
      },
      {
        id: 'REQ-008',
        title: '电气系统安全要求',
        description: '高压电气系统应具备绝缘监测功能，绝缘电阻应不低于500Ω/V',
        priority: 'High',
        status: 'Draft',
        category: '安全'
      },
      {
        id: 'REQ-009',
        title: '环境适应性要求',
        description: '车辆应能在-35°C至+85°C环境温度范围内正常工作，防护等级达到IP67',
        priority: 'Medium',
        status: 'Approved',
        category: '环境'
      },
      {
        id: 'REQ-010',
        title: '人机交互系统要求',
        description: '中控屏幕响应时间不超过200ms，支持多点触控，亮度自动调节范围50-800cd/m²',
        priority: 'Low',
        status: 'Under Review',
        category: '用户体验'
      },
      {
        id: 'REQ-011',
        title: '数据安全要求',
        description: '系统应确保数据传输的加密性，防止未经授权的访问',
        priority: 'High',
        status: 'Approved',
        category: '安全'
      }
    ];
  }
  
  // 默认返回通用结果
  return [
    {
      id: 'RESULT-001',
      title: '执行结果概要',
      description: '任务执行完成，所有检查项均已通过验证',
      priority: 'Info',
      status: 'Completed',
      category: '执行结果'
    }
  ];
};

// 确保数据源中包含所有已批准的需求，并正确传递到安全需求同步到EA节点
const getMockRequirementsForEA = () => {
  return [
    {
      id: 'REQ-001',
      title: '整车主动安全系统性能要求',
      description: '车辆应配备AEB自动紧急制动系统，在车速20-80km/h范围内，对静态和动态障碍物的制动响应时间不超过0.8秒',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-002',
      title: '被动安全约束系统要求',
      description: '安全气囊系统应在碰撞发生后30ms内完成充气，并满足Euro NCAP五星安全标准',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-004',
      title: '动力系统燃油经济性要求',
      description: '综合工况油耗应不超过6.5L/100km，满足国六排放标准',
      priority: 'Medium',
      status: 'Approved',
    },
    {
      id: 'REQ-005',
      title: '车身结构强度要求',
      description: '车身结构应通过40%偏置碰撞测试，A柱变形量不超过150mm',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-006',
      title: '制动系统性能要求',
      description: '100km/h-0制动距离不超过38米，制动踏板行程不超过踏板总行程的60%',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-009',
      title: '环境适应性要求',
      description: '车辆应能在-35°C至+85°C环境温度范围内正常工作，防护等级达到IP67',
      priority: 'Medium',
      status: 'Approved',
    },
    {
      id: 'REQ-011',
      title: '数据安全要求',
      description: '系统应确保数据传输的加密性，防止未经授权的访问',
      priority: 'High',
      status: 'Approved',
    },
  ];
};

// 整车安全架构设计节点的数据
const getMockArchitectureData = () => {
  return {
    modules: [
      {
        id: 'A-SYS-001',
        name: 'AEB控制模块',
        description: '检测障碍物并执行制动决策',
        constraints: '响应时间 ≤ 0.1s',
        relatedReqs: 'REQ-001, REQ-003'
      },
      {
        id: 'A-SYS-002',
        name: 'ESP稳定控制模块',
        description: '监测车身状态，识别滑控并恢复稳定',
        constraints: '制动修正 ≤ 0.15s',
        relatedReqs: 'REQ-003'
      },
      {
        id: 'A-SYS-003',
        name: '安全气囊控制模块',
        description: '碰撞检测和气囊展开控制',
        constraints: '展开时间 ≤ 30ms',
        relatedReqs: 'REQ-002'
      },
      {
        id: 'A-SYS-004',
        name: '制动系统控制模块',
        description: '制动力分配和防抱死控制',
        constraints: '制动距离 ≤ 38m@100km/h',
        relatedReqs: 'REQ-006'
      }
    ],
    constraints: [
      {
        id: 'CONST-001',
        name: '制动响应时间',
        value: '≤ 0.1s',
        type: '性能约束',
        critical: true
      },
      {
        id: 'CONST-002',
        name: '最大动作频率',
        value: '10Hz',
        type: '系统约束',
        critical: false
      },
      {
        id: 'CONST-003',
        name: '工作温度范围',
        value: '-35°C ~ +85°C',
        type: '环境约束',
        critical: true
      }
    ],
    traceabilityMatrix: [
      { requirement: 'REQ-001', modules: ['A-SYS-001'], coverage: '100%' },
      { requirement: 'REQ-002', modules: ['A-SYS-003'], coverage: '100%' },
      { requirement: 'REQ-003', modules: ['A-SYS-001', 'A-SYS-002'], coverage: '100%' },
      { requirement: 'REQ-006', modules: ['A-SYS-004'], coverage: '100%' }
    ]
  };
};

const NodeResultPanel: React.FC<NodeResultPanelProps> = ({ visible, onClose, nodeData }) => {
  if (!visible || !nodeData) return null;

  const requirements = getMockRequirements(nodeData.tool);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return '#52c41a';
      case 'Under Review':
        return '#faad14';
      case 'Draft':
        return '#d9d9d9';
      case 'Completed':
        return '#1890ff';
      default:
        return '#8c8c8c';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return '#ff4d4f';
      case 'Medium':
        return '#faad14';
      case 'Low':
        return '#52c41a';
      default:
        return '#1890ff';
    }
  };

  // 修改安全需求同步到EA节点的显示逻辑，确保结果如图所示
  const renderEAApprovedRequirementsTable = (requirements: Array<{ id: string; title: string; description: string; priority: string; status: string }>) => {
    const approvedRequirements = requirements.filter(req => req.status === 'Approved');

    return (
      <table className="requirements-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approvedRequirements.map((req, index: number) => (
            <tr key={req.id}>
              <td>{index + 1}</td>
              <td>{req.id}</td>
              <td>{req.title}</td>
              <td>{req.description}</td>
              <td style={{ backgroundColor: getPriorityColor(req.priority) }}>{req.priority}</td>
              <td style={{ backgroundColor: getStatusColor(req.status) }}>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // 渲染架构模块清单表
  const renderArchitectureModulesTable = (modules: Array<{ id: string; name: string; description: string; constraints: string; relatedReqs: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">架构模块清单表</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>模块ID</th>
              <th>名称</th>
              <th>功能描述</th>
              <th>设计约束</th>
              <th>关联需求</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.id}>
                <td>{module.id}</td>
                <td>{module.name}</td>
                <td>{module.description}</td>
                <td>{module.constraints}</td>
                <td>{module.relatedReqs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染约束和性能指标
  const renderConstraintsDetail = (constraints: Array<{ id: string; name: string; value: string; type: string; critical: boolean }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">约束 & 性能指标</h4>
        <div className="constraints-grid">
          {constraints.map((constraint) => (
            <div key={constraint.id} className={`constraint-item ${constraint.critical ? 'critical' : ''}`}>
              <div className="constraint-header">
                <span className="constraint-name">{constraint.name}</span>
                <span className={`constraint-type ${constraint.critical ? 'critical' : 'normal'}`}>
                  {constraint.critical ? '关键' : '一般'}
                </span>
              </div>
              <div className="constraint-value">{constraint.value}</div>
              <div className="constraint-category">{constraint.type}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染需求-模块追溯矩阵
  const renderTraceabilityMatrix = (matrix: Array<{ requirement: string; modules: string[]; coverage: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">需求-模块追溯矩阵</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>需求ID</th>
              <th>分配模块</th>
              <th>覆盖率</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((item, index) => (
              <tr key={index}>
                <td>{item.requirement}</td>
                <td>{item.modules.join(', ')}</td>
                <td>
                  <span className="coverage-badge" style={{ backgroundColor: item.coverage === '100%' ? '#52c41a' : '#faad14' }}>
                    {item.coverage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染SysML架构图占位符
  const renderSysMLDiagram = () => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">SysML架构图 (BDD/IBD)</h4>
        <div className="diagram-placeholder">
          <div className="diagram-info">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="#1890ff">
              <path d="M24 4L44 14v20L24 44L4 34V14L24 4zm0 4L8 16v16l16 10 16-10V16L24 8z"/>
              <circle cx="24" cy="20" r="3" fill="#1890ff"/>
              <circle cx="16" cy="28" r="2" fill="#1890ff"/>
              <circle cx="32" cy="28" r="2" fill="#1890ff"/>
              <line x1="21" y1="22" x2="18" y2="26" stroke="#1890ff" strokeWidth="2"/>
              <line x1="27" y1="22" x2="30" y2="26" stroke="#1890ff" strokeWidth="2"/>
            </svg>
            <p>架构图展示</p>
            <span>点击查看详细的SysML BDD/IBD图</span>
          </div>
        </div>
      </div>
    );
  };

  // 整车安全架构设计节点的显示逻辑
  if (nodeData?.customName === '整车安全架构设计') {
    const architectureData = getMockArchitectureData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result">
            {renderArchitectureModulesTable(architectureData.modules)}
            {renderSysMLDiagram()}
            {renderConstraintsDetail(architectureData.constraints)}
            {renderTraceabilityMatrix(architectureData.traceabilityMatrix)}
          </div>
        </div>
      </div>
    );
  }

  // 在 NodeResultPanel 中调用表格显示逻辑，仅针对安全需求同步到EA节点
  if (nodeData?.label === '功能与架构设计' && nodeData?.customName === '安全需求同步到EA') {
    const requirements = getMockRequirementsForEA();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list">
            {renderEAApprovedRequirementsTable(requirements)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
      <div className="result-overlay" onClick={onClose} />
      <div className="result-content">
        {/* 头部 */}
        <div className="result-header">
          <div className="result-title">
            <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
            <span className="result-subtitle">
              工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
            </span>
          </div>
          <button className="result-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
            </svg>
          </button>
        </div>

        {/* 统计信息 */}
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">总计</span>
            <span className="stat-value">{requirements.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">已批准</span>
            <span className="stat-value approved">{requirements.filter(r => r.status === 'Approved').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">审核中</span>
            <span className="stat-value review">{requirements.filter(r => r.status === 'Under Review').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">草稿</span>
            <span className="stat-value draft">{requirements.filter(r => r.status === 'Draft').length}</span>
          </div>
        </div>

        {/* 结果列表 */}
        <div className="result-list">
          {requirements.map((req) => (
            <div key={req.id} className="requirement-item">
              <div className="req-header">
                <div className="req-id-title">
                  <span className="req-id">{req.id}</span>
                  <h4 className="req-title">{req.title}</h4>
                </div>
                <div className="req-badges">
                  <span 
                    className="priority-badge" 
                    style={{ backgroundColor: getPriorityColor(req.priority) }}
                  >
                    {req.priority}
                  </span>
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(req.status) }}
                  >
                    {req.status}
                  </span>
                  <span className="category-badge">{req.category}</span>
                </div>
              </div>
              <div className="req-description">
                {req.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeResultPanel;
