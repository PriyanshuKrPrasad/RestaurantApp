import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Hearder";
import heroBg from "../assets/Homeimg1.png";

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [selectedMenu, setSelectedMenu] = useState(null);

  const openMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const closeMenu = () => {
    setSelectedMenu(null);
  };

  return (
    <div>
      <Header />

      <main className="main">
        <section
  id="hero"
  className="hero section light-background"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
  }}
>

          <div className="container">
            <div className="row gy-4 justify-content-center justify-content-lg-between">
              {/* Left Section */}
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center hero-content">
                <h1
                  data-aos="fade-up"
                  style={{
                    fontSize: "4rem",
                    fontWeight: "800",
                    color: "#fff",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                    textShadow: "2px 4px 10px rgba(0,0,0,0.4)",
                  }}
                >
                  Enjoy Your Healthy <br />
                  Delicious Food 🍴
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    fontSize: "1.2rem",
                    color: "#f1f1f1",
                    maxWidth: "550px",
                    marginBottom: "35px",
                    lineHeight: "1.8",
                  }}
                >
                  Experience mouth-watering dishes prepared by our expert chefs
                  using fresh ingredients and authentic flavors crafted with
                  love.
                </p>

                <div
                  className="d-flex hero-buttons"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  {/* BOOK TABLE BUTTON */}
                  <a
                    href="/book-table"
                    style={{
                      background: "linear-gradient(135deg, #ff6b6b, #ff9966)",
                      color: "#fff",
                      padding: "15px 35px",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontWeight: "700",
                      fontSize: "18px",
                      letterSpacing: "0.5px",
                      boxShadow: "0 8px 20px rgba(255, 107, 107, 0.4)",
                      transition: "all 0.3s ease",
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-5px) scale(1.05)";
                      e.target.style.boxShadow =
                        "0 12px 25px rgba(255, 107, 107, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow =
                        "0 8px 20px rgba(255, 107, 107, 0.4)";
                    }}
                  >
                    🍽 Book My Table
                  </a>

                  {/* WATCH VIDEO BUTTON */}
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "18px",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ff9966";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#fff";
                    }}
                  >
                    <i
                      className="bi bi-play-circle-fill"
                      style={{
                        fontSize: "2.2rem",
                        color: "#ff6b6b",
                      }}
                    ></i>

                    <span>Watch Our Story</span>
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-5 order-1 order-lg-2" data-aos="zoom-out">
                <img
                  src="/bg.webp"
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
                <div
                  className="col-lg-6 order-1 order-lg-1"
                  data-aos="zoom-out"
                >
                  <img
                    src="Homeimg1.png"
                    className="img-fluid animated"
                    alt="About Us"
                  />
                </div>

                {/* Text Section */}
                <div className="col-lg-6 order-2 order-lg-2 text-start">
                  <h4>
                    <span>Learn More</span>
                    <span className="description-title"> About Us</span>
                  </h4>

                  <p>
                    We provide a unique dining experience with the finest
                    ingredients and a passion for excellence. Our chefs craft
                    dishes that tantalize your taste buds and leave you wanting
                    more!
                  </p>
                  <li>
                    <strong>Delicious and High-Quality Food</strong>
                    <ul>
                      <li>Uses fresh ingredients.</li>
                      <li>Offers a diverse and well-curated menu.</li>
                      <li>Consistent taste and presentation.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ambiance and Atmosphere</strong>
                    <ul>
                      <li>Comfortable and inviting decor.</li>
                      <li>
                        Good lighting, clean interiors, and soothing music.
                      </li>
                      <li>Family-friendly or themed environments.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Excellent Customer Service</strong>
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
          <section id="menu" className="menu section py-5">
            <div className="container text-center" data-aos="fade-up">
              {/* SECTION TITLE */}
              <div className="mb-5">
                <h2 className="fw-bold display-5">🍴 Our Delicious Menu</h2>
                <h4>
                  <span>Discover</span>
                  <span className="description-title"> Our Special Dishes</span>
                </h4>

                <p className="text-muted fs-5">
                  Explore mouthwatering dishes crafted with authentic flavors
                  and premium ingredients.
                </p>
              </div>

              {/* MENU GRID */}
              <div className="row gy-4">
                {/* ITEM 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Chicken Biriyani",
                        category: "Rice",
                        price: "Rs. 150/-",
                        image: "Untitled-design.webp",
                        description:
                          "Authentic aromatic biriyani cooked with rich spices and juicy chicken pieces.",
                        related: [
                          {
                            name: "Butter Chicken",
                            image: "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg",
                            price: "Rs. 220/-",
                          },
                          {
                            name: "Tandoori Chicken",
                            image:
                              "tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.webp",
                            price: "Rs. 250/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="Untitled-design.webp"
                        className="menu-img img-fluid"
                        alt="Biriyani"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Chicken Biriyani</h5>
                      <p className="text-muted small">Rice</p>
                      <p className="price fw-bold text-danger">Rs. 150/-</p>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Chilli Chicken",
                        category: "Chinese",
                        price: "Rs. 80/-",
                        image:
                          "tasty-szechuan-fried-chicken-isolated-on-transparent-background-png.webp",
                        description:
                          "Spicy Indo-Chinese chicken tossed with fresh vegetables and sauces.",
                        related: [
                          {
                            name: "Spring Rolls",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTur-66-aocCKge4Ty-ut8cXAGDUYlwSOFQfw&s",
                            price: "Rs. 120/-",
                          },
                          {
                            name: "Hakka Noodles",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHI6vHr6V8yiVoYNezh3ViC4ZcCD7U_0kuuw&s",
                            price: "Rs. 170/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="tasty-szechuan-fried-chicken-isolated-on-transparent-background-png.webp"
                        className="menu-img img-fluid"
                        alt="Chilli Chicken"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Chilli Chicken</h5>
                      <p className="text-muted small">Chinese</p>
                      <p className="price fw-bold text-danger">Rs. 80/-</p>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Tandoori Chicken",
                        category: "BBQ",
                        price: "Rs. 250/-",
                        image:
                          "tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.webp",
                        description:
                          "Char-grilled tandoori chicken marinated with Indian spices.",
                        related: [
                          {
                            name: "Paneer Tikka",
                            image: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
                            price: "Rs. 200/-",
                          },
                          {
                            name: "Butter Chicken",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqChkZ5vTJvTU-MXc9m_NTzoE2YyU_PW-ow&s",
                            price: "Rs. 220/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.webp"
                        className="menu-img img-fluid"
                        alt="Tandoori"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Tandoori Chicken</h5>
                      <p className="text-muted small">BBQ</p>
                      <p className="price fw-bold text-danger">Rs. 250/-</p>
                    </div>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Chicken Momos",
                        category: "Snacks",
                        price: "Rs. 160/-",
                        image:
                          "pngtree-a-tray-of-steamed-dumplings-momo-on-transparent-background-png-image_12967964.png",
                        description:
                          "Soft steamed momos filled with delicious spicy chicken stuffing.",
                        related: [
                          {
                            name: "Spring Rolls",
                            image: "https://www.tablefortwoblog.com/wp-content/uploads/2023/01/crispy-spring-rolls-recipe-photo-tablefortwoblog-12-scaled.jpg",
                            price: "Rs. 120/-",
                          },
                          {
                            name: "Chowmein",
                            image:
                              "pngtree-lo-mein-isolated-on-transparent-background-png-image_12286462.png",
                            price: "Rs. 140/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="pngtree-a-tray-of-steamed-dumplings-momo-on-transparent-background-png-image_12967964.png"
                        className="menu-img img-fluid"
                        alt="Chicken Momos"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Chicken Momos</h5>
                      <p className="text-muted small">Snacks</p>
                      <p className="price fw-bold text-danger">Rs. 160/-</p>
                    </div>
                  </div>
                </div>

                {/* ITEM 5 */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Masala Dosa",
                        category: "South Indian",
                        price: "Rs. 180/-",
                        image:
                          "pngtree-masala-dosa-famous-indian-food-with-traditional-sauce-png-image_11520144.png",
                        description:
                          "Crispy dosa filled with flavorful potato masala and chutneys.",
                        related: [
                          {
                            name: "Idli Sambar",
                            image: "https://i0.wp.com/www.sharmiskitchen.com/wp-content/uploads/2021/03/Moong-Dal-Sambar.jpg?fit=1200%2C1800&ssl=1",
                            price: "Rs. 90/-",
                          },
                          {
                            name: "Medu Vada",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrqMAJkT9GFcFlHyr4v49MfP58edoLlOwZA&s",
                            price: "Rs. 110/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="pngtree-masala-dosa-famous-indian-food-with-traditional-sauce-png-image_11520144.png"
                        className="menu-img img-fluid"
                        alt="Dosa"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Masala Dosa</h5>
                      <p className="text-muted small">South Indian</p>
                      <p className="price fw-bold text-danger">Rs. 180/-</p>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Mutton Biriyani",
                        category: "Rice",
                        price: "Rs. 750/-",
                        image: "muttonB.jpg",
                        description:
                          "Authentic aromatic biriyani cooked with rich spices and juicy chicken pieces.",
                        related: [
                          {
                            name: "Mutton Tikka",
                            image: "https://media-cdn.tripadvisor.com/media/photo-s/07/fd/45/12/bbq-nights.jpg",
                            price: "Rs. 520/-",
                          },
                          {
                            name: "Mutton Tarka",
                            image:
                              "https://i.ytimg.com/vi/pafsOHnH9RU/maxresdefault.jpg",
                            price: "Rs. 550/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="muttonB.jpg"
                        className="menu-img img-fluid"
                        alt="Biriyani"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Muutton Biriyani</h5>
                      <p className="text-muted small">Rice</p>
                      <p className="price fw-bold text-danger">Rs. 750/-</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Mix Chawmin",
                        category: "nuddles",
                        price: "Rs. 350/-",
                        image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_chow_mein_isolated_on_white_background_-stylize_200_6a0d152a-33c3-4581-b799-746d2d291b91_1-photoroom.png",
                        description:
                          "Authentic aromatic nuddles cooked with spices and juicy chicken pieces.",
                        related: [
                          {
                            name: "Vegetable Nuddles",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtC4-9q1W3bU58Pk2s08rAH-ttb9OuboA0Dw&s",
                            price: "Rs. 120/-",
                          },
                          {
                            name: "Chicken Nuddles",
                            image:
                              "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/11/chicken-noodles.jpg",
                            price: "Rs. 250/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="nuddles.webp"
                        className="menu-img img-fluid"
                        alt="Biriyani"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Chawmin</h5>
                      <p className="text-muted small">Nuddles</p>
                      <p className="price fw-bold text-danger">Rs. 150/-</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="menu-card shadow-lg"
                    onClick={() =>
                      openMenu({
                        name: "Fish Curry plate",
                        category: "Rice",
                        price: "Rs. 250/-",
                        image: "https://as2.ftcdn.net/jpg/17/39/53/51/1000_F_1739535198_ChujGCUDuQIyFkv9sHJrVQtZ4WQPTTs2.jpg",
                        description:
                          "Authentic aromatic Fish Curry cooked with rich spices and juicy Fish pieces.",
                        related: [
                          {
                            name: "Fish Fried",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3KQgjriPbqiLYUKHrlg9JlcC8PdvpciTzA&s",
                            price: "Rs. 200/-",
                          },
                          {
                            name: "Fish Fingers",
                            image:
                              "https://gadre.co.in/wp-content/uploads/2022/08/tilapia-fish-fingers-500g-1-600x600.png",
                            price: "Rs. 170/-",
                          },
                        ],
                      })
                    }
                  >
                    <div className="menu-img-wrapper">
                      <img
                        src="fish.jpg"
                        className="menu-img img-fluid"
                        alt="Biriyani"
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-bold">Chicken Biriyani</h5>
                      <p className="text-muted small">Rice</p>
                      <p className="price fw-bold text-danger">Rs. 150/-</p>
                    </div>
                  </div>
                </div>
                {/* ---------------here you can add more items ----------------- */}
              </div>
            </div>
          </section>

          {/* FULL SCREEN MENU PREVIEW */}
          {selectedMenu && (
            <div className="fullscreen-menu-overlay">
              {/* CLOSE BUTTON */}
              <button className="close-btn" onClick={closeMenu}>
                ✕
              </button>

              {/* LEFT SIDE */}
              <div className="left-panel">
                <div className="main-food-card">
                  <img
                    src={selectedMenu.image}
                    alt={selectedMenu.name}
                    className="main-food-img"
                  />

                  <div className="food-content">
                    <span className="food-category">
                      {selectedMenu.category}
                    </span>

                    <h1>{selectedMenu.name}</h1>

                    <p>{selectedMenu.description}</p>

                    <h3 className="text-warning">{selectedMenu.price}</h3>

                    <button className="order-btn">Order Now 🍽️</button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="right-panel">
                <h2 className="related-title">Related Dishes</h2>

                <div className="related-grid">
                  {selectedMenu.related.map((item, index) => (
                    <div className="related-card" key={index}>
                      <img src={item.image} alt={item.name} />

                      <div className="related-content">
                        <h5>{item.name}</h5>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Events Section */}
          <section id="events" className="events section">
            <div className="row align-items-center">
              <h2>Events</h2>
              <h4>
                <span>Have Fun</span>
              </h4>
              <p>
                Explore a variety of mouthwatering dishes, from appetizers to
                desserts, designed to satisfy every craving.
              </p>
            </div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="res1.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="res2.webp"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="res3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          {/* Chefs Section */}
          <section id="chefs" className="chefs-section">
            <div className="chefs-container">
              <h2> Our Chefs</h2>
              <h4>
                <span>Meet Our</span>{" "}
                <span className="description-title">
                  Talented and Professional Chefs
                </span>
              </h4>
              <p className="chefs-subtext">
                Our chefs bring a wealth of experience and creativity to every
                dish, ensuring an unforgettable dining experience.
              </p>

              <div className="chefs-cards">
                {[
                  {
                    name: "Chef John Doe",
                    desc: "John Doe is a culinary artist with 10+ years of experience creating exceptional dishes.",
                    img: "chef1.png",
                  },
                  {
                    name: "Chef Jane Smith",
                    desc: "Jane specializes in modern fusion cuisine, blending tradition with innovation.",
                    img: "chef2.jpg",
                  },
                  {
                    name: "Chef Alex Brown",
                    desc: "Alex is a pastry chef known for creating delightful desserts that amaze everyone.",
                    img: "chef3.jpg",
                  },
                ].map((chef, index) => (
                  <div className="chef-card" key={index}>
                    <img src={chef.img} alt={chef.name} className="chef-img" />
                    <div className="chef-info">
                      <h5>{chef.name}</h5>
                      <p>{chef.desc}</p>
                      <a href="#" className="view-profile">
                        View Profile →
                      </a>
                    </div>
                  </div>
                ))}
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
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="gal1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="gal2.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="gal3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <p>
                Take a glimpse into our world! Browse our gallery to see
                highlights of our dishes, events, and ambiance.
                <br />
                <span>&</span>
                <br />
                Discover the essence of our place! Our gallery showcases the
                finest dishes, special events, and cozy ambiance.
              </p>
            </div>
          </section>
        </div>

            {/* Map Section */}
<section id="map" className="map-section py-5">
  <div className="container text-center">
    <h2>Find Us</h2>

    <h4>
      <span>Visit</span>
      <span className="description-title"> Our Restaurant</span>
    </h4>

    <p className="mb-4">
      Come and enjoy delicious food at our location in Kolkata.
    </p>

    <div className="map-container">
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.846698170821!2d88.48198417475795!3d22.722595527672385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a20fd5c4d3cb%3A0x3c3cfd6d9b7c2f55!2sBarasat%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716890000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{
          border: 0,
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>




        {/* {Footer Section} */}
        <footer class="py-5 bg-dark text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h3>
                    <b>Address</b>
                  </h3>
                  <p>
                    Barrackpore - Barasat Rd, <br />
                    Barasat, Kolkata, West Bengal 700125
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h3>
                    <b>Reservations</b>
                  </h3>
                  <p>
                    Phone: +91 7450939833 <br />
                    Email: pkprasad225@example.com
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <i class="fa-solid fa-clock"></i>
                <div>
                  <h3>
                    {" "}
                    <b>Opening Hours</b>
                  </h3>
                  <p>
                    Mon-Sat: 11AM - 10PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div class="col-md-3 col-sm-6" id="social">
                <h3 class="text-center fs-4">
                  <b>Follow Us</b>
                </h3>
                <div class="social-handles">
                  <h3>VISIT OUR SOCIAL HANDLES</h3>
                  <div class="social-icons">
                    <a href="https://www.instagram.com" target="_blank">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                      />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                      />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook"
                      />
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                        alt="YouTube"
                      />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg"
                        alt="X (Twitter)"
                      />
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
  );
}

export default Home;
