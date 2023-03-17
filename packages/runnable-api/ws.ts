import type { WorkflowType, WorkflowResponse, RunnableContext } from './client';
import type { WorkflowId, NamespaceId, WorkflowTypeId } from './ids';

export interface ServerToClientEvents {
  listWorkflowTypes: (namespace: NamespaceId | undefined, callback: (workflows: WorkflowType[]) => void) => void;
  startWorkflow: (
    workflowTypeId: WorkflowTypeId,
    context: RunnableContext,
    callback: (response: WorkflowResponse) => void
  ) => void;
  pickUpWorkflow: (workflowId: WorkflowId, callback: (response: WorkflowResponse) => void) => void;
  continueWorkflow: (
    workflowId: WorkflowId,
    response: { [key: string]: unknown },
    callback: (response: WorkflowResponse) => void
  ) => void;
}

export interface ClientToServerEvents {
  // no events
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  namespace: NamespaceId;
}
