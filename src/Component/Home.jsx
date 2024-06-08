
import { Link } from "react-router-dom"
import img from "../assets/img/graduated.png"
 export const Home = () => {
  return (
<div className="e-learning">
   <div className="heads-elearning">
      <h2>Elearning</h2>
      <p>CBSE</p>
   </div>
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="study-cards">
               <Link to="/class11">
                  <div className="elearn-card">
                     <div className="inner-card">

                        <img src={img} alt="" srcSet=""/>
                        <p>className 11-ENC</p>

                     </div>


                  </div>
               </Link>
               <Link to="/class11">
                  <div className="elearn-card">
                     <img src={img} alt="" srcSet=""/>
                     <p>className 12-ENC</p>
                  </div>
               </Link>



            </div>
         </div>
      </div>
   </div>


</div> )
}
