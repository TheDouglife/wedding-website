const gallery = [
  {
    title: 'Video + Photo Story',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Wedding Bouquet',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Table Decoration',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Ready Dress',
    image:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80'
  }
];

const timeline = [
  { day: '18', label: 'Days' },
  { day: '28', label: 'Hours' },
  { day: '03', label: 'Minutes' },
  { day: '25', label: 'Seconds' }
];

const events = [
  {
    title: 'The Reception',
    text: 'Saturday, April 15th at 12:00 PM\nLong Lake Club, New York'
  },
  {
    title: 'The Ceremony',
    text: 'Saturday, April 15th at 2:00 PM\nSt. Patrick Church, New York'
  },
  {
    title: 'The Party',
    text: 'Saturday, April 15th at 8:00 PM\nMadison Hall, New York'
  }
];

function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="overlay" />
        <div className="hero-inner">
          <p className="eyebrow">We're Getting Married</p>
          <h1>Doug &amp; Tiffany</h1>
          <p className="meta">New York, April 15th, 2027</p>
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
            We met by chance, stayed by choice, and now we cannot wait to celebrate this day with
            the people we love.
          </p>
          <div className="people">
            <article className="person">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
                alt="Bride portrait"
              />
              <h3>Tiffany Cols</h3>
              <p>Creative director, coffee lover, and the most radiant smile in every room.</p>
            </article>
            <article className="person featured">
              <h3>The Wedding Day</h3>
              <p>
                Our celebration begins with vows, laughter, and a long dance under city lights.
              </p>
              <p>
                We are so grateful to share this day with family and friends from near and far.
              </p>
            </article>
            <article className="person">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Groom portrait"
              />
              <h3>Doug Cols</h3>
              <p>Engineer, mountain dreamer, and the calm heart behind our adventure.</p>
            </article>
          </div>
        </section>

        <section className="section photos">
          <p className="section-kicker">Our Wedding Gallery</p>
          <h2>Moments</h2>
          <div className="grid-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <img
                key={index}
                src={`https://picsum.photos/seed/wed-${index + 1}/500/340`}
                alt={`Wedding memory ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="section rsvp">
          <div className="rsvp-form">
            <p className="section-kicker">Will You Attend?</p>
            <h2>RSVP</h2>
            <form>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <select defaultValue="">
                <option value="" disabled>
                  Number of guests
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button type="button">RSVP</button>
            </form>
          </div>
          <div className="rsvp-note">
            <h3>We're Honored You Can Join</h3>
            <p>
              Your presence means everything to us. Please confirm attendance before March 20th.
            </p>
            <button type="button">Read More</button>
          </div>
        </section>

        <section className="banner-date">
          <p>April 15th, 2027</p>
          <span>Save the date and reserve your seat</span>
        </section>

        <section className="section when-where">
          <p className="section-kicker">When &amp; Where</p>
          <h2>Details</h2>
          <div className="event-grid">
            {events.map((event) => (
              <article key={event.title}>
                <h3>{event.title}</h3>
                <p>
                  {event.text.split('\n').map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section posts">
          <p className="section-kicker">Absolutely Something For You</p>
          <h2>Latest Posts</h2>
          <div className="post-grid">
            {gallery.map((item) => (
              <article key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <p>Fresh inspiration and details for the celebration weekend.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="map" aria-label="Map preview">
          <iframe
            title="Wedding map"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.31%2C40.43%2C-73.55%2C40.98&layer=mapnik"
          />
        </section>
      </main>

      <footer className="footer">
        <div>
          <h4>The Aisle Co.</h4>
          <p>Long Lake Club, New York</p>
          <p>+1 555 234 4567</p>
        </div>
        <div>
          <h4>Useful Links</h4>
          <p>Gift Registry</p>
          <p>Accommodation</p>
          <p>Transport</p>
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
