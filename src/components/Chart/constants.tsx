import { MarkerType, Position } from "reactflow";

export const DEFAULT_LINEAR_WORKFLOW = {
  initialNodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "1", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "2",
      position: { x: 200, y: 0 },
      data: { label: "2", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "3",
      position: { x: 400, y: 0 },
      data: { label: "3", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "4",
      position: { x: 600, y: 0 },
      data: { label: "4", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  ],
  initialEdges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
  ],
};

export const DEFAULT_PARALLEL_WORKFLOW = {
  initialNodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "1", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "2",
      position: { x: 300, y: 100 },
      data: { label: "2", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "3",
      position: { x: 300, y: -100 },
      data: { label: "3", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "4",
      position: { x: 600, y: 0 },
      data: { label: "4", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  ],
  initialEdges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
  ],
};

export const DEFAULT_ADVANCED_PARALLEL_WORKFLOW = {
  initialNodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "1", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "2",
      position: { x: 200, y: -100 },
      data: { label: "2", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "3",
      position: { x: 300, y: 100 },
      data: { label: "3", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "4",
      position: { x: 400, y: -100 },
      data: { label: "4", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: "5",
      position: { x: 600, y: 0 },
      data: { label: "5", description: "" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  ],
  initialEdges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
      style: { stroke: "black" },
    },
  ],
};
