// 工作流相关类型定义

export interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    label: string;
    description?: string;
    status?: 'pending' | 'running' | 'completed' | 'error';
    config: Record<string, any>;
  };
  style?: Record<string, any>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type?: 'default' | 'smoothstep' | 'step' | 'straight';
  style?: Record<string, any>;
  animated?: boolean;
}

export interface WorkflowData {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  appId: string;
}

export interface NodeType {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  color?: string;
}

// 预置节点类型
export const NODE_TYPES: NodeType[] = [
  {
    id: 'requirement',
    name: '需求管理及同步',
    description: '需求收集、分析和同步管理',
    category: '需求管理',
    color: '#1890ff'
  },
  {
    id: 'functional-design',
    name: '功能与架构设计',
    description: '系统功能设计和架构规划',
    category: '设计',
    color: '#52c41a'
  },
  {
    id: 'simulation',
    name: '仿真与架构设计',
    description: '系统仿真和架构验证',
    category: '仿真',
    color: '#722ed1'
  },
  {
    id: 'data-processing',
    name: '数据处理与分析',
    description: '数据采集、处理和分析',
    category: '数据',
    color: '#fa8c16'
  },
  {
    id: 'testing',
    name: '测试验证',
    description: '功能测试和系统验证',
    category: '测试',
    color: '#eb2f96'
  },
  {
    id: 'deployment',
    name: '部署发布',
    description: '系统部署和版本发布',
    category: '部署',
    color: '#13c2c2'
  }
];
