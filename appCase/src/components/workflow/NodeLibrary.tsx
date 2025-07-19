import React from 'react';

interface NodeType {
  id: string;
  label: string;
  type: string;
  icon: string;
  description: string;
  color: string;
}

const nodeTypes: NodeType[] = [
  {
    id: 'requirement',
    label: '需求管理及同步',
    type: 'requirement',
    icon: '📋',
    description: '管理和同步系统需求',
    color: '#1890ff',
  },
  {
    id: 'architecture',
    label: '功能与架构设计',
    type: 'architecture',
    icon: '🏗️',
    description: '系统功能和架构设计',
    color: '#52c41a',
  },
  {
    id: 'simulation',
    label: '数据集成仿真',
    type: 'simulation',
    icon: '⚡',
    description: '数据集成和仿真验证',
    color: '#faad14',
  },
  {
    id: 'analysis',
    label: '数据分析处理',
    type: 'analysis',
    icon: '📊',
    description: '数据分析和处理模块',
    color: '#722ed1',
  },
  {
    id: 'optimization',
    label: '优化算法模块',
    type: 'optimization',
    icon: '🎯',
    description: '系统优化和算法模块',
    color: '#f5222d',
  },
  {
    id: 'validation',
    label: '验证与测试',
    type: 'validation',
    icon: '✅',
    description: '系统验证和测试模块',
    color: '#13c2c2',
  },
];

const NodeLibrary: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string, label: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="node-library">
      <div className="library-header">
        <h3>节点库</h3>
        <p>拖拽节点到画布中</p>
      </div>
      
      <div className="node-list">
        {nodeTypes.map((nodeType) => (
          <div
            key={nodeType.id}
            className="library-node"
            draggable
            onDragStart={(e) => onDragStart(e, nodeType.type, nodeType.label)}
            style={{
              padding: '12px',
              margin: '8px 0',
              backgroundColor: '#fff',
              border: `2px solid ${nodeType.color}33`,
              borderRadius: '8px',
              cursor: 'grab',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${nodeType.color}08`;
              e.currentTarget.style.borderColor = nodeType.color;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 4px 12px ${nodeType.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = `${nodeType.color}33`;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '18px', marginRight: '8px' }}>
                {nodeType.icon}
              </span>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#262626' }}>
                {nodeType.label}
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#8c8c8c', lineHeight: '1.3' }}>
              {nodeType.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeLibrary;
