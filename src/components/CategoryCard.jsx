import { Link } from "react-router-dom";


function CategoryCard({ item }) {
  return (
<>

    <div className=" categoryCard-box p-0  col-12 col-md-6 d-flex position-relative">
      <div className="">
        
  <Link to={`/products?mainCategory=${item.title}`}>
        <div className="categorycard-img">
            <img src={item.img} alt="" />
        </div>
       
          <h2 className="position-absolute ">{item.title}</h2>
        



  </Link>
 
      </div>
  </div>


</>
  );
}

export default CategoryCard;