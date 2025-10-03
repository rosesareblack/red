import { json, type MetaFunction } from '@remix-run/node';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { VerticalSidebar } from '~/components/sidebar/VerticalSidebar';
import { AnimatedBackground } from '~/components/ui/AnimatedBackground';
import { SiteBuilderShowcase } from '~/components/showcase/SiteBuilderShowcase';

export const meta: MetaFunction = () => {
  return [{ title: 'Bolt - AI Site Builder' }, { name: 'description', content: 'Build websites with AI - Talk with Bolt, an intelligent assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Main layout */}
      <div className="relative z-10 flex h-full w-full">
        <VerticalSidebar />
        <div className="flex-1 ml-16 relative">
          {/* Content area with subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bolt-elements-bg-depth-1/80 to-bolt-elements-bg-depth-1/90 backdrop-blur-[2px]" />
          <div className="relative z-10 h-full">
            <SiteBuilderShowcase />
            <ClientOnly fallback={<BaseChat model="" setModel={() => {}} />}>{() => <Chat />}</ClientOnly>
          </div>
        </div>
      </div>
    </div>
  );
}
