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
        <div className="breadcrumb-nav">
          <span className="breadcrumb-item" onClick={onBack}>应用中心</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item current">{appName}</span>
        </div>
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
          
          <div className="parameter-form-container">
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
                <label>电机功率(kW)</label>
                <input type="number" defaultValue="150" />
              </div>

              <div className="form-group">
                <label>车身尺寸</label>
                <div className="input-row">
                  <input type="number" defaultValue="4650" placeholder="长(mm)" />
                  <span>×</span>
                  <input type="number" defaultValue="1890" placeholder="宽(mm)" />
                  <span>×</span>
                  <input type="number" defaultValue="1650" placeholder="高(mm)" />
                </div>
              </div>

              <div className="form-group">
                <label>轴距(mm)</label>
                <input type="number" defaultValue="2750" />
              </div>

              <div className="form-group">
                <label>电池容量(kWh)</label>
                <input type="number" defaultValue="85.5" step="0.1" />
              </div>

              <div className="form-group">
                <label>电池类型</label>
                <select defaultValue="NCM811">
                  <option value="NCM811">三元锂电池 (NCM811)</option>
                  <option value="LFP">磷酸铁锂电池 (LFP)</option>
                  <option value="NCA">镍钴铝电池 (NCA)</option>
                </select>
              </div>

              <div className="form-group">
                <label>驱动方式</label>
                <select defaultValue="AWD">
                  <option value="FWD">前驱</option>
                  <option value="RWD">后驱</option>
                  <option value="AWD">四驱</option>
                </select>
              </div>

              <div className="form-group">
                <label>最大扭矩(N·m)</label>
                <input type="number" defaultValue="650" />
              </div>

              <div className="form-group">
                <label>风阻系数(Cd)</label>
                <input type="number" defaultValue="0.25" step="0.01" />
              </div>

              <div className="form-group">
                <label>轮胎规格</label>
                <input type="text" defaultValue="235/45R18" />
              </div>

              <div className="form-group">
                <label>制动系统类型</label>
                <select defaultValue="EBD">
                  <option value="EBD">电子制动力分配系统</option>
                  <option value="ABS">防抱死制动系统</option>
                  <option value="ESP">车身电子稳定程序</option>
                </select>
              </div>

              <div className="form-group">
                <label>悬挂系统</label>
                <div className="input-row">
                  <select defaultValue="MacPherson" style={{ width: '48%' }}>
                    <option value="MacPherson">麦弗逊式</option>
                    <option value="MultiLink">多连杆式</option>
                    <option value="TorsionBeam">扭力梁式</option>
                  </select>
                  <span>/</span>
                  <select defaultValue="MultiLink" style={{ width: '48%' }}>
                    <option value="MacPherson">麦弗逊式</option>
                    <option value="MultiLink">多连杆式</option>
                    <option value="TorsionBeam">扭力梁式</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>能耗模式</label>
                <div className="radio-group">
                  <label className="radio-item">
                    <input type="radio" name="energyMode" value="eco" defaultChecked />
                    <span>节能模式</span>
                  </label>
                  <label className="radio-item">
                    <input type="radio" name="energyMode" value="normal" />
                    <span>标准模式</span>
                  </label>
                  <label className="radio-item">
                    <input type="radio" name="energyMode" value="sport" />
                    <span>运动模式</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>环境温度(°C)</label>
                <input type="number" defaultValue="25" />
              </div>

              <div className="form-group">
                <label>测试赛道</label>
                <select defaultValue="nurburgring">
                  <option value="nurburgring">纽伯格林北环</option>
                  <option value="silverstone">银石赛道</option>
                  <option value="monza">蒙扎赛道</option>
                  <option value="spa">斯帕赛道</option>
                </select>
              </div>

              <div className="form-group">
                <label>轮胎气压(bar)</label>
                <div className="input-row">
                  <input type="number" defaultValue="2.3" step="0.1" placeholder="前轮" />
                  <span>/</span>
                  <input type="number" defaultValue="2.5" step="0.1" placeholder="后轮" />
                </div>
              </div>

              <div className="form-group">
                <label>载重分配</label>
                <div className="input-row">
                  <input type="number" defaultValue="45" placeholder="前轴%" />
                  <span>:</span>
                  <input type="number" defaultValue="55" placeholder="后轴%" />
                </div>
              </div>
            </div>
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
              <span className="metric-label">总圈时(s)</span>
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
