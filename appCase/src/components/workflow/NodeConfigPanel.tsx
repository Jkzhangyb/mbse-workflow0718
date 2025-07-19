import React, { useState, useEffect } from 'react';
import type { Node } from '@reactflow/core';
import './NodeConfigPanel.scss';

interface NodeConfigPanelProps {
  node: Node;
  onClose: () => void;
  onUpdate: (updatedNode: Node) => void;
}

// 生成GUID
const generateGUID = (): string => {
  return 'IDXXX' + Math.floor(10000 + Math.random() * 90000).toString();
};

// 获取当前时间戳
const getCurrentDateTime = (): string => {
  return new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({ node, onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'sync'>('basic');
  const [formData, setFormData] = useState({
    // 基础信息
    label: node.data.label || '',
    nodeId: node.data.nodeId || generateGUID(),
    description: node.data.description || '',
    priority: node.data.priority || 'high',
    creator: node.data.creator || '系统管理员',
    createTime: node.data.createTime || getCurrentDateTime(),
    executionLog: node.data.executionLog || '',
    // 需求同步相关
    syncEnabled: node.data.syncEnabled || false,
    syncSource: node.data.syncSource || '',
    syncFrequency: node.data.syncFrequency || 'manual',
    lastSyncTime: node.data.lastSyncTime || '',
    syncStatus: node.data.syncStatus || 'pending'
  });

  // 监听节点变化，更新表单数据
  useEffect(() => {
    setFormData({
      label: node.data.label || '',
      nodeId: node.data.nodeId || generateGUID(),
      description: node.data.description || '',
      priority: node.data.priority || 'high',
      creator: node.data.creator || '系统管理员',
      createTime: node.data.createTime || getCurrentDateTime(),
      executionLog: node.data.executionLog || '',
      syncEnabled: node.data.syncEnabled || false,
      syncSource: node.data.syncSource || '',
      syncFrequency: node.data.syncFrequency || 'manual',
      lastSyncTime: node.data.lastSyncTime || '',
      syncStatus: node.data.syncStatus || 'pending'
    });
  }, [node]);

  // 处理表单字段变化
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 保存配置
  const handleSave = () => {
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        ...formData
      }
    };
    onUpdate(updatedNode);
    // 不关闭面板，让用户可以继续编辑
    // onClose();
  };

  // 重置表单
  const handleReset = () => {
    setFormData({
      label: node.data.label || '',
      nodeId: node.data.nodeId || generateGUID(),
      description: node.data.description || '',
      priority: node.data.priority || 'high',
      creator: node.data.creator || '系统管理员',
      createTime: node.data.createTime || getCurrentDateTime(),
      executionLog: node.data.executionLog || '',
      syncEnabled: node.data.syncEnabled || false,
      syncSource: node.data.syncSource || '',
      syncFrequency: node.data.syncFrequency || 'manual',
      lastSyncTime: node.data.lastSyncTime || '',
      syncStatus: node.data.syncStatus || 'pending'
    });
  };

  return (
    <div className="node-config-panel">
      {/* 面板头部 */}
      <div className="config-header">
        <button className="close-btn" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.854 4.854a.5.5 0 0 0-.708-.708L8 8.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </button>
      </div>

      {/* 标签页切换 */}
      <div className="config-tabs">
        <button 
          className={`tab-btn ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          基础信息
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sync' ? 'active' : ''}`}
          onClick={() => setActiveTab('sync')}
        >
          需求同步
        </button>
      </div>

      {/* 配置内容 */}
      <div className="config-content">
        {activeTab === 'basic' && (
          <div className="basic-config">
            {/* 节点名称 */}
            <div className="form-group">
              <label>节点名称</label>
              <input
                type="text"
                value={formData.label}
                onChange={(e) => handleInputChange('label', e.target.value)}
                placeholder="请输入节点名称"
              />
            </div>

            {/* 节点ID */}
            <div className="form-group">
              <label>节点ID</label>
              <div className="input-with-action">
                <input
                  type="text"
                  value={formData.nodeId}
                  readOnly
                  className="readonly-input"
                />
                <button 
                  type="button" 
                  className="regenerate-btn"
                  onClick={() => handleInputChange('nodeId', generateGUID())}
                  title="重新生成ID"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 节点描述 */}
            <div className="form-group">
              <label>描述</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="请输入节点描述"
                rows={3}
              />
            </div>

            {/* 优先级 */}
            <div className="form-group">
              <label>优先级</label>
              <select
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
              >
                <option value="high">高</option>
                <option value="medium">中</option>
                <option value="low">低</option>
              </select>
            </div>

            {/* 创建人 */}
            <div className="form-group">
              <label>创建人</label>
              <input
                type="text"
                value={formData.creator}
                onChange={(e) => handleInputChange('creator', e.target.value)}
                placeholder="请输入创建人"
              />
            </div>

            {/* 创建时间 */}
            <div className="form-group">
              <label>创建时间</label>
              <input
                type="text"
                value={formData.createTime}
                readOnly
                className="readonly-input"
              />
            </div>

            {/* 执行日志 */}
            <div className="form-group">
              <label>执行日志</label>
              <textarea
                value={formData.executionLog}
                onChange={(e) => handleInputChange('executionLog', e.target.value)}
                placeholder="记录节点执行过程和结果"
                rows={4}
              />
            </div>
          </div>
        )}

        {activeTab === 'sync' && (
          <div className="sync-config">
            {/* 启用同步 */}
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.syncEnabled}
                  onChange={(e) => handleInputChange('syncEnabled', e.target.checked)}
                />
                <span className="checkmark"></span>
                启用需求同步
              </label>
            </div>

            {formData.syncEnabled && (
              <>
                {/* 同步源 */}
                <div className="form-group">
                  <label>同步源</label>
                  <select
                    value={formData.syncSource}
                    onChange={(e) => handleInputChange('syncSource', e.target.value)}
                  >
                    <option value="">请选择同步源</option>
                    <option value="polarion">Polarion</option>
                    <option value="doors">IBM DOORS</option>
                    <option value="jama">Jama Connect</option>
                    <option value="azure-devops">Azure DevOps</option>
                  </select>
                </div>

                {/* 同步频率 */}
                <div className="form-group">
                  <label>同步频率</label>
                  <select
                    value={formData.syncFrequency}
                    onChange={(e) => handleInputChange('syncFrequency', e.target.value)}
                  >
                    <option value="manual">手动同步</option>
                    <option value="hourly">每小时</option>
                    <option value="daily">每日</option>
                    <option value="weekly">每周</option>
                  </select>
                </div>

                {/* 最后同步时间 */}
                <div className="form-group">
                  <label>最后同步时间</label>
                  <input
                    type="text"
                    value={formData.lastSyncTime}
                    readOnly
                    className="readonly-input"
                    placeholder="暂无同步记录"
                  />
                </div>

                {/* 同步状态 */}
                <div className="form-group">
                  <label>同步状态</label>
                  <div className="sync-status">
                    <span className={`status-indicator ${formData.syncStatus}`}>
                      {formData.syncStatus === 'success' && '已同步'}
                      {formData.syncStatus === 'error' && '同步失败'}
                      {formData.syncStatus === 'pending' && '待同步'}
                      {formData.syncStatus === 'syncing' && '同步中'}
                    </span>
                    <button 
                      className="sync-now-btn"
                      onClick={() => {
                        // 这里可以触发实际的同步逻辑
                        handleInputChange('syncStatus', 'syncing');
                        handleInputChange('lastSyncTime', getCurrentDateTime());
                        setTimeout(() => {
                          handleInputChange('syncStatus', 'success');
                        }, 2000);
                      }}
                    >
                      立即同步
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="config-actions">
        <button className="btn-secondary" onClick={handleReset}>
          重置
        </button>
        <button className="btn-primary" onClick={handleSave}>
          保存
        </button>
      </div>
    </div>
  );
};

export default NodeConfigPanel;
