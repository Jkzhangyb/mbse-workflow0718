import React from 'react';
import { Menu } from 'antd';
import { 
  CopyOutlined, 
  DeleteOutlined, 
  EditOutlined, 
  InfoCircleOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface ContextMenuProps {
  visible: boolean;
  x: number;
  y: number;
  nodeId: string | null;
  onMenuClick: (action: string, nodeId: string) => void;
  onVisibleChange: (visible: boolean) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  x,
  y,
  nodeId,
  onMenuClick,
  onVisibleChange
}) => {
  if (!nodeId) return null;

  const menuItems: MenuProps['items'] = [
    {
      key: 'edit',
      label: '编辑节点',
      icon: <EditOutlined />,
      onClick: () => onMenuClick('edit', nodeId)
    },
    {
      key: 'copy',
      label: '复制节点',
      icon: <CopyOutlined />,
      onClick: () => onMenuClick('copy', nodeId)
    },
    {
      key: 'info',
      label: '节点信息',
      icon: <InfoCircleOutlined />,
      onClick: () => onMenuClick('info', nodeId)
    },
    {
      type: 'divider'
    },
    {
      key: 'delete',
      label: '删除节点',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => onMenuClick('delete', nodeId)
    }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: y,
        left: x,
        zIndex: 9999,
        display: visible ? 'block' : 'none'
      }}
      onMouseLeave={() => onVisibleChange(false)}
    >
      <Menu
        items={menuItems}
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: 6,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      />
    </div>
  );
};

export default ContextMenu;
