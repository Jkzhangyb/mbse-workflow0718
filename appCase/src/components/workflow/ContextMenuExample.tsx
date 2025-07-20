import React, { useState } from 'react';
import ContextMenu from './ContextMenu';

const ContextMenuExample: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleOpenTool = () => {
    alert('打开外部工具');
  };

  const handleExecuteNode = () => {
    alert('执行此节点');
  };

  const handleExecuteFromNode = () => {
    alert('从该节点执行');
  };

  const handleViewResult = () => {
    alert('查看结果');
  };

  return (
    <div
      style={{ width: '100%', height: '100vh', background: '#f0f0f0' }}
      onContextMenu={handleContextMenu}
    >
      <h1>右键点击显示菜单</h1>
      <ContextMenu
        visible={menuVisible}
        x={menuPosition.x}
        y={menuPosition.y}
        onClose={handleCloseMenu}
        onDelete={() => alert('删除节点')}
        onDuplicate={() => alert('复制节点')}
        onOpenTool={handleOpenTool}
        onExecuteNode={handleExecuteNode}
        onExecuteFromNode={handleExecuteFromNode}
        onViewResult={handleViewResult}
      />
    </div>
  );
};

export default ContextMenuExample;
