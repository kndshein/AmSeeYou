import React from 'react';
import { IoMdClose } from 'react-icons/io';
import patchNotes from '../utilities/patchNotes.json';

const About = ({ setAboutOpen }) => {
  return (
    <div className="about-card">
      <div className="about-text">
        <button className="close-button" onClick={() => setAboutOpen(false)} tabIndex="1">
          <IoMdClose />
        </button>
        <h1 className="about-title">AmSeeYou</h1>
        <section className="about-body">
          <p>
            <span>AmSeeYou</span> showcases and cherishes the Marvel Cinematic Universe (MCU) films and TV
            shows. This website presents the entire universe in in-universe chronological order from{' '}
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
            The project was conceived in January of 2021 as a class project after having learned what React
            was just a week prior. During the project, I fell in love with the process of bringing json
            objects to life -- it's satisfyingly beautiful. Even though the project is long over, I have been
            adding new features and building on existing code ever since.
          </p>
          <p>
            I will continue to maintain the site as long as it still brings me joy. Here's to small things in
            life!
          </p>
          <p>
            Warmly,
            <br /> Kaung <br />
            <a href="https://knds.art" target="_blank" rel="noopener noreferrer">
              knds.art
            </a>
          </p>
        </section>
        <table className="about-table">
          <tbody>
            {[...patchNotes].reverse().map(({ version, date, notes }, idx) => {
              return (
                <tr key={version} className={`about-table-row ${idx === 0 && 'current'}`}>
                  <td className="about-table-version">{version}</td>
                  <td className="about-table-date">{date}</td>
                  <td className="about-table-notes">
                    {notes.map((note, idx) => (
                      <span key={idx} dangerouslySetInnerHTML={{ __html: note }} />
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          Special shoutout to{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            TMDB
          </a>{' '}
          for the API, and{' '}
          <a href="https://30000fps.com/#" target="_blank" rel="noopener noreferrer">
            30000fps
          </a>{' '}
          for the{' '}
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
