import { useEffect } from 'react';
import { useConnect, useDisconnect } from 'wagmi';
import { languages, routes, theme, useContext } from './../FamilyKit';

import Modal from '../Modal';

import ConnectButton from './../ConnectButton';

import OnboardingIntroduction from './Onboarding';
import Connectors from './Connectors';
import ConnectUsing from './ConnectUsing';
import DownloadApp from './DownloadApp';
import Profile from '../Profile';

const ConnectModal: React.FC<{ theme?: theme; lang?: languages }> = ({
  theme = 'light',
  lang = 'en',
}) => {
  const context = useContext();
  const { reset, isConnected } = useConnect();
  const { disconnect } = useDisconnect();

  const pages: any = {
    profile: <Profile />,
    download: <DownloadApp connectorId={context.connector} />,
    connectors: <Connectors />,
    onboarding: <OnboardingIntroduction />,
    connect: <ConnectUsing connectorId={context.connector} />,
  };

  function resetAll() {
    disconnect();
    reset();
  }

  function show() {
    context.setOpen(true);
    context.setRoute(isConnected ? routes.PROFILE : routes.CONNECTORS);
  }

  useEffect(() => {
    context.setRoute(isConnected ? routes.PROFILE : routes.CONNECTORS);
  }, [isConnected]);

  function hide() {
    context.setOpen(false);
  }

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'Escape') hide();
    }
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  useEffect(() => context.setTheme(theme), [theme]);
  useEffect(() => context.setLang(lang), [lang]);

  return (
    <>
      <ConnectButton onClick={show} />
      <Modal
        open={context.open}
        pages={pages}
        pageId={context.route}
        onClose={hide}
        onBack={
          context.route !== routes.CONNECTORS &&
          context.route !== routes.PROFILE
            ? () => {
                if (context.route === routes.DOWNLOAD) {
                  context.setRoute(routes.CONNECT);
                } else {
                  context.setRoute(routes.CONNECTORS);
                }
              }
            : undefined
        }
      />
    </>
  );
};

export default ConnectModal;
