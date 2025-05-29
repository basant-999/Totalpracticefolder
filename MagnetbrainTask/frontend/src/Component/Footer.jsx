

const Footer =()=>{
    return(
        <>
               <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Brand Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">YourBrand</h5>
            <p>
              Building reliable web solutions with speed and quality. Connect with us for web and mobile app development.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company</h5>
            <p><a href="#" className="text-white text-decoration-none">About Us</a></p>
            <p><a href="#" className="text-white text-decoration-none">Careers</a></p>
            <p><a href="#" className="text-white text-decoration-none">Blog</a></p>
          </div>

          {/* Services Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
            <p><a href="#" className="text-white text-decoration-none">Web Development</a></p>
            <p><a href="#" className="text-white text-decoration-none">Mobile Apps</a></p>
            <p><a href="#" className="text-white text-decoration-none">UI/UX Design</a></p>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Your City, Your Country</p>
            <p><i className="fas fa-envelope mr-3"></i> hello@yourbrand.com</p>
            <p><i className="fas fa-phone mr-3"></i> +123 456 7890</p>

            <div className="mt-3">
              <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-4"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white"><i className="fab fa-github"></i></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">© 2025 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer