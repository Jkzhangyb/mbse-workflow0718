import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionMode,
  useReactFlow,
  ReactFlowProvider,
} from '@reactflow/core';
import type { Node, Edge, Connection } from '@reactflow/core';
import { Background } from '@reactflow/background';
import { Controls } from '@reactflow/controls';
import { MiniMap } from '@reactflow/minimap';
import '@reactflow/core/dist/style.css';

import CustomNode from './CustomNode';
// import NodeLibrary from './NodeLibrary';
import NodeConfigPanel from './NodeConfigPanel';
import NodeResultPanel from './NodeResultPanel';
import ContextMenu from './ContextMenu';
import './WorkflowCanvas.scss';

// 自定义节点类型
const nodeTypes = {
  custom: CustomNode,
};

// 画布控制组件
const CanvasControls: React.FC = () => {
  const { fitView, zoomIn, zoomOut } = useReactFlow();

  return (
    <div className="canvas-controls">
      <button 
        className="canvas-control-btn"
        onClick={() => fitView({ padding: 0.2, duration: 300 })}
        title="画布居中"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2h3v1H3v2H2V2zm9 0h3v3h-1V3h-2V2zM2 11v3h3v-1H3v-2H2zm12 0v2h-2v1h3v-3h-1z"/>
          <rect x="6" y="6" width="4" height="4" />
        </svg>
      </button>
      
      <button 
        className="canvas-control-btn"
        onClick={() => zoomIn({ duration: 200 })}
        title="放大"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 3.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 3.5z"/>
        </svg>
      </button>
      
      <button 
        className="canvas-control-btn"
        onClick={() => zoomOut({ duration: 200 })}
        title="缩小"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      </button>
    </div>
  );
};

// 初始节点数据
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 150 },
    data: { 
      customName: "整车安全需求同步",
      label: '需求管理及同步',
      type: 'requirement',
      description: '从系统规格书创建和管理需求项',
      tool: 'Polarion',
      subActions: ['创建需求'],
      collapsed: false,
      executionStatus: 'completed',
      autoExecution: true
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 450, y: 150 },
    data: { 
      customName:"安全需求同步到EA",
      label: '功能与架构设计',
      type: 'architecture',
      description: '基于需求进行系统功能和架构设计',
      tool: 'Polarion-EA',
      subActions: ['需求同步'],
      collapsed: false,
      executionStatus: 'completed',
      autoExecution: true
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 450, y: 350 },
    data: { 
      customName:"整车安全架构设计",
      label: '功能与架构设计',
      type: 'architecture',
      description: '进行功能与架构的详细设计',
      tool: 'EA',
      subActions: ['功能&逻辑设计'],
      collapsed: false,
      executionStatus: 'running',
      autoExecution: true
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 450, y: 550 },
    data: { 
      customName:"SSP架构转换",
      label: '功能与架构设计',
      type: 'architecture',
      description: '架构转换为可仿真的模型',
      tool: 'SSP',
      subActions: ['架构转换'],
      collapsed: false,
      executionStatus: 'waiting',
      autoExecution: true
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 850, y: 150 },
    data: { 
      customName:"SSP-Modelica",
      label: '系统集成仿真',
      type: 'simulation',
      description: '系统综合仿真验证',
      tool: 'SSP-Modelica',
      subActions: ['架构同步'],
      collapsed: false,
      executionStatus: 'waiting',
      autoExecution: false  // 这个节点默认不自动执行，测试错误处理
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 850, y: 350 },
    data: { 
      customName:"M-works仿真",
      label: '系统集成仿真',
      type: 'simulation',
      description: '进行仿真配置定义',
      tool: 'M-works',
      subActions: ['仿真配置'],
      collapsed: false,
      executionStatus: 'waiting',
      autoExecution: true
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 850, y: 550 },
    data: { 
      customName:"DOE实验设计",
      label: '系统仿真集成',
      type: 'simulation',
      description: '实验设计与多方案分析',
      tool: 'DOE',
      subActions: ['架构转换'],
      collapsed: false,
      executionStatus: 'waiting',
      autoExecution: true
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    type: 'smoothstep',
    animated: true,
  },
];

interface WorkflowCanvasProps {
  appName?: string;
}

// 辅助函数：根据节点执行状态计算边的样式
const getEdgeStyle = (nodes: Node[], sourceId: string, targetId: string) => {
  const sourceNode = nodes.find(node => node.id === sourceId);
  const targetNode = nodes.find(node => node.id === targetId);
  
  const sourceStatus = sourceNode?.data?.executionStatus;
  const targetStatus = targetNode?.data?.executionStatus;
  
  // 如果两个节点都已完成，连线显示为绿色
  if (sourceStatus === 'completed' && targetStatus === 'completed') {
    return {
      stroke: '#52c41a',
      strokeWidth: 2,
    };
  }
  
  // 如果源节点已完成，目标节点正在运行，显示为黄色
  if (sourceStatus === 'completed' && targetStatus === 'running') {
    return {
      stroke: '#faad14',
      strokeWidth: 2,
    };
  }
  
  // 默认样式（灰色）
  return {
    stroke: '#d9d9d9',
    strokeWidth: 1,
  };
};

const WorkflowCanvas: React.FC<WorkflowCanvasProps> = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    nodeId?: string;
  }>({ visible: false, x: 0, y: 0 });

  // 仿真状态管理
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'paused' | 'completed' | 'error'>('idle');
  const [currentExecutingNodeIndex, setCurrentExecutingNodeIndex] = useState<number>(-1);
  const [executionError, setExecutionError] = useState<string | null>(null);
  const [showWorkflowDetails, setShowWorkflowDetails] = useState<boolean>(false);
  
  // 使用ref来跟踪执行状态，避免闭包问题
  const executionStateRef = useRef<{
    status: 'idle' | 'running' | 'paused' | 'completed' | 'error';
    isPaused: boolean;
  }>({
    status: 'idle',
    isPaused: false
  });

  // 同步ref状态
  useEffect(() => {
    executionStateRef.current.status = simulationStatus;
    executionStateRef.current.isPaused = simulationStatus === 'paused';
  }, [simulationStatus]);
  
  // 结果面板状态管理
  const [resultPanel, setResultPanel] = useState<{
    visible: boolean;
    nodeData: {
      id: string;
      label: string;
      tool?: string;
      type: string;
      customName?: string;
    } | null;
  }>({ visible: false, nodeData: null });
  
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  // 动态更新边的样式基于节点执行状态
  useEffect(() => {
    setEdges((currentEdges) =>
      currentEdges.map((edge) => ({
        ...edge,
        style: getEdgeStyle(nodes, edge.source, edge.target),
      }))
    );
  }, [nodes, setEdges]);

  // 处理查看结果
  const handleViewResult = useCallback((nodeId: string, nodeData: any) => {
    setResultPanel({
      visible: true,
      nodeData: {
        id: nodeId,
        label: nodeData.label,
        tool: nodeData.tool,
        type: nodeData.type,
        customName: nodeData.customName
      }
    });
  }, []);

  // 关闭结果面板
  const handleCloseResultPanel = useCallback(() => {
    setResultPanel({ visible: false, nodeData: null });
  }, []);

  // 开始自动执行工作流
  const startWorkflowExecution = useCallback(async () => {
    console.log('开始执行工作流');
    setSimulationStatus('running');
    setExecutionError(null);
    setCurrentExecutingNodeIndex(0);

    // 检查所有节点的自动执行选项
    const nonAutoNodes = nodes.filter(node => !node.data.autoExecution);
    if (nonAutoNodes.length > 0) {
      const nodeNames = nonAutoNodes.map(node => node.data.customName || node.data.label).join(', ');
      setExecutionError(`以下节点未开启自动执行: ${nodeNames}`);
      setSimulationStatus('error');
      return;
    }

    // 重置所有节点状态为等待
    setNodes((currentNodes) =>
      currentNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          executionStatus: 'waiting'
        }
      }))
    );

    // 开始按顺序执行节点
    executeNodeSequence(0);
  }, [nodes, setNodes]);

  // 暂停执行
  const pauseWorkflowExecution = useCallback(() => {
    console.log('暂停执行工作流');
    setSimulationStatus('paused');
  }, []);

  // 继续执行
  const resumeWorkflowExecution = useCallback(() => {
    console.log('继续执行工作流');
    setSimulationStatus('running');
    // 从当前节点继续执行
    if (currentExecutingNodeIndex >= 0) {
      executeNodeSequence(currentExecutingNodeIndex);
    }
  }, [currentExecutingNodeIndex]);

  // 按顺序执行节点
  const executeNodeSequence = useCallback(async (nodeIndex: number) => {
    const currentNodes = nodes; // 获取当前的节点列表
    
    if (nodeIndex >= currentNodes.length) {
      // 所有节点执行完成
      setSimulationStatus('completed');
      setCurrentExecutingNodeIndex(-1);
      console.log('所有节点执行完成');
      return;
    }

    // 检查是否被暂停
    if (executionStateRef.current.isPaused) {
      return;
    }

    const currentNode = currentNodes[nodeIndex];
    setCurrentExecutingNodeIndex(nodeIndex);

    // 设置当前节点为执行中
    setNodes((prevNodes) =>
      prevNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          executionStatus: node.id === currentNode.id ? 'running' : node.data.executionStatus
        }
      }))
    );

    // 模拟节点执行时间（2-4秒随机）
    const executionTime = 2000 + Math.random() * 2000;
    
    setTimeout(() => {
      // 检查是否已被暂停
      if (executionStateRef.current.isPaused) {
        return; // 如果被暂停，不继续执行
      }

      // 设置当前节点为完成
      setNodes((prevNodes) =>
        prevNodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            executionStatus: node.id === currentNode.id ? 'completed' : node.data.executionStatus
          }
        }))
      );

      // 继续执行下一个节点
      setTimeout(() => {
        // 再次检查是否被暂停
        if (executionStateRef.current.isPaused) {
          return;
        }
        executeNodeSequence(nodeIndex + 1);
      }, 500); // 短暂延迟后执行下一个节点
    }, executionTime);
  }, [nodes, setNodes]);

  // 停止执行
  const stopWorkflowExecution = useCallback(() => {
    setSimulationStatus('idle');
    setCurrentExecutingNodeIndex(-1);
    setExecutionError(null);
    
    // 重置所有节点状态
    setNodes((currentNodes) =>
      currentNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          executionStatus: 'waiting'
        }
      }))
    );
  }, [setNodes]);

  // 为节点添加查看结果回调
  useEffect(() => {
    setNodes((currentNodes) =>
      currentNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onViewResult: handleViewResult
        }
      }))
    );
  }, [handleViewResult, setNodes]);

  // 连接节点
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // 节点选择
  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);

  // 右键菜单
  const onNodeContextMenu = useCallback((event: React.MouseEvent, node: Node) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id,
    });
  }, []);

  // 画布点击（取消选择）
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);

  // 拖拽添加新节点 - 暂时禁用
  /*
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      
      const nodeDataStr = event.dataTransfer.getData('application/reactflow');
      
      if (!nodeDataStr || !reactFlowWrapper.current) return;

      try {
        const nodeData = JSON.parse(nodeDataStr);
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const position = {
          x: event.clientX - reactFlowBounds.left - 100,
          y: event.clientY - reactFlowBounds.top - 20,
        };

        const newNode: Node = {
          id: `${Date.now()}`,
          type: 'custom',
          position,
          data: { 
            label: nodeData.label,
            type: nodeData.type,
            description: nodeData.description,
            tool: nodeData.tool,
            subActions: [`${nodeData.label}操作1`, `${nodeData.label}操作2`],
            collapsed: false
          },
        };

        setNodes((nds) => nds.concat(newNode));
      } catch (error) {
        console.error('解析节点数据失败:', error);
      }
    },
    [setNodes]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  */

  // 关闭右键菜单
  const closeContextMenu = useCallback(() => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);

  // 删除节点
  const deleteNode = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId));
    closeContextMenu();
  }, [setNodes, setEdges, closeContextMenu]);

  // 复制节点
  const duplicateNode = useCallback((nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return;

    const newNode: Node = {
      ...node,
      id: `${Date.now()}`,
      position: {
        x: node.position.x + 20,
        y: node.position.y + 20,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    closeContextMenu();
  }, [nodes, setNodes, closeContextMenu]);

  return (
    <ReactFlowProvider>
      <div className="workflow-canvas-container">
        {/* 节点库 - 暂时隐藏 */}
        {/* <NodeLibrary /> */}
        
        {/* 工作流画布 */}
        <div className="workflow-canvas" ref={reactFlowWrapper}>
          {/* 仿真控制按钮 */}
          <div className="simulation-controls">
            <button 
              className={`control-btn ${simulationStatus === 'running' ? 'active' : ''}`}
              onClick={
                simulationStatus === 'running' 
                  ? pauseWorkflowExecution 
                  : simulationStatus === 'paused' 
                    ? resumeWorkflowExecution 
                    : startWorkflowExecution
              }
              title={
                simulationStatus === 'running' 
                  ? '暂停仿真' 
                  : simulationStatus === 'paused' 
                    ? '继续仿真' 
                    : '开始仿真'
              }
            >
              {simulationStatus === 'running' ? (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="3" y="2" width="4" height="12" />
                  <rect x="9" y="2" width="4" height="12" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 2v12l10-6L3 2z" />
                </svg>
              )}
              {simulationStatus === 'running' ? '暂停' : simulationStatus === 'paused' ? '继续' : '开始'}
            </button>
            
            <button 
              className="control-btn"
              onClick={stopWorkflowExecution}
              disabled={simulationStatus === 'idle'}
              title="停止仿真"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="3" y="3" width="10" height="10" />
              </svg>
              停止
            </button>
            
            {/* 工作流详情按钮 - 只有在执行完成后才显示 */}
            {simulationStatus === 'completed' && (
              <button 
                className="control-btn"
                onClick={() => setShowWorkflowDetails(true)}
                title="查看工作流详情"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                工作流详情
              </button>
            )}
          </div>
          
          {/* 执行状态信息 */}
          {executionError && (
            <div className="simulation-controls" style={{ top: '70px' }}>
              <div className="execution-error">
                <span>{executionError}</span>
              </div>
            </div>
          )}
          
          {(simulationStatus === 'running' || simulationStatus === 'paused') && currentExecutingNodeIndex >= 0 && (
            <div className="simulation-controls" style={{ top: executionError ? '120px' : '70px' }}>
              <div className="execution-progress">
                执行进度: {currentExecutingNodeIndex + 1} / {nodes.length}
              </div>
            </div>
          )}

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onNodeContextMenu={onNodeContextMenu}
            onPaneClick={onPaneClick}
            // onDrop={onDrop}
            // onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            connectionMode={ConnectionMode.Loose}
            defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap 
              position="bottom-left"
              nodeColor={(node) => {
                switch (node.data?.type) {
                  case 'requirement': return '#52c41a';
                  case 'architecture': return '#1890ff';
                  case 'simulation': return '#fa8c16';
                  default: return '#666';
                }
              }}
              maskColor="rgba(24, 144, 255, 0.2)"
              pannable={true}
              zoomable={true}
              ariaLabel="画布导航缩略图"
              style={{
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                width: 200,
                height: 150,
              }}
            />
            {/* 画布控制按钮 - 放在ReactFlow内部 */}
            <CanvasControls />
          </ReactFlow>
          
          {/* 节点配置面板 */}
          {selectedNode && (
            <NodeConfigPanel
              node={selectedNode}
              onClose={() => setSelectedNode(null)}
              onUpdate={(updatedNode: Node) => {
                setNodes((nds) =>
                  nds.map((n) => (n.id === updatedNode.id ? updatedNode : n))
                );
              }}
            />
          )}
        </div>

        {/* 右键菜单 */}
        <ContextMenu
          visible={contextMenu.visible}
          x={contextMenu.x}
          y={contextMenu.y}
          nodeExecutionStatus={contextMenu.nodeId 
            ? nodes.find(node => node.id === contextMenu.nodeId)?.data?.executionStatus 
            : undefined
          }
          onClose={closeContextMenu}
          onDelete={() => contextMenu.nodeId && deleteNode(contextMenu.nodeId)}
          onDuplicate={() => contextMenu.nodeId && duplicateNode(contextMenu.nodeId)}
          onOpenTool={() => {
            console.log('打开工具');
            closeContextMenu();
          }}
          onExecuteNode={() => {
            console.log('执行节点');
            closeContextMenu();
          }}
          onExecuteFromNode={() => {
            console.log('从此节点开始执行');
            closeContextMenu();
          }}
          onViewResult={() => {
            if (contextMenu.nodeId) {
              const node = nodes.find(n => n.id === contextMenu.nodeId);
              if (node) {
                handleViewResult(contextMenu.nodeId, node.data);
              }
            }
            closeContextMenu();
          }}
        />

        {/* 节点结果面板 */}
        <NodeResultPanel
          visible={resultPanel.visible}
          nodeData={resultPanel.nodeData}
          onClose={handleCloseResultPanel}
        />

        {/* 工作流详情弹窗 */}
        {showWorkflowDetails && (
          <div className="workflow-details-modal">
            <div className="workflow-details-overlay" onClick={() => setShowWorkflowDetails(false)}></div>
            <div className="workflow-details-content">
              <div className="workflow-details-header">
                <h3>工作流执行详情</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowWorkflowDetails(false)}
                  title="关闭"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>
              </div>
              <div className="workflow-details-body">
                <div className="execution-summary">
                  <h4>执行摘要</h4>
                  <div className="summary-item">
                    <span className="label">执行状态:</span>
                    <span className="value success">已完成</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">总节点数:</span>
                    <span className="value">{nodes.length}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">成功节点:</span>
                    <span className="value">{nodes.filter(node => node.data.executionStatus === 'completed').length}</span>
                  </div>
                </div>
                
                <div className="nodes-execution-details">
                  <h4>节点执行详情</h4>
                  <div className="nodes-list">
                    {nodes.map((node, index) => (
                      <div key={node.id} className="node-detail-item">
                        <div className="node-info">
                          <span className="node-index">{index + 1}</span>
                          <span className="node-name">{node.data.customName || node.data.label}</span>
                          <span className={`node-status ${node.data.executionStatus || 'idle'}`}>
                            {node.data.executionStatus === 'completed' ? '✓ 已完成' : 
                             node.data.executionStatus === 'running' ? '⟳ 执行中' : 
                             node.data.executionStatus === 'error' ? '✗ 失败' : '⋅ 未执行'}
                          </span>
                        </div>
                        <div className="node-description">
                          {node.data.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ReactFlowProvider>
  );
};

export default WorkflowCanvas;
