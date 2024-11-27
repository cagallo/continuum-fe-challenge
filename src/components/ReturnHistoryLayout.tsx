import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ReturnOrdersTable from './ReturnHistory';

const ReturnHistoryLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'RMA' | 'Line'>('RMA');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='p-8 max-w-7xl mx-auto'>
        {/* Top section with HISTORY and tabs */}
        <div className='flex justify-between items-center mb-6'> {/* Reduced from mb-12 */}
          <p className='text-2xl font-semibold text-[#63479B]'>HISTORY</p>
          <div className='inline-flex bg-gray-200 rounded-full p-1'>
            <button
              className={`px-8 py-2 rounded-full ${
                activeTab === 'RMA'
                  ? 'bg-[#63479B] text-white'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('RMA')}
            >
              RMA View
            </button>
            <button
              className={`px-8 py-2 rounded-full ${
                activeTab === 'Line'
                  ? 'bg-[#63479B] text-white'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('Line')}
            >
              Line View
            </button>
          </div>
        </div>

        {/* Title section */}
        <div className='mb-4'> {/* Reduced from mb-8 */}
          <h1 className='text-3xl font-bold text-gray-900 mb-1'>
            Return History
          </h1>
          <p className='text-sm font-medium text-[#63479B]'>
            Applied View - Default View
          </p>
        </div>

        {/* Search and actions row */}
        <div className='flex justify-between items-center mb-4'> {/* Reduced from mb-8 */}
          <div className='relative w-96'>
            <Search
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={20}
            />
            <input
              type='text'
              placeholder='Search by name, reference'
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63479B]'
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
          </div>

          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2'>
              Edit Columns
            </button>
            <button className='px-6 py-2 bg-[#63479B] text-white rounded-lg hover:bg-[#523c82] flex items-center gap-2'>
              <span>+</span>
              Create a new return
            </button>
            <button className='p-2 border border-gray-300 rounded-lg'>
              <span className='sr-only'>Saved Views</span>
              📊
            </button>
          </div>
        </div>

        {/* Table */}
        <div>
          <ReturnOrdersTable />
        </div>
      </div>
    </div>
  );
};

export default ReturnHistoryLayout;