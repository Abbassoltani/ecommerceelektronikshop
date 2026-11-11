import {allMainCategories} from '../products.json'
import CategoryCard from '../components/CategoryCard'

import { useState } from 'react'


export default function Category() {
  const [productCategores ] = useState(allMainCategories)








console.log(productCategores);






  return (
    <>
    <div className="container ">


<div className="row  justify-content-between mt-5 justify-content-sm-center gap-sm-2 ">
    {productCategores.map(item => (
      <CategoryCard item={item}/>
    ))}
</div>
    </div>
    </>
  
  );
}
