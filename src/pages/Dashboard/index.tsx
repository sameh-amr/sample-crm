import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Button from '../../components/ui/Button';



// Define types for our data
interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: string;
  isPositive: boolean;
  icon: string;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface CreditCard {
  id: number;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isActive: boolean;
}

const Dashboard: React.FC = () => {
  // State for the dashboard
  const [transferAmount, setTransferAmount] = useState('525.50');
  
  // Dummy data for transactions
  const transactions: Transaction[] = [
    {
      id: 1,
      title: 'Deposit from my',
      date: '28 January 2021',
      amount: '-$850',
      isPositive: false,
      icon: '/images/img_group_427.svg'
    },
    {
      id: 2,
      title: 'Deposit Paypal',
      date: '25 January 2021',
      amount: '+$2,500',
      isPositive: true,
      icon: '/images/img_group_428.svg'
    },
    {
      id: 3,
      title: 'Jemi Wilson',
      date: '21 January 2021',
      amount: '+$5,400',
      isPositive: true,
      icon: '/images/img_group_429.svg'
    }
  ];
  
  // Dummy data for contacts
  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Livia Bator',
      role: 'CEO',
      image: '/images/img_pexelsjuliavolk5273755_1.png'
    },
    {
      id: 2,
      name: 'Randy Press',
      role: 'Director',
      image: '/images/img_marcelstraussuctoqajdyunsplash_1.png'
    },
    {
      id: 3,
      name: 'Workman',
      role: 'Designer',
      image: '/images/img_mask_group.png'
    }
  ];
  
  // Dummy data for credit cards
  const creditCards: CreditCard[] = [
    {
      id: 1,
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      isActive: true
    },
    {
      id: 2,
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      isActive: false
    }
  ];
  
  // Handle transfer
  const handleTransfer = () => {
    alert(`Transfer of ${transferAmount} initiated successfully!`);
  };
  
  // Handle adding a new client
  const handleAddClient = () => {
    alert('Add new client clicked');
  };
  
  // Handle starting a new project
  const handleStartProject = () => {
    alert('Start new project clicked');
  };
  
  // Handle viewing invoices
  const handleViewInvoices = () => {
    alert('View invoices clicked');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <Header username="Alex" />
        
        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Button 
            onClick={handleAddClient}
            className="py-4"
            fullWidth
          >
            <img src="/images/img_vector_3.svg" alt="" className="mr-2 w-4 h-5" />
            Add New Client
          </Button>
          
          <Button 
            onClick={handleStartProject}
            className="py-4"
            fullWidth
          >
            <img src="/images/img_frame_16x14.svg" alt="" className="mr-2 w-4 h-3.5" />
            Start New Project
          </Button>
          
          <Button 
            onClick={handleViewInvoices}
            className="py-4"
            fullWidth
          >
            <img src="/images/img_vector_4.svg" alt="" className="mr-2 w-4 h-3" />
            View Invoices
          </Button>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Tasks Card */}
          <Card 
            title="Tasks" 
            badge={{ text: "3 Urgent", color: "red" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">12</h3>
                <p className="text-gray-600">Open tasks</p>
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <img src="/images/img_frame_24x24.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
          </Card>
          
          {/* Inbox Messages Card */}
          <Card 
            title="Inbox Messages"
          >
            <div className="absolute top-6 right-6">
              <span className="bg-red-100 text-red-600 text-sm px-2 py-0.5 rounded-full">
                8 New
              </span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">15</h3>
                <p className="text-gray-600">Unread messages</p>
              </div>
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
                <img src="/images/img_frame_2.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
          </Card>
          
          {/* Active Jobs Card */}
          <Card 
            title="Active Jobs" 
            badge={{ text: "75% Complete", color: "green" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">24</h3>
                <p className="text-gray-600">In progress</p>
              </div>
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <img src="/images/img_frame_3.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>
        
        {/* Financial Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Unpaid Invoices Card */}
          <Card title="Unpaid Invoices">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">$24,500</h3>
                <p className="text-gray-600">8 invoices pending</p>
              </div>
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                <img src="/images/img_vector_24x18.svg" alt="" className="w-6 h-4.5" />
              </div>
            </div>
            
            {/* Transactions List */}
            <div className="mt-4">
              {transactions.map(transaction => (
                <div key={transaction.id} className="flex items-center mb-4 last:mb-0">
                  <div className="w-10 h-10 mr-3">
                    <img src={transaction.icon} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800">{transaction.title}</h4>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <div className={`text-xs font-medium ${transaction.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Revenue Card */}
          <Card 
            title="Revenue" 
            badge={{ text: "+12.5% vs last month", color: "green" }}
            className="col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900">$142,500</h3>
              <p className="text-gray-600">Total revenue this month</p>
            </div>
            
            {/* Revenue Chart */}
            <div className="h-40 mt-4 relative">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>
              <div className="ml-10 h-full">
                <img src="/images/img_vector_124x606.png" alt="Revenue Chart" className="h-full" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500 ml-10">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Activity and Transfers Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Weekly Activity Card */}
          <Card title="Weekly Activity">
            <div className="h-48 mt-4 relative">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 text-right">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              <div className="ml-12 h-full flex items-end justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '160px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '80px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Sat</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '120px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '40px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Sun</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '110px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '80px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Mon</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '160px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '120px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Tue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '80px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '60px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Wed</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '140px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '80px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Thu</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-600 rounded-t-sm" style={{ height: '130px' }}></div>
                  <div className="w-8 bg-teal-400 rounded-t-sm ml-2" style={{ height: '100px' }}></div>
                  <span className="text-xs text-gray-500 mt-2">Fri</span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Quick Transfer Card */}
          <Card title="Quick Transfer">
            <div className="flex justify-between mb-6">
              {contacts.map(contact => (
                <div key={contact.id} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                    <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-medium text-gray-800">{contact.name}</h4>
                  <p className="text-xs text-gray-500">{contact.role}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Write Amount</p>
              <div className="flex">
                <div className="flex-1 bg-gray-100 rounded-l-full px-4 py-2 flex items-center">
                  <input
                    type="text"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="bg-transparent w-full outline-none text-sm text-gray-500"
                  />
                </div>
                <button 
                  onClick={handleTransfer}
                  className="bg-orange-500 text-white rounded-r-full px-6 py-2 flex items-center"
                >
                  <span className="mr-2">Send</span>
                  <img src="/images/img_vector_14x16.svg" alt="" className="w-3.5 h-4" />
                </button>
              </div>
            </div>
          </Card>
          
          {/* Expense Statistics Card */}
          <Card title="Expense Statistics">
            <div className="flex justify-center mt-4">
              <div className="relative w-44 h-44">
                <img src="/images/img_group_175x181.svg" alt="Expense Chart" className="w-full h-full" />
                <div className="absolute top-4 left-6 text-center text-xs text-white">
                  <p className="font-medium">30%</p>
                  <p>Entertainment</p>
                </div>
                <div className="absolute bottom-14 left-0 text-center text-xs text-white">
                  <p className="font-medium">20%</p>
                  <p>Investment</p>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-xs text-white">
                  <p className="font-bold">35%</p>
                  <p>Others</p>
                </div>
                <div className="absolute top-1/3 right-0 text-center text-xs text-white">
                  <p className="font-medium">15%</p>
                  <p>Bill Expense</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Cards Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">My Cards</h2>
            <button className="text-sm font-semibold text-gray-800">See All</button>
          </div>
          
          <div className="flex gap-6">
            {creditCards.map(card => (
              <div 
                key={card.id}
                className={`w-56 h-40 rounded-xl p-4 relative overflow-hidden ${
                  card.isActive 
                    ? 'bg-gradient-to-br from-gray-500 to-gray-400 text-white' :'bg-white border border-blue-100 text-gray-800'
                }`}
              >
                <div>
                  <p className={`text-xs ${card.isActive ? 'text-white/70' : 'text-gray-500'}`}>Balance</p>
                  <h3 className="text-base font-semibold mt-1">{card.balance}</h3>
                </div>
                
                <img src="/images/img_chipcard.png" alt="Chip" className="absolute top-4 right-4 w-7 h-7" />
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className={`text-xs ${card.isActive ? 'text-white/70' : 'text-gray-500'}`}>CARD HOLDER</p>
                    <p className="text-sm font-semibold">{card.cardHolder}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${card.isActive ? 'text-white/70' : 'text-gray-500'}`}>VALID THRU</p>
                    <p className="text-sm font-semibold">{card.validThru}</p>
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 py-3 px-5 flex justify-between items-center ${
                  card.isActive ? 'bg-white/15' : 'border-t border-blue-100'
                }`}>
                  <p className="text-sm font-semibold">{card.cardNumber}</p>
                  <img 
                    src={card.isActive ? "/images/img_group_17.svg" : "/images/img_group_17_18x27.svg"} 
                    alt="Card Logo" 
                    className="w-7 h-4.5" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;