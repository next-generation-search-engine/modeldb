import { Timestamp, URL } from 'utils/types';

export type DeployType = 'rest' | 'batch';

export interface IDeployConfig {
  type: DeployType;
  replicas: number;
  withLogs: boolean;
  withServiceMonitoring: boolean;
}

export interface INotDeployedStatusInfo {
  status: 'notDeployed';
}
export interface IDeployingStatusInfo {
  status: 'deploying';
}
export interface IDeployedStatusInfo {
  status: 'deployed';
  data: {
    uptime: Timestamp;
    type: DeployType;
    token: string;
    api: URL;
    modelApi: IModelApi;
  };
}
export interface IUnknownStatusInfo {
  status: 'unknown';
}
export type IDeployStatusInfo =
  | IUnknownStatusInfo
  | INotDeployedStatusInfo
  | IDeployingStatusInfo
  | IDeployedStatusInfo;

export interface IModelApi {
  modelType: 'scikit' | 'xgboost';
  pythonVersion: 2 | 3;
  input: IModelApiInput;
  output: IOutputField;
}

export interface IModelApiInput {
  type: 'list';
  fields: IInputField[];
}

export interface IInputField {
  name: string;
  type: string;
}

export type IOutputField = IInputField;

export interface IServiceStatistics {
  averageLatency: number[];
  p50Latency: number[];
  p90Latency: number[];
  p99Latency: number[];
  throughput: number[];
  time: number[];
}

export interface IServiceDataFeature {
  count: number[];
  bucketLimits: number[];
  reference: number[];
}

export type IDataStatistics = Map<string, IServiceDataFeature>;