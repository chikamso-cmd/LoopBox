
import React, { useState } from 'react';
import { Screen, Bank } from './types';
import Dashboard from './views/Dashboard';
import MembersList from './views/MembersList';
import Payments from './views/Payments';
import Settings from './views/Settings';
import NextToReceive from './views/NextToReceive';
import WithdrawFunds from './views/WithdrawFunds';
import WithdrawSuccess from './views/WithdrawSuccess';
import UpcomingBills from './views/UpcomingBills';
import TransactionHistory from './views/TransactionHistory';
import BankTransfer from './views/BankTransfer';
import CardPayment from './views/CardPayment';
import USSDPayment from './views/USSDPayment';
import BankUSSDSetup from './views/BankUSSDSetup';
import SelectBank from './views/SelectBank';
import BottomNav from './components/BottomNav';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [history, setHistory] = useState(['home']);
  const [selectedBank, setSelectedBank] = useState(null);

  const navigate = (screen) => {
    setHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    goBack();
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Dashboard onNavigate={navigate} />;
      case 'members':
        return <MembersList onNavigate={navigate} onBack={goBack} />;
      case 'payments':
        return <Payments onNavigate={navigate} onBack={goBack} />;
      case 'settings':
        return <Settings onNavigate={navigate} onBack={goBack} />;
      case 'next-to-receive':
        return <NextToReceive onBack={goBack} />;
      case 'withdraw':
        return <WithdrawFunds onBack={goBack} onNavigate={navigate} />;
      case 'withdraw-success':
        return <WithdrawSuccess onNavigate={navigate} />;
      case 'upcoming-bills':
        return <UpcomingBills onBack={goBack} />;
      case 'transaction-history':
        return <TransactionHistory onBack={goBack} />;
      case 'bank-transfer':
        return <BankTransfer onBack={goBack} />;
      case 'card-payment':
        return <CardPayment onBack={goBack} />;
      case 'ussd':
        return <USSDPayment onBack={goBack} onNavigate={navigate} />;
      case 'ussd-setup':
        return <BankUSSDSetup onBack={goBack} onNavigate={navigate} selectedBank={selectedBank} />;
      case 'select-bank':
        return <SelectBank onBack={goBack} onSelect={handleBankSelect} />;
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  const showBottomNav = ['home', 'members', 'payments', 'settings'].includes(currentScreen);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-xl min-h-screen flex flex-col relative overflow-hidden">
        <main className="flex-1 overflow-y-auto hide-scrollbar pb-24">
          {renderScreen()}
        </main>
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}
      </div>
    </div>
  );
};

export default App;
