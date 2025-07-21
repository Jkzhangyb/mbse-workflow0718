import React from 'react';

interface ResultViewerProps {
  nodeId: string;
  results: Record<string, any>;
  onClose: () => void;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ nodeId, results, onClose }) => {
  if (!results[nodeId]) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        borderTop: '1px solid #d9d9d9',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        padding: '16px',
      }}
    >
      <h3>节点 {nodeId} 的仿真结果</h3>
      <pre style={{ overflowX: 'auto' }}>{JSON.stringify(results[nodeId], null, 2)}</pre>
      <button onClick={onClose} style={{ marginTop: '16px' }}>
        关闭
      </button>
    </div>
  );
};

export default ResultViewer;
