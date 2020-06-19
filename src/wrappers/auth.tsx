import React from 'react';
import { Redirect } from 'umi';

const auth = (props: any) => {
  const flag = Math.random() > 0.5 ? true : false;
  console.log(2222, flag);
  if (flag) {
    return <div>{props.children}</div>;
  } else {
    return <div>222</div>;
  }
};

export default auth;
