import React from 'react';
import './ApplicationDetail.scss';

interface ApplicationDetailProps {
  appName: string;
  onBack: () => void;
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({ appName, onBack }) => {
  const [simulationProgress, setSimulationProgress] = React.useState(67);
  const [isSimulationRunning, setIsSimulationRunning] = React.useState(false);

  const handleStartSimulation = () => {
    setIsSimulationRunning(true);
    // 模拟仿真进度
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          setIsSimulationRunning(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <div className="application-detail">
      {/* 面包屑导航 */}
      <div className="breadcrumb">
        <span className="breadcrumb-item" onClick={onBack}>应用中心</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-item current">{appName}</span>
        <div className="breadcrumb-actions">
          <button className="workflow-btn">打开工作流</button>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="detail-content">
        {/* 参数设置 */}
        <div className="parameter-section">
          <div className="section-header">
            <h3>参数设置</h3>
            <button className="detail-btn">详细设置</button>
          </div>
          
          <div className="parameter-form">
            <div className="form-group">
              <label>车型名称</label>
              <input type="text" defaultValue="EV-Xxxxx" />
            </div>
            
            <div className="form-group">
              <label>整车质量(kg)</label>
              <input type="number" defaultValue="2000" />
            </div>
            
            <div className="form-group">
              <label>电机功率(kw)</label>
              <input type="number" defaultValue="10" />
            </div>
            
            {/* 可以添加更多参数字段 */}
          </div>
        </div>

        {/* 目标设置 */}
        <div className="target-section">
          <div className="section-header">
            <h3>目标设置</h3>
          </div>
          
          <div className="target-grid">
            <div className="target-item">
              <span className="target-label">最高速度目标:</span>
              <span className="target-value">200 <span className="unit">km/h</span></span>
            </div>
            <div className="target-item">
              <span className="target-label">单圈目标:</span>
              <span className="target-value">22 <span className="unit">kWh</span></span>
            </div>
            <div className="target-item">
              <span className="target-label">单圈时间目标:</span>
              <span className="target-value">510 <span className="unit">s</span></span>
            </div>
            <div className="target-item">
              <span className="target-label">制动温度目标:</span>
              <span className="target-value">650 <span className="unit">°C</span></span>
            </div>
          </div>

          {/* 仿真控制 */}
          <div className="simulation-control">
            <div className="simulation-header">
              <h4>仿真控制</h4>
            </div>
            <div className="simulation-buttons">
              <button className="sim-btn active">打开仿真</button>
              <button className="sim-btn">参考仿真</button>
              <button 
                className="sim-btn start-btn"
                onClick={handleStartSimulation}
                disabled={isSimulationRunning}
              >
                {isSimulationRunning ? '仿真中...' : '开始仿真'}
              </button>
            </div>
            <div className="progress-container">
              <div className="progress-info">
                <span>当前进度: {simulationProgress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${simulationProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 结果预览 */}
        <div className="results-section">
          <div className="section-header">
            <h3>结果预览</h3>
          </div>
          
          <div className="results-metrics">
            <div className="metric-item">
              <span className="metric-label">总圆时(s)</span>
              <span className="metric-value">495.2</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">最高速度(km/h)</span>
              <span className="metric-value">208.4 / 目标 200 ✅</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">总能耗(kWh)</span>
              <span className="metric-value">21.8 / 目标 22 ✅</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">制动温度峰值(°C)</span>
              <span className="metric-value">648 / 目标 650 ✅</span>
            </div>
          </div>

          {/* 图表区域 */}
          <div className="charts-container">
            <div className="chart-item">
              <div className="chart-header">
                <span className="chart-title">速度-时间</span>
                <button className="chart-close">×</button>
              </div>
              <div className="chart-placeholder">
                <div className="mock-chart speed-chart">
                  <div className="chart-line"></div>
                  <div className="chart-data">速度 (km/h)</div>
                </div>
              </div>
            </div>

            <div className="chart-item">
              <div className="chart-header">
                <span className="chart-title">距离-时间</span>
                <button className="chart-close">×</button>
              </div>
              <div className="chart-placeholder">
                <div className="mock-chart distance-chart">
                  <div className="chart-line"></div>
                  <div className="chart-data">距离 (km)</div>
                </div>
              </div>
            </div>

            <div className="chart-item">
              <div className="chart-header">
                <span className="chart-title">制动温度-时间</span>
                <button className="chart-close">×</button>
              </div>
              <div className="chart-placeholder">
                <div className="mock-chart temperature-chart">
                  <div className="chart-line"></div>
                  <div className="chart-data">制动温度 (°C)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
