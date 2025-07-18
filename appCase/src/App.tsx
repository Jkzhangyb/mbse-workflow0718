import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import MainLayout from './layouts/MainLayout';
import ApplicationCenter from './pages/ApplicationCenter';
import TestPage from './pages/TestPage';
import DebugPage from './pages/DebugPage';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ApplicationCenter />} />
            <Route path="/apps" element={<ApplicationCenter />} />
            <Route path="/debug" element={<DebugPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/projects" element={<div>项目管理 - 开发中</div>} />
            <Route path="/workflows" element={<div>工作流管理 - 开发中</div>} />
            <Route path="/data" element={<div>数据管理 - 开发中</div>} />
            <Route path="/team" element={<div>团队协作 - 开发中</div>} />
            <Route path="/analytics" element={<div>分析报告 - 开发中</div>} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
