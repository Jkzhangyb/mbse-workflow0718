# Copilot 指令文档

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## 项目概述
这是一个基于React + TypeScript + Vite的MBSE工作流平台前端项目，具有专业工业软件特色。

## 代码风格指南
- 使用TypeScript进行类型安全编程
- 遵循React函数组件和Hooks模式
- 使用专业的工业软件UI设计风格
- 组件命名采用PascalCase，文件夹和文件名采用kebab-case
- 使用ESLint和Prettier保持代码一致性

## 项目结构
- `src/components/`: 通用组件
- `src/pages/`: 页面组件（S1-S6对应的页面）
- `src/layouts/`: 布局组件
- `src/hooks/`: 自定义Hooks
- `src/stores/`: 状态管理
- `src/types/`: TypeScript类型定义
- `src/utils/`: 工具函数
- `src/styles/`: 样式文件

## 功能模块
1. **应用中心** (S1-S2): 展示应用卡片/列表，支持筛选、搜索
2. **应用详情** (S3): 参数设置、目标设置、结果预览
3. **工作流编辑器** (S4): 可视化画布，支持节点拖拽和连接
4. **节点配置** (S5-S6): 基础信息和需求同步配置

## 技术要求
- 使用React 18+的最新特性
- 集成工作流可视化库（如React Flow）
- 实现响应式设计和无障碍访问
- 优化性能和用户体验
- 遵循工业软件的专业UI设计规范
