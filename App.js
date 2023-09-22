import { StatusBar } from 'expo-status-bar';
import Router from './Router';
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

