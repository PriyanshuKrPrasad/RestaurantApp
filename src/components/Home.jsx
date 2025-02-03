import React, { useState } from 'react';
import Homeimg1 from '../assets/Homeimg1.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">
              <span>
                <img src="src/assets/logo.png" alt="Logo" />
              </span>
            </h1>
          </a>

          {/* Navigation Menu */}
          <nav id="navmenu" className={`navmenu ${navOpen ? "open" : ""}`}>
            <ul className={navOpen ? "nav-list active" : "nav-list"}>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#chefs">Chefs</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          {/* Hamburger Menu Icon */}
          <div className="hamburger d-xl-none" onClick={toggleNav}>
            <i className={`bi ${navOpen ? "bi-x" : "bi-list"}`}></i>
          </div>

          <a className="btn-getstarted" href="/book-table">Book a Table</a>
        </div>
      </header>


      <main className="main">
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-4 justify-content-center justify-content-lg-between">
              {/* Left Section */}
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  We are a team of talented designers making websites with Bootstrap.
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="/book-table" className="btn-get-started">Book a Table</a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i><span>Watch Video</span>
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-5 order-1 order-lg-2" data-aos="zoom-out">
                <img
                  src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                  className="img-fluid animated"
                  alt="Delicious Burger"
                />
              </div>
            </div>
          </div>
        </section>


        <div>
          {/* About Us Section */}
          <section id="about" className="about section">
            <div className="container text-center" data-aos="fade-up">
              <div className="row align-items-center">

                <h1>About Us</h1>

                {/* Image Section */}
                <div className="col-lg-6 order-1 order-lg-1" data-aos="zoom-out">
                  <img src="src/assets/Homeimg1.png" className="img-fluid animated" alt="About Us" />
                </div>

                {/* Text Section */}
                <div className="col-lg-6 order-2 order-lg-2 text-start">
                  <h4>
                    <span>Learn More</span>
                    <span className="description-title"> About Us</span>
                  </h4>

                  <p>
                    We provide a unique dining experience with the finest ingredients and a passion for
                    excellence. Our chefs craft dishes that tantalize your taste buds and leave you wanting
                    more!
                  </p>
                  <li><strong>Delicious and High-Quality Food</strong>
                    <ul>
                      <li>Uses fresh ingredients.</li>
                      <li>Offers a diverse and well-curated menu.</li>
                      <li>Consistent taste and presentation.</li>
                    </ul>
                  </li>
                  <li><strong>Ambiance and Atmosphere</strong>
                    <ul>
                      <li>Comfortable and inviting decor.</li>
                      <li>Good lighting, clean interiors, and soothing music.</li>
                      <li>Family-friendly or themed environments.</li>
                    </ul>
                  </li>
                  <li><strong>Excellent Customer Service</strong>
                    <ul>
                      <li>Friendly and attentive staff.</li>
                      <li>Quick response to customer needs.</li>
                      <li>Problem-solving attitude for any issues.</li>
                    </ul>
                  </li>


                </div>
              </div>
            </div>
          </section>




          {/* Menu Section */}
          <section id="menu" className="menu section">
            <div className="container text-center" data-aos="fade-up">
              <div className="row align-items-center">
                <h2>Menu</h2>
                <h4>
                  <span>Discover</span>
                  <span className="description-title"> Our Menu</span>
                </h4>
                <p>
                  Explore a variety of mouthwatering dishes, from appetizers to desserts, designed to
                  satisfy every craving.
                </p>
              </div>

              {/* Menu Items */}
              <div className="container" data-aos="fade-up">

                {/* Menu Grid */}
                <div className="row gy-5">
                  {/* Menu Item 1 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/img/jpg/Untitled-design.webp" className="glightbox">
                      <img src="src/assets/Untitled-design.webp" className="menu-img img-fluid" alt="Biriyani" />
                    </a>
                    <h4>Biriyani</h4>
                    <p className="price">Rs. 150/-</p>
                  </div>

                  {/* Menu Item 2 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/img/jpg/tasty-szechuan-fried-chicken-isolated-on-transparent-background-png.webp" className="glightbox">
                      <img src="src/assets/tasty-szechuan-fried-chicken-isolated-on-transparent-background-png.webp" className="menu-img img-fluid" alt="Chilli Chicken" />
                    </a>
                    <h4>Chilli Chicken</h4>
                    <p className="price">Rs. 80/-</p>
                  </div>

                  {/* Menu Item 3 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/img/jpg/tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.webp" className="glightbox">
                      <img src="src/assets/tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.webp" className="menu-img img-fluid" alt="Tandoori" />
                    </a>
                    <h4>Tandoori</h4>
                    <p className="price">Rs. 250/-</p>
                  </div>

                  {/* Menu Item 4 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/img/jpg/pngtree-a-tray-of-steamed-dumplings-momo-on-transparent-background-png-image_12967964.png" className="glightbox">
                      <img src="src/assets/pngtree-a-tray-of-steamed-dumplings-momo-on-transparent-background-png-image_12967964.png" className="menu-img img-fluid" alt="Chicken Momos" />
                    </a>
                    <h4>Chicken Momos</h4>
                    <p className="price">Rs. 160/-</p>
                  </div>

                  {/* Menu Item 5 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/assets/pngtree-lo-mein-isolated-on-transparent-background-png-image_12286462.png" className="glightbox">
                      <img src="src/assets/pngtree-lo-mein-isolated-on-transparent-background-png-image_12286462.png" className="menu-img img-fluid" alt="Chowmin" />
                    </a>
                    <h4>Chowmin</h4>
                    <p className="price">Rs. 140/-</p>
                  </div>

                  {/* Menu Item 6 */}
                  <div className="col-lg-4 menu-item">
                    <a href="src/assets/pngtree-masala-dosa-famous-indian-food-with-traditional-sauce-png-image_11520144.png" className="glightbox">
                      <img src="src/assets/pngtree-masala-dosa-famous-indian-food-with-traditional-sauce-png-image_11520144.png" className="menu-img img-fluid" alt="Dosha" />
                    </a>
                    <h4>Dosha</h4>
                    <p className="price">Rs. 18 0/-</p>
                  </div>
                </div> {/* End of Row */}
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section id="events" className="events section">
            <div className="row align-items-center">
              <h2>Events</h2>
              <h4 >
                <span>Have Fun</span>
              </h4>
              <p>
                Explore a variety of mouthwatering dishes, from appetizers to desserts, designed to
                satisfy every craving.
              </p>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="src/assets/res1.png" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="src/assets/res2.webp" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="src/assets/res3.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          {/* Chefs Section */}
          <section id="chefs" className="chefs section">
            <div className="container text-center" data-aos="fade-up">
              <h2>Chefs</h2>
              <h4>
                <span>Meet Our </span>
                <span className="description-title"> Talented and Professional Chefs</span>
              </h4>
              <p>
                Our chefs bring a wealth of experience and creativity to every dish, ensuring an
                unforgettable dining experience.
              </p>

              <div className="horizontal-cards-container">
                <div className="horizontal-card">
                  <img src="src/assets/chef1.png" className="card-img-left" alt="Chef Image 1" />
                  <div className="card-body">
                    <h5 className="card-title">Chef John Doe</h5>
                    <p className="card-text">John Doe is a culinary artist with 10+ years of experience creating exceptional dishes.</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

                <div className="horizontal-card">
                  <img src="src/assets/chef2.jpg" className="card-img-left" alt="Chef Image 2" />
                  <div className="card-body">
                    <h5 className="card-title">Chef Jane Smith</h5>
                    <p className="card-text">Jane specializes in modern fusion cuisine, blending tradition with innovation.</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

                <div className="horizontal-card">
                  <img src="src/assets/chef3.jpg" className="card-img-left" alt="Chef Image 3" />
                  <div className="card-body">
                    <h5 className="card-title">Chef Alex Brown</h5>
                    <p className="card-text">Alex is a pastry chef known for creating delightful desserts that amaze everyone.</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Gallery Section */}
          <section id="gallery" className="gallery section">
            <div className="container text-center" data-aos="fade-up">
              <h2>Gallery</h2>
              <h4>
                <span>Explore</span>
                <span className="description-title"> Our Moments</span>
              </h4>
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="src/assets/gal1.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/gal2.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/gal3.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <p>
                Take a glimpse into our world! Browse our gallery to see highlights of our dishes,
                events, and ambiance.<br/><span>&</span><br/>Discover the essence of our place! Our gallery showcases the finest dishes, special events, and cozy ambiance.
              </p>
            </div>
          </section>
        </div>
        <footer class="py-5 bg-dark text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h3><b>Address</b></h3>
                  <p>Barrackpore - Barasat Rd, <br />
                    Barasat, Kolkata, West Bengal 700125</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h3><b>Reservations</b></h3>
                  <p>Phone: +91 7450939833 <br />
                    Email: pkprasad225@example.com</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-clock"></i>
                <div>
                  <h3> <b>Opening Hours</b></h3>
                  <p>Mon-Sat: 11AM - 23PM <br />
                    Sunday: Closed</p>
                </div>
              </div>

              <div class="col-md-3 col-sm-6" id="social">
                <h3 class="text-center fs-4"><b>Follow Us</b>
                </h3>
                <div class="social-handles">
                  <h3>VISIT OUR SOCIAL HANDLES</h3>
                  <div class="social-icons">
                    <a href="https://www.instagram.com" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                      <img src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="X (Twitter)" />
                    </a>
                  </div>
                </div>


              </div>
            </div>
            <hr class="mb-2" />
            <p class="text-center">© Copyright My Food. All Rights Reserved</p>
            <p class="text-center">Designed by India</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home;
