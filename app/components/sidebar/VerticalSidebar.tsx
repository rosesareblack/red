import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IconButton } from '~/components/ui/IconButton';
import { ThemeSwitch } from '~/components/ui/ThemeSwitch';
import { Dialog, DialogButton, DialogDescription, DialogRoot, DialogTitle } from '~/components/ui/Dialog';
import { db, deleteById, getAll, chatId, type ChatHistoryItem } from '~/lib/persistence';
import { HistoryItem } from './HistoryItem';
import { binDates } from './date-binning';
import { classNames } from '~/utils/classNames';

interface VerticalSidebarProps {
  className?: string;
}

type DialogContent = { type: 'delete'; item: ChatHistoryItem } | null;

export function VerticalSidebar({ className }: VerticalSidebarProps) {
  const [activePanel, setActivePanel] = useState<'history' | 'settings' | null>(null);
  const [list, setList] = useState<ChatHistoryItem[]>([]);
  const [dialogContent, setDialogContent] = useState<DialogContent>(null);

  const loadEntries = useCallback(() => {
    if (db) {
      getAll(db)
        .then((list) => list.filter((item) => item.urlId && item.description))
        .then(setList)
        .catch((error) => toast.error(error.message));
    }
  }, []);

  const deleteItem = useCallback((event: React.UIEvent, item: ChatHistoryItem) => {
    event.preventDefault();

    if (db) {
      deleteById(db, item.id)
        .then(() => {
          loadEntries();

          if (chatId.get() === item.id) {
            window.location.pathname = '/';
          }
        })
        .catch((error) => {
          toast.error('Failed to delete conversation');
        });
    }
  }, [loadEntries]);

  const closeDialog = () => {
    setDialogContent(null);
  };

  useEffect(() => {
    if (activePanel === 'history') {
      loadEntries();
    }
  }, [activePanel, loadEntries]);

  const sidebarItems = [
    {
      id: 'new-chat',
      icon: 'i-ph:plus-bold',
      label: 'New Chat',
      action: () => window.location.href = '/',
    },
    {
      id: 'history',
      icon: 'i-ph:clock-bold',
      label: 'Chat History',
      action: () => setActivePanel(activePanel === 'history' ? null : 'history'),
    },
    {
      id: 'settings',
      icon: 'i-ph:gear-bold',
      label: 'Settings',
      action: () => setActivePanel(activePanel === 'settings' ? null : 'settings'),
    },
  ];

  return (
    <>
      {/* Main Sidebar */}
      <div className={classNames(
        'fixed left-0 top-0 h-full w-16 glass-effect texture-overlay border-r border-bolt-elements-borderColor z-sidebar flex flex-col items-center py-4',
        'backdrop-blur-xl bg-gradient-to-b from-bolt-elements-sidebar-glass-bg to-transparent',
        'shadow-2xl border-r border-bolt-elements-sidebar-border-glass',
        className
      )}>
        {/* Logo with enhanced styling */}
        <motion.div 
          className="mb-8 mt-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className="block relative group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100"
              layoutId="logo-glow"
              transition={{ duration: 0.2 }}
            />
            <div className="relative p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-accent-500/50">
              <div className="i-bolt:logo w-8 h-8 text-accent-500 drop-shadow-lg" />
            </div>
          </a>
        </motion.div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col space-y-3">
          {sidebarItems.map((item, index) => {
            const isActive = (item.id === 'history' && activePanel === 'history') || 
                           (item.id === 'settings' && activePanel === 'settings');
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="relative"
              >
                <IconButton
                  title={item.label}
                  onClick={item.action}
                  className={classNames(
                    'w-12 h-12 rounded-2xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden',
                    'hover:scale-105 hover:shadow-xl active:scale-95',
                    {
                      'bg-gradient-to-br from-accent-500/20 to-accent-600/20 text-accent-400 shadow-lg border border-accent-500/30 backdrop-blur-sm': isActive,
                      'bg-gradient-to-br from-white/10 to-white/5 text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-white/15 border border-white/10': !isActive
                    }
                  )}
                >
                  {/* Icon with enhanced styling */}
                  <motion.div 
                    className={classNames(item.icon, 'w-5 h-5 relative z-10')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-500 rounded-r-full"
                      layoutId="active-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 rounded-2xl"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Enhanced Tooltip */}
                  <motion.div
                    className="absolute left-16 ml-3 px-3 py-2 glass-effect text-bolt-elements-textPrimary text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap border border-bolt-elements-sidebar-border-glass backdrop-blur-md shadow-xl z-tooltip"
                    initial={{ scale: 0.8, x: -10 }}
                    animate={{ 
                      scale: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }
                    }}
                  >
                    <div className="font-medium">{item.label}</div>
                    {/* Tooltip arrow */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-bolt-elements-sidebar-glass-bg border-l border-t border-bolt-elements-sidebar-border-glass rotate-45" />
                  </motion.div>
                </IconButton>
              </motion.div>
            );
          })}
        </div>

        {/* Theme Switch at Bottom */}
        <motion.div 
          className="mt-auto mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <ThemeSwitch />
          </div>
        </motion.div>
      </div>

      {/* History Panel */}
      {activePanel === 'history' && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed left-16 top-0 h-full w-80 glass-effect texture-overlay border-r border-bolt-elements-sidebar-border-glass shadow-2xl z-sidebar-panel backdrop-blur-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-bolt-elements-sidebar-border-glass bg-gradient-to-r from-white/5 to-transparent">
              <motion.h2 
                className="text-lg font-bold text-bolt-elements-textPrimary bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Chat History
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={() => setActivePanel(null)}
                  className="w-8 h-8 hover:bg-white/10 rounded-xl bg-white/5 border border-white/10 transition-all duration-200"
                >
                  <div className="i-ph:x-bold w-4 h-4" />
                </IconButton>
              </motion.div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {list.length === 0 ? (
                <div className="text-bolt-elements-textTertiary text-center py-8">
                  No previous conversations
                </div>
              ) : (
                <DialogRoot open={dialogContent !== null}>
                  {binDates(list).map(({ category, items }) => (
                    <div key={category} className="mb-6 first:mt-0">
                      <div className="text-bolt-elements-textTertiary text-sm font-medium mb-2 sticky top-0 bg-bolt-elements-background-depth-1 py-1">
                        {category}
                      </div>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <HistoryItem 
                            key={item.id} 
                            item={item} 
                            onDelete={() => setDialogContent({ type: 'delete', item })} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  <Dialog onBackdrop={closeDialog} onClose={closeDialog}>
                    {dialogContent?.type === 'delete' && (
                      <>
                        <DialogTitle>Delete Chat?</DialogTitle>
                        <DialogDescription asChild>
                          <div>
                            <p>
                              You are about to delete <strong>{dialogContent.item.description}</strong>.
                            </p>
                            <p className="mt-1">Are you sure you want to delete this chat?</p>
                          </div>
                        </DialogDescription>
                        <div className="px-5 pb-4 bg-bolt-elements-background-depth-2 flex gap-2 justify-end">
                          <DialogButton type="secondary" onClick={closeDialog}>
                            Cancel
                          </DialogButton>
                          <DialogButton
                            type="danger"
                            onClick={(event) => {
                              deleteItem(event, dialogContent.item);
                              closeDialog();
                            }}
                          >
                            Delete
                          </DialogButton>
                        </div>
                      </>
                    )}
                  </Dialog>
                </DialogRoot>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Settings Panel */}
      {activePanel === 'settings' && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed left-16 top-0 h-full w-80 glass-effect texture-overlay border-r border-bolt-elements-sidebar-border-glass shadow-2xl z-sidebar-panel backdrop-blur-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-bolt-elements-sidebar-border-glass bg-gradient-to-r from-white/5 to-transparent">
              <motion.h2 
                className="text-lg font-bold text-bolt-elements-textPrimary bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Settings
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={() => setActivePanel(null)}
                  className="w-8 h-8 hover:bg-white/10 rounded-xl bg-white/5 border border-white/10 transition-all duration-200"
                >
                  <div className="i-ph:x-bold w-4 h-4" />
                </IconButton>
              </motion.div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">Appearance</h3>
                  <div className="flex items-center justify-between p-3 bg-bolt-elements-background-depth-2 rounded-lg">
                    <span className="text-sm text-bolt-elements-textSecondary">Theme</span>
                    <ThemeSwitch />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">About</h3>
                  <div className="p-3 bg-bolt-elements-background-depth-2 rounded-lg">
                    <p className="text-sm text-bolt-elements-textSecondary">
                      Bolt - AI-powered development assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Overlay to close panels when clicking outside */}
      {activePanel && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-sidebar-overlay"
          onClick={() => setActivePanel(null)}
        />
      )}
    </>
  );
}