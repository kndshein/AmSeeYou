import React from "react";
import { IoMdClose } from "react-icons/io";

const About = ({ setAboutOpen }) => {
  return (
    <div className="about-card">
      <div className="about-text">
        <button
          className="close-button"
          onClick={() => setAboutOpen(false)}
          tabIndex="1"
        >
          <IoMdClose />
        </button>
        <h1 className="about-title">AmSeeYou</h1>
        <div className="about-body">
          <p>
            <span>AmSeeYou</span> showcases and cherishes the Marvel Cinematic
            Universe (MCU) films and TV shows. This website presents the entire
            universe in in-universe chronological order from{" "}
            <a href="https://www.digitalspy.com/movies/a825774/marvel-cinematic-universe-in-chronological-order/">
              Digital Spy
            </a>
            .
          </p>
          <p>
            The project was conceived in January of 2021 as a class project
            after having learned what React was just a week prior. During the
            project, I fell in love with the process of bringing json objects to
            life -- it's satisfyingly beautiful. Even though the project is long
            over, I have been adding new features (such as including TV shows in
            the timeline) and building on existing code ever since.
          </p>
          <p>
            I will continue to maintain the site as long as it still brings me
            joy. Here's to small joys in life!
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>1.0.1</td>
              <td>Jan 2021</td>
              <td>AmSeeYou was born.</td>
            </tr>
            <tr>
              <td>1.0.2</td>
              <td>Feb 2021</td>
              <td>Fixed visual and technical bugs.</td>
            </tr>
            <tr>
              <td>1.0.3</td>
              <td>Mar 2021</td>
              <td>Minor UX improvements.</td>
            </tr>
            <tr>
              <td>1.0.4</td>
              <td>May 2021</td>
              <td>Minor deployment fixes.</td>
            </tr>
            <tr>
              <td>1.1.0</td>
              <td>Jul 2021</td>
              <td>Added Black Widow. Added casts. Increased accessibilty.</td>
            </tr>
            <tr>
              <td>2.0.0</td>
              <td>Jul 2021</td>
              <td>Added TV shows and accompanying episodes.</td>
            </tr>
            <tr>
              <td>2.1.0</td>
              <td>Jul 2021</td>
              <td>Refactored API calls.</td>
            </tr>
            <tr>
              <td>2.1.1</td>
              <td>Jul 2021</td>
              <td>
                Added loading spinners. Removed horizontal scroll. Added
                scrollbar.
              </td>
            </tr>
            <tr>
              <td>2.1.2</td>
              <td>Jul 2021</td>
              <td>Added "Movies Only" filter.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
