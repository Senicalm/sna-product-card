
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage.tsx',() =>{

    test('Debe de mostrar el componente correctamente con la imagen', () => { 

        const wrapper = renderer.create(<ProductImage img='https://s1.eestatic.com/2023/01/24/social/736187247_230385154_1706x960.jpg'/>);
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('Debe de mostrar el componente con la imagen del producto', () => { 
         const wrapper = renderer.create(
             <ProductCard product={product2}>
                 {
                     () => (
                         <ProductImage />
                     )
                 }
             </ProductCard>
         )

         expect(wrapper.toJSON()).toMatchSnapshot();
      });

})