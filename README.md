# sna-product-card

Este es un paquete de pruebas de despliegue en NPM

## Sergi Nicolau

## Ejemplo
```
import {
    ProductCard, 
    ProductImage, 
    ProductTittle, 
    ProductButtons} from 'sna-product-card';
```
```
 <ProductCard
    product={product}
    initialValues={{
        count: 4,
        //maxCount: 10
    }}
>
    {
        ({count, increaseBy, isMinCountReached,isMaxCountReached, reset}) => (
            <>
                <ProductImage />
                <ProductTittle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```