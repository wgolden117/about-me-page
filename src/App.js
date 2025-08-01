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

// Import video thumbnails
import thumb1 from './assets/images/video-thumbnail1.jpg';
import thumb2 from './assets/images/video-thumbnail3.jpg';

// Import videos
import video1 from './assets/videos/steel.mp4';
import video2 from './assets/videos/WA State Championship 2025.mp4';

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

      <p className="small-text bold-text profile-text">
        Hi! My name is Weronika Golden. I’m a software engineering student at Arizona State University, with a
        passion for developing software solutions and solving problems!

        I have experience in various programming languages, working successfully in teams, and software design.
        I also have experience in training and leadership from previous jobs! In my free time,
        I work on personal projects to expand my skill-set. I recently finished building my
        Connect4 game that was a lot of fun, and soon I will start on another project called
        "DeployWatch" a project that demonstrates automated software deployment and real-time
        monitoring in a cloud environment.

        I love exploring new technologies and working on challenging projects that allow me to grow and gain more experience.
      </p>

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
          I first attended Arizona State University (ASU) in the Fall of 2016 after obtaining my
          Associates Degree from my local Community College, the College of Dupage. I obtained
          a BS in Criminology and Criminal Justice, graduating Summa Cum Laude in 2018!
        </p>
        <p className="small-text bold-text">
          I worked full-time while obtaining my Associates and BS Degree, and for a period of time I even worked
          multiple jobs while attending school. After graduating, I continued working in my current field, accounts
          payable, and in
          the following years, I also worked in human resources, customer service, reception, and sales.
        </p>
        <p className="small-text bold-text">
          I'm originally from Chicago. I grew up there, and lived in the Suburbs (Carol Stream, IL) until my husband and
          I moved to Ogden, Utah. We lived there for about 4 years, and we are now living in Post Falls, ID with our
          3 beloved cats.
        </p>
        <p className="small-text bold-text">
          Throughout my working career, I discovered a passion for programming, and made the decision to go back to
          school. I am now working towards my second BS, this time in Software Engineering. I decided to work
          towards a second BS instead of a Masters because the BS is accredited by the Fulton School of Engineering
          with ASU (yes, I went to ASU again!) and my anticipated graduation date is May of 2026!
        </p>
        <p className="small-text bold-text">
          My personal hobbies include competitive shooting as part of the United States Practical Shooting
          Association (USPSA), snowboarding, playing the piano and violin, knitting, and gaming. I also love the
          outdoors, love to camp and hike, and I absolutely love trying and eating delicious foods
          from various cultures! My favorite so far, other than my native Polish foods, is Japanese cuisine as well a
          delicious rare steak!
          It's hard to choose a favorite hobby, I love spending my free time engaging in creative and fun tasks.
          When I'm tired or have had a long day, I unwind by relaxing and watching my favorite movies or shows
          and eating my favorite snacks!
        </p>
        <p className="small-text bold-text">
          I hope you've enjoyed this About Me page as much as I enjoyed creating it! Thank you for taking the time
          to read a little about my life!
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
