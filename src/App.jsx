import { MantineProvider } from '@mantine/core';
import Login from './pages/Login';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Plus Jakarta Sans'
      }}>
      <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#222831' }}>
        <Login />
      </div>
    </MantineProvider>);
}

export default App
