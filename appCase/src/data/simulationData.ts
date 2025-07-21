export interface NodeData {
  id: string;
  name: string;
  status: string;
  input: Record<string, any>;
  output: Record<string, any>;
}

export const simulationData: { nodes: NodeData[] } = {
  nodes: [
    {
      id: 'node1',
      name: '节点1',
      status: '未执行',
      input: {},
      output: {},
    },
    {
      id: 'node2',
      name: '节点2',
      status: '未执行',
      input: {},
      output: {},
    },
    {
      id: 'node3',
      name: '节点3',
      status: '未执行',
      input: {},
      output: {},
    },
  ],
};
