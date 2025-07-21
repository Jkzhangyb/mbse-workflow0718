import React, { useEffect } from 'react';

interface ContextMenuProps {
  visible: boolean;
  x: number;
  y: number;
  nodeExecutionStatus?: 'waiting' | 'running' | 'completed'; // 添加节点执行状态
  onClose: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenTool: () => void;
  onExecuteNode: () => void;
  onExecuteFromNode: () => void;
  onViewResult: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  x,
  y,
  nodeExecutionStatus,
  onClose,
  onDelete,
  onDuplicate,
  onOpenTool,
  onExecuteNode,
  onExecuteFromNode,
  onViewResult,
}) => {
  useEffect(() => {
    const handleClickOutside = () => {
      if (visible) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="context-menu"
      style={{
        position: 'fixed',
        top: y,
        left: x,
        backgroundColor: '#fff',
        border: '1px solid #d9d9d9',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        minWidth: '120px',
        padding: '4px 0',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="context-menu-item"
        onClick={() => {
          onDuplicate();
          onClose();
        }}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#262626',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>📋</span>
        复制节点
      </div>
      
      <div
        className="context-menu-item"
        onClick={() => {
          onDelete();
          onClose();
        }}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#ff4d4f',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#fff2f0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>🗑️</span>
        删除节点
      </div>

      <div
        className="context-menu-item"
        onClick={() => {
          onOpenTool();
          onClose();
        }}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#1d4ed8',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e0f2fe';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>🔧</span>
        在工具中打开
      </div>

      <div
        className="context-menu-item"
        onClick={() => {
          onExecuteNode();
          onClose();
        }}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#059669',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#d1fae5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>▶️</span>
        执行此节点
      </div>

      <div
        className="context-menu-item"
        onClick={() => {
          onExecuteFromNode();
          onClose();
        }}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#ea580c',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#fef3c7';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>⏩</span>
        从该节点执行
      </div>

      <div
        className="context-menu-item"
        onClick={() => {
          if (nodeExecutionStatus === 'completed') {
            onViewResult();
            onClose();
          }
        }}
        style={{
          padding: '8px 16px',
          cursor: nodeExecutionStatus === 'completed' ? 'pointer' : 'not-allowed',
          fontSize: '14px',
          color: nodeExecutionStatus === 'completed' ? '#0891b2' : '#d9d9d9',
          display: 'flex',
          alignItems: 'center',
          opacity: nodeExecutionStatus === 'completed' ? 1 : 0.5,
        }}
        onMouseEnter={(e) => {
          if (nodeExecutionStatus === 'completed') {
            e.currentTarget.style.backgroundColor = '#cffafe';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span style={{ marginRight: '8px' }}>📊</span>
        查看结果
        {nodeExecutionStatus !== 'completed' && (
          <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#8c8c8c' }}>
            (需完成执行)
          </span>
        )}
      </div>
    </div>
  );
};

export default ContextMenu;
