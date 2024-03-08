import { registerRootComponent } from 'expo';
import 'expo-dev-client';
import allSettled from 'promise.allsettled';
import App from './App';

allSettled.shim();
registerRootComponent(App);
