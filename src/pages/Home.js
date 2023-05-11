import { Link } from "react-router-dom";
const HomePage=()=>{
 return <> <h1>my home page</h1>
      <p>go to <Link to ="/products"> my products list</Link></p>
 </>
}

export default HomePage;