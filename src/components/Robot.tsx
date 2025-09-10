import Spline from '@splinetool/react-spline';
//npm install @splinetool/react-spline @splinetool/runtime
export default function Robot() {
  return (
    <main  className=' w-full  h-[500px] md:h-[600px]'>
      <Spline scene="https://prod.spline.design/GFxIlyVxcL8BzVMA/scene.splinecode"    />
       {/* <Spline
        scene="https://prod.spline.design/50dAFYrLgqyo7FRv/scene.splinecode"  
      /> */}
    </main>
  );
}
