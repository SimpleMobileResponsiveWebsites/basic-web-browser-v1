import React, { useState } from 'react';
import { AddressBar } from './AddressBar';
import { Tab } from './Tab';
import { Plus } from 'lucide-react';

interface Tab {
  id: number;
  title: string;
  url: string;
}

export function Browser() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: 'New Tab', url: 'about:blank' }
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newTab = {
      id: Date.now(),
      title: 'New Tab',
      url: 'about:blank'
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const closeTab = (id: number) => {
    if (tabs.length === 1) {
      addTab();
    }
    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);
    if (activeTab === id) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
  };

  const updateTab = (id: number, url: string) => {
    setTabs(tabs.map(tab =>
      tab.id === id ? { ...tab, url, title: url } : tab
    ));
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center bg-gray-50 border-b border-gray-200">
        <div className="flex-1 flex">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              title={tab.title}
              active={tab.id === activeTab}
              onClose={() => closeTab(tab.id)}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <button
          onClick={addTab}
          className="p-2 hover:bg-gray-200 rounded-full m-1"
          aria-label="New tab"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <AddressBar
        onNavigate={(url) => updateTab(activeTab, url)}
        onBack={() => console.log('back')}
        onForward={() => console.log('forward')}
        onRefresh={() => console.log('refresh')}
        onHome={() => updateTab(activeTab, 'https://example.com')}
      />

      <div className="flex-1 bg-white p-4">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          {tabs.find(tab => tab.id === activeTab)?.url || 'No content to display'}
        </div>
      </div>
    </div>
  );
}