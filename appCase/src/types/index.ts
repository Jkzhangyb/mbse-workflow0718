// 应用类型定义
export interface Application {
  id: string;
  name: string;
  description: string;
  version: string;
  domain: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  isRecommended: boolean;
  isFavorite: boolean;
  isOwned: boolean;
  tags: string[];
  category: string;
  icon?: string;
  thumbnail?: string;
  status: 'active' | 'inactive' | 'draft';
}

// 工作流节点类型
export interface WorkflowNode {
  id: string;
  type: string;
  name: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
    config: NodeConfig;
    inputs: NodePort[];
    outputs: NodePort[];
  };
  priority: 'high' | 'medium' | 'low';
  createdBy: string;
  createdAt: string;
  executionLogs: ExecutionLog[];
}

// 节点配置
export interface NodeConfig {
  basic: BasicConfig;
  advanced: Record<string, any>;
}

// 基础配置
export interface BasicConfig {
  name: string;
  nodeId: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  createdBy: string;
  createdAt: string;
}

// 需求同步配置
export interface RequirementSyncConfig {
  sourceType: 'remote' | 'local';
  platformType: 'polarion' | 'teamcenter' | 'oslc';
  serverUrl: string;
  username: string;
  password: string;
  workItems?: WorkItem[];
  connectionStatus: 'disconnected' | 'connecting' | 'connected' | 'error';
}

// 工作项
export interface WorkItem {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  priority: string;
  assignee: string;
  createdAt: string;
  updatedAt: string;
}

// 节点端口
export interface NodePort {
  id: string;
  name: string;
  type: string;
  required: boolean;
}

// 执行日志
export interface ExecutionLog {
  id: string;
  timestamp: string;
  status: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  details?: Record<string, any>;
}

// 工作流连接
export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
  targetHandle: string;
  type: string;
  data?: Record<string, any>;
}

// 工作流定义
export interface Workflow {
  id: string;
  name: string;
  description: string;
  version: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
}

// 应用详情参数
export interface ApplicationParams {
  vehicleModel: string;
  mass: number;
  power: number;
  batteryCapacity: number;
  aerodynamicCoefficient: number;
  rollingResistance: number;
}

// 应用目标设置
export interface ApplicationTargets {
  maxSpeed: number;
  accelerationTime: number;
  range: number;
  energyConsumption: number;
  maxTemperature: number;
  coolingEfficiency: number;
}

// 仿真结果
export interface SimulationResult {
  totalTime: number;
  maxSpeed: number;
  energyConsumption: number;
  maxTemperature: number;
  coolingEfficiency: number;
  chartData: ChartData;
}

// 图表数据
export interface ChartData {
  timeSeriesData: TimeSeriesData[];
  performanceMetrics: PerformanceMetric[];
}

// 时间序列数据
export interface TimeSeriesData {
  timestamp: number;
  speed: number;
  temperature: number;
  power: number;
  energy: number;
}

// 性能指标
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  target: number;
  status: 'good' | 'warning' | 'error';
}

// 用户界面状态
export interface UIState {
  sidebarCollapsed: boolean;
  theme: 'light' | 'dark';
  language: 'zh' | 'en';
  viewMode: 'card' | 'list';
  activeTab: string;
  loading: boolean;
  error: string | null;
}

// API 响应
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  code: number;
}

// 分页参数
export interface PaginationParams {
  page: number;
  pageSize: number;
  total: number;
}

// 筛选参数
export interface FilterParams {
  keyword?: string;
  category?: string;
  tags?: string[];
  status?: string;
  dateRange?: [string, string];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
