import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import References from './components/References';
import Proficiencies from './components/Proficiencies';
import Resume from './components/Resume';
import { styled } from '@mui/material';
import Spline from '@splinetool/react-spline';

const Background = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1
}));

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Background>
        <Spline scene="https://prod.spline.design/UuVERXqinZTpnb-I/scene.splinecode" />
      </Background>

      <AppAppBar />
      <Hero />
      <div>
        <Proficiencies />
        <Divider />
        <Resume />
        <Divider />
        <Projects />
        <Divider />
        <References />
        <Divider />
        <Contact />

      </div>
    </AppTheme>
  );
}
