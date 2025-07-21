import React from 'react';
import './NodeResultPanel.scss';

interface NodeResultPanelProps {
  visible: boolean;
  onClose: () => void;
  nodeData: {
    id: string;
    label: string;
    tool?: string;
    type: string;
    customName?: string;
  } | null;
}

// 构造假的需求数据
const getMockRequirements = (tool?: string) => {
  if (tool?.toLowerCase() === 'polarion') {
    return [
      {
        id: 'REQ-001',
        title: '整车主动安全系统性能要求',
        description: '车辆应配备AEB自动紧急制动系统，在车速20-80km/h范围内，对静态和动态障碍物的制动响应时间不超过0.8秒',
        priority: 'High',
        status: 'Approved',
        category: '主动安全'
      },
      {
        id: 'REQ-002',
        title: '被动安全约束系统要求',
        description: '安全气囊系统应在碰撞发生后30ms内完成充气，并满足Euro NCAP五星安全标准',
        priority: 'High',
        status: 'Approved',
        category: '被动安全'
      },
      {
        id: 'REQ-003',
        title: '车辆稳定性控制要求',
        description: 'ESP电子稳定程序应能在0.1秒内检测到车辆失控状态，并在0.15秒内实施纠正措施',
        priority: 'High',
        status: 'Under Review',
        category: '主动安全'
      },
      {
        id: 'REQ-004',
        title: '动力系统燃油经济性要求',
        description: '综合工况油耗应不超过6.5L/100km，满足国六排放标准',
        priority: 'Medium',
        status: 'Approved',
        category: '性能'
      },
      {
        id: 'REQ-005',
        title: '车身结构强度要求',
        description: '车身结构应通过40%偏置碰撞测试，A柱变形量不超过150mm',
        priority: 'High',
        status: 'Approved',
        category: '被动安全'
      },
      {
        id: 'REQ-006',
        title: '制动系统性能要求',
        description: '100km/h-0制动距离不超过38米，制动踏板行程不超过踏板总行程的60%',
        priority: 'High',
        status: 'Approved',
        category: '性能'
      },
      {
        id: 'REQ-007',
        title: '转向系统响应要求',
        description: '转向系统应具备渐进式助力特性，低速时轻便，高速时沉稳，转向比应在12:1-16:1之间',
        priority: 'Medium',
        status: 'Under Review',
        category: '性能'
      },
      {
        id: 'REQ-008',
        title: '电气系统安全要求',
        description: '高压电气系统应具备绝缘监测功能，绝缘电阻应不低于500Ω/V',
        priority: 'High',
        status: 'Draft',
        category: '安全'
      },
      {
        id: 'REQ-009',
        title: '环境适应性要求',
        description: '车辆应能在-35°C至+85°C环境温度范围内正常工作，防护等级达到IP67',
        priority: 'Medium',
        status: 'Approved',
        category: '环境'
      },
      {
        id: 'REQ-010',
        title: '人机交互系统要求',
        description: '中控屏幕响应时间不超过200ms，支持多点触控，亮度自动调节范围50-800cd/m²',
        priority: 'Low',
        status: 'Under Review',
        category: '用户体验'
      },
      {
        id: 'REQ-011',
        title: '数据安全要求',
        description: '系统应确保数据传输的加密性，防止未经授权的访问',
        priority: 'High',
        status: 'Approved',
        category: '安全'
      }
    ];
  }
  
  // 默认返回通用结果
  return [
    {
      id: 'RESULT-001',
      title: '执行结果概要',
      description: '任务执行完成，所有检查项均已通过验证',
      priority: 'Info',
      status: 'Completed',
      category: '执行结果'
    }
  ];
};

// 确保数据源中包含所有已批准的需求，并正确传递到安全需求同步到EA节点
const getMockRequirementsForEA = () => {
  return [
    {
      id: 'REQ-001',
      title: '整车主动安全系统性能要求',
      description: '车辆应配备AEB自动紧急制动系统，在车速20-80km/h范围内，对静态和动态障碍物的制动响应时间不超过0.8秒',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-002',
      title: '被动安全约束系统要求',
      description: '安全气囊系统应在碰撞发生后30ms内完成充气，并满足Euro NCAP五星安全标准',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-004',
      title: '动力系统燃油经济性要求',
      description: '综合工况油耗应不超过6.5L/100km，满足国六排放标准',
      priority: 'Medium',
      status: 'Approved',
    },
    {
      id: 'REQ-005',
      title: '车身结构强度要求',
      description: '车身结构应通过40%偏置碰撞测试，A柱变形量不超过150mm',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-006',
      title: '制动系统性能要求',
      description: '100km/h-0制动距离不超过38米，制动踏板行程不超过踏板总行程的60%',
      priority: 'High',
      status: 'Approved',
    },
    {
      id: 'REQ-009',
      title: '环境适应性要求',
      description: '车辆应能在-35°C至+85°C环境温度范围内正常工作，防护等级达到IP67',
      priority: 'Medium',
      status: 'Approved',
    },
    {
      id: 'REQ-011',
      title: '数据安全要求',
      description: '系统应确保数据传输的加密性，防止未经授权的访问',
      priority: 'High',
      status: 'Approved',
    },
  ];
};

// 整车安全架构设计节点的数据
const getMockArchitectureData = () => {
  return {
    modules: [
      {
        id: 'A-SYS-001',
        name: 'AEB控制模块',
        description: '检测障碍物并执行制动决策',
        constraints: '响应时间 ≤ 0.1s',
        relatedReqs: 'REQ-001, REQ-003'
      },
      {
        id: 'A-SYS-002',
        name: 'ESP稳定控制模块',
        description: '监测车身状态，识别滑控并恢复稳定',
        constraints: '制动修正 ≤ 0.15s',
        relatedReqs: 'REQ-003'
      },
      {
        id: 'A-SYS-003',
        name: '安全气囊控制模块',
        description: '碰撞检测和气囊展开控制',
        constraints: '展开时间 ≤ 30ms',
        relatedReqs: 'REQ-002'
      },
      {
        id: 'A-SYS-004',
        name: '制动系统控制模块',
        description: '制动力分配和防抱死控制',
        constraints: '制动距离 ≤ 38m@100km/h',
        relatedReqs: 'REQ-006'
      }
    ],
    constraints: [
      {
        id: 'CONST-001',
        name: '制动响应时间',
        value: '≤ 0.1s',
        type: '性能约束',
        critical: true
      },
      {
        id: 'CONST-002',
        name: '最大动作频率',
        value: '10Hz',
        type: '系统约束',
        critical: false
      },
      {
        id: 'CONST-003',
        name: '工作温度范围',
        value: '-35°C ~ +85°C',
        type: '环境约束',
        critical: true
      }
    ],
    traceabilityMatrix: [
      { requirement: 'REQ-001', modules: ['A-SYS-001'], coverage: '100%' },
      { requirement: 'REQ-002', modules: ['A-SYS-003'], coverage: '100%' },
      { requirement: 'REQ-003', modules: ['A-SYS-001', 'A-SYS-002'], coverage: '100%' },
      { requirement: 'REQ-006', modules: ['A-SYS-004'], coverage: '100%' }
    ]
  };
};

// SSP架构转换节点的数据
const getMockSSPData = () => {
  return {
    sspFiles: [
      {
        name: 'VehicleSafetySystem.ssp',
        size: '2.3 MB',
        created: '2025-01-15 14:30:22',
        status: 'Generated'
      },
      {
        name: 'BrakingSubsystem.ssp',
        size: '856 KB',
        created: '2025-01-15 14:28:15',
        status: 'Generated'
      },
      {
        name: 'SafetyController.ssp',
        size: '1.2 MB',
        created: '2025-01-15 14:25:08',
        status: 'Generated'
      }
    ],
    validationStatus: [
      {
        category: 'Port映射检查',
        status: 'Passing',
        message: 'Ports mapping correct',
        details: '所有端口映射验证通过'
      },
      {
        category: '连接完整性检查',
        status: 'Passing',
        message: 'No missing connections',
        details: '所有连接关系完整'
      },
      {
        category: '参数一致性检查',
        status: 'Warning',
        message: 'Parameter type mismatch detected',
        details: '发现2个参数类型不匹配警告'
      },
      {
        category: '模型结构验证',
        status: 'Passing',
        message: 'Model structure valid',
        details: '模型结构验证通过'
      }
    ],
    conversionSummary: {
      totalPorts: 24,
      mappedPorts: 24,
      totalParameters: 156,
      mappedParameters: 154,
      warnings: 2,
      errors: 0
    },
    sourceModules: [
      {
        moduleId: 'A-SYS-001',
        moduleName: 'AEB控制模块',
        mappingStatus: '完成',
        sspOutput: 'VehicleSafetySystem.ssp'
      },
      {
        moduleId: 'A-SYS-002', 
        moduleName: 'ESP稳定控制模块',
        mappingStatus: '完成',
        sspOutput: 'VehicleSafetySystem.ssp'
      },
      {
        moduleId: 'A-SYS-003',
        moduleName: '安全气囊控制模块',
        mappingStatus: '完成',
        sspOutput: 'SafetyController.ssp'
      },
      {
        moduleId: 'A-SYS-004',
        moduleName: '制动系统控制模块',
        mappingStatus: '完成',
        sspOutput: 'BrakingSubsystem.ssp'
      }
    ]
  };
};

// SSP-Modelica节点的数据
const getMockModelicaData = () => {
  return {
    modelicaModels: [
      {
        name: 'VehicleSafetySystem.mo',
        path: '/models/safety/VehicleSafetySystem.mo',
        size: '3.8 MB',
        lastModified: '2025-01-15 15:45:32',
        status: 'Generated'
      },
      {
        name: 'BrakingSubsystem.mo',
        path: '/models/braking/BrakingSubsystem.mo',
        size: '1.2 MB',
        lastModified: '2025-01-15 15:42:18',
        status: 'Generated'
      },
      {
        name: 'SafetyController.mo',
        path: '/models/control/SafetyController.mo',
        size: '956 KB',
        lastModified: '2025-01-15 15:38:45',
        status: 'Generated'
      }
    ],
    simulationStatus: [
      {
        modelName: 'VehicleSafetySystem.mo',
        status: 'Ready',
        issues: []
      },
      {
        modelName: 'BrakingSubsystem.mo',
        status: 'Ready',
        issues: []
      },
      {
        modelName: 'SafetyController.mo',
        status: 'Error',
        issues: [
          '接口不匹配：控制器输出类型与执行器输入类型不兼容',
          '缺少必要的初始化参数：initial_brake_pressure'
        ]
      }
    ],
    conversionLog: {
      importedSSPSystems: [
        'VehicleSafetySystem.ssp → VehicleSafetySystem.mo',
        'BrakingSubsystem.ssp → BrakingSubsystem.mo',
        'SafetyController.ssp → SafetyController.mo'
      ],
      interfaceCompatibility: {
        compatible: 18,
        incompatible: 2,
        details: [
          '兼容接口：18个端口类型匹配成功',
          '不兼容接口：2个端口需要类型转换器',
          '自动添加类型转换器：Real → Integer (2个)'
        ]
      },
      parameterHandling: {
        totalParams: 89,
        withDefaults: 85,
        missingDefaults: 4,
        details: [
          '已处理参数：85个参数使用默认值',
          '缺失默认值：4个参数需要用户指定',
          '自动生成默认值：brake_threshold=0.8, safety_margin=0.1'
        ]
      }
    },
    moduleMapping: [
      {
        sysmlModule: 'A-SYS-001 (AEB控制模块)',
        modelicaClass: 'VehicleSafety.AEB.Controller',
        modelicaPath: '/models/safety/VehicleSafetySystem.mo',
        status: '映射完成'
      },
      {
        sysmlModule: 'A-SYS-002 (ESP稳定控制模块)',
        modelicaClass: 'VehicleSafety.ESP.StabilityControl',
        modelicaPath: '/models/safety/VehicleSafetySystem.mo',
        status: '映射完成'
      },
      {
        sysmlModule: 'A-SYS-003 (安全气囊控制模块)',
        modelicaClass: 'SafetyControl.Airbag.Controller',
        modelicaPath: '/models/control/SafetyController.mo',
        status: '映射完成'
      },
      {
        sysmlModule: 'A-SYS-004 (制动系统控制模块)',
        modelicaClass: 'Braking.System.Controller',
        modelicaPath: '/models/braking/BrakingSubsystem.mo',
        status: '映射完成'
      }
    ]
  };
};

// M-works仿真节点的数据
const getMockMWorksData = () => {
  return {
    simulationScenarios: [
      {
        name: 'EmergencyBrakingScenario',
        description: '紧急制动场景仿真',
        status: 'Success',
        executionTime: '2025-01-15 16:25:30',
        duration: '12.3 秒',
        keyMetrics: [
          { name: '响应时间', value: '0.43 s', status: 'Pass' },
          { name: '制动距离', value: '28.3 m', status: 'Pass' },
          { name: '最大减速度', value: '8.2 m/s²', status: 'Pass' }
        ]
      },
      {
        name: 'StabilityControlScenario',
        description: 'ESP稳定性控制场景仿真',
        status: 'Success',
        executionTime: '2025-01-15 16:23:15',
        duration: '15.7 秒',
        keyMetrics: [
          { name: '横摆角速度', value: '0.12 rad/s', status: 'Pass' },
          { name: '侧滑角', value: '2.3°', status: 'Pass' },
          { name: '控制介入时间', value: '0.08 s', status: 'Pass' }
        ]
      },
      {
        name: 'AirbagDeploymentScenario',
        description: '安全气囊展开场景仿真',
        status: 'Warning',
        executionTime: '2025-01-15 16:20:45',
        duration: '8.9 秒',
        keyMetrics: [
          { name: '展开时间', value: '32 ms', status: 'Warning' },
          { name: '充气压力', value: '2.1 bar', status: 'Pass' },
          { name: '乘员保护效果', value: '92%', status: 'Pass' }
        ]
      }
    ],
    performanceMetrics: [
      {
        scenario: 'EmergencyBrakingScenario',
        metrics: [
          { indicator: '响应时间', target: '≤0.5 s', actual: '0.43 s', status: 'Pass' },
          { indicator: '制动距离（50→0 km/h）', target: '≤30 m', actual: '28.3 m', status: 'Pass' },
          { indicator: '最大减速度', target: '≤10 m/s²', actual: '8.2 m/s²', status: 'Pass' },
          { indicator: '踏板行程', target: '≤60%', actual: '52%', status: 'Pass' }
        ]
      },
      {
        scenario: 'StabilityControlScenario',
        metrics: [
          { indicator: 'ESP介入时间', target: '≤0.1 s', actual: '0.08 s', status: 'Pass' },
          { indicator: '横摆角速度控制', target: '≤0.15 rad/s', actual: '0.12 rad/s', status: 'Pass' },
          { indicator: '侧滑角控制', target: '≤3°', actual: '2.3°', status: 'Pass' },
          { indicator: '轮速差异', target: '≤5%', actual: '3.2%', status: 'Pass' }
        ]
      },
      {
        scenario: 'AirbagDeploymentScenario',
        metrics: [
          { indicator: '气囊展开时间', target: '≤30 ms', actual: '32 ms', status: 'Warning' },
          { indicator: '充气完成时间', target: '≤80 ms', actual: '75 ms', status: 'Pass' },
          { indicator: '充气压力', target: '2.0-2.5 bar', actual: '2.1 bar', status: 'Pass' },
          { indicator: '乘员保护效果', target: '≥90%', actual: '92%', status: 'Pass' }
        ]
      }
    ],
    simulationReports: [
      {
        scenario: 'EmergencyBrakingScenario',
        reportName: '紧急制动仿真报告',
        formats: [
          { type: 'HTML', filename: 'emergency_braking_report.html', size: '2.3 MB' },
          { type: 'PDF', filename: 'emergency_braking_report.pdf', size: '1.8 MB' },
          { type: 'TXT', filename: 'emergency_braking_log.txt', size: '156 KB' }
        ],
        generated: '2025-01-15 16:25:45'
      },
      {
        scenario: 'StabilityControlScenario',
        reportName: 'ESP稳定性控制仿真报告',
        formats: [
          { type: 'HTML', filename: 'stability_control_report.html', size: '3.1 MB' },
          { type: 'PDF', filename: 'stability_control_report.pdf', size: '2.4 MB' },
          { type: 'TXT', filename: 'stability_control_log.txt', size: '203 KB' }
        ],
        generated: '2025-01-15 16:24:02'
      },
      {
        scenario: 'AirbagDeploymentScenario',
        reportName: '安全气囊展开仿真报告',
        formats: [
          { type: 'HTML', filename: 'airbag_deployment_report.html', size: '1.9 MB' },
          { type: 'PDF', filename: 'airbag_deployment_report.pdf', size: '1.5 MB' },
          { type: 'TXT', filename: 'airbag_deployment_log.txt', size: '98 KB' }
        ],
        generated: '2025-01-15 16:21:30'
      }
    ]
  };
};

// DOE实验设计节点的数据
const getMockDOEData = () => {
  return {
    experimentName: 'AEB_DOE_Sensitivity',
    experimentDescription: 'AEB系统敏感性分析实验设计',
    executionTime: '2025-01-15 17:15:30',
    totalRuns: 32,
    completedRuns: 32,
    
    // 分析结果摘要
    analysisSummary: {
      criticalFactors: [
        { factor: 'F1 - 车辆速度 (km/h)', effect: '8.24', rank: 1, significance: 'High' },
        { factor: 'F2 - 检测距离 (m)', effect: '6.18', rank: 2, significance: 'High' },
        { factor: 'F3 - 制动系统响应时间 (ms)', effect: '4.92', rank: 3, significance: 'Medium' },
        { factor: 'F4 - 路面摩擦系数', effect: '3.87', rank: 4, significance: 'Medium' },
        { factor: 'F1×F2 - 速度×检测距离', effect: '2.45', rank: 5, significance: 'Low' },
        { factor: 'F1×F3 - 速度×响应时间', effect: '1.83', rank: 6, significance: 'Low' }
      ],
      responseVariable: '制动距离 (m)',
      r_squared: '0.85',
      significance_threshold: '3.5'
    },

    // 主效应数据
    mainEffectsData: [
      {
        factor: 'F1 - 车辆速度',
        levels: ['低 (30 km/h)', '高 (60 km/h)'],
        responses: [15.2, 23.8],
        trend: 'positive'
      },
      {
        factor: 'F2 - 检测距离',
        levels: ['短 (15 m)', '长 (25 m)'],
        responses: [22.1, 16.9],
        trend: 'negative'
      },
      {
        factor: 'F3 - 响应时间',
        levels: ['快 (50 ms)', '慢 (100 ms)'],
        responses: [18.3, 20.7],
        trend: 'positive'
      },
      {
        factor: 'F4 - 摩擦系数',
        levels: ['低 (0.6)', '高 (0.9)'],
        responses: [21.4, 17.6],
        trend: 'negative'
      }
    ],

    // 交互效应数据
    interactionEffectsData: [
      {
        factorA: 'F1 - 车辆速度',
        factorB: 'F2 - 检测距离',
        levelA1_B1: 12.5, // 低速+短距
        levelA1_B2: 17.9, // 低速+长距
        levelA2_B1: 31.7, // 高速+短距
        levelA2_B2: 15.9, // 高速+长距
        hasInteraction: true,
        interactionStrength: 'Strong'
      },
      {
        factorA: 'F1 - 车辆速度',
        factorB: 'F3 - 响应时间',
        levelA1_B1: 14.8, // 低速+快响应
        levelA1_B2: 15.6, // 低速+慢响应
        levelA2_B1: 21.8, // 高速+快响应
        levelA2_B2: 25.8, // 高速+慢响应
        hasInteraction: false,
        interactionStrength: 'Weak'
      }
    ],

    // 对比结果表
    comparisonResults: [
      {
        runId: 'Run-01',
        parameters: {
          speed: '30 km/h',
          detection: '25 m',
          response: '50 ms',
          friction: '0.9'
        },
        responseTime: '0.32 s',
        brakingDistance: '12.3 m',
        performance: 'Excellent'
      },
      {
        runId: 'Run-02',
        parameters: {
          speed: '60 km/h',
          detection: '15 m',
          response: '100 ms',
          friction: '0.6'
        },
        responseTime: '0.68 s',
        brakingDistance: '35.2 m',
        performance: 'Poor'
      },
      {
        runId: 'Run-03',
        parameters: {
          speed: '45 km/h',
          detection: '20 m',
          response: '75 ms',
          friction: '0.75'
        },
        responseTime: '0.45 s',
        brakingDistance: '22.8 m',
        performance: 'Good'
      },
      {
        runId: 'Run-04',
        parameters: {
          speed: '30 km/h',
          detection: '15 m',
          response: '50 ms',
          friction: '0.6'
        },
        responseTime: '0.38 s',
        brakingDistance: '18.7 m',
        performance: 'Good'
      },
      {
        runId: 'Run-05',
        parameters: {
          speed: '60 km/h',
          detection: '25 m',
          response: '100 ms',
          friction: '0.9'
        },
        responseTime: '0.52 s',
        brakingDistance: '28.4 m',
        performance: 'Fair'
      }
    ],

    // 报告文件
    reports: [
      {
        name: 'DOE分析完整报告',
        formats: [
          { type: 'XLSX', filename: 'AEB_DOE_Analysis.xlsx', size: '3.2 MB' },
          { type: 'PDF', filename: 'AEB_DOE_Report.pdf', size: '2.8 MB' }
        ],
        generated: '2025-01-15 17:35:45'
      }
    ]
  };
};

const NodeResultPanel: React.FC<NodeResultPanelProps> = ({ visible, onClose, nodeData }) => {
  if (!visible || !nodeData) return null;

  const requirements = getMockRequirements(nodeData.tool);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return '#52c41a';
      case 'Under Review':
        return '#faad14';
      case 'Draft':
        return '#d9d9d9';
      case 'Completed':
        return '#1890ff';
      default:
        return '#8c8c8c';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return '#ff4d4f';
      case 'Medium':
        return '#faad14';
      case 'Low':
        return '#52c41a';
      default:
        return '#1890ff';
    }
  };

  // 修改安全需求同步到EA节点的显示逻辑，确保结果如图所示
  const renderEAApprovedRequirementsTable = (requirements: Array<{ id: string; title: string; description: string; priority: string; status: string }>) => {
    const approvedRequirements = requirements.filter(req => req.status === 'Approved');

    return (
      <table className="requirements-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approvedRequirements.map((req, index: number) => (
            <tr key={req.id}>
              <td>{index + 1}</td>
              <td>{req.id}</td>
              <td>{req.title}</td>
              <td>{req.description}</td>
              <td style={{ backgroundColor: getPriorityColor(req.priority) }}>{req.priority}</td>
              <td style={{ backgroundColor: getStatusColor(req.status) }}>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // 渲染架构模块清单表
  const renderArchitectureModulesTable = (modules: Array<{ id: string; name: string; description: string; constraints: string; relatedReqs: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">架构模块清单表</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>模块ID</th>
              <th>名称</th>
              <th>功能描述</th>
              <th>设计约束</th>
              <th>关联需求</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.id}>
                <td>{module.id}</td>
                <td>{module.name}</td>
                <td>{module.description}</td>
                <td>{module.constraints}</td>
                <td>{module.relatedReqs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染约束和性能指标
  const renderConstraintsDetail = (constraints: Array<{ id: string; name: string; value: string; type: string; critical: boolean }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">约束 & 性能指标</h4>
        <div className="constraints-grid">
          {constraints.map((constraint) => (
            <div key={constraint.id} className={`constraint-item ${constraint.critical ? 'critical' : ''}`}>
              <div className="constraint-header">
                <span className="constraint-name">{constraint.name}</span>
                <span className={`constraint-type ${constraint.critical ? 'critical' : 'normal'}`}>
                  {constraint.critical ? '关键' : '一般'}
                </span>
              </div>
              <div className="constraint-value">{constraint.value}</div>
              <div className="constraint-category">{constraint.type}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染需求-模块追溯矩阵
  const renderTraceabilityMatrix = (matrix: Array<{ requirement: string; modules: string[]; coverage: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">需求-模块追溯矩阵</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>需求ID</th>
              <th>分配模块</th>
              <th>覆盖率</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((item, index) => (
              <tr key={index}>
                <td>{item.requirement}</td>
                <td>{item.modules.join(', ')}</td>
                <td>
                  <span className="coverage-badge" style={{ backgroundColor: item.coverage === '100%' ? '#52c41a' : '#faad14' }}>
                    {item.coverage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染SysML架构图占位符
  const renderSysMLDiagram = () => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">SysML架构图 (BDD/IBD)</h4>
        <div className="diagram-placeholder">
          <div className="diagram-info">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="#1890ff">
              <path d="M24 4L44 14v20L24 44L4 34V14L24 4zm0 4L8 16v16l16 10 16-10V16L24 8z"/>
              <circle cx="24" cy="20" r="3" fill="#1890ff"/>
              <circle cx="16" cy="28" r="2" fill="#1890ff"/>
              <circle cx="32" cy="28" r="2" fill="#1890ff"/>
              <line x1="21" y1="22" x2="18" y2="26" stroke="#1890ff" strokeWidth="2"/>
              <line x1="27" y1="22" x2="30" y2="26" stroke="#1890ff" strokeWidth="2"/>
            </svg>
            <p>架构图展示</p>
            <span>点击查看详细的SysML BDD/IBD图</span>
          </div>
        </div>
      </div>
    );
  };

  // 渲染SSP文件列表
  const renderSSPFilesList = (files: Array<{ name: string; size: string; created: string; status: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">SSP文件或模型名称</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>文件名</th>
              <th>大小</th>
              <th>创建时间</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>
                  <span className="file-name">{file.name}</span>
                </td>
                <td>{file.size}</td>
                <td>{file.created}</td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: '#52c41a' }}>
                    {file.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染转换验证状态
  const renderValidationStatus = (validations: Array<{ category: string; status: string; message: string; details: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">转换验证状态</h4>
        <div className="validation-grid">
          {validations.map((validation, index) => (
            <div key={index} className={`validation-item ${validation.status.toLowerCase()}`}>
              <div className="validation-header">
                <span className="validation-category">{validation.category}</span>
                <span className={`validation-status ${validation.status.toLowerCase()}`}>
                  {validation.status}
                </span>
              </div>
              <div className="validation-message">{validation.message}</div>
              <div className="validation-details">{validation.details}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染转换摘要
  const renderConversionSummary = (summary: { totalPorts: number; mappedPorts: number; totalParameters: number; mappedParameters: number; warnings: number; errors: number }) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">转换摘要/日志</h4>
        <div className="summary-stats">
          <div className="stat-group">
            <div className="stat-item">
              <span className="stat-label">端口映射</span>
              <span className="stat-value">{summary.mappedPorts}/{summary.totalPorts}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">参数映射</span>
              <span className="stat-value">{summary.mappedParameters}/{summary.totalParameters}</span>
            </div>
          </div>
          <div className="stat-group">
            <div className="stat-item">
              <span className="stat-label">警告</span>
              <span className="stat-value warning">{summary.warnings}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">错误</span>
              <span className="stat-value error">{summary.errors}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染关联源模块
  const renderSourceModules = (modules: Array<{ moduleId: string; moduleName: string; mappingStatus: string; sspOutput: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">关联源模块</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>源架构模块ID</th>
              <th>模块名称</th>
              <th>映射状态</th>
              <th>SSP输出文件</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module, index) => (
              <tr key={index} className="clickable-row">
                <td>
                  <span className="module-id-link">{module.moduleId}</span>
                </td>
                <td>{module.moduleName}</td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: '#52c41a' }}>
                    {module.mappingStatus}
                  </span>
                </td>
                <td>{module.sspOutput}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染Modelica模型列表
  const renderModelicaModelsList = (models: Array<{ name: string; path: string; size: string; lastModified: string; status: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">Modelica模型名称或路径</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>模型名称</th>
              <th>路径</th>
              <th>大小</th>
              <th>最后修改</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => (
              <tr key={index}>
                <td>
                  <span className="file-name">{model.name}</span>
                </td>
                <td>
                  <span className="model-path">{model.path}</span>
                </td>
                <td>{model.size}</td>
                <td>{model.lastModified}</td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: '#52c41a' }}>
                    {model.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染仿真准备状态
  const renderSimulationStatus = (statuses: Array<{ modelName: string; status: string; issues: string[] }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">仿真准备状态</h4>
        <div className="simulation-grid">
          {statuses.map((simStatus, index) => (
            <div key={index} className={`simulation-item ${simStatus.status.toLowerCase()}`}>
              <div className="simulation-header">
                <span className="simulation-model">{simStatus.modelName}</span>
                <span className={`simulation-status ${simStatus.status.toLowerCase()}`}>
                  {simStatus.status}
                </span>
              </div>
              {simStatus.issues.length > 0 && (
                <div className="simulation-issues">
                  <div className="issues-title">问题列表：</div>
                  {simStatus.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className="issue-item">• {issue}</div>
                  ))}
                </div>
              )}
              {simStatus.issues.length === 0 && (
                <div className="simulation-success">模型准备就绪，可以开始仿真</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染转换日志/摘要
  const renderConversionLog = (log: { 
    importedSSPSystems: string[]; 
    interfaceCompatibility: { compatible: number; incompatible: number; details: string[] }; 
    parameterHandling: { totalParams: number; withDefaults: number; missingDefaults: number; details: string[] } 
  }) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">转换日志/摘要</h4>
        <div className="conversion-log">
          <div className="log-section">
            <h5>导入的SSP子系统</h5>
            <ul className="log-list">
              {log.importedSSPSystems.map((system, index) => (
                <li key={index}>{system}</li>
              ))}
            </ul>
          </div>
          
          <div className="log-section">
            <h5>接口兼容性</h5>
            <div className="compatibility-stats">
              <span className="stat-item">
                <span className="stat-label">兼容:</span>
                <span className="stat-value success">{log.interfaceCompatibility.compatible}</span>
              </span>
              <span className="stat-item">
                <span className="stat-label">不兼容:</span>
                <span className="stat-value error">{log.interfaceCompatibility.incompatible}</span>
              </span>
            </div>
            <ul className="log-list">
              {log.interfaceCompatibility.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          
          <div className="log-section">
            <h5>缺失参数默认值处理</h5>
            <div className="parameter-stats">
              <span className="stat-item">
                <span className="stat-label">总参数:</span>
                <span className="stat-value">{log.parameterHandling.totalParams}</span>
              </span>
              <span className="stat-item">
                <span className="stat-label">有默认值:</span>
                <span className="stat-value success">{log.parameterHandling.withDefaults}</span>
              </span>
              <span className="stat-item">
                <span className="stat-label">缺失默认值:</span>
                <span className="stat-value warning">{log.parameterHandling.missingDefaults}</span>
              </span>
            </div>
            <ul className="log-list">
              {log.parameterHandling.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // 渲染模块关联日志
  const renderModuleMapping = (mappings: Array<{ sysmlModule: string; modelicaClass: string; modelicaPath: string; status: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">模块关联日志</h4>
        <table className="requirements-table">
          <thead>
            <tr>
              <th>SysML模块</th>
              <th>Modelica类名称</th>
              <th>Modelica路径</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {mappings.map((mapping, index) => (
              <tr key={index} className="clickable-row">
                <td>{mapping.sysmlModule}</td>
                <td>
                  <span className="modelica-class">{mapping.modelicaClass}</span>
                </td>
                <td>
                  <span className="model-path">{mapping.modelicaPath}</span>
                </td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: '#52c41a' }}>
                    {mapping.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染仿真场景摘要
  const renderSimulationScenarios = (scenarios: Array<{ name: string; description: string; status: string; executionTime: string; duration: string; keyMetrics: Array<{ name: string; value: string; status: string }> }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">仿真场景摘要</h4>
        <div className="simulation-scenarios-grid">
          {scenarios.map((scenario, index) => (
            <div key={index} className={`scenario-item ${scenario.status.toLowerCase()}`}>
              <div className="scenario-header">
                <div className="scenario-info">
                  <h5 className="scenario-name">{scenario.name}</h5>
                  <p className="scenario-description">{scenario.description}</p>
                </div>
                <div className="scenario-status">
                  <span className={`status-indicator ${scenario.status.toLowerCase()}`}>
                    {scenario.status === 'Success' && '✅'}
                    {scenario.status === 'Warning' && '⚠️'}
                    {scenario.status === 'Failed' && '❌'}
                    {scenario.status}
                  </span>
                </div>
              </div>
              
              <div className="scenario-details">
                <div className="execution-info">
                  <span className="detail-label">执行时间:</span>
                  <span className="detail-value">{scenario.executionTime}</span>
                </div>
                <div className="execution-info">
                  <span className="detail-label">仿真耗时:</span>
                  <span className="detail-value">{scenario.duration}</span>
                </div>
              </div>

              <div className="key-metrics">
                <div className="metrics-title">关键指标</div>
                <div className="metrics-list">
                  {scenario.keyMetrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className={`metric-item ${metric.status.toLowerCase()}`}>
                      <span className="metric-name">{metric.name}</span>
                      <span className="metric-value">{metric.value}</span>
                      <span className={`metric-status ${metric.status.toLowerCase()}`}>
                        {metric.status === 'Pass' && '✅'}
                        {metric.status === 'Warning' && '⚠️'}
                        {metric.status === 'Fail' && '❌'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染性能指标表
  const renderPerformanceMetrics = (metricsData: Array<{ scenario: string; metrics: Array<{ indicator: string; target: string; actual: string; status: string }> }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">性能指标表</h4>
        {metricsData.map((scenarioMetrics, index) => (
          <div key={index} className="performance-metrics-section">
            <h5 className="scenario-subtitle">{scenarioMetrics.scenario}</h5>
            <table className="requirements-table performance-table">
              <thead>
                <tr>
                  <th>指标</th>
                  <th>目标值</th>
                  <th>实际值</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                {scenarioMetrics.metrics.map((metric, metricIndex) => (
                  <tr key={metricIndex} className={`metric-row ${metric.status.toLowerCase()}`}>
                    <td className="metric-indicator">{metric.indicator}</td>
                    <td className="metric-target">{metric.target}</td>
                    <td className="metric-actual">{metric.actual}</td>
                    <td className="metric-status">
                      <span className={`status-badge ${metric.status.toLowerCase()}`}>
                        {metric.status === 'Pass' && '✅'}
                        {metric.status === 'Warning' && '⚠️'}
                        {metric.status === 'Fail' && '❌'}
                        {metric.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  // 渲染仿真报告下载
  const renderSimulationReports = (reports: Array<{ scenario: string; reportName: string; formats: Array<{ type: string; filename: string; size: string }>; generated: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">仿真报告下载</h4>
        <div className="reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="report-item">
              <div className="report-header">
                <h5 className="report-name">{report.reportName}</h5>
                <span className="report-scenario">({report.scenario})</span>
              </div>
              
              <div className="report-info">
                <span className="generated-time">生成时间: {report.generated}</span>
              </div>

              <div className="download-formats">
                <div className="formats-title">可下载格式:</div>
                <div className="formats-list">
                  {report.formats.map((format, formatIndex) => (
                    <button 
                      key={formatIndex} 
                      className={`download-btn ${format.type.toLowerCase()}`}
                      onClick={() => console.log(`下载 ${format.filename}`)}
                    >
                      <span className="format-icon">
                        {format.type === 'HTML' && '🌐'}
                        {format.type === 'PDF' && '📄'}
                        {format.type === 'TXT' && '📝'}
                      </span>
                      <span className="format-info">
                        <span className="format-type">{format.type}</span>
                        <span className="format-size">({format.size})</span>
                      </span>
                      <span className="download-filename">{format.filename}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染DOE实验基本信息
  const renderDOEExperimentInfo = (data: { experimentName: string; experimentDescription: string; executionTime: string; totalRuns: number; completedRuns: number }) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">实验方案信息</h4>
        <div className="doe-experiment-info">
          <div className="experiment-header">
            <h5 className="experiment-name">{data.experimentName}</h5>
            <p className="experiment-description">{data.experimentDescription}</p>
          </div>
          
          <div className="experiment-stats">
            <div className="stat-item">
              <span className="stat-label">执行时间</span>
              <span className="stat-value">{data.executionTime}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">总实验次数</span>
              <span className="stat-value">{data.totalRuns}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">完成次数</span>
              <span className="stat-value success">{data.completedRuns}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">完成率</span>
              <span className="stat-value success">{((data.completedRuns / data.totalRuns) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染分析结果摘要
  const renderAnalysisSummary = (summary: { criticalFactors: Array<{ factor: string; effect: string; rank: number; significance: string }>; responseVariable: string; r_squared: string; significance_threshold: string }) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">分析结果摘要 (Main Effects)</h4>
        
        <div className="analysis-overview">
          <div className="response-info">
            <span className="info-label">响应变量:</span>
            <span className="info-value">{summary.responseVariable}</span>
          </div>
          <div className="response-info">
            <span className="info-label">R² 值:</span>
            <span className="info-value">{summary.r_squared}</span>
          </div>
          <div className="response-info">
            <span className="info-label">显著性阈值:</span>
            <span className="info-value">{summary.significance_threshold}</span>
          </div>
        </div>

        <div className="critical-factors-table">
          <table className="requirements-table">
            <thead>
              <tr>
                <th>排序</th>
                <th>因素</th>
                <th>效应值</th>
                <th>显著性</th>
                <th>影响程度</th>
              </tr>
            </thead>
            <tbody>
              {summary.criticalFactors.map((factor, index) => (
                <tr key={index} className={`factor-row ${factor.significance.toLowerCase()}`}>
                  <td className="factor-rank">#{factor.rank}</td>
                  <td className="factor-name">{factor.factor}</td>
                  <td className="factor-effect">{factor.effect}</td>
                  <td className="factor-significance">
                    <span className={`significance-badge ${factor.significance.toLowerCase()}`}>
                      {factor.significance}
                    </span>
                  </td>
                  <td className="factor-impact">
                    <div className="impact-bar">
                      <div 
                        className={`impact-fill ${factor.significance.toLowerCase()}`}
                        style={{ width: `${(parseFloat(factor.effect) / 10) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // 渲染主效应图
  const renderMainEffectsPlot = (mainEffects: Array<{ factor: string; levels: string[]; responses: number[]; trend: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">主效应图 (Main Effects Plot)</h4>
        <p className="section-description">展示每个因素在不同水平下对响应变量的平均影响</p>
        
        <div className="main-effects-grid">
          {mainEffects.map((effect, index) => (
            <div key={index} className="main-effect-plot">
              <h6 className="plot-title">{effect.factor}</h6>
              
              <div className="plot-container">
                <div className="plot-chart">
                  <div className="y-axis">
                    <span className="y-label">响应值 (m)</span>
                    <div className="y-scale">
                      <span>30</span>
                      <span>25</span>
                      <span>20</span>
                      <span>15</span>
                      <span>10</span>
                    </div>
                  </div>
                  
                  <div className="chart-area">
                    <svg width="200" height="120" className="effect-chart">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={effect.trend === 'positive' ? '#ff4d4f' : '#52c41a'} stopOpacity="0.2"/>
                          <stop offset="100%" stopColor={effect.trend === 'positive' ? '#52c41a' : '#ff4d4f'} stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                      
                      {/* 绘制趋势线 */}
                      <line
                        x1="40"
                        y1={120 - (effect.responses[0] / 30) * 100}
                        x2="160"
                        y2={120 - (effect.responses[1] / 30) * 100}
                        stroke={effect.trend === 'positive' ? '#fa8c16' : '#1890ff'}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      
                      {/* 数据点 */}
                      <circle
                        cx="40"
                        cy={120 - (effect.responses[0] / 30) * 100}
                        r="4"
                        fill={effect.trend === 'positive' ? '#fa8c16' : '#1890ff'}
                      />
                      <circle
                        cx="160"
                        cy={120 - (effect.responses[1] / 30) * 100}
                        r="4"
                        fill={effect.trend === 'positive' ? '#fa8c16' : '#1890ff'}
                      />
                      
                      {/* 数值标签 */}
                      <text x="40" y={120 - (effect.responses[0] / 30) * 100 - 8} textAnchor="middle" fontSize="10" fill="#666">
                        {effect.responses[0]}
                      </text>
                      <text x="160" y={120 - (effect.responses[1] / 30) * 100 - 8} textAnchor="middle" fontSize="10" fill="#666">
                        {effect.responses[1]}
                      </text>
                    </svg>
                  </div>
                </div>
                
                <div className="x-axis">
                  <div className="x-labels">
                    <span>{effect.levels[0]}</span>
                    <span>{effect.levels[1]}</span>
                  </div>
                </div>
                
                <div className="trend-indicator">
                  <span className={`trend-label ${effect.trend}`}>
                    {effect.trend === 'positive' ? '↗ 正向影响' : '↘ 负向影响'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染Pareto效应图
  const renderParetoChart = (factors: Array<{ factor: string; effect: string; rank: number; significance: string }>, threshold: string) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">Pareto 效应图 (标准化效应)</h4>
        <p className="section-description">按影响力大小排序，显示各主效应的统计显著性</p>
        
        <div className="pareto-chart">
          <div className="chart-container">
            <div className="pareto-bars">
              {factors.map((factor, index) => {
                const effectValue = parseFloat(factor.effect);
                const thresholdValue = parseFloat(threshold);
                const barHeight = (effectValue / 10) * 100; // 按最大值10缩放
                const isSignificant = effectValue >= thresholdValue;
                
                return (
                  <div key={index} className="pareto-bar-container">
                    <div className="pareto-bar">
                      <div 
                        className={`bar-fill ${isSignificant ? 'significant' : 'non-significant'}`}
                        style={{ height: `${barHeight}%` }}
                      />
                      <div className="bar-value">{factor.effect}</div>
                    </div>
                    <div className="bar-label">
                      {factor.factor.split(' - ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* 显著性阈值线 */}
            <div className="significance-line">
              <div 
                className="threshold-line"
                style={{ bottom: `${(parseFloat(threshold) / 10) * 100}%` }}
              />
              <span className="threshold-label">显著性阈值: {threshold}</span>
            </div>
          </div>
          
          <div className="pareto-legend">
            <div className="legend-item">
              <div className="legend-color significant"></div>
              <span>显著效应 (≥{threshold})</span>
            </div>
            <div className="legend-item">
              <div className="legend-color non-significant"></div>
              <span>非显著效应 (&lt;{threshold})</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染交互效应图
  const renderInteractionPlot = (interactions: Array<{ factorA: string; factorB: string; levelA1_B1: number; levelA1_B2: number; levelA2_B1: number; levelA2_B2: number; hasInteraction: boolean; interactionStrength: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">交互效应图 (Interaction Effects Plot)</h4>
        <p className="section-description">展示两个因素组合时对响应量的影响，线条平行表示无交互</p>
        
        <div className="interaction-plots-grid">
          {interactions.map((interaction, index) => (
            <div key={index} className="interaction-plot">
              <h6 className="interaction-title">
                {interaction.factorA.split(' - ')[0]} × {interaction.factorB.split(' - ')[0]}
              </h6>
              
              <div className="interaction-chart-container">
                <svg width="250" height="180" className="interaction-chart">
                  {/* 绘制第一条线 (factorA level 1) */}
                  <line
                    x1="50"
                    y1={150 - (interaction.levelA1_B1 / 40) * 120}
                    x2="200"
                    y2={150 - (interaction.levelA1_B2 / 40) * 120}
                    stroke="#1890ff"
                    strokeWidth="2"
                    strokeDasharray={interaction.hasInteraction ? "none" : "5,5"}
                  />
                  
                  {/* 绘制第二条线 (factorA level 2) */}
                  <line
                    x1="50"
                    y1={150 - (interaction.levelA2_B1 / 40) * 120}
                    x2="200"
                    y2={150 - (interaction.levelA2_B2 / 40) * 120}
                    stroke="#fa8c16"
                    strokeWidth="2"
                    strokeDasharray={interaction.hasInteraction ? "none" : "5,5"}
                  />
                  
                  {/* 数据点 */}
                  <circle cx="50" cy={150 - (interaction.levelA1_B1 / 40) * 120} r="4" fill="#1890ff"/>
                  <circle cx="200" cy={150 - (interaction.levelA1_B2 / 40) * 120} r="4" fill="#1890ff"/>
                  <circle cx="50" cy={150 - (interaction.levelA2_B1 / 40) * 120} r="4" fill="#fa8c16"/>
                  <circle cx="200" cy={150 - (interaction.levelA2_B2 / 40) * 120} r="4" fill="#fa8c16"/>
                  
                  {/* X轴标签 */}
                  <text x="50" y="170" textAnchor="middle" fontSize="12" fill="#666">低</text>
                  <text x="200" y="170" textAnchor="middle" fontSize="12" fill="#666">高</text>
                  <text x="125" y="190" textAnchor="middle" fontSize="10" fill="#999">
                    {interaction.factorB.split(' - ')[0]}
                  </text>
                </svg>
                
                <div className="interaction-legend">
                  <div className="legend-item">
                    <div className="legend-line" style={{ backgroundColor: '#1890ff' }}></div>
                    <span>{interaction.factorA.split(' - ')[0]} 低水平</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-line" style={{ backgroundColor: '#fa8c16' }}></div>
                    <span>{interaction.factorA.split(' - ')[0]} 高水平</span>
                  </div>
                </div>
                
                <div className="interaction-status">
                  <span className={`interaction-badge ${interaction.hasInteraction ? 'has-interaction' : 'no-interaction'}`}>
                    {interaction.hasInteraction ? `有交互 (${interaction.interactionStrength})` : '无交互'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染对比结果表
  const renderComparisonResults = (results: Array<{ runId: string; parameters: any; responseTime: string; brakingDistance: string; performance: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">对比结果表</h4>
        <p className="section-description">展示多方案下关键结果 (响应时间 vs 参数组合)</p>
        
        <table className="requirements-table comparison-table">
          <thead>
            <tr>
              <th>实验编号</th>
              <th>车辆速度</th>
              <th>检测距离</th>
              <th>响应时间</th>
              <th>摩擦系数</th>
              <th>系统响应时间</th>
              <th>制动距离</th>
              <th>性能评级</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className={`result-row ${result.performance.toLowerCase()}`}>
                <td className="run-id">{result.runId}</td>
                <td>{result.parameters.speed}</td>
                <td>{result.parameters.detection}</td>
                <td>{result.parameters.response}</td>
                <td>{result.parameters.friction}</td>
                <td className="response-time">{result.responseTime}</td>
                <td className="braking-distance">{result.brakingDistance}</td>
                <td className="performance">
                  <span className={`performance-badge ${result.performance.toLowerCase()}`}>
                    {result.performance}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染DOE报告下载
  const renderDOEReports = (reports: Array<{ name: string; formats: Array<{ type: string; filename: string; size: string }>; generated: string }>) => {
    return (
      <div className="architecture-section">
        <h4 className="section-title">完整报告下载</h4>
        
        <div className="doe-reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="doe-report-item">
              <div className="report-header">
                <h5 className="report-name">{report.name}</h5>
                <span className="generated-time">生成时间: {report.generated}</span>
              </div>

              <div className="download-formats">
                <div className="formats-list">
                  {report.formats.map((format, formatIndex) => (
                    <button 
                      key={formatIndex} 
                      className={`download-btn ${format.type.toLowerCase()}`}
                      onClick={() => console.log(`下载 ${format.filename}`)}
                    >
                      <span className="format-icon">
                        {format.type === 'XLSX' && '📊'}
                        {format.type === 'PDF' && '📄'}
                      </span>
                      <span className="format-info">
                        <span className="format-type">{format.type}</span>
                        <span className="format-size">({format.size})</span>
                      </span>
                      <span className="download-filename">{format.filename}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 整车安全架构设计节点的显示逻辑
  if (nodeData?.customName === '整车安全架构设计') {
    const architectureData = getMockArchitectureData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result">
            {renderArchitectureModulesTable(architectureData.modules)}
            {renderSysMLDiagram()}
            {renderConstraintsDetail(architectureData.constraints)}
            {renderTraceabilityMatrix(architectureData.traceabilityMatrix)}
          </div>
        </div>
      </div>
    );
  }

  // SSP架构转换节点的显示逻辑
  if (nodeData?.customName === 'SSP架构转换') {
    const sspData = getMockSSPData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result ssp-result">
            {renderSSPFilesList(sspData.sspFiles)}
            {renderValidationStatus(sspData.validationStatus)}
            {renderConversionSummary(sspData.conversionSummary)}
            {renderSourceModules(sspData.sourceModules)}
          </div>
        </div>
      </div>
    );
  }

  // SSP-Modelica节点的显示逻辑
  if (nodeData?.customName === 'SSP-Modelica') {
    const modelicaData = getMockModelicaData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result modelica-result">
            {renderModelicaModelsList(modelicaData.modelicaModels)}
            {renderSimulationStatus(modelicaData.simulationStatus)}
            {renderConversionLog(modelicaData.conversionLog)}
            {renderModuleMapping(modelicaData.moduleMapping)}
          </div>
        </div>
      </div>
    );
  }

  // M-works仿真节点的显示逻辑
  if (nodeData?.customName === 'M-works仿真') {
    const mworksData = getMockMWorksData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result mworks-result">
            {renderSimulationScenarios(mworksData.simulationScenarios)}
            {renderPerformanceMetrics(mworksData.performanceMetrics)}
            {renderSimulationReports(mworksData.simulationReports)}
          </div>
        </div>
      </div>
    );
  }

  // DOE实验设计节点的显示逻辑
  if (nodeData?.customName === 'DOE实验设计') {
    const doeData = getMockDOEData();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list architecture-result doe-result">
            {renderDOEExperimentInfo(doeData)}
            {renderAnalysisSummary(doeData.analysisSummary)}
            {renderMainEffectsPlot(doeData.mainEffectsData)}
            {renderParetoChart(doeData.analysisSummary.criticalFactors, doeData.analysisSummary.significance_threshold)}
            {renderInteractionPlot(doeData.interactionEffectsData)}
            {renderComparisonResults(doeData.comparisonResults)}
            {renderDOEReports(doeData.reports)}
          </div>
        </div>
      </div>
    );
  }

  // 在 NodeResultPanel 中调用表格显示逻辑，仅针对安全需求同步到EA节点
  if (nodeData?.label === '功能与架构设计' && nodeData?.customName === '安全需求同步到EA') {
    const requirements = getMockRequirementsForEA();
    return (
      <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
        <div className="result-overlay" onClick={onClose} />
        <div className="result-content">
          <div className="result-header">
            <div className="result-title">
              <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
              <span className="result-subtitle">
                工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
              </span>
            </div>
            <button className="result-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="result-list">
            {renderEAApprovedRequirementsTable(requirements)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`node-result-panel ${visible ? 'visible' : ''}`}>
      <div className="result-overlay" onClick={onClose} />
      <div className="result-content">
        {/* 头部 */}
        <div className="result-header">
          <div className="result-title">
            <h3>{nodeData.customName || nodeData.label} - 执行结果</h3>
            <span className="result-subtitle">
              工具: {nodeData.tool || '未指定'} | 类型: {nodeData.type}
            </span>
          </div>
          <button className="result-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
            </svg>
          </button>
        </div>

        {/* 统计信息 */}
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">总计</span>
            <span className="stat-value">{requirements.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">已批准</span>
            <span className="stat-value approved">{requirements.filter(r => r.status === 'Approved').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">审核中</span>
            <span className="stat-value review">{requirements.filter(r => r.status === 'Under Review').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">草稿</span>
            <span className="stat-value draft">{requirements.filter(r => r.status === 'Draft').length}</span>
          </div>
        </div>

        {/* 结果列表 */}
        <div className="result-list">
          {requirements.map((req) => (
            <div key={req.id} className="requirement-item">
              <div className="req-header">
                <div className="req-id-title">
                  <span className="req-id">{req.id}</span>
                  <h4 className="req-title">{req.title}</h4>
                </div>
                <div className="req-badges">
                  <span 
                    className="priority-badge" 
                    style={{ backgroundColor: getPriorityColor(req.priority) }}
                  >
                    {req.priority}
                  </span>
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(req.status) }}
                  >
                    {req.status}
                  </span>
                  <span className="category-badge">{req.category}</span>
                </div>
              </div>
              <div className="req-description">
                {req.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeResultPanel;
