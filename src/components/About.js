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
            <a
              href="https://www.digitalspy.com/movies/a825774/marvel-cinematic-universe-in-chronological-order/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Spy
            </a>
            .
          </p>
          <p>
            The project was conceived in January of 2021 as a class project
            after having learned what React was just a week prior. During the
            project, I fell in love with the process of bringing json objects to
            life -- it's satisfyingly beautiful. Even though the project is long
            over, I have been adding new features and building on existing code
            ever since.
          </p>
          <p>
            I will continue to maintain the site as long as it still brings me
            joy. Here's to small things in life!
          </p>
          <p>
            Warmly,
            <br /> Kaung <br />
            <a
              href="https://knds.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              knds.art
            </a>
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>1.0.1</td>
              <td>Jan 2021</td>
              <td>
                <i>AmSeeYou</i> was born.
              </td>
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
              <td>
                Added <i>Black Widow</i>. Added casts. Increased accessibilty.
              </td>
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
              <td>2.2.0</td>
              <td>Jul 2021</td>
              <td>
                Added loading spinners. Removed horizontal scroll. Added
                scrollbar.
              </td>
            </tr>
            <tr>
              <td>2.3.0</td>
              <td>Jul 2021</td>
              <td>Added "Movies Only" filter and About card.</td>
            </tr>
            <tr>
              <td>2.3.1</td>
              <td>Sep 2021</td>
              <td>
                Added <i>Shang-Chi and the Legend of Ten Rings</i>. Refactored
                media json.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Special shoutout to{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>{" "}
          for the API, and{" "}
          <a
            href="https://30000fps.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            30000fps
          </a>{" "}
          for the{" "}
          <a
            href="https://giphy.com/gifs/loop-sci-fi-XmppNRlrlu2SA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sci-fi GIF
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
