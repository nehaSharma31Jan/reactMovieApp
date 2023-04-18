import React from "react";
import "../../css/footerStyle.css"

const FooterHere = () => {
    return (<React.Fragment>
    
    <footer id="mdb-footer" className="footer"  >
    <div className="container py-5">
        
        <div className="text-center">
        <p>Join My Movie Today!</p>
        <p className="">
          Get useful tips &amp; free resources directly to your inbox along with exclusive subscriber-only content.
        </p>
        <a href="#" className="btn btn-primary">JOIN NOW<i className="fas fa-angle-double-right ms-2"></i></a>




        </div>
        
        
    </div>

    
    <div className="text-center" >
        <div className="text-centerOne">
        © 2022
        Copyright:
        <a className="" href="https://mdbootstrap.com/"> <strong>MyMovie.com</strong></a>
            </div>
    </div>
    
</footer>
    </React.Fragment>);
}

export default FooterHere;