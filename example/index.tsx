import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, 
  ProductImage, 
  ProductTittle, 
  ProductButtons } from '../.';

  const product1 = {
    id:'1',
    tittle:'Coffee Mug - Card!',
    // img:'./coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product1}
        initialValues={{
          count: 4,
          //maxCount: 10
        }}
      >
        {
          ({ count, increaseBy, isMinCountReached, isMaxCountReached, reset }) => (
            <>
              <ProductImage />
              <ProductTittle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
