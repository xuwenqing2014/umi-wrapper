import React, { useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
const mapStateToProps = ({ index, loading }: any) => ({
  count: index,
  loading
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (num: number) => {
      dispatch({
        type: 'index/addAfter1Second',
        payload: num
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  ({ count, dispatch, add, ...rest }: any) => {
    console.log(rest.loading.global)
    const [inputValue, setInputValue] = useState('');
    function handleInput(e: any) {
      setInputValue(e.target.value);
    }
    return (
      <div>
        <input type="text" onChange={handleInput} value={inputValue}/>
        <h1 className={styles.title} onClick={() => add(+inputValue)}>Page index{count}</h1>
      </div>
    );
  }
);

