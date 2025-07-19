import React, { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { Card, Tag } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

interface CustomNodeData {
  label: string;
  description?: string;
  status?: 'pending' | 'running' | 'completed' | 'error';
  category?: string;
  color?: string;
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, selected }) => {
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
      case 'running':
        return <ClockCircleOutlined style={{ color: '#1890ff' }} />;
      case 'error':
        return <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
      />
      <Card
        size="small"
        style={{
          minWidth: 200,
          border: selected ? '2px solid #1890ff' : `2px solid ${data.color || '#d9d9d9'}`,
          borderRadius: 8,
          boxShadow: selected ? '0 4px 12px rgba(24, 144, 255, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
        }}
        bodyStyle={{ padding: '12px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ 
            fontWeight: 600, 
            fontSize: '14px',
            color: '#262626',
            flex: 1
          }}>
            {data.label}
          </div>
          {getStatusIcon(data.status)}
        </div>
        
        {data.category && (
          <Tag color={data.color} style={{ marginBottom: 4 }}>
            {data.category}
          </Tag>
        )}
        
        {data.description && (
          <div style={{ 
            fontSize: '12px', 
            color: '#8c8c8c',
            lineHeight: '16px'
          }}>
            {data.description}
          </div>
        )}
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
      />
    </>
  );
};

export default memo(CustomNode);
