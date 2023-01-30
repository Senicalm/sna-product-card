
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTittle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
 
    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => { 
        const wrapper = renderer.create(<ProductTittle tittle='Hola mundo'/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('Debe de mostrar el componente con el nombre del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTittle />
                    )
                }
            </ProductCard>)
        expect(wrapper.toJSON()).toMatchSnapshot();
      })
});