import React, { useEffect } from 'react';
import { Card, Form, Input, Select, Button, Space, Divider } from 'antd';
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons';
import type { WorkflowNode } from '../../types/workflow';

interface NodeConfigPanelProps {
  selectedNode: WorkflowNode | null;
  onNodeUpdate: (nodeId: string, updates: Partial<WorkflowNode>) => void;
  onNodeDelete: (nodeId: string) => void;
  onNodeCopy: (nodeId: string) => void;
  onClose: () => void;
}

const { TextArea } = Input;
const { Option } = Select;

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({
  selectedNode,
  onNodeUpdate,
  onNodeDelete,
  onNodeCopy,
  onClose
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedNode) {
      const formData = {
        label: selectedNode.data.label,
        description: selectedNode.data.description || '',
        status: selectedNode.data.status || 'pending',
        ...selectedNode.data.config
      };
      form.setFieldsValue(formData);
    }
  }, [selectedNode, form]);

  const handleFormChange = (_changedFields: any, allFields: any) => {
    if (selectedNode) {
      const { label, description, status, ...config } = allFields;
      onNodeUpdate(selectedNode.id, {
        data: {
          ...selectedNode.data,
          label,
          description,
          status,
          config
        }
      });
    }
  };

  const handleDelete = () => {
    if (selectedNode) {
      onNodeDelete(selectedNode.id);
      onClose();
    }
  };

  const handleCopy = () => {
    if (selectedNode) {
      onNodeCopy(selectedNode.id);
    }
  };

  if (!selectedNode) {
    return (
      <Card 
        title="节点配置" 
        size="small"
        style={{ width: 300, height: '100%' }}
        bodyStyle={{ padding: '16px', textAlign: 'center', color: '#8c8c8c' }}
      >
        请选择一个节点进行配置
      </Card>
    );
  }

  return (
    <Card
      title="节点配置"
      size="small"
      style={{ width: 300, height: '100%', overflow: 'auto' }}
      extra={
        <Button type="text" size="small" onClick={onClose}>
          ×
        </Button>
      }
    >
      <Form
        form={form}
        layout="vertical"
        size="small"
        onValuesChange={handleFormChange}
      >
        <Form.Item
          label="节点名称"
          name="label"
          rules={[{ required: true, message: '请输入节点名称' }]}
        >
          <Input placeholder="输入节点名称" />
        </Form.Item>

        <Form.Item label="描述" name="description">
          <TextArea 
            placeholder="输入节点描述" 
            rows={3}
            showCount
            maxLength={200}
          />
        </Form.Item>

        <Form.Item label="状态" name="status">
          <Select placeholder="选择状态">
            <Option value="pending">待处理</Option>
            <Option value="running">进行中</Option>
            <Option value="completed">已完成</Option>
            <Option value="error">错误</Option>
          </Select>
        </Form.Item>

        <Divider />

        <Form.Item label="优先级" name="priority">
          <Select placeholder="选择优先级">
            <Option value="high">高</Option>
            <Option value="medium">中</Option>
            <Option value="low">低</Option>
          </Select>
        </Form.Item>

        <Form.Item label="负责人" name="assignee">
          <Input placeholder="输入负责人" />
        </Form.Item>

        <Form.Item label="预计时长(小时)" name="estimatedHours">
          <Input type="number" placeholder="输入预计时长" />
        </Form.Item>

        <Divider />
        
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Button 
            icon={<CopyOutlined />} 
            onClick={handleCopy}
            size="small"
          >
            复制
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={handleDelete}
            size="small"
          >
            删除
          </Button>
        </Space>
      </Form>
    </Card>
  );
};

export default NodeConfigPanel;
