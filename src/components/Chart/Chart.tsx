import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MarkerType,
  MiniMap,
  Node,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "./Chart.css";
import "reactflow/dist/style.css";
import {
  DEFAULT_ADVANCED_PARALLEL_WORKFLOW,
  DEFAULT_LINEAR_WORKFLOW,
  DEFAULT_PARALLEL_WORKFLOW,
} from "./constants";
import { v4 as uuidv4 } from "uuid";

export const Chart = () => {
  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);
  const [nodeLabel, setNodeLabel] = useState<string>("");
  const [nodeDescription, setNodeDescription] = useState<string>("");

  const [nodes, setNodes, onNodesChange] = useNodesState(
    DEFAULT_LINEAR_WORKFLOW.initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    DEFAULT_LINEAR_WORKFLOW.initialEdges
  );

  useEffect(() => {
    if (selectedNode) {
      setNodeLabel(selectedNode.data.label || "");
      setNodeDescription(selectedNode.data.description || "");
    } else {
      setNodeLabel("");
      setNodeDescription("");
    }
  }, [selectedNode]);

  const onNodeClick = (_event: MouseEvent, node: Node) => {
    setSelectedEdge(undefined);
    setSelectedNode(node);
  };

  const onEdgeClick = (_event: MouseEvent, edge: Edge) => {
    setSelectedNode(undefined);
    setSelectedEdge(edge);
  };

  const onPaneClick = (_event: MouseEvent) => {
    setSelectedNode(undefined);
    setSelectedEdge(undefined);
  };

  const deleteSelectedNode = () => {
    if (selectedNode) {
      setNodes((nodes) => nodes.filter((node) => node.id !== selectedNode.id));
      setEdges((edges) =>
        edges.filter(
          (edge) =>
            edge.source !== selectedNode.id && edge.target !== selectedNode.id
        )
      );
      setSelectedNode(undefined);
    }
  };

  const deleteSelectedEdge = () => {
    if (selectedEdge) {
      setEdges((edges) => edges.filter((edge) => edge.id !== selectedEdge.id));
      setSelectedEdge(undefined);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!selectedNode?.id) return;

    const newNode = {
      ...selectedNode,
      data: {
        description: nodeDescription,
        label: nodeLabel,
      },
    };

    setNodes((nodes) =>
      nodes.map((node) => (node.id === newNode.id ? newNode : node))
    );

    setNodeLabel("");
    setNodeDescription("");
  };

  return (
    <div className="chart-container">
      <div className="menu-container">
        <div className="menu-row">
          <button
            onClick={() => {
              setNodes(DEFAULT_LINEAR_WORKFLOW.initialNodes);
              setEdges(DEFAULT_LINEAR_WORKFLOW.initialEdges);
            }}
          >
            Linear Workflow
          </button>
          <button
            onClick={() => {
              setNodes(DEFAULT_PARALLEL_WORKFLOW.initialNodes);
              setEdges(DEFAULT_PARALLEL_WORKFLOW.initialEdges);
            }}
          >
            Parallel Workflow
          </button>
          <button
            onClick={() => {
              setNodes(DEFAULT_ADVANCED_PARALLEL_WORKFLOW.initialNodes);
              setEdges(DEFAULT_ADVANCED_PARALLEL_WORKFLOW.initialEdges);
            }}
          >
            Advanced Parallel Workflow
          </button>
        </div>
        <div className="menu-row">
          <button
            onClick={() => {
              const newNodes = [
                ...nodes,
                {
                  id: uuidv4(),
                  position: { x: 50, y: 50 },
                  data: { label: `${nodes.length + 1}`, description: "" },
                  sourcePosition: Position.Right,
                  targetPosition: Position.Left,
                },
              ];
              setNodes(newNodes);
            }}
          >
            Add Node
          </button>
          <button onClick={deleteSelectedNode} disabled={!selectedNode}>
            Delete Selected Node
          </button>
          <button onClick={deleteSelectedEdge} disabled={!selectedEdge}>
            Delete Selected Edge
          </button>
        </div>
        <div className="menu-form">
          <form onSubmit={handleSubmit} className="node-form">
            <div className="form-inputs">
              <label htmlFor="label">Label:</label>
              <input
                id="label"
                placeholder="Edit Label"
                value={nodeLabel}
                onChange={(e) => setNodeLabel(e.target.value)}
                required
                disabled={!selectedNode}
              />
              <br />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="Edit Node Description"
                value={nodeDescription}
                onChange={(e) => setNodeDescription(e.target.value)}
                disabled={!selectedNode}
              />
            </div>
            <button type="submit" disabled={!selectedNode}>
              Save
            </button>
          </form>
        </div>
      </div>
      <ReactFlow
        defaultMarkerColor="#00000"
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        onConnect={(connection: Connection) => {
          const connectionWithStyle = {
            ...connection,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
            },
            style: { stroke: "black" },
          };
          setEdges((oldEdges) => addEdge(connectionWithStyle, oldEdges));
        }}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
