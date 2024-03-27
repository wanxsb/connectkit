/**
 * This is a wrapper around wagmi's useConnect hook that adds some
 * additional functionality.
 */
import { type UseConnectParameters, CreateConnectorFn, Connector } from 'wagmi';
export declare function useConnect({ ...props }?: UseConnectParameters): {
    variables: {
        chainId?: number | undefined;
        connector: CreateConnectorFn | Connector;
    } | undefined;
    data: import("wagmi/query").ConnectData<import("wagmi").Config> | undefined;
    error: import("@wagmi/core").ConnectErrorType | null;
    isError: boolean;
    isIdle: boolean;
    isPending: boolean;
    isSuccess: boolean;
    status: "error" | "idle" | "pending" | "success";
    reset: () => void;
    context: unknown;
    failureCount: number;
    failureReason: import("@wagmi/core").ConnectErrorType | null;
    isPaused: boolean;
    submittedAt: number;
    connect: ({ connector, chainId, mutation, }: {
        connector: CreateConnectorFn | Connector;
        chainId?: number | undefined;
        mutation?: UseConnectParameters['mutation'];
    }) => void;
    connectAsync: ({ connector, chainId, mutation, }: {
        connector: CreateConnectorFn | Connector;
        chainId?: number | undefined;
        mutation?: UseConnectParameters['mutation'];
    }) => Promise<import("wagmi/query").ConnectData<import("wagmi").Config>>;
    connectors: readonly Connector[];
};
