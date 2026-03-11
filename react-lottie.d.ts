declare module 'react-lottie' {
  import { FC } from 'react';

  interface LottieOptions {
    loop?: boolean;
    autoplay?: boolean;
    animationData?: object;
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  }

  interface LottieProps {
    options: LottieOptions;
    height?: string | number;
    width?: string | number;
    style?: React.CSSProperties;
    isStopped?: boolean;
    isPaused?: boolean;
  }

  const Lottie: FC<LottieProps>;
  export default Lottie;
}
