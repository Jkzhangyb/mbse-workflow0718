import React from 'react';

const TestTable: React.FC = () => {
  console.log('TestTable 组件正在渲染');
  
  return (
    <div>
      <h1>简单测试页面</h1>
      <p>如果你看到这个页面，说明React路由正常工作</p>
      <div style={{ 
        backgroundColor: 'red', 
        color: 'white', 
        padding: '20px', 
        fontSize: '24px',
        margin: '20px'
      }}>
        红色测试区域 - 这应该很容易看到
      </div>
    </div>
  );
};

export default TestTable;
