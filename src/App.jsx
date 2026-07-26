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
import tiffanyPortrait from '../tippy.webp';
import douglasPortrait from '../douglas-allen-montgomery.jpg';

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

const tiktokEmbedMarkup = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@iamdouglife/video/7433618584569515307" data-video-id="7433618584569515307" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@iamdouglife" href="https://www.tiktok.com/@iamdouglife?refer=embed">@iamdouglife</a> \u201cYou have to be unapologetically you and go for what you want.\u201d Thank you all for being there for me in our special moment, it was absolutely enchanting. @Tiffany Special thanks to @Taylor Swift &amp; @Travis Kelce for giving us the blueprint to love unconditonally. <a title="erastour" target="_blank" href="https://www.tiktok.com/tag/erastour?refer=embed">#erastour</a> <a title="erasproposal" target="_blank" href="https://www.tiktok.com/tag/erasproposal?refer=embed">#erasproposal</a> <a title="indyn3" target="_blank" href="https://www.tiktok.com/tag/indyn3?refer=embed">#indyn3</a> <a title="n3" target="_blank" href="https://www.tiktok.com/tag/n3?refer=embed">#n3</a> <a title="erastourindy" target="_blank" href="https://www.tiktok.com/tag/erastourindy?refer=embed">#erastourindy</a> @Taylor Nation <a target="_blank" title="\u266c original sound - Douglife" href="https://www.tiktok.com/music/original-sound-7433618559584930602?refer=embed">\u266c original sound - Douglife</a></section></blockquote>`;

function App() {
  const [countdown, setCountdown] = useState(getTimeRemaining());
  const [isProposalVideoOpen, setIsProposalVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hasScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (hasScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isProposalVideoOpen) {
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    if (typeof window.tiktokEmbedLoad === 'function') {
      window.tiktokEmbedLoad();
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsProposalVideoOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isProposalVideoOpen]);

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
          <p className="story-paragraph">
            Doug and Tiffany met on February 10, 2024, on a blind date in Palatka, Florida.
            Tiffany spotted Doug beneath the clock tower across from the restaurant, and they fell
            in love that very night. They were seated at table 13, a number that became an
            invisible string throughout their relationship. Since then, they have shared many
            adventures together, traveling to Georgia, California, Indianapolis, Tennessee, New
            York, and beyond. In the short time they have known each other, they have already
            lived a lot of life, and through every tribulation, their love has remained constant.
            It guides them, gives them strength, and reminds them that they are soulmates destined
            to meet on that fateful February evening.
          </p>
          <div className="proposal-video-link-wrap">
            <a
              className="proposal-video-link"
              href="#proposal-video-modal"
              aria-haspopup="dialog"
              aria-controls="proposal-video-modal"
              onClick={(event) => {
                event.preventDefault();
                setIsProposalVideoOpen(true);
              }}
            >
              <span className="play-icon" aria-hidden="true" />
              <span>Watch Proposal Moment</span>
            </a>
          </div>
          <p className="story-paragraph">
            Doug proposed to Tiffany on November 3,
            2024, at Taylor Swift's final US performance of the Eras Tour. Surrounded by 69,000
            Swifties, Doug asked Tiffany to marry him while Taylor sang Love Story, and the crowd
            cheered.
          </p>
          <p className="story-paragraph">
            They celebrated their engagement at an unforgettable show and continue to
            share a love of traveling, trying new restaurants, Taylor Swift, and their pets: Row
            Eliza, Poncho, Winston, Fee-Fee, Bao, Bun, Spottie, Dottie, and Smokey.
          </p>
          <div className="people">
            <article className="person">
              <img
                src={tiffanyPortrait}
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
                src={douglasPortrait}
                alt="Groom portrait"
              />
              <h3>Douglas Allen Montgomery JR</h3>
              <p>Software Engineer, lifelong problem solver and devoted animal lover who finds joy in all facets of life.</p>
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

        <section className="banner-date">
          <p>December 13th, 2026</p>
          <span>Ceremony begins at 4:30 PM</span>
        </section>

        <section className="map" aria-label="Map preview">
          <iframe
            title="Wedding map"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.5182%2C29.7112%2C-81.4982%2C29.7232&layer=mapnik"
          />
        </section>
      </main>

      <div
        id="proposal-video-modal"
        className={`video-modal${isProposalVideoOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isProposalVideoOpen}
        aria-labelledby="proposal-video-title"
        onClick={() => setIsProposalVideoOpen(false)}
      >
        <div className="video-modal-content" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className="video-modal-close"
            aria-label="Close proposal video"
            onClick={() => setIsProposalVideoOpen(false)}
          >
            Close
          </button>
          <h3 id="proposal-video-title">Proposal Video</h3>
          <div
            className="tiktok-embed-wrap"
            dangerouslySetInnerHTML={{ __html: tiktokEmbedMarkup }}
          />
        </div>
      </div>

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
