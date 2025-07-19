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
  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
  };

  const [activeTab, setActiveTab] = useState<'basic' | 'sync'>('basic');
  const [formData, setFormData] = useState({
    // 基础信息
    customName: node.data.customName || '', // 使用 customName 替代 label
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
    syncStatus: node.data.syncStatus || 'pending',
    syncSourceType: node.data.syncSourceType || 'remote', // 新增字段
    serviceAddress: node.data.serviceAddress || '',
    username: node.data.username || '',
    password: node.data.password || '',
    localFile: null, // 本地上传文件
    platformType: '', // 新增字段
    serviceUrl: ''   // 新增字段
  });

  // 监听节点变化，更新表单数据
  useEffect(() => {
    setFormData({
      customName: node.data.customName || '', // 使用 customName 替代 label
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
      syncStatus: node.data.syncStatus || 'pending',
      syncSourceType: node.data.syncSourceType || 'remote', // 新增字段
      serviceAddress: node.data.serviceAddress || '',
      username: node.data.username || '',
      password: node.data.password || '',
      localFile: null, // 本地上传文件
      platformType: '', // 新增字段
      serviceUrl: ''   // 新增字段
    });
  }, [node]);

  // 处理表单字段变化
  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'customName') {
      const updatedNode = {
        ...node,
        data: {
          ...node.data,
          customName: value,
          label: node.data.label // 确保保留 label 字段
        }
      };
      onUpdate(updatedNode);
    }
  };

  // 保存配置
  const handleSave = () => {
    const updatedNode = {
      ...node,
      data: {
        ...formData // 确保保存所有字段，包括 customName
      }
    };
    onUpdate(updatedNode); // 通知画布更新节点数据
    // 不关闭面板，让用户可以继续编辑
    // onClose();
  };

  // 重置表单
  const handleReset = () => {
    setFormData({
      customName: node.data.customName || '', // 使用 customName 替代 label
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
      syncStatus: node.data.syncStatus || 'pending',
      syncSourceType: node.data.syncSourceType || 'remote', // 新增字段
      serviceAddress: node.data.serviceAddress || '',
      username: node.data.username || '',
      password: node.data.password || '',
      localFile: null, // 本地上传文件
      platformType: '', // 新增字段
      serviceUrl: ''   // 新增字段
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
                value={formData.customName} // 确保使用 customName
                onChange={(e) => handleInputChange('customName', e.target.value)}
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
            {/* 启用需求同步 */}
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

            {/* 需求源类型 */}
            <div className="form-group">
              <label>需求源类型</label>
              <select
                value={formData.syncSourceType || ''}
                onChange={(e) => handleInputChange('syncSourceType', e.target.value)}
              >
                <option value="">请选择需求源类型</option>
                <option value="remote">远程同步</option>
                <option value="local">本地上传</option>
              </select>
            </div>

            {/* 根据需求源类型动态显示配置 */}
            {formData.syncSourceType === 'remote' && (
              <>
                {/* 平台类型 */}
                <div className="form-group">
                  <label>平台类型</label>
                  <select
                    value={formData.platformType || ''}
                    onChange={(e) => handleInputChange('platformType', e.target.value)}
                  >
                    <option value="">请选择平台类型</option>
                    <option value="polarion">Polarion</option>
                    <option value="teamcenter">Teamcenter</option>
                    <option value="oslc">OSLC</option>
                  </select>
                </div>

                {/* 服务地址 */}
                <div className="form-group">
                  <label>服务地址</label>
                  <input
                    type="text"
                    value={formData.serviceAddress}
                    onChange={(e) => handleInputChange('serviceAddress', e.target.value)}
                    placeholder="请输入服务地址"
                    style={inputStyle} // 应用统一样式
                  />
                </div>

                {/* 用户名 */}
                <div className="form-group">
                  <label>用户名</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    placeholder="请输入用户名"
                    style={inputStyle} // 应用统一样式
                  />
                </div>

                {/* 密码 */}
                <div className="form-group">
                  <label>密码</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="请输入密码"
                    style={inputStyle} // 应用统一样式，与用户名输入框一致
                  />
                </div>
              </>
            )}

            {formData.syncSourceType === 'local' && (
              <>
                {/* 本地上传 */}
                <div className="form-group">
                  <label>本地上传</label>
                  <input
                    type="file"
                    onChange={(e) => handleInputChange('localFile', e.target.files?.[0] || null)} // 确保 undefined 转换为 null
                  />
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
