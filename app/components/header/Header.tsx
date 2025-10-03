import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames(
        'flex items-center bg-bolt-elements-background-depth-1 px-6 py-4 border-b h-[var(--header-height)] backdrop-blur-sm bg-opacity-90',
        {
          'border-transparent': !chat.started,
          'border-bolt-elements-borderColor shadow-sm': chat.started,
        },
      )}
    >
      <div className="flex items-center gap-3 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl hover:text-accent-500 transition-colors duration-200" />
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent flex items-center hover:from-accent-500 hover:to-accent-600 transition-all duration-200">
          <span className="i-bolt:logo-text?mask w-[46px] inline-block" />
        </a>
      </div>
      <span className="flex-1 px-6 truncate text-center text-bolt-elements-textPrimary font-medium">
        <ClientOnly>{() => <ChatDescription />}</ClientOnly>
      </span>
      {chat.started && (
        <ClientOnly>
          {() => (
            <div className="mr-1">
              <HeaderActionButtons />
            </div>
          )}
        </ClientOnly>
      )}
    </header>
  );
}
