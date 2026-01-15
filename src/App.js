import React, { useEffect, useRef } from 'react';
import './App.css';
// Import images
import profilePhoto from './assets/images/Weronika.jpg';
import photo1 from './assets/images/20230819_115821.jpg';
import photo2 from './assets/images/20230817_160651.jpg';
import photo3 from './assets/images/IMG_20220817_162247.jpg';
import photo4 from './assets/images/IMG_20230129_193532.jpg';
import photo5 from './assets/images/IMG_20230129_193537.jpg';
import photo6 from './assets/images/SunDown.jpg';
import photo7 from './assets/images/20240627_105335.jpg';
import photo8 from './assets/images/GreenKnitSweater.jpg';
import photo9 from './assets/images/BlueKnitSweater.jpg';
import photo10 from './assets/images/CableSweater.jpg';
import photo11 from './assets/images/night_tetons.jpg';
import photo12 from './assets/images/baby_buffalo.jpg';


// Import video thumbnails
import thumb1 from './assets/images/video-thumbnail1.jpg';
import thumb2 from './assets/images/video-thumbnail3.jpg';

// Import videos
import video1 from './assets/videos/steel.mp4';
import video2 from './assets/videos/walk_shoot.mp4';

function App() {
  // Create references to different sections of the page to allow scrolling to them
  const bioRef = useRef(null);
  const photosRef = useRef(null);
  const videosRef = useRef(null);

// Function to scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const yOffset = -50; // Adjust for any fixed headers or padding
      const yPosition = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the page to the top smoothly
  const scrollToTop = () => {
    document.body.classList.add('scrollable'); // Ensure body can scroll
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll to top
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
          modal.style.display = "flex";  // Display the modal as a flexbox for centering
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
    const generateStars = (containerClass, starCount) => {
      const container = document.querySelector(containerClass);
      if (container) {
        container.innerHTML = ''; // Clear existing stars
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.classList.add('sparkle-star');

          // Random position and animation duration
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDuration = `${Math.random() * 2 + 1}s`;

          container.appendChild(star);
        }
      }
    };

    generateStars('.global-stars', 50);
    generateStars('.photo-stars', 30);

    // Cleanup function to prevent memory leaks
    return () => {
      document.querySelector('.global-stars').innerHTML = '';
      document.querySelector('.photo-stars').innerHTML = '';
    };
  }, []);

  return (
      <>
        {/* Stars across the entire page */}
      <div className="sparkle-twinkle global-stars">
        <div className="sparkle-star"></div>
      </div>

        {/* Stars on the background photo */}
        <div className="sparkle-twinkle photo-stars">
          <div className="sparkle-star"></div>
        </div>

  <div className="App">
    <header className="App-header">
      <h1 className="kalnia-glaze-header">About Me</h1>
      <img src={profilePhoto} alt="Weronika Golden" className="profile-photo"/>

        <div className="profile-box">
            <p className="small-text bold-text">
                Hi! My name is Weronika Golden, and I’m a software engineering student at Arizona State University
                graduating in May 2026. I’m passionate about building reliable, well-designed software systems and solving
                real-world problems through thoughtful engineering.
            </p>

            <p className="small-text bold-text">
                I’ve led and collaborated on projects that emphasize correctness, maintainability, and scalability.
                Most recently, I served as the team lead for my senior capstone project, where I worked closely with teammates
                to design and build a full-stack application that delivers adaptive, step-by-step feedback to students.
                I enjoy translating complex requirements into clean, modular systems and guiding projects from initial design
                through implementation.
            </p>

            <p className="small-text bold-text">
                Outside of coursework, I build personal projects to challenge myself and explore system-level thinking.
                One of my current projects, TransitFlow, is a freight ETA simulation and prediction engine that models
                multi-leg shipment movement and timing constraints to produce more realistic delivery estimates.
                I enjoy working on backend logic, edge cases, and architectural decisions that mirror real production environments.
            </p>

            <p className="small-text bold-text">
                I love learning new technologies, taking ownership of my work, and tackling projects that push me to
                grow as an engineer. I’m especially drawn to work that values quality, clear design, and long-term reliability.
            </p>
        </div>


        {/* Modal */}
      <div id="imageModal" className="modal">
        <span className="close">&times;</span>
        <div className="modal-content-wrapper">
          <img className="modal-content" id="modalImage" alt=""/>
          <div id="caption"></div>
        </div>
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

      <div ref={bioRef} className="bio-section">
        <h1 className="section-title">Detailed Bio</h1>
          <p className="small-text bold-text">
              I first attended Arizona State University (ASU) in the Fall of 2016 after obtaining my Associate’s
              Degree from my local community college, the College of DuPage. I earned my Bachelor’s degree in
              Criminology and Criminal Justice, graduating Summa Cum Laude in 2018.
          </p>

          <p className="small-text bold-text">
              During this time, I worked full-time while completing my Associate’s and Bachelor’s degrees, and for
              a period of time, I worked multiple jobs while attending school. Balancing work and academics
              taught me how to manage my time effectively, prioritize competing responsibilities, and understand
              how much work I can take on while still performing at a high level without burning out. These
              experiences helped me build strong self-discipline, adaptability, and a sustainable approach to
              long-term productivity.
          </p>

          <p className="small-text bold-text">
              After graduating, I continued working in accounts payable and later gained experience in human
              resources, customer service, reception, and sales. Working across different roles strengthened my
              communication skills, attention to detail, and ability to collaborate with people from a wide
              range of backgrounds.
          </p>

          <p className="small-text bold-text">
              I grew up in the suburbs of Chicago and lived there until my husband and I moved to Northern Utah.
              We lived there for about four years, and we now reside in Northern Idaho with our three beloved cats.
          </p>

          <p className="small-text bold-text">
              Throughout my professional career, I discovered a passion for programming and made the decision to
              return to school. I am currently working toward my second Bachelor’s degree, this time in Software
              Engineering at ASU. I chose to pursue a second BS rather than a Master’s degree because the program
              is accredited by the Fulton Schools of Engineering and provides a strong foundation in core software
              engineering principles. My anticipated graduation date is May 2026.
          </p>

          <p className="small-text bold-text">
              Outside of work and academics, my hobbies include competitive shooting through the United States
              Practical Shooting Association (USPSA), snowboarding, playing the piano and violin, knitting, and
              gaming. I also love the outdoors and enjoy camping and hiking whenever I can. When I’ve had a long
              day, I unwind by relaxing with my favorite movies or shows and enjoying good food and snacks.
          </p>

          <p className="small-text bold-text">
              I hope you’ve enjoyed this About Me page as much as I enjoyed creating it. Thank you for taking the
              time to read a little about my life!
          </p>
        <button className="return-button" onClick={scrollToTop}>Return to Top</button>
      </div>

      <section ref={photosRef} className="photo-gallery">
        <h1 className="section-title">Photos</h1>
        <div className="photo-grid">
          <img src={photo1} alt="Tetons" className="clickable-image square-photo"/>
          <img src={photo2} alt="Tetons-hiking" className="clickable-image square-photo"/>
          <img src={photo3} alt="Tetons-Horseback Riding" className="clickable-image square-photo"/>
          <img src={photo4} alt="Snowboarding" className="clickable-image square-photo"/>
          <img src={photo5} alt="Snowboarding-Powder Mountain" className="clickable-image square-photo"/>
          <img src={photo6} alt="Top of Sundown lift - Powder Mountain" className="clickable-image square-photo"/>
          <img src={photo7} alt="Our Three Cats!" className="clickable-image square-photo"/>
          <img src={photo8} alt="Green Knit Sweater I made" className="clickable-image square-photo"/>
          <img src={photo9} alt="Blue Purl Knit Crop-top Sweater I made" className="clickable-image square-photo"/>
          <img src={photo10} alt="First attempt at cable stitch knitting!" className="clickable-image square-photo"/>
          <img src={photo11} alt="Stargazing at the tetons" className="clickable-image square-photo"/>
          <img src={photo12} alt="Cute little baby buffalo!" className="clickable-image square-photo"/>
        </div>
        <button className="return-button" onClick={scrollToTop}>Return to Top</button>
      </section>

      <section ref={videosRef} className="videos-section">
        <h1 className="section-title">Videos</h1>
        <video width="400" height="400" controls preload="none" poster={thumb1}>
          <source src={video1} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <video width="400" height="400" controls preload="none" poster={thumb2}>
          <source src={video2} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <button className="return-button" onClick={scrollToTop}>Return to Top</button>
      </section>
    </header>
  </div>
      </>
  );
}

export default App;
