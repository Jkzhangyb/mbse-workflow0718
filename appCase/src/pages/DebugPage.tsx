import React from 'react';

const DebugPage: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#ffff00', 
      minHeight: '400px',
      border: '5px solid red',
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      <h1 style={{ color: 'red', fontSize: '32px' }}>🎯 调试页面 - 测试中</h1>
      <p style={{ color: 'blue' }}>✅ 如果您能看到这个黄色背景的页面，说明路由和基本渲染是正常的。</p>
      <div style={{ backgroundColor: 'green', color: 'white', padding: '20px', margin: '20px 0' }}>
        <p style={{ fontSize: '20px' }}>🟢 这是一个绿色背景的测试区域</p>
        <p>当前时间: {new Date().toLocaleString()}</p>
      </div>
      <div style={{ backgroundColor: 'orange', padding: '15px', margin: '10px 0' }}>
        <p style={{ color: 'white', fontSize: '16px' }}>🟠 橙色测试区域</p>
      </div>
    </div>
  );
};

export default DebugPage;
