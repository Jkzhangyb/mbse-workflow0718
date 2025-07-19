import React, { useCallback, useState, useRef } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionMode,
} from '@reactflow/core';
import type { Node, Edge, Connection } from '@reactflow/core';
import { Background } from '@reactflow/background';
import { Controls } from '@reactflow/controls';
import { MiniMap } from '@reactflow/minimap';
import '@reactflow/core/dist/style.css';

import CustomNode from './CustomNode';
// import NodeLibrary from './NodeLibrary';
import NodeConfigPanel from './NodeConfigPanel';
import ContextMenu from './ContextMenu';
import './WorkflowCanvas.scss';

// 自定义节点类型
const nodeTypes = {
  custom: CustomNode,
};

// 初始节点数据
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 150 },
    data: { 
      label: '需求管理及同步',
      type: 'requirement',
      description: '从系统规格书创建和管理需求项',
      tool: 'Polarion',
      subActions: ['创建需求'],
      collapsed: false
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 450, y: 150 },
    data: { 
      label: '功能与架构设计',
      type: 'architecture',
      description: '基于需求进行系统功能和架构设计',
      tool: 'Polarion-EA',
      subActions: ['需求同步'],
      collapsed: false
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 450, y: 350 },
    data: { 
      label: '功能与架构设计',
      type: 'architecture',
      description: '进行功能与架构的详细设计',
      tool: 'EA',
      subActions: ['功能&逻辑设计'],
      collapsed: false
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 450, y: 550 },
    data: { 
      label: '功能与架构设计',
      type: 'architecture',
      description: '架构转换为可仿真的模型',
      tool: 'SSP',
      subActions: ['架构转换'],
      collapsed: false
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 850, y: 150 },
    data: { 
      label: '系统集成仿真',
      type: 'simulation',
      description: '系统综合仿真验证',
      tool: 'SSP-Modelica',
      subActions: ['架构同步'],
      collapsed: false
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 850, y: 350 },
    data: { 
      label: '系统集成仿真',
      type: 'simulation',
      description: '进行仿真配置定义',
      tool: 'M-works',
      subActions: ['仿真配置'],
      collapsed: false
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 850, y: 550 },
    data: { 
      label: '系统仿真集成',
      type: 'simulation',
      description: '实验设计与多方案分析',
      tool: 'DOE',
      subActions: ['架构转换'],
      collapsed: false
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

  const reactFlowWrapper = useRef<HTMLDivElement>(null);

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
    <div className="workflow-canvas-container">
      {/* 节点库 - 暂时隐藏 */}
      {/* <NodeLibrary /> */}
      
      {/* 工作流画布 */}
      <div className="workflow-canvas" ref={reactFlowWrapper}>
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
        </ReactFlow>
      </div>

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

      {/* 右键菜单 */}
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        onClose={closeContextMenu}
        onDelete={() => contextMenu.nodeId && deleteNode(contextMenu.nodeId)}
        onDuplicate={() => contextMenu.nodeId && duplicateNode(contextMenu.nodeId)}
      />
    </div>
  );
};

export default WorkflowCanvas;
