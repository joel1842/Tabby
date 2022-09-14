import { StatusBar } from 'expo-status-bar';
import Home from './views/Home';
import NewTabItem from './components/NewTabItem';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

import { View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";

const App = () => (
    <NativeRouter>
      <View style={{ backgroundColor: '#404563', height: '100%' }}>
        <AppHeader/>
        <View style={{ flex: 1 }}>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/additem" element={<NewTabItem/>} />
          </Routes>
          </View>
        <AppFooter/>
      </View>
    </NativeRouter>

);

export default App;

