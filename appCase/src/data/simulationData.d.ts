export interface NodeData {
  id: string;
  name: string;
  status: string;
  input: Record<string, any>;
  output: Record<string, any>;
}

export declare const simulationData: {
  nodes: NodeData[];
};
