import Spline from '@splinetool/react-spline';

export default function App() {
  function onSplineMouseDown(e) {
    console.log(`Target Name: ${e.target.name}`);
  }

  return (
    <Spline 
      scene="scene.splinecode" 
      wasmPath="/" 
      onSplineMouseDown={onSplineMouseDown}
    />
  );
}