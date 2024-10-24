import React, {useEffect, useRef} from 'react';
import './App.css';

function App() {
  // Create references to different sections of the page to allow scrolling to them
  const bioRef = useRef(null);
  const photosRef = useRef(null);
  const videosRef = useRef(null);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 // Function to scroll the page to the top smoothly
  const scrollToTop = () => {
    document.body.classList.add('scrollable'); // Ensure body can scroll
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  // Setup modal functionality for viewing images in larger size
  useEffect(() => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Add event listeners to all images with the class "clickable-image" to open them in a modal
    const images = document.querySelectorAll(".clickable-image");
    if (images.length > 0) {
      images.forEach((image) => {
        image.onclick = function () {
          modal.style.display = "block";
          modalImg.src = this.src;
          modalImg.alt = this.alt;
          captionText.innerHTML = this.alt; // Set image caption
        };
      });

      // Close modal on clicking the close button
      const span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none"; // Close modal on click
      };

      // Close the modal if user clicks outside the modal content
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }, []); // Runs only once when the component mounts to set up modal functionality

  // Set up sparkle effect for visual enhancement
  useEffect(() => {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.classList.add('sparkle-twinkle');
    document.querySelector('.App').appendChild(sparkleContainer);

    // Create and position multiple sparkle stars randomly
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('sparkle-star');

      // Random position and animation duration
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`;

      sparkleContainer.appendChild(star);
    }
  }, []); // Runs only once to set up the sparkle effect

  return (
      <div className="App">
        <header className="App-header">
          <h1>About Me</h1>
          <img src={`${process.env.PUBLIC_URL}/20240122_103005.jpg`} alt="Weronika Golden" className="profile-photo"/>

          <p className="small-text bold-text">
            Hello! My name is Weronika Golden. I’m a software engineering student at Arizona State University, with a
            passion for developing software solutions and solving problems using technology.
          </p>

          <p className="small-text bold-text">
            I have experience in Java, C, C++, Python, and SQL. I’ve also worked on various database management systems,
            and in my free time, I am currently developing a connect4 game using JavaFX.
          </p>

          <p className="small-text bold-text">
            I love exploring new technologies and working on challenging projects that allow me to expand my skill
            set.
          </p>

          {/* Modal */}
          <div id="imageModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="modalImage" alt=""/>
            <div id="caption"></div>
          </div>

          <div className="sparkle-twinkle">
            <div className="sparkle-star"></div>
          </div>

          {/* Links that trigger scrolling */}
          <div>
            <button onClick={() => scrollToSection(bioRef)} className="link-button">Bio</button>
            <button onClick={() => scrollToSection(photosRef)} className="link-button">Photos</button>
            <button onClick={() => scrollToSection(videosRef)} className="link-button">Videos</button>

            {/* GitHub Link Button */}
            <a href="https://github.com/wgolden117" target="_blank" rel="noopener noreferrer">
              <button className="link-button">GitHub</button>
            </a>
          </div>

          <section ref={bioRef} className="bio-section">
            <h2>Detailed Bio</h2>
            {/* More detailed bio here */}
            <p className="small-text bold-text">
              I first attended Arizona State University after obtaining my Associates Degree from
              my local Community College. From ASU, I graduated with a BS in Criminology and Criminal Justice,
              Summa Cum Laude, in 2018.
            </p>
            <p className="small-text bold-text">
              I worked and went to school throughout my time working towards my Associates and BS Degree.
              After graduating, I continued working in my current position in accounts payable. Later,
              I also worked in customer service and sales.
            </p>
            <p className="small-text bold-text">
              Originally I'm from Chicago. I grew up there, and lived in the Suburbs until my early 20s.
              Then, my husband and I moved to Ogden, Utah due to a work promotion. About 4 years later
              we moved to Post Falls, ID where we currently live with our three beloved cats.
            </p>
            <p className="small-text bold-text">
              Throughout my working career, I discovered a passion for programming, and decided to go back to
              school.
              I am now working towards my second BS, this time in Software Engineering. I decided to work towards
              a second BS instead of a Masters because the BS is accredited by the Fulton School of Engineering
              with ASU.
            </p>
            <p className="small-text bold-text">
              My personal hobbies include competitive shooting as part of the United States Practical Shooting
              Association, snowboarding, playing the piano and violin, knitting, and gaming. I also love the
              outdoors and love to camp and hike!
            </p>
            <button className="return-button" onClick={scrollToTop}>Return to Top</button>
          </section>

          <section ref={photosRef} className="photo-gallery">
            <h2>Photos</h2>
            <img src={`${process.env.PUBLIC_URL}/20230819_115821.jpg`} alt="Tetons"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/20230817_160651.jpg`} alt="Tetons-hiking"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/IMG_20220817_162247.jpg`} alt="Tetons-Horseback Riding"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/IMG_20230129_193532.jpg`} alt="Snowboarding"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/IMG_20230129_193537.jpg`} alt="Snowboarding-Powder Mountain"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/SunDown.jpg`} alt="Top of Sundown lift - Powder Mountain"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/20240627_105335.jpg`} alt="Our Kitties"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/GreenKnitSweater.jpg`} alt="Green Knit Sweater I made"
                 className="clickable-image square-photo"/>
            <img src={`${process.env.PUBLIC_URL}/BlueKnitSweater.jpg`} alt="Blue Purl Knit Crop-top Sweater I made"
                 className="clickable-image square-photo"/>
            <button className="return-button" onClick={scrollToTop}>Return to Top</button>
          </section>

          <section ref={videosRef} className="videos-section">
            <h2>Videos</h2>
            <video width="500" height="500" controls preload="metadata"
                   poster={`${process.env.PUBLIC_URL}/video-thumbnail1.jpg`}>
              <source src={`${process.env.PUBLIC_URL}/steel.mp4`} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <video width="500" height="500" controls preload="metadata"
                   poster={`${process.env.PUBLIC_URL}/video-thumbnail2.jpg`}>
              <source src={`${process.env.PUBLIC_URL}/USPSA.mp4`} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <button className="return-button" onClick={scrollToTop}>Return to Top</button>
          </section>
        </header>
      </div>
  );
}

export default App;
