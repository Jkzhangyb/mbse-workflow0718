import React from 'react';
import { Handle, Position } from '@reactflow/core';
import type { NodeProps } from '@reactflow/core';

interface CustomNodeData {
  label: string;
  type: string;
  description: string;
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, selected }) => {
  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'requirement':
        return '📋';
      case 'architecture':
        return '🏗️';
      case 'simulation':
        return '⚡';
      case 'analysis':
        return '📊';
      case 'optimization':
        return '🎯';
      default:
        return '⚙️';
    }
  };

  const getNodeColor = (type: string) => {
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

  return (
    <div 
      className={`custom-node ${selected ? 'selected' : ''}`}
      style={{
        backgroundColor: '#fff',
        border: `2px solid ${selected ? getNodeColor(data.type) : '#d9d9d9'}`,
        borderRadius: '8px',
        padding: '12px',
        minWidth: '180px',
        boxShadow: selected ? `0 4px 12px ${getNodeColor(data.type)}33` : '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease',
      }}
    >
      {/* 输入连接点 */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: getNodeColor(data.type),
          width: '10px',
          height: '10px',
          border: '2px solid #fff',
        }}
      />
      
      {/* 节点内容 */}
      <div className="node-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '20px', marginRight: '8px' }}>
          {getNodeIcon(data.type)}
        </span>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#262626' }}>
          {data.label}
        </div>
      </div>
      
      <div 
        className="node-description" 
        style={{ 
          fontSize: '12px', 
          color: '#8c8c8c',
          lineHeight: '1.4'
        }}
      >
        {data.description}
      </div>
      
      {/* 输出连接点 */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: getNodeColor(data.type),
          width: '10px',
          height: '10px',
          border: '2px solid #fff',
        }}
      />
    </div>
  );
};

export default CustomNode;
