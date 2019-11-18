import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  increase, decrease, increaseBy,
} from '../modules/counter';
import { RootState } from '../modules';

function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff:number) => dispatch(increaseBy(diff)),
    [dispatch],
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}

export default useCounter;
