import styles from "./AboutUs.module.css";
import storyVideo from "../../assets/about us/story.mp4";

const Story = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.story_video}>
        <video autoPlay muted loop>
          <source src={`${storyVideo}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.StroryVideoOverlay}></div>
      </div>

      <div className={styles.storySection_text}>
        <h2>Our Story</h2>
        <p>
          Welcome to Krishna’s restaurant, where every dish is a journey, and
          every bite tells a story.
        </p>
        <p>
          Our journey began in the heart of mumbai in 2010, sparked by a simple
          yet profound idea: to create a space where food lovers could come
          together and experience the magic of authentic, heartwarming flavors.
          Inspired by our family’s generations-old recipes and a deep-rooted
          passion for cooking, we wanted to share not just meals, but moments of
          joy, connection, and nostalgia.
        </p>
        <h4>The Beginnings</h4>
        <p>
          In our early days, we started as a humble family-run establishment
          with just a handful of dishes on the menu, each crafted with care and
          an uncompromising dedication to quality. From the comforting aroma of
          spices to the warm glow of our first dining room, every detail
          reflected our love for hospitality.
        </p>
        <h4>Milestones and Growth</h4>
        <p>
          Over the years, we’ve been privileged to serve countless patrons, each
          of whom has played a role in shaping our story. Highlights of our
          journey include:
        </p>
        <ul>
          <li>
            <strong>2012</strong>: Featured in [Local Food Magazine] as one of
            the "Top 10 Hidden Gems in mumbai."
          </li>
          <li>
            <strong>2017</strong>: Expanded our space to accommodate more guests
            while preserving our cozy and welcoming atmosphere.
          </li>
          <li>
            <strong>2022</strong>: Awarded "Best Local Cuisine" by [Food
            Awards].
          </li>
        </ul>
        <p>
          Today, we’re proud to be a cherished part of the community, serving
          everything from our signature dishes to seasonal specials that
          celebrate local ingredients.
        </p>
      </div>
    </section>
  );
};

export default Story;
