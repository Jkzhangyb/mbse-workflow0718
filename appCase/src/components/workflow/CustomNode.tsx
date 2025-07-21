import React, { useState } from 'react';
import { Handle, Position } from '@reactflow/core';
import type { NodeProps } from '@reactflow/core';
import './CustomNode.scss';

interface CustomNodeData {
  label: string;
  type: string;
  description?: string;
  tool?: string;
  subActions?: string[];
  collapsed?: boolean;
  customName?: string; // 添加 customName 字段
  executionStatus?: 'waiting' | 'running' | 'completed'; // 添加执行状态字段
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, selected }) => {
  const [isCollapsed, setIsCollapsed] = useState(data.collapsed || false);
  const [showTooltip, setShowTooltip] = useState(false);

  const getToolColor = (tool: string) => {
    switch (tool?.toLowerCase()) {
      case 'polarion':
        return '#1890ff';
      case 'polarion-ea':
        return '#52c41a';
      case 'ea':
        return '#fa8c16';
      case 'ssp':
        return '#52c41a';
      case 'ssp-modelica':
        return '#52c41a';
      case 'm-works':
        return '#722ed1';
      case 'doe':
        return '#52c41a';
      case 'matlab':
      case 'simulink':
        return '#e97627';
      case 'ansys':
        return '#ffb800';
      case 'doors':
        return '#0066cc';
      default:
        return '#52c41a';
    }
  };

  const getNodeTypeColor = (type: string) => {
    switch (type) {
      case 'requirement':
        return '#1890ff';
      case 'architecture':
        return '#52c41a';
      case 'simulation':
        return '#faad14';
      case 'analysis':
        return '#722ed1';
      case 'optimization':
        return '#f5222d';
      default:
        return '#8c8c8c';
    }
  };

  const getExecutionStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return '#52c41a'; // 绿色
      case 'running':
        return '#faad14';  // 黄色
      case 'waiting':
      default:
        return '#d9d9d9';  // 灰色
    }
  };

  const getExecutionStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'running':
        return '执行中';
      case 'waiting':
      default:
        return '等待中';
    }
  };

  const toggleCollapsed = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`custom-node ${selected ? 'selected' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="custom-node-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
        {/* 显示 customName 在节点上方 */}
        <div
          className="custom-name"
          style={{
            color: 'blue',
            textAlign: 'center',
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {data.customName || data.label || '未命名节点'}
        </div>

        {/* 节点内容 */}
        <div
          className="custom-node"
          style={{
            backgroundColor: '#fff',
            border: `1px solid ${selected ? getNodeTypeColor(data.type) : '#e8e8e8'}`,
            borderRadius: '4px',
            width: '240px',
            minHeight: isCollapsed ? '40px' : '120px',
            boxShadow: selected ? `0 2px 8px ${getNodeTypeColor(data.type)}33` : '0 1px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
            position: 'relative',
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* 节点头部 */}
          <div
            className="node-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              backgroundColor: '#fafafa',
              borderBottom: '1px solid #e8e8e8',
              cursor: 'pointer',
            }}
            onClick={toggleCollapsed}
          >
            {/* 执行状态指示器 */}
            <div
              className="execution-status"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: getExecutionStatusColor(data.executionStatus),
                marginRight: '8px',
                flexShrink: 0,
                border: data.executionStatus === 'running' ? '2px solid #fff' : 'none',
                boxShadow: data.executionStatus === 'running' ? `0 0 0 1px ${getExecutionStatusColor(data.executionStatus)}` : 'none',
                animation: data.executionStatus === 'running' ? 'pulse 2s infinite' : 'none',
              }}
              title={getExecutionStatusText(data.executionStatus)}
            />

            {/* 收起/展开三角 */}
            <div
              className="collapse-toggle"
              style={{
                width: '12px',
                height: '12px',
                marginRight: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: '#666',
                transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              ▼
            </div>

            {/* 节点名称 */}
            <div
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: '#262626',
                flex: 1,
              }}
            >
              {data.label}
            </div>

            {/* 工具标识在标题栏右侧 */}
            {data.tool && (
              <span
                className="tool-badge"
                style={{
                  display: 'inline-block',
                  backgroundColor: getToolColor(data.tool),
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '500',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginLeft: '8px',
                }}
              >
                {data.tool}
              </span>
            )}
          </div>

          {/* 工具提示 */}
          {showTooltip && !isCollapsed && (
            <div
              className="node-tooltip"
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'rgba(0,0,0,0.8)',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: '4px',
                fontSize: '11px',
                whiteSpace: 'nowrap',
                zIndex: 1000,
                pointerEvents: 'none',
              }}
            >
              点击标题栏可收起/展开
            </div>
          )}

          {/* 输入连接点 */}
          <Handle
            type="target"
            position={Position.Left}
            style={{
              background: '#d9d9d9',
              width: '8px',
              height: '8px',
              border: '2px solid #fff',
              left: '-5px',
            }}
          />

          {/* 节点内容（可收起） */}
          {!isCollapsed && (
            <div style={{ padding: '12px' }}>
              {/* 描述 */}
              {data.description && (
                <div
                  className="node-description"
                  style={{
                    fontSize: '12px',
                    color: '#666',
                    lineHeight: '1.4',
                    marginBottom: '8px',
                  }}
                >
                  {data.description}
                </div>
              )}

              {/* 子操作 */}
              {data.subActions && data.subActions.length > 0 && (
                <div className="sub-actions">
                  {data.subActions.map((action, index) => (
                    <div
                      key={index}
                      className="sub-action"
                      style={{
                        fontSize: '11px',
                        color: '#1890ff',
                        padding: '2px 0',
                        cursor: 'pointer',
                      }}
                    >
                      • {action}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 输出连接点 */}
          <Handle
            type="source"
            position={Position.Right}
            style={{
              background: '#d9d9d9',
              width: '8px',
              height: '8px',
              border: '2px solid #fff',
              right: '-5px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomNode;
