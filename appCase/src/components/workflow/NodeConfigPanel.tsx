import React, { useState } from 'react';
import type { Node } from '@reactflow/core';

interface NodeConfigPanelProps {
  node: Node;
  onClose: () => void;
  onUpdate: (updatedNode: Node) => void;
}

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({ node, onClose, onUpdate }) => {
  const [label, setLabel] = useState(node.data.label || '');
  const [description, setDescription] = useState(node.data.description || '');

  const handleSave = () => {
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        label,
        description,
      },
    };
    onUpdate(updatedNode);
    onClose();
  };

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

  return (
    <div className="node-config-panel">
      <div className="config-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '20px', marginRight: '8px' }}>
            {getNodeIcon(node.data.type)}
          </span>
          <h3>节点配置</h3>
        </div>
        <button 
          className="close-btn"
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#8c8c8c',
            padding: '4px',
          }}
        >
          ✕
        </button>
      </div>

      <div className="config-content">
        <div className="config-group">
          <label>节点名称</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="输入节点名称"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
        </div>

        <div className="config-group">
          <label>节点描述</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="输入节点描述"
            rows={4}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              fontSize: '14px',
              resize: 'vertical',
              minHeight: '80px',
            }}
          />
        </div>

        <div className="config-group">
          <label>节点类型</label>
          <div style={{
            padding: '8px 12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#8c8c8c',
          }}>
            {node.data.type} (只读)
          </div>
        </div>

        <div className="config-group">
          <label>节点ID</label>
          <div style={{
            padding: '8px 12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#8c8c8c',
            fontFamily: 'monospace',
          }}>
            {node.id}
          </div>
        </div>
      </div>

      <div className="config-actions">
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            backgroundColor: '#fff',
            color: '#595959',
            cursor: 'pointer',
            marginRight: '8px',
          }}
        >
          取消
        </button>
        <button
          onClick={handleSave}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#1890ff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default NodeConfigPanel;
