import React from "react";
import { useNavigate } from "react-router-dom";

// 工作流管理页面主内容区
const workflows = [
  { id: 1, name: "产品设计流程", status: "已发布", owner: "张三" },
  { id: 2, name: "需求分析流程", status: "草稿", owner: "李四" },
];

const WorkflowManage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "32px 40px", background: "#f9fafb", minHeight: "100vh" }}>
      {/* 静态引导区 */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, color: "#1f2937", fontWeight: 600, marginBottom: 8 }}>工作流管理</h2>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 0 }}>
          管理和创建您的业务流程，支持流程定义、发布与维护。
        </p>
      </div>
      {/* 新建按钮 */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button
          style={{
            background: "#1d4ed8",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "8px 20px",
            fontSize: 14,
            cursor: "pointer",
            fontWeight: 500,
            boxShadow: "var(--shadow-sm)",
            transition: "background 0.2s",
          }}
          onClick={() => navigate("/workflow-define")}
        >
          新建工作流
        </button>
      </div>
      {/* 工作流表格 */}
      <div style={{ background: "#fff", borderRadius: 8, boxShadow: "var(--shadow-sm)", padding: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ textAlign: "left", padding: "8px 12px", color: "#6b7280", fontWeight: 500 }}>名称</th>
              <th style={{ textAlign: "left", padding: "8px 12px", color: "#6b7280", fontWeight: 500 }}>状态</th>
              <th style={{ textAlign: "left", padding: "8px 12px", color: "#6b7280", fontWeight: 500 }}>负责人</th>
              <th style={{ textAlign: "left", padding: "8px 12px", color: "#6b7280", fontWeight: 500 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((wf) => (
              <tr key={wf.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "8px 12px" }}>{wf.name}</td>
                <td style={{ padding: "8px 12px" }}>{wf.status}</td>
                <td style={{ padding: "8px 12px" }}>{wf.owner}</td>
                <td style={{ padding: "8px 12px" }}>
                  <button
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: 4,
                      padding: "4px 12px",
                      fontSize: 13,
                      cursor: "pointer",
                      fontWeight: 500,
                      marginRight: 8,
                    }}
                    onClick={() => navigate("/workflow-define")}
                  >
                    详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkflowManage;
