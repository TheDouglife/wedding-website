const venuePhotos = [
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Exteriors-9408.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Groom-Suite9087.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Bridal-Suite8630.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-8984.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Exteriors-8537.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Reception-19646.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-Groom-Suite9007.jpg',
  'https://thevenue.us/wp-content/uploads/2026/03/Dorosh-Documentaries-The-Venue-8863.jpg'
];

import { useEffect, useState } from 'react';

const weddingDate = new Date('2026-12-13T17:00:00');

function getTimeRemaining() {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  };
}

const events = [
  {
    title: 'The Ceremony',
    text: 'Sunday, December 13th at 4:30PM'
  },
  {
    title: 'Cocktail hour',
    text: 'Sunday, December 13th 5:00PM-6:00PM'
  },
  {
    title: 'The Reception',
    text: 'Sunday, December 13th at 6:00PM'
  }
];

function App() {
  const [countdown, setCountdown] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeline = [
    { day: countdown.days, label: 'Days' },
    { day: countdown.hours, label: 'Hours' },
    { day: countdown.minutes, label: 'Minutes' },
    { day: countdown.seconds, label: 'Seconds' }
  ];

  return (
    <div className="site">
      <header className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://thevenue.us/wp-content/uploads/2026/04/the_venue_overview_promo-1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay" />
        <div className="hero-inner">
          <p className="eyebrow">We're Getting Married</p>
          <h1>Doug &amp; Tiffany</h1>
          <p className="meta">Hastings, Florida. December 13th, 2026</p>
          <div className="countdown" aria-label="Countdown">
            {timeline.map((item) => (
              <div key={item.label} className="count-item">
                <strong>{item.day}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section intro">
          <p className="section-kicker">Bride &amp; Groom</p>
          <h2>Our Story</h2>
          <p>
            Doug and Tiffany met on February 10, 2024, on a blind date in Palatka, Florida.
            Tiffany spotted Doug beneath the clock tower across from the restaurant, and they fell
            in love that very night. They were seated at table 13, a number that became an
            invisible string throughout their relationship. Since then, they have shared many
            adventures together, traveling to Georgia, California, Indianapolis, Tennessee, New
            York, and beyond. In the short time they have known each other, they have already
            lived a lot of life, and through every tribulation, their love has remained constant.
            It guides them, gives them strength, and reminds them that they are soulmates destined
            to meet on that fateful February evening.
            <br />
            <br />
            Doug proposed to Tiffany on November 3,
            2024, at Taylor Swift's final US performance of the Eras Tour. Surrounded by 69,000
            Swifties, Doug asked Tiffany to marry him while Taylor sang Love Story, and the crowd
            cheered.
            <br />
            <br />
            They celebrated their engagement at an unforgettable show and continue to
            share a love of traveling, trying new restaurants, Taylor Swift, and their pets: Row
            Eliza, Poncho, Winston, Fee-Fee, Bao, Bun, Spottie, Dottie, and Smokey.
          </p>
          <div className="people">
            <article className="person">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
                alt="Bride portrait"
              />
              <h3>Tiffany Lee Jordan</h3>
              <p>Costume Designer, Dog Mom, Rhinestone Afficianato, and lover of all things sparkley.</p>
            </article>
            <article className="person featured">
              <h3>The Wedding Day</h3>
              <p>
                They have lived a lot of life in the short time they have known each other, and
                through all life tribulations, the love they share always remains.
              </p>
              <p>
                It guides them, gives them strength, and reminds them they are soulmates destined
                to meet that fateful February evening.
              </p>
              <p>
                Doug proposed to Tiffany on November 3rd, 2024, at Taylor Swift's final US
                performance of the Eras Tour. Surrounded by 69,000 Swifties, he proposed while
                Taylor sang Love Story, and the entire crowd cheered.
              </p>
              <p>
                They celebrated their engagement at an unforgettable show and continue to share a
                love of travel, trying new restaurants, Taylor Swift, and their pets: Row Eliza,
                Poncho, Winston, Fee-Fee, Bao, Bun, Spottie, Dottie, and Smokey.
              </p>
            </article>
            <article className="person">
              <img
                src="/douglas-allen-montgomery.jpg"
                alt="Groom portrait"
              />
              <h3>Douglas Allen Montgomery JR</h3>
              <p>Engineer, mountain dreamer, and the calm heart behind our adventure.</p>
            </article>
          </div>
        </section>

        <section className="section photos rsvp-note-space">
          <h2>Wedding Venue</h2>
          <div className="grid-8">
            {venuePhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Wedding venue ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="section rsvp">
          <div className="rsvp-note">
            <h2>Wedding Registry</h2>
            <p>
              Your love and support mean the world to us. If you would like to bless us with a
              gift, you can view our registry below.
            </p>
            <a
              className="registry-link"
              href="https://www.myregistry.com/wedding-registry/douglas-montgomery-and-tiffany-jordan-satsuma-fl/5536767"
              target="_blank"
              rel="noreferrer"
            >
              View Registry
            </a>
          </div>
        </section>

        <section className="banner-date">
          <p>December 13th, 2026</p>
          <span>Ceremony begins at 5:00 PM</span>
        </section>

        <section className="section when-where">
          <h2>Details</h2>
          <div className="event-grid">
            {events.map((event) => (
              <article key={event.title}>
                <h3>{event.title}</h3>
                <p>
                  {event.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="map" aria-label="Map preview">
          <iframe
            title="Wedding map"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.5182%2C29.7112%2C-81.4982%2C29.7232&layer=mapnik"
          />
        </section>
      </main>

      <footer className="footer">
        <div>
          <h4>Doug &amp; Tiffany Wedding</h4>
          <p>Hastings, FL</p>
        </div>
        <div>
          <h4>Useful Links</h4>
          <a
            className="registry-link"
            href="https://www.myregistry.com/wedding-registry/douglas-montgomery-and-tiffany-jordan-satsuma-fl/5536767"
            target="_blank"
            rel="noreferrer"
          >
            Gift Registry
          </a>
        </div>
        <div>
          <h4>Instagram</h4>
          <div className="insta-row">
            {Array.from({ length: 4 }).map((_, index) => (
              <img
                key={index}
                src={`https://picsum.photos/seed/insta-${index + 1}/120/120`}
                alt={`Instagram ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
