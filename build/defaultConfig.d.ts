import { type CreateConfigParameters } from '@wagmi/core';
export declare const getAppName: () => string;
export declare const getAppIcon: () => string;
type DefaultConfigProps = {
    appName: string;
    appIcon?: string;
    appDescription?: string;
    appUrl?: string;
    walletConnectProjectId: string;
} & Partial<CreateConfigParameters>;
declare const defaultConfig: ({ appName, appIcon, appDescription, appUrl, walletConnectProjectId, chains, client, ...props }: DefaultConfigProps) => CreateConfigParameters;
export default defaultConfig;
