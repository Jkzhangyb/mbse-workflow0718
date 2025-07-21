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
