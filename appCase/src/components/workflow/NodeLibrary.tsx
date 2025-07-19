import React from 'react';
import { Card, Space } from 'antd';
import { NODE_TYPES, type NodeType } from '../../types/workflow';

interface NodeLibraryProps {
  onNodeSelect: (nodeType: NodeType) => void;
}

const NodeLibrary: React.FC<NodeLibraryProps> = ({ onNodeSelect }) => {
  return (
    <Card 
      title="节点库" 
      size="small"
      style={{ 
        width: 250, 
        height: '100%',
        overflow: 'auto'
      }}
      bodyStyle={{ padding: '12px' }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        {NODE_TYPES.map((nodeType) => (
          <Card
            key={nodeType.id}
            size="small"
            hoverable
            style={{
              cursor: 'pointer',
              border: `1px solid ${nodeType.color}`,
              borderRadius: 6,
            }}
            bodyStyle={{ padding: '8px 12px' }}
            onClick={() => onNodeSelect(nodeType)}
            onDragStart={(e) => {
              e.dataTransfer.setData('application/reactflow', nodeType.id);
              e.dataTransfer.effectAllowed = 'move';
            }}
            draggable
          >
            <div style={{ marginBottom: 4 }}>
              <div style={{
                fontWeight: 500,
                fontSize: '12px',
                color: '#262626'
              }}>
                {nodeType.name}
              </div>
            </div>
            <div style={{
              fontSize: '10px',
              color: '#8c8c8c',
              lineHeight: '12px'
            }}>
              {nodeType.description}
            </div>
          </Card>
        ))}
      </Space>
    </Card>
  );
};

export default NodeLibrary;
