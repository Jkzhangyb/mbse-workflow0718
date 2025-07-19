import React, { useState, useCallback, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  type Node,
  ReactFlowProvider
} from 'reactflow';
import { Breadcrumb, Button, Space, message } from 'antd';
import { ArrowLeftOutlined, SaveOutlined, PlayCircleOutlined } from '@ant-design/icons';
import 'reactflow/dist/style.css';
import '../styles/workflow.scss';

import CustomNode from '../components/workflow/CustomNode';
import NodeLibrary from '../components/workflow/NodeLibrary';
import NodeConfigPanel from '../components/workflow/NodeConfigPanel';
import ContextMenu from '../components/workflow/ContextMenu';
import { NODE_TYPES, type WorkflowNode, type NodeType } from '../types/workflow';

const nodeTypes = {
  custom: CustomNode,
};

// 初始示例数据，模拟s4.jpeg中的工作流
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 50 },
    data: { 
      label: '需求管理及同步', 
      description: '需求收集、分析和同步管理',
      status: 'completed',
      category: '需求管理',
      config: {},
      color: '#1890ff'
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: { 
      label: '功能与架构设计', 
      description: '系统功能设计和架构规划',
      status: 'running',
      category: '设计',
      config: {},
      color: '#52c41a'
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 400, y: 200 },
    data: { 
      label: '仿真与架构设计', 
      description: '系统仿真和架构验证',
      status: 'pending',
      category: '仿真',
      config: {},
      color: '#722ed1'
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 250, y: 350 },
    data: { 
      label: '数据处理与分析', 
      description: '数据采集、处理和分析',
      status: 'pending',
      category: '数据',
      config: {},
      color: '#fa8c16'
    },
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    type: 'smoothstep',
    style: { strokeDasharray: '5,5' }
  },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3', 
    type: 'smoothstep',
    style: { strokeDasharray: '5,5' }
  },
  { 
    id: 'e2-4', 
    source: '2', 
    target: '4', 
    type: 'smoothstep',
    style: { strokeDasharray: '5,5' }
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4', 
    type: 'smoothstep',
    style: { strokeDasharray: '5,5' }
  },
];

const WorkflowCanvas: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // 使用appId进行后续的数据加载等操作
  console.log('Current app ID:', appId);
  
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    nodeId: null as string | null
  });

  const appName = location.state?.appName || '应用';

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    setSelectedNode(node as WorkflowNode);
  }, []);

  const onNodeContextMenu = useCallback((event: React.MouseEvent, node: Node) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id
    });
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setContextMenu(prev => ({ ...prev, visible: false }));
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds) return;

      const type = event.dataTransfer.getData('application/reactflow');
      const nodeType = NODE_TYPES.find(nt => nt.id === type);
      
      if (!nodeType) return;

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode: Node = {
        id: `node-${Date.now()}`,
        type: 'custom',
        position,
        data: {
          label: nodeType.name,
          description: nodeType.description,
          status: 'pending' as const,
          category: nodeType.category,
          config: {},
          color: nodeType.color
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const handleNodeSelect = useCallback((nodeType: NodeType) => {
    const position = { x: 300, y: 300 };
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: 'custom',
      position,
      data: {
        label: nodeType.name,
        description: nodeType.description,
        status: 'pending' as const,
        category: nodeType.category,
        config: {},
        color: nodeType.color
      },
    };
    setNodes((nds) => nds.concat(newNode));
    message.success(`已添加节点: ${nodeType.name}`);
  }, [setNodes]);

  const handleNodeUpdate = useCallback((nodeId: string, updates: Partial<WorkflowNode>) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            ...updates,
          };
        }
        return node;
      })
    );
  }, [setNodes]);

  const handleNodeDelete = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    message.success('节点已删除');
  }, [setNodes, setEdges]);

  const handleNodeCopy = useCallback((nodeId: string) => {
    const nodeToCopy = nodes.find(node => node.id === nodeId);
    if (nodeToCopy) {
      const newNode: Node = {
        ...nodeToCopy,
        id: `node-${Date.now()}`,
        position: {
          x: nodeToCopy.position.x + 50,
          y: nodeToCopy.position.y + 50
        }
      };
      setNodes((nds) => nds.concat(newNode));
      message.success('节点已复制');
    }
  }, [nodes, setNodes]);

  const handleContextMenuAction = useCallback((action: string, nodeId: string) => {
    setContextMenu(prev => ({ ...prev, visible: false }));
    
    switch (action) {
      case 'edit':
        const nodeToEdit = nodes.find(node => node.id === nodeId);
        if (nodeToEdit) {
          setSelectedNode(nodeToEdit as WorkflowNode);
        }
        break;
      case 'copy':
        handleNodeCopy(nodeId);
        break;
      case 'delete':
        handleNodeDelete(nodeId);
        break;
      case 'info':
        message.info('节点信息功能开发中');
        break;
    }
  }, [nodes, handleNodeCopy, handleNodeDelete]);

  const handleSave = useCallback(() => {
    message.success('工作流已保存');
    console.log('Saving workflow:', { nodes, edges });
  }, [nodes, edges]);

  const handleRun = useCallback(() => {
    message.info('工作流执行功能开发中');
  }, []);

  const breadcrumbItems = [
    { title: '应用中心' },
    { title: appName },
    { title: '工作流定义' }
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
      {/* 面包屑和工具栏 */}
      <div style={{ 
        padding: '16px 24px', 
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fff'
      }}>
        <div style={{ marginBottom: 16 }}>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <Space>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/apps')}
          >
            返回应用中心
          </Button>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={handleSave}
          >
            保存
          </Button>
          <Button
            icon={<PlayCircleOutlined />}
            onClick={handleRun}
          >
            运行工作流
          </Button>
        </Space>
      </div>

      {/* 主要内容区域 */}
      <div style={{ flex: 1, display: 'flex' }}>
        {/* 节点库 */}
        <div style={{ width: 250, borderRight: '1px solid #f0f0f0' }}>
          <NodeLibrary onNodeSelect={handleNodeSelect} />
        </div>

        {/* 工作流画布 */}
        <div style={{ flex: 1 }} ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onNodeContextMenu={onNodeContextMenu}
            onPaneClick={onPaneClick}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2 }}
          >
            <Controls />
            <MiniMap 
              style={{
                backgroundColor: '#f8f9fa',
              }}
              nodeStrokeWidth={3}
              nodeColor="#1890ff"
            />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>

        {/* 节点配置面板 */}
        <div style={{ width: 300, borderLeft: '1px solid #f0f0f0' }}>
          <NodeConfigPanel
            selectedNode={selectedNode}
            onNodeUpdate={handleNodeUpdate}
            onNodeDelete={handleNodeDelete}
            onNodeCopy={handleNodeCopy}
            onClose={() => setSelectedNode(null)}
          />
        </div>
      </div>

      {/* 右键菜单 */}
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        nodeId={contextMenu.nodeId}
        onMenuClick={handleContextMenuAction}
        onVisibleChange={(visible) => 
          setContextMenu(prev => ({ ...prev, visible }))
        }
      />
    </div>
  );
};

const WorkflowCanvasWrapper: React.FC = () => (
  <ReactFlowProvider>
    <WorkflowCanvas />
  </ReactFlowProvider>
);

export default WorkflowCanvasWrapper;
