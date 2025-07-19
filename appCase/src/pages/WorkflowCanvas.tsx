import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/workflow/WorkflowCanvas.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f350b4f8"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f350b4f8"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useCallback = __vite__cjsImport3_react["useCallback"]; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionMode,
  useReactFlow,
  ReactFlowProvider
} from "/node_modules/.vite/deps/@reactflow_core.js?v=f350b4f8";
import { Background } from "/node_modules/.vite/deps/@reactflow_background.js?v=f350b4f8";
import { Controls } from "/node_modules/.vite/deps/@reactflow_controls.js?v=f350b4f8";
import { MiniMap } from "/node_modules/.vite/deps/@reactflow_minimap.js?v=f350b4f8";
import "/node_modules/@reactflow/core/dist/style.css";
import CustomNode from "/src/components/workflow/CustomNode.tsx";
import NodeConfigPanel from "/src/components/workflow/NodeConfigPanel.tsx";
import ContextMenu from "/src/components/workflow/ContextMenu.tsx";
import "/src/components/workflow/WorkflowCanvas.scss";
const nodeTypes = {
  custom: CustomNode
};
const CanvasControls = () => {
  _s();
  const { fitView, zoomIn, zoomOut } = useReactFlow();
  return /* @__PURE__ */ jsxDEV("div", { className: "canvas-controls", children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        className: "canvas-control-btn",
        onClick: () => fitView({ padding: 0.2, duration: 300 }),
        title: "画布居中",
        children: /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: [
          /* @__PURE__ */ jsxDEV("path", { d: "M2 2h3v1H3v2H2V2zm9 0h3v3h-1V3h-2V2zM2 11v3h3v-1H3v-2H2zm12 0v2h-2v1h3v-3h-1z" }, void 0, false, {
            fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("rect", { x: "6", y: "6", width: "4", height: "4" }, void 0, false, {
            fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        className: "canvas-control-btn",
        onClick: () => zoomIn({ duration: 200 }),
        title: "放大",
        children: /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { d: "M8 3.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 3.5z" }, void 0, false, {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        className: "canvas-control-btn",
        onClick: () => zoomOut({ duration: 200 }),
        title: "缩小",
        children: /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }, void 0, false, {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
_s(CanvasControls, "Nm1P3wnyh3oQX3M5jK7GAvt+El8=", false, function() {
  return [useReactFlow];
});
_c = CanvasControls;
const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 50, y: 150 },
    data: {
      label: "需求管理及同步",
      type: "requirement",
      description: "从系统规格书创建和管理需求项",
      tool: "Polarion",
      subActions: ["创建需求"],
      collapsed: false
    }
  },
  {
    id: "2",
    type: "custom",
    position: { x: 450, y: 150 },
    data: {
      label: "功能与架构设计",
      type: "architecture",
      description: "基于需求进行系统功能和架构设计",
      tool: "Polarion-EA",
      subActions: ["需求同步"],
      collapsed: false
    }
  },
  {
    id: "3",
    type: "custom",
    position: { x: 450, y: 350 },
    data: {
      label: "功能与架构设计",
      type: "architecture",
      description: "进行功能与架构的详细设计",
      tool: "EA",
      subActions: ["功能&逻辑设计"],
      collapsed: false
    }
  },
  {
    id: "4",
    type: "custom",
    position: { x: 450, y: 550 },
    data: {
      label: "功能与架构设计",
      type: "architecture",
      description: "架构转换为可仿真的模型",
      tool: "SSP",
      subActions: ["架构转换"],
      collapsed: false
    }
  },
  {
    id: "5",
    type: "custom",
    position: { x: 850, y: 150 },
    data: {
      label: "系统集成仿真",
      type: "simulation",
      description: "系统综合仿真验证",
      tool: "SSP-Modelica",
      subActions: ["架构同步"],
      collapsed: false
    }
  },
  {
    id: "6",
    type: "custom",
    position: { x: 850, y: 350 },
    data: {
      label: "系统集成仿真111",
      type: "simulation",
      description: "进行仿真配置定义",
      tool: "M-works",
      subActions: ["仿真配置"],
      collapsed: false
    }
  },
  {
    id: "7",
    type: "custom",
    position: { x: 850, y: 550 },
    data: {
      label: "系统仿真集成",
      type: "simulation",
      description: "实验设计与多方案分析",
      tool: "DOE",
      subActions: ["架构转换"],
      collapsed: false
    }
  }
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "smoothstep",
    animated: true
  }
];
const WorkflowCanvas = () => {
  _s2();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
  const [simulationStatus, setSimulationStatus] = useState("idle");
  const reactFlowWrapper = useRef(null);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onNodeClick = useCallback((_event, node) => {
    setSelectedNode(node);
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);
  const onNodeContextMenu = useCallback((event, node) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id
    });
  }, []);
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);
  const closeContextMenu = useCallback(() => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  }, []);
  const deleteNode = useCallback((nodeId) => {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId));
    closeContextMenu();
  }, [setNodes, setEdges, closeContextMenu]);
  const duplicateNode = useCallback((nodeId) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return;
    const newNode = {
      ...node,
      id: `${Date.now()}`,
      position: {
        x: node.position.x + 20,
        y: node.position.y + 20
      }
    };
    setNodes((nds) => [...nds, newNode]);
    closeContextMenu();
  }, [nodes, setNodes, closeContextMenu]);
  return /* @__PURE__ */ jsxDEV(ReactFlowProvider, { children: /* @__PURE__ */ jsxDEV("div", { className: "workflow-canvas-container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "workflow-canvas", ref: reactFlowWrapper, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "simulation-controls", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `control-btn ${simulationStatus === "running" ? "active" : ""}`,
            onClick: () => setSimulationStatus(simulationStatus === "running" ? "paused" : "running"),
            title: simulationStatus === "running" ? "暂停仿真" : "开始仿真",
            children: [
              simulationStatus === "running" ? /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor", children: [
                /* @__PURE__ */ jsxDEV("rect", { x: "3", y: "2", width: "4", height: "12" }, void 0, false, {
                  fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                  lineNumber: 369,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("rect", { x: "9", y: "2", width: "4", height: "12" }, void 0, false, {
                  fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                  lineNumber: 370,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 368,
                columnNumber: 15
              }, this) : /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { d: "M3 2v12l10-6L3 2z" }, void 0, false, {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 374,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 373,
                columnNumber: 15
              }, this),
              simulationStatus === "running" ? "暂停" : "开始"
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
            lineNumber: 362,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "control-btn",
            onClick: () => setSimulationStatus("idle"),
            disabled: simulationStatus === "idle",
            title: "停止仿真",
            children: [
              /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsxDEV("rect", { x: "3", y: "3", width: "10", height: "10" }, void 0, false, {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 387,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 386,
                columnNumber: 15
              }, this),
              "停止"
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
            lineNumber: 380,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
        lineNumber: 361,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        ReactFlow,
        {
          nodes,
          edges,
          onNodesChange,
          onEdgesChange,
          onConnect,
          onNodeClick,
          onNodeContextMenu,
          onPaneClick,
          nodeTypes,
          connectionMode: ConnectionMode.Loose,
          defaultViewport: { x: 0, y: 0, zoom: 0.7 },
          fitView: true,
          children: [
            /* @__PURE__ */ jsxDEV(Background, {}, void 0, false, {
              fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
              lineNumber: 409,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(Controls, {}, void 0, false, {
              fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
              lineNumber: 410,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              MiniMap,
              {
                position: "bottom-left",
                nodeColor: (node) => {
                  switch (node.data?.type) {
                    case "requirement":
                      return "#52c41a";
                    case "architecture":
                      return "#1890ff";
                    case "simulation":
                      return "#fa8c16";
                    default:
                      return "#666";
                  }
                },
                maskColor: "rgba(24, 144, 255, 0.2)",
                pannable: true,
                zoomable: true,
                ariaLabel: "画布导航缩略图",
                style: {
                  backgroundColor: "#fff",
                  border: "1px solid #d9d9d9",
                  borderRadius: "4px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  width: 200,
                  height: 150
                }
              },
              void 0,
              false,
              {
                fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
                lineNumber: 411,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(CanvasControls, {}, void 0, false, {
              fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
              lineNumber: 435,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 393,
          columnNumber: 11
        },
        this
      ),
      selectedNode && /* @__PURE__ */ jsxDEV(
        NodeConfigPanel,
        {
          node: selectedNode,
          onClose: () => setSelectedNode(null),
          onUpdate: (updatedNode) => {
            setNodes(
              (nds) => nds.map((n) => n.id === updatedNode.id ? updatedNode : n)
            );
          }
        },
        void 0,
        false,
        {
          fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
          lineNumber: 440,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
      lineNumber: 359,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      ContextMenu,
      {
        visible: contextMenu.visible,
        x: contextMenu.x,
        y: contextMenu.y,
        onClose: closeContextMenu,
        onDelete: () => contextMenu.nodeId && deleteNode(contextMenu.nodeId),
        onDuplicate: () => contextMenu.nodeId && duplicateNode(contextMenu.nodeId)
      },
      void 0,
      false,
      {
        fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
        lineNumber: 453,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
    lineNumber: 354,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx",
    lineNumber: 353,
    columnNumber: 5
  }, this);
};
_s2(WorkflowCanvas, "aftS1rV9rLSA3K37f/uKfZyxOxw=", false, function() {
  return [useNodesState, useEdgesState];
});
_c2 = WorkflowCanvas;
export default WorkflowCanvas;
var _c, _c2;
$RefreshReg$(_c, "CanvasControls");
$RefreshReg$(_c2, "WorkflowCanvas");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/jkzhang/VC/mbseapp/mbse-workflow0718/appCase/src/components/workflow/WorkflowCanvas.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QjtBQUFBQSxRQUNmLEdBQUdzQixZQUFZckI7QUFBQUEsUUFDZixTQUFTd0M7QUFBQUEsUUFDVCxVQUFVLE1BQU1uQixZQUFZaUIsVUFBVUcsV0FBV3BCLFlBQVlpQixNQUFNO0FBQUEsUUFDbkUsYUFBYSxNQUFNakIsWUFBWWlCLFVBQVVRLGNBQWN6QixZQUFZaUIsTUFBTTtBQUFBO0FBQUEsTUFOM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTTZFO0FBQUEsT0F6Ry9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EyR0EsS0E1R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTZHQTtBQUVKO0FBQUUxQixJQXpPSUQsZ0JBQTZDO0FBQUEsVUFDUnRDLGVBQ0FDLGFBQWE7QUFBQTtBQUFBdUYsTUFGbERsRDtBQTJPTixlQUFlQTtBQUFlLElBQUFqQixJQUFBbUU7QUFBQUMsYUFBQXBFLElBQUE7QUFBQW9FLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdEZsb3ciLCJ1c2VOb2Rlc1N0YXRlIiwidXNlRWRnZXNTdGF0ZSIsImFkZEVkZ2UiLCJDb25uZWN0aW9uTW9kZSIsInVzZVJlYWN0RmxvdyIsIlJlYWN0Rmxvd1Byb3ZpZGVyIiwiQmFja2dyb3VuZCIsIkNvbnRyb2xzIiwiTWluaU1hcCIsIkN1c3RvbU5vZGUiLCJOb2RlQ29uZmlnUGFuZWwiLCJDb250ZXh0TWVudSIsIm5vZGVUeXBlcyIsImN1c3RvbSIsIkNhbnZhc0NvbnRyb2xzIiwiX3MiLCJmaXRWaWV3Iiwiem9vbUluIiwiem9vbU91dCIsInBhZGRpbmciLCJkdXJhdGlvbiIsIl9jIiwiaW5pdGlhbE5vZGVzIiwiaWQiLCJ0eXBlIiwicG9zaXRpb24iLCJ4IiwieSIsImRhdGEiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwidG9vbCIsInN1YkFjdGlvbnMiLCJjb2xsYXBzZWQiLCJpbml0aWFsRWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsIldvcmtmbG93Q2FudmFzIiwiX3MyIiwibm9kZXMiLCJzZXROb2RlcyIsIm9uTm9kZXNDaGFuZ2UiLCJlZGdlcyIsInNldEVkZ2VzIiwib25FZGdlc0NoYW5nZSIsInNlbGVjdGVkTm9kZSIsInNldFNlbGVjdGVkTm9kZSIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJ2aXNpYmxlIiwic2ltdWxhdGlvblN0YXR1cyIsInNldFNpbXVsYXRpb25TdGF0dXMiLCJyZWFjdEZsb3dXcmFwcGVyIiwib25Db25uZWN0IiwicGFyYW1zIiwiZWRzIiwib25Ob2RlQ2xpY2siLCJfZXZlbnQiLCJub2RlIiwib25Ob2RlQ29udGV4dE1lbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsImNsaWVudFkiLCJub2RlSWQiLCJvblBhbmVDbGljayIsImNsb3NlQ29udGV4dE1lbnUiLCJkZWxldGVOb2RlIiwibmRzIiwiZmlsdGVyIiwibiIsImUiLCJkdXBsaWNhdGVOb2RlIiwiZmluZCIsIm5ld05vZGUiLCJEYXRlIiwibm93IiwiTG9vc2UiLCJ6b29tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGVkTm9kZSIsIm1hcCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJXb3JrZmxvd0NhbnZhcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgUmVhY3RGbG93LFxuICB1c2VOb2Rlc1N0YXRlLFxuICB1c2VFZGdlc1N0YXRlLFxuICBhZGRFZGdlLFxuICBDb25uZWN0aW9uTW9kZSxcbiAgdXNlUmVhY3RGbG93LFxuICBSZWFjdEZsb3dQcm92aWRlcixcbn0gZnJvbSAnQHJlYWN0Zmxvdy9jb3JlJztcbmltcG9ydCB0eXBlIHsgTm9kZSwgRWRnZSwgQ29ubmVjdGlvbiB9IGZyb20gJ0ByZWFjdGZsb3cvY29yZSc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnQHJlYWN0Zmxvdy9iYWNrZ3JvdW5kJztcbmltcG9ydCB7IENvbnRyb2xzIH0gZnJvbSAnQHJlYWN0Zmxvdy9jb250cm9scyc7XG5pbXBvcnQgeyBNaW5pTWFwIH0gZnJvbSAnQHJlYWN0Zmxvdy9taW5pbWFwJztcbmltcG9ydCAnQHJlYWN0Zmxvdy9jb3JlL2Rpc3Qvc3R5bGUuY3NzJztcblxuaW1wb3J0IEN1c3RvbU5vZGUgZnJvbSAnLi9DdXN0b21Ob2RlJztcbi8vIGltcG9ydCBOb2RlTGlicmFyeSBmcm9tICcuL05vZGVMaWJyYXJ5JztcbmltcG9ydCBOb2RlQ29uZmlnUGFuZWwgZnJvbSAnLi9Ob2RlQ29uZmlnUGFuZWwnO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vQ29udGV4dE1lbnUnO1xuaW1wb3J0ICcuL1dvcmtmbG93Q2FudmFzLnNjc3MnO1xuXG4vLyDoh6rlrprkuYnoioLngrnnsbvlnotcbmNvbnN0IG5vZGVUeXBlcyA9IHtcbiAgY3VzdG9tOiBDdXN0b21Ob2RlLFxufTtcblxuLy8g55S75biD5o6n5Yi257uE5Lu2XG5jb25zdCBDYW52YXNDb250cm9sczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZml0Vmlldywgem9vbUluLCB6b29tT3V0IH0gPSB1c2VSZWFjdEZsb3coKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FudmFzLWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9XCJjYW52YXMtY29udHJvbC1idG5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaXRWaWV3KHsgcGFkZGluZzogMC4yLCBkdXJhdGlvbjogMzAwIH0pfVxuICAgICAgICB0aXRsZT1cIueUu+W4g+WxheS4rVwiXG4gICAgICA+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIgMmgzdjFIM3YySDJWMnptOSAwaDN2M2gtMVYzaC0yVjJ6TTIgMTF2M2gzdi0xSDN2LTJIMnptMTIgMHYyaC0ydjFoM3YtM2gtMXpcIi8+XG4gICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9XCJjYW52YXMtY29udHJvbC1idG5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB6b29tSW4oeyBkdXJhdGlvbjogMjAwIH0pfVxuICAgICAgICB0aXRsZT1cIuaUvuWkp1wiXG4gICAgICA+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTggMy41YS41LjUgMCAwIDEgLjUuNXYzaDNhLjUuNSAwIDAgMSAwIDFoLTN2M2EuNS41IDAgMCAxLTEgMHYtM2gtM2EuNS41IDAgMCAxIDAtMWgzdi0zQS41LjUgMCAwIDEgOCAzLjV6XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9XCJjYW52YXMtY29udHJvbC1idG5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB6b29tT3V0KHsgZHVyYXRpb246IDIwMCB9KX1cbiAgICAgICAgdGl0bGU9XCLnvKnlsI9cIlxuICAgICAgPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDhhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgMCAxaC03QS41LjUgMCAwIDEgNCA4elwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIOWIneWni+iKgueCueaVsOaNrlxuY29uc3QgaW5pdGlhbE5vZGVzOiBOb2RlW10gPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIHR5cGU6ICdjdXN0b20nLFxuICAgIHBvc2l0aW9uOiB7IHg6IDUwLCB5OiAxNTAgfSxcbiAgICBkYXRhOiB7IFxuICAgICAgbGFiZWw6ICfpnIDmsYLnrqHnkIblj4rlkIzmraUnLFxuICAgICAgdHlwZTogJ3JlcXVpcmVtZW50JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn5LuO57O757uf6KeE5qC85Lmm5Yib5bu65ZKM566h55CG6ZyA5rGC6aG5JyxcbiAgICAgIHRvb2w6ICdQb2xhcmlvbicsXG4gICAgICBzdWJBY3Rpb25zOiBbJ+WIm+W7uumcgOaxgiddLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJzInLFxuICAgIHR5cGU6ICdjdXN0b20nLFxuICAgIHBvc2l0aW9uOiB7IHg6IDQ1MCwgeTogMTUwIH0sXG4gICAgZGF0YTogeyBcbiAgICAgIGxhYmVsOiAn5Yqf6IO95LiO5p625p6E6K6+6K6hJyxcbiAgICAgIHR5cGU6ICdhcmNoaXRlY3R1cmUnLFxuICAgICAgZGVzY3JpcHRpb246ICfln7rkuo7pnIDmsYLov5vooYzns7vnu5/lip/og73lkozmnrbmnoTorr7orqEnLFxuICAgICAgdG9vbDogJ1BvbGFyaW9uLUVBJyxcbiAgICAgIHN1YkFjdGlvbnM6IFsn6ZyA5rGC5ZCM5q2lJ10sXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnMycsXG4gICAgdHlwZTogJ2N1c3RvbScsXG4gICAgcG9zaXRpb246IHsgeDogNDUwLCB5OiAzNTAgfSxcbiAgICBkYXRhOiB7IFxuICAgICAgbGFiZWw6ICflip/og73kuI7mnrbmnoTorr7orqEnLFxuICAgICAgdHlwZTogJ2FyY2hpdGVjdHVyZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ+i/m+ihjOWKn+iDveS4juaetuaehOeahOivpue7huiuvuiuoScsXG4gICAgICB0b29sOiAnRUEnLFxuICAgICAgc3ViQWN0aW9uczogWyflip/og70m6YC76L6R6K6+6K6hJ10sXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnNCcsXG4gICAgdHlwZTogJ2N1c3RvbScsXG4gICAgcG9zaXRpb246IHsgeDogNDUwLCB5OiA1NTAgfSxcbiAgICBkYXRhOiB7IFxuICAgICAgbGFiZWw6ICflip/og73kuI7mnrbmnoTorr7orqEnLFxuICAgICAgdHlwZTogJ2FyY2hpdGVjdHVyZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ+aetuaehOi9rOaNouS4uuWPr+S7v+ecn+eahOaooeWeiycsXG4gICAgICB0b29sOiAnU1NQJyxcbiAgICAgIHN1YkFjdGlvbnM6IFsn5p625p6E6L2s5o2iJ10sXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnNScsXG4gICAgdHlwZTogJ2N1c3RvbScsXG4gICAgcG9zaXRpb246IHsgeDogODUwLCB5OiAxNTAgfSxcbiAgICBkYXRhOiB7IFxuICAgICAgbGFiZWw6ICfns7vnu5/pm4bmiJDku7/nnJ8nLFxuICAgICAgdHlwZTogJ3NpbXVsYXRpb24nLFxuICAgICAgZGVzY3JpcHRpb246ICfns7vnu5/nu7zlkIjku7/nnJ/pqozor4EnLFxuICAgICAgdG9vbDogJ1NTUC1Nb2RlbGljYScsXG4gICAgICBzdWJBY3Rpb25zOiBbJ+aetuaehOWQjOatpSddLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJzYnLFxuICAgIHR5cGU6ICdjdXN0b20nLFxuICAgIHBvc2l0aW9uOiB7IHg6IDg1MCwgeTogMzUwIH0sXG4gICAgZGF0YTogeyBcbiAgICAgIGxhYmVsOiAn57O757uf6ZuG5oiQ5Lu/55yfJyxcbiAgICAgIHR5cGU6ICdzaW11bGF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn6L+b6KGM5Lu/55yf6YWN572u5a6a5LmJJyxcbiAgICAgIHRvb2w6ICdNLXdvcmtzJyxcbiAgICAgIHN1YkFjdGlvbnM6IFsn5Lu/55yf6YWN572uJ10sXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnNycsXG4gICAgdHlwZTogJ2N1c3RvbScsXG4gICAgcG9zaXRpb246IHsgeDogODUwLCB5OiA1NTAgfSxcbiAgICBkYXRhOiB7IFxuICAgICAgbGFiZWw6ICfns7vnu5/ku7/nnJ/pm4bmiJAnLFxuICAgICAgdHlwZTogJ3NpbXVsYXRpb24nLFxuICAgICAgZGVzY3JpcHRpb246ICflrp7pqozorr7orqHkuI7lpJrmlrnmoYjliIbmnpAnLFxuICAgICAgdG9vbDogJ0RPRScsXG4gICAgICBzdWJBY3Rpb25zOiBbJ+aetuaehOi9rOaNoiddLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZVxuICAgIH0sXG4gIH0sXG5dO1xuXG5jb25zdCBpbml0aWFsRWRnZXM6IEVkZ2VbXSA9IFtcbiAge1xuICAgIGlkOiAnZTEtMicsXG4gICAgc291cmNlOiAnMScsXG4gICAgdGFyZ2V0OiAnMicsXG4gICAgdHlwZTogJ3Ntb290aHN0ZXAnLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdlMi0zJyxcbiAgICBzb3VyY2U6ICcyJyxcbiAgICB0YXJnZXQ6ICczJyxcbiAgICB0eXBlOiAnc21vb3Roc3RlcCcsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2UzLTQnLFxuICAgIHNvdXJjZTogJzMnLFxuICAgIHRhcmdldDogJzQnLFxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZTQtNScsXG4gICAgc291cmNlOiAnNCcsXG4gICAgdGFyZ2V0OiAnNScsXG4gICAgdHlwZTogJ3Ntb290aHN0ZXAnLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdlNS02JyxcbiAgICBzb3VyY2U6ICc1JyxcbiAgICB0YXJnZXQ6ICc2JyxcbiAgICB0eXBlOiAnc21vb3Roc3RlcCcsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2U2LTcnLFxuICAgIHNvdXJjZTogJzYnLFxuICAgIHRhcmdldDogJzcnLFxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBXb3JrZmxvd0NhbnZhc1Byb3BzIHtcbiAgYXBwTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgV29ya2Zsb3dDYW52YXM6IFJlYWN0LkZDPFdvcmtmbG93Q2FudmFzUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdGlhbE5vZGVzKTtcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRpYWxFZGdlcyk7XG4gIGNvbnN0IFtzZWxlY3RlZE5vZGUsIHNldFNlbGVjdGVkTm9kZV0gPSB1c2VTdGF0ZTxOb2RlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb250ZXh0TWVudSwgc2V0Q29udGV4dE1lbnVdID0gdXNlU3RhdGU8e1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBub2RlSWQ/OiBzdHJpbmc7XG4gIH0+KHsgdmlzaWJsZTogZmFsc2UsIHg6IDAsIHk6IDAgfSk7XG5cbiAgLy8g5Lu/55yf54q25oCB566h55CGXG4gIGNvbnN0IFtzaW11bGF0aW9uU3RhdHVzLCBzZXRTaW11bGF0aW9uU3RhdHVzXSA9IHVzZVN0YXRlPCdpZGxlJyB8ICdydW5uaW5nJyB8ICdwYXVzZWQnPignaWRsZScpO1xuICBcbiAgY29uc3QgcmVhY3RGbG93V3JhcHBlciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgLy8g6L+e5o6l6IqC54K5XG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChwYXJhbXM6IENvbm5lY3Rpb24pID0+IHNldEVkZ2VzKChlZHMpID0+IGFkZEVkZ2UocGFyYW1zLCBlZHMpKSxcbiAgICBbc2V0RWRnZXNdXG4gICk7XG5cbiAgLy8g6IqC54K56YCJ5oupXG4gIGNvbnN0IG9uTm9kZUNsaWNrID0gdXNlQ2FsbGJhY2soKF9ldmVudDogUmVhY3QuTW91c2VFdmVudCwgbm9kZTogTm9kZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkTm9kZShub2RlKTtcbiAgICBzZXRDb250ZXh0TWVudSh7IHZpc2libGU6IGZhbHNlLCB4OiAwLCB5OiAwIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8g5Y+z6ZSu6I+c5Y2VXG4gIGNvbnN0IG9uTm9kZUNvbnRleHRNZW51ID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50LCBub2RlOiBOb2RlKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDb250ZXh0TWVudSh7XG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFksXG4gICAgICBub2RlSWQ6IG5vZGUuaWQsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyDnlLvluIPngrnlh7vvvIjlj5bmtojpgInmi6nvvIlcbiAgY29uc3Qgb25QYW5lQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROb2RlKG51bGwpO1xuICAgIHNldENvbnRleHRNZW51KHsgdmlzaWJsZTogZmFsc2UsIHg6IDAsIHk6IDAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyDmi5bmi73mt7vliqDmlrDoioLngrkgLSDmmoLml7bnpoHnlKhcbiAgLypcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBcbiAgICAgIGNvbnN0IG5vZGVEYXRhU3RyID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2FwcGxpY2F0aW9uL3JlYWN0ZmxvdycpO1xuICAgICAgXG4gICAgICBpZiAoIW5vZGVEYXRhU3RyIHx8ICFyZWFjdEZsb3dXcmFwcGVyLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSBKU09OLnBhcnNlKG5vZGVEYXRhU3RyKTtcbiAgICAgICAgY29uc3QgcmVhY3RGbG93Qm91bmRzID0gcmVhY3RGbG93V3JhcHBlci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVhY3RGbG93Qm91bmRzLmxlZnQgLSAxMDAsXG4gICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlYWN0Rmxvd0JvdW5kcy50b3AgLSAyMCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuZXdOb2RlOiBOb2RlID0ge1xuICAgICAgICAgIGlkOiBgJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgZGF0YTogeyBcbiAgICAgICAgICAgIGxhYmVsOiBub2RlRGF0YS5sYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IG5vZGVEYXRhLnR5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbm9kZURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0b29sOiBub2RlRGF0YS50b29sLFxuICAgICAgICAgICAgc3ViQWN0aW9uczogW2Ake25vZGVEYXRhLmxhYmVsfeaTjeS9nDFgLCBgJHtub2RlRGF0YS5sYWJlbH3mk43kvZwyYF0sXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBzZXROb2RlcygobmRzKSA9PiBuZHMuY29uY2F0KG5ld05vZGUpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ino+aekOiKgueCueaVsOaNruWksei0pTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0Tm9kZXNdXG4gICk7XG5cbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChldmVudDogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgfSwgW10pO1xuICAqL1xuXG4gIC8vIOWFs+mXreWPs+mUruiPnOWNlVxuICBjb25zdCBjbG9zZUNvbnRleHRNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldENvbnRleHRNZW51KHsgdmlzaWJsZTogZmFsc2UsIHg6IDAsIHk6IDAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyDliKDpmaToioLngrlcbiAgY29uc3QgZGVsZXRlTm9kZSA9IHVzZUNhbGxiYWNrKChub2RlSWQ6IHN0cmluZykgPT4ge1xuICAgIHNldE5vZGVzKChuZHMpID0+IG5kcy5maWx0ZXIoKG4pID0+IG4uaWQgIT09IG5vZGVJZCkpO1xuICAgIHNldEVkZ2VzKChlZHMpID0+IGVkcy5maWx0ZXIoKGUpID0+IGUuc291cmNlICE9PSBub2RlSWQgJiYgZS50YXJnZXQgIT09IG5vZGVJZCkpO1xuICAgIGNsb3NlQ29udGV4dE1lbnUoKTtcbiAgfSwgW3NldE5vZGVzLCBzZXRFZGdlcywgY2xvc2VDb250ZXh0TWVudV0pO1xuXG4gIC8vIOWkjeWItuiKgueCuVxuICBjb25zdCBkdXBsaWNhdGVOb2RlID0gdXNlQ2FsbGJhY2soKG5vZGVJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLmZpbmQoKG4pID0+IG4uaWQgPT09IG5vZGVJZCk7XG4gICAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdOb2RlOiBOb2RlID0ge1xuICAgICAgLi4ubm9kZSxcbiAgICAgIGlkOiBgJHtEYXRlLm5vdygpfWAsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBub2RlLnBvc2l0aW9uLnggKyAyMCxcbiAgICAgICAgeTogbm9kZS5wb3NpdGlvbi55ICsgMjAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBzZXROb2RlcygobmRzKSA9PiBbLi4ubmRzLCBuZXdOb2RlXSk7XG4gICAgY2xvc2VDb250ZXh0TWVudSgpO1xuICB9LCBbbm9kZXMsIHNldE5vZGVzLCBjbG9zZUNvbnRleHRNZW51XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RGbG93UHJvdmlkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtmbG93LWNhbnZhcy1jb250YWluZXJcIj5cbiAgICAgICAgey8qIOiKgueCueW6kyAtIOaaguaXtumakOiXjyAqL31cbiAgICAgICAgey8qIDxOb2RlTGlicmFyeSAvPiAqL31cbiAgICAgICAgXG4gICAgICAgIHsvKiDlt6XkvZzmtYHnlLvluIMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2Zsb3ctY2FudmFzXCIgcmVmPXtyZWFjdEZsb3dXcmFwcGVyfT5cbiAgICAgICAgICB7Lyog5Lu/55yf5o6n5Yi25oyJ6ZKuICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltdWxhdGlvbi1jb250cm9sc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idG4gJHtzaW11bGF0aW9uU3RhdHVzID09PSAncnVubmluZycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRpb25TdGF0dXMoc2ltdWxhdGlvblN0YXR1cyA9PT0gJ3J1bm5pbmcnID8gJ3BhdXNlZCcgOiAncnVubmluZycpfVxuICAgICAgICAgICAgICB0aXRsZT17c2ltdWxhdGlvblN0YXR1cyA9PT0gJ3J1bm5pbmcnID8gJ+aaguWBnOS7v+ecnycgOiAn5byA5aeL5Lu/55yfJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NpbXVsYXRpb25TdGF0dXMgPT09ICdydW5uaW5nJyA/IChcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiM1wiIHk9XCIyXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjlcIiB5PVwiMlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgMnYxMmwxMC02TDMgMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7c2ltdWxhdGlvblN0YXR1cyA9PT0gJ3J1bm5pbmcnID8gJ+aaguWBnCcgOiAn5byA5aeLJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRpb25TdGF0dXMoJ2lkbGUnKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NpbXVsYXRpb25TdGF0dXMgPT09ICdpZGxlJ31cbiAgICAgICAgICAgICAgdGl0bGU9XCLlgZzmraLku7/nnJ9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICDlgZzmraJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFJlYWN0Rmxvd1xuICAgICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgICAgZWRnZXM9e2VkZ2VzfVxuICAgICAgICAgICAgb25Ob2Rlc0NoYW5nZT17b25Ob2Rlc0NoYW5nZX1cbiAgICAgICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XG4gICAgICAgICAgICBvbkNvbm5lY3Q9e29uQ29ubmVjdH1cbiAgICAgICAgICAgIG9uTm9kZUNsaWNrPXtvbk5vZGVDbGlja31cbiAgICAgICAgICAgIG9uTm9kZUNvbnRleHRNZW51PXtvbk5vZGVDb250ZXh0TWVudX1cbiAgICAgICAgICAgIG9uUGFuZUNsaWNrPXtvblBhbmVDbGlja31cbiAgICAgICAgICAgIC8vIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICAgICAgLy8gb25EcmFnT3Zlcj17b25EcmFnT3Zlcn1cbiAgICAgICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxuICAgICAgICAgICAgY29ubmVjdGlvbk1vZGU9e0Nvbm5lY3Rpb25Nb2RlLkxvb3NlfVxuICAgICAgICAgICAgZGVmYXVsdFZpZXdwb3J0PXt7IHg6IDAsIHk6IDAsIHpvb206IDAuNyB9fVxuICAgICAgICAgICAgZml0Vmlld1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICA8Q29udHJvbHMgLz5cbiAgICAgICAgICAgIDxNaW5pTWFwIFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCJcbiAgICAgICAgICAgICAgbm9kZUNvbG9yPXsobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5kYXRhPy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlbWVudCc6IHJldHVybiAnIzUyYzQxYSc7XG4gICAgICAgICAgICAgICAgICBjYXNlICdhcmNoaXRlY3R1cmUnOiByZXR1cm4gJyMxODkwZmYnO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnc2ltdWxhdGlvbic6IHJldHVybiAnI2ZhOGMxNic7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyM2NjYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbWFza0NvbG9yPVwicmdiYSgyNCwgMTQ0LCAyNTUsIDAuMilcIlxuICAgICAgICAgICAgICBwYW5uYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgem9vbWFibGU9e3RydWV9XG4gICAgICAgICAgICAgIGFyaWFMYWJlbD1cIueUu+W4g+WvvOiIque8qeeVpeWbvlwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkOWQ5ZDknLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIOeUu+W4g+aOp+WItuaMiemSriAtIOaUvuWcqFJlYWN0Rmxvd+WGhemDqCAqL31cbiAgICAgICAgICAgIDxDYW52YXNDb250cm9scyAvPlxuICAgICAgICAgIDwvUmVhY3RGbG93PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiDoioLngrnphY3nva7pnaLmnb8gKi99XG4gICAgICAgICAge3NlbGVjdGVkTm9kZSAmJiAoXG4gICAgICAgICAgICA8Tm9kZUNvbmZpZ1BhbmVsXG4gICAgICAgICAgICAgIG5vZGU9e3NlbGVjdGVkTm9kZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWROb2RlKG51bGwpfVxuICAgICAgICAgICAgICBvblVwZGF0ZT17KHVwZGF0ZWROb2RlOiBOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Tm9kZXMoKG5kcykgPT5cbiAgICAgICAgICAgICAgICAgIG5kcy5tYXAoKG4pID0+IChuLmlkID09PSB1cGRhdGVkTm9kZS5pZCA/IHVwZGF0ZWROb2RlIDogbikpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIOWPs+mUruiPnOWNlSAqL31cbiAgICAgICAgPENvbnRleHRNZW51XG4gICAgICAgICAgdmlzaWJsZT17Y29udGV4dE1lbnUudmlzaWJsZX1cbiAgICAgICAgICB4PXtjb250ZXh0TWVudS54fVxuICAgICAgICAgIHk9e2NvbnRleHRNZW51Lnl9XG4gICAgICAgICAgb25DbG9zZT17Y2xvc2VDb250ZXh0TWVudX1cbiAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gY29udGV4dE1lbnUubm9kZUlkICYmIGRlbGV0ZU5vZGUoY29udGV4dE1lbnUubm9kZUlkKX1cbiAgICAgICAgICBvbkR1cGxpY2F0ZT17KCkgPT4gY29udGV4dE1lbnUubm9kZUlkICYmIGR1cGxpY2F0ZU5vZGUoY29udGV4dE1lbnUubm9kZUlkKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3RGbG93UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvd0NhbnZhcztcbiJdLCJmaWxlIjoiL1VzZXJzL2premhhbmcvVkMvbWJzZWFwcC9tYnNlLXdvcmtmbG93MDcxOC9hcHBDYXNlL3NyYy9jb21wb25lbnRzL3dvcmtmbG93L1dvcmtmbG93Q2FudmFzLnRzeCJ9