import { useRef, useEffect, useCallback } from 'react';
import style from './RenderTip.module.scss';

const RenderTip = () => {
  const refCount = useRef(1);
  const refDOM = useRef(null);

  useEffect(() => {
    refCount.current += 1;
    refDOM.current.classList.remove(style.styleAnimate);
    refDOM.current.classList.add(style.styleAnimate);
  });

  const atAnimationEnd = useCallback(() => {
    refDOM.current.classList.remove(style.styleAnimate);
  }, []);

  return (
    <strong className={style.root} ref={refDOM} onAnimationEnd={atAnimationEnd}>
      {refCount.current}
    </strong>
  );
};
export default RenderTip;
