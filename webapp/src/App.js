import React from 'react';
import '../src/css/style.css';
import '../src/css/lightbox.min.css'
import '../src/css/utilities.css'




function App() {
  return (
    <div className="App">
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/lightbox.min.css" />
    <link rel="stylesheet" href="css/utilities.css" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Residential Real-Estate Made Easy | CitiWideFunding</title>
  </head>

<body id="home">
    <header className="hero">
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span className="text-primary"
            ><i className="fab fa-affiliatetheme"></i> CITIWIDE</span
          >Funding
        </h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#purchase">Purchase</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

<div className="content">
  <h1>Your #1 Source For Everything Real-Estate</h1>
    <p>We provide world className financial assistance</p>
      <a href="#about" className="btn"
          ><i className="fas fa-angle-double-down"></i> Read More</a
        >
      </div>
</header>
    <main>
      <section id="about" className="icons bg-light">
        <div className="flex-items">
          <div>
            <i className="fas fa-file-contract fa-2x"></i>
            <div>
              <h3>Home Purchase</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fas fa-hand-holding-usd fa-2x"></i>
            <div>
              <h3>Refinance</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fas fa-chart-bar fa-2x"></i>
            <div>
              <h3>Mortgage Rates</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solutions flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <div id="map"></div>
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h4>What you are looking for</h4>
              <h2>We provide bespoke solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="#" className="btn btn-outline">
                <i className="fas fa-chevron"></i>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="purchase" className="cases flex-grid section-padding">
        <header className="section-header">
          <h4>This is what we do</h4>
          <h2>Homes For Sale</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!
          </p>
        </header>
        <div className="row">
          <div className="column">
            <a
              href="images/cases/cases1.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
            >
              <img src="images/cases/cases1.jpg" alt="" />
            </a>
            <h2>Rancho Cucamonga</h2>
            <h3>For Sale: $1,000,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
            <a
              href="images/cases/cases2.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
            >
              <img src="images/cases/cases2.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
          </div>
          <div className="column">
            <a
              href="images/cases/cases3.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!"
            >
              <img src="images/cases/cases3.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
            <a
              href="images/cases/cases4.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
            >
              <img src="images/cases/cases4.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
          </div>
          <div className="column">
            <a
              href="images/cases/cases5.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!"
            >
              <img src="images/cases/cases5.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
            <a
              href="images/cases/cases6.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
            >
              <img src="images/cases/cases6.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
          </div>
          <div className="column">
            <a
              href="images/cases/cases7.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!"
            >
              <img src="images/cases/cases7.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
            <a
              href="images/cases/cases8.jpg"
              data-lightbox="cases"
              data-title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dolore!"
            >
              <img src="images/cases/cases8.jpg" alt="" />
            </a>
            <h2>Fontana</h2>
            <h3>For Sale: $300,000</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui.
            </p>
          </div>
        </div>
      </section>
      <section id="blog" className="blog flex-columns flex-reverse">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src="images/home/blog.jpg" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-secondary">
              <h4>April 23 2020</h4>
              <h2>Real-Estate in 2020</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="blog.html" className="btn btn-outline">
                <i className="fas fa-chevron"></i>
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team section-padding">
        <header className="section-header">
          <h4>Who we are</h4>
          <h2>Our Professional Team</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!
          </p>
        </header>
        <div className="flex-items">
          <div>
            <img src="CWF-Images/profile/RL_ProfileV3.jpg" alt="" />
            <h4>Richard Lopez</h4>
            <p>President / Broker</p>
            <span>richardlopez@citiwidefund.com</span>
            <br/>
            <span>BRE#000000</span>
          </div>
          <div>
            <img src="CWF-Images/profile/Maria_Lopez_ProfileV2.jpg" alt="" />
            <h4>Maria Lopez</h4>
            <p>Vice President / DE Underwriter</p>
            <span>marialopez@citiwidefund.com</span>
            <br/>
            <span>BRE#000000</span>
          </div>
          <div>
            <img src="images/team/person3.jpg" alt="" />
            <h4>Steven Vargas</h4>
            <p>Web Developer / Marketing</p>
            <span>svimages@icloud.com</span>
          </div>
        </div>
      </section>
      <section id="contact" className="contact flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src="images/RM-Team-profile.jpg" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-light">
              <h2>Contact Us</h2>
              <form action="" className="callback-form">
                <div className="form-control">
                  <label for="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-control">
                  <label for="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-control">
                  <label for="phone"></label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                  />
                </div>
                <input type="submit" value="Send" id="submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer bg-dark">
      <div className="social">
        <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
        <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>
      <p>Copyright &copy; 1999 - CitiWideFunding</p>
    </footer>

    <script
      src="https://code.jquery.com/jquery-3.5.0.min.js"
      integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
      crossorigin="anonymous"
    ></script>
        <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCT6FlKjSbrrb2daW7gamS9GjIjCU_wLuw&callback=initMap"
      async
      defer
    ></script>
    <script src="js/lightbox.min.js"></script>

    <script src="../src/js/effects"></script>
  </body>

    </div>
  );
}

export default App;
