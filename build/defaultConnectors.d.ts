import { CreateConnectorFn } from 'wagmi';
type DefaultConnectorsProps = {
    app: {
        name: string;
        icon?: string;
        description?: string;
        url?: string;
    };
    walletConnectProjectId?: string;
};
declare const defaultConnectors: ({ app, walletConnectProjectId, }: DefaultConnectorsProps) => CreateConnectorFn[];
export default defaultConnectors;
