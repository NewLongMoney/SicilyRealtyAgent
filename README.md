<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>REAL ESTATE KENYA — REALTOR SICILY</title>
  <meta name="description" content="Elegant homes curated by Realtor Sicily across Kenya. Modern listings, tailored tours, and trusted guidance.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0a0b0d;
      --panel:#111317;
      --panel-2:#0d1014;
      --text:#eef1f6;
      --muted:#b8c0ce;
      --brand:#53a8ff; /* logo blue */
      --gold:#c9a46c;  /* subtle luxury accent */
      --border:#1a1f27;
      --success:#35c28d;
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6}
    a{color:var(--brand);text-decoration:none}
    img{max-width:100%;display:block}
    .container{max-width:1200px;margin:0 auto;padding:0 24px}

    /* Header */
    header{
      position:sticky;top:0;z-index:50;
      background:rgba(13,16,20,.85);backdrop-filter:blur(10px);
      border-bottom:1px solid var(--border);
    }
    .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
    .brand{display:flex;align-items:center;gap:14px}
    .brand h1{
      margin:0;font-family:'Playfair Display',serif;font-weight:700;line-height:1.1;
      font-size:18px;letter-spacing:.4px
    }
    .subtitle{color:var(--muted);font-size:12px}
    .logo-dark{height:40px;width:auto}
    .nav-links{display:flex;gap:20px}
    .nav-links a{color:var(--muted);font-weight:600}
    .cta{display:flex;gap:10px}
    .btn{
      padding:10px 14px;border-radius:12px;border:1px solid var(--border);
      background:var(--panel);color:var(--text);font-weight:700
    }
    .btn-primary{
      background:var(--brand);color:#07111b;border-color:#2d6fb1
    }
    .btn-outline{background:transparent;color:var(--text)}

    /* Hero */
    .hero{border-bottom:1px solid var(--border)}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;padding:38px 0}
    @media (max-width:980px){.hero-grid{grid-template-columns:1fr}}
    .hero h2{
      font-family:'Playfair Display',serif;
      font-size:clamp(28px,4.8vw,52px);line-height:1.1;margin:10px 0 16px
    }
    .tag{
      display:inline-block;padding:6px 10px;border-radius:999px;font-size:12px;
      border:1px solid var(--border);color:#9bc5ff;background:rgba(83,168,255,.08)
    }
    .hero-figure{
      position:relative;border-radius:18px;overflow:hidden;background:var(--panel-2);
      border:1px solid var(--border)
    }
    .hero-figure img{width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;filter:saturate(105%) contrast(105%)}
    .hero-logo{
      position:absolute;top:12px;left:12px;background:rgba(10,11,13,.6);
      border:1px solid var(--border);border-radius:12px;padding:8px
    }
    .hero-caption{
      position:absolute;bottom:12px;left:12px;right:12px;background:rgba(17,19,23,.75);
      border:1px solid var(--border);border-radius:12px;padding:10px 12px;color:var(--muted);font-size:14px
    }

    /* Highlights */
    .highlights{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:18px 0 32px}
    @media (max-width:900px){.highlights{grid-template-columns:1fr}}
    .highlight{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:16px}
    .highlight h4{margin:6px 0 4px;font-weight:800}

    /* Sections */
    section{padding:44px 0}
    .section-title{
      display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;
      border-bottom:1px solid var(--border);padding-bottom:10px
    }
    .section-title h3{
      margin:0;font-family:'Playfair Display',serif;font-size:clamp(22px,3.8vw,34px)
    }
    .chip{
      display:inline-block;padding:6px 10px;border-radius:999px;font-size:12px;
      border:1px solid var(--border);color:var(--muted)
    }

    /* Cards */
    .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    @media (max-width:1100px){.cards{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:720px){.cards{grid-template-columns:1fr}}
    .card{background:var(--panel);border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
    .card img{width:100%;height:220px;object-fit:cover;background:#0b0e12}
    .card-body{padding:14px;display:grid;gap:8px}
    .price{font-weight:800;color:var(--gold)}
    .meta{color:var(--muted);font-size:14px}
    .card-actions{display:flex;gap:10px;margin-top:6px}

    /* About */
    .about-grid{display:grid;grid-template-columns:.35fr .65fr;gap:18px}
    @media (max-width:900px){.about-grid{grid-template-columns:1fr}}
    .prose{background:var(--panel);border:1px solid var(--border);border-radius:16px;padding:16px}

    /* Testimonials */
    .testimonials{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    @media (max-width:900px){.testimonials{grid-template-columns:1fr}}
    .quote{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:16px;color:var(--muted)}
    .quote strong{color:var(--text)}

    /* Contact */
    .contact{display:grid;grid-template-columns:.6fr .4fr;gap:18px}
    @media (max-width:900px){.contact{grid-template-columns:1fr}}
    .contact-card{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:16px}
    .contact-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:14px}
    .input, textarea, select{
      width:100%;background:#0d1218;border:1px solid var(--border);color:var(--text);
      border-radius:10px;padding:10px 12px;font:inherit
    }
    textarea{min-height:110px;resize:vertical}
    .legal{color:var(--muted);font-size:12px;margin-top:8px}

    /* Footer */
    footer{border-top:1px solid var(--border);padding:20px 0;color:var(--muted)}
    .foot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .footer-logos{display:flex;gap:12px;align-items:center}
    .logo-light{height:28px}
  </style>
<link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link id="all-fonts-link-font-roboto" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link id="all-fonts-link-font-montserrat" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link id="all-fonts-link-font-poppins" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link id="all-fonts-link-font-playfair" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap"><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link id="all-fonts-link-font-instrument-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link id="all-fonts-link-font-merriweather" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap"><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link id="all-fonts-link-font-bricolage" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link id="all-fonts-link-font-jakarta" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link id="all-fonts-link-font-space-grotesk" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link id="all-fonts-link-font-work-sans" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link id="all-fonts-link-font-pt-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link id="all-fonts-link-font-geist-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link id="all-fonts-link-font-space-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link id="all-fonts-link-font-quicksand" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link id="all-fonts-link-font-nunito" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style></head>
<body class="">
  <!-- Header -->
  <header class="">
    <div class="container nav">
      <div class="brand">
        <!-- Dark-theme logo (light text on dark) -->
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d7870d1-fef4-4d6c-9aab-247ac8aff218_320w.png" alt="REAL ESTATE KENYA — REALTOR SICILY logo" class="logo-dark bg-center object-cover">
        <div class="">
          <h1 class="">REAL ESTATE KENYA</h1>
          <div class="subtitle">REALTOR SICILY • Elegant homes, tailored guidance</div>
        </div>
      </div>
      <nav class="nav-links">
        <a href="#listings">Listings</a>
        <a href="#about">About</a>
        <a href="#testimonials">Praise</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="cta">
        <a class="btn btn-outline" href="tel:+254705924255">Call</a>
        <a class="btn btn-primary" href="https://wa.me/254705924255" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="container hero-grid">
      <div class="">
        <span class="tag">AI‑enhanced property matching</span>
        <h2 class="">Grace, expertise, and a personal touch—experience real estate with Sicily.</h2>
        <p class="meta">From serene Kiambu retreats to signature Nairobi residences, Sicily curates homes that fit your life with taste and precision. You’ll feel guided, respected, and genuinely understood—every step, every viewing, every signature.</p>
        <div style="margin-top:16px;display:flex;gap:10px" class="">
          <a class="btn btn-primary" href="#listings">Explore listings</a>
          <a class="btn" href="#contact">Book a private tour</a>
        </div>

        <div class="highlights">
          <div class="highlight">
            <h4 class="">Tailored discovery</h4>
            <p class="meta">Your needs, refined into options that truly fit—no noise, just quality.</p>
          </div>
          <div class="highlight">
            <h4 class="">Trusted negotiation</h4>
            <p class="meta">Transparent strategy and calm execution to protect your interests.</p>
          </div>
          <div class="highlight">
            <h4 class="">Seamless closing</h4>
            <p class="meta">Coordination across all parties—clean paperwork, clear timelines.</p>
          </div>
        </div>
      </div>

      <figure class="hero-figure">
        <!-- Replace with Sicily’s portrait or signature property -->
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/376d81e1-02be-46f3-8407-3e4b91b49178_1600w.png" alt="Elegant living space" class="bg-center object-cover">
        <div class="hero-logo">
          <!-- Light background logo for overlay panels if you prefer -->
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/530a6850-f662-492b-b650-2b4eefa6be08_320w.png" alt="REAL ESTATE KENYA — REALTOR SICILY logo (light background)" style="height:28px" class="object-cover bg-center">
        </div>
        <figcaption class="hero-caption">“Sicily turned a complex journey into a graceful experience.”</figcaption>
      </figure>
    </div>
  </section>

  <!-- Listings -->
  <section id="listings" class="">
    <div class="container">
      <div class="section-title">
        <h3>Featured listings</h3>
        <div class="chip">Updated weekly</div>
      </div>

      <div class="cards">
        <!-- Listing 1 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1600" alt="Modern townhome exterior">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <strong>Kiambu Ridge Townhome</strong>
              <span class="price">KES 18,500,000</span>
            </div>
            <div class="meta">3 Bed • 2.5 Bath • 1,850 sq ft • Gated community • Private garden</div>
            <div class="meta">Juja, Kiambu County</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Request viewing</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20I%27m%20interested%20in%20Kiambu%20Ridge%20Townhome">WhatsApp Sicily</a>
            </div>
          </div>
        </article>

        <!-- Listing 2 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&amp;w=1600" alt="Contemporary apartment interior" class="">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <strong>Thika Greens View Apartment</strong>
              <span class="price">KES 9,200,000</span>
            </div>
            <div class="meta">2 Bed • 2 Bath • 1,120 sq ft • Balcony • Covered parking</div>
            <div class="meta">Thika Road corridor</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Request viewing</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20I%27m%20interested%20in%20Thika%20Greens%20View%20Apartment">WhatsApp Sicily</a>
            </div>
          </div>
        </article>

        <!-- Listing 3 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1502005229762-cf1b2c0b0dff?q=80&amp;w=1600" alt="Luxury villa with pool" class="">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center" class="">
              <strong class="">Runda Serenity Villa</strong>
              <span class="price">KES 75,000,000</span>
            </div>
            <div class="meta">5 Bed • 5.5 Bath • 5,400 sq ft • Pool • DSQ • Mature gardens</div>
            <div class="meta">Runda, Nairobi</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Private tour</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20I%27d%20like%20a%20private%20tour%20of%20Runda%20Serenity%20Villa">WhatsApp Sicily</a>
            </div>
          </div>
        </article>

        <!-- Listing 4 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&amp;w=1600" alt="Minimalist studio" class="">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center" class="">
              <strong>Westlands Skyline Studio</strong>
              <span class="price">KES 6,800,000</span>
            </div>
            <div class="meta">1 Bed • 1 Bath • 560 sq ft • City views • Gym access</div>
            <div class="meta">Westlands, Nairobi</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Request details</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20tell%20me%20more%20about%20Westlands%20Skyline%20Studio">WhatsApp Sicily</a>
            </div>
          </div>
        </article>

        <!-- Listing 5 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&amp;w=1600" alt="Country house">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <strong>Limuru Country Haven</strong>
              <span class="price">KES 22,900,000</span>
            </div>
            <div class="meta">4 Bed • 3 Bath • 2,600 sq ft • Acre plot • Fireplace</div>
            <div class="meta">Limuru, Kiambu</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Schedule visit</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20I%27m%20keen%20on%20Limuru%20Country%20Haven">WhatsApp Sicily</a>
            </div>
          </div>
        </article>

        <!-- Listing 6 -->
        <article class="card">
          <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=1600" alt="Beach house" class="">
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <strong>Diani Breeze Retreat</strong>
              <span class="price">KES 48,000,000</span>
            </div>
            <div class="meta">4 Bed • 4 Bath • 3,200 sq ft • Beach access • Rooftop terrace</div>
            <div class="meta">Diani Beach, Kwale</div>
            <div class="card-actions">
              <a class="btn btn-outline" href="#contact">Book a tour</a>
              <a class="btn btn-primary" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20please%20book%20a%20tour%20for%20Diani%20Breeze%20Retreat">WhatsApp Sicily</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="">
    <div class="container">
      <div class="section-title">
        <h3>About Sicily</h3>
        <div class="chip">Client‑first, detail‑driven</div>
      </div>
      <div class="about-grid">
        <div class="card">
          <!-- Replace with Sicily’s portrait -->
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200" alt="Portrait placeholder of Realtor Sicily" class="">
        </div>
        <div class="prose">
          <p class="">Sicily is praised for her calm confidence, tasteful curation, and unshakeable integrity. She listens deeply, advises clearly, and makes complex decisions feel simple. Clients trust her because she earns it—consistently.</p>
          <p class="">Whether you’re buying your first home or upgrading to a signature address, expect discretion, transparency, and an experience that respects your time and your standards.</p>
          <div style="display:flex;gap:10px;margin-top:8px" class="">
            <a class="btn btn-primary" href="tel:+254705924255">Call Sicily</a>
            <a class="btn" href="https://wa.me/254705924255" target="_blank" rel="noopener">Message on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials" class="">
    <div class="container">
      <div class="section-title">
        <h3>Client praise</h3>
        <div class="chip">Real words, real wins</div>
      </div>
      <div class="testimonials">
        <div class="quote">
          <p><strong>“Refined taste and flawless follow‑through.”</strong> Sicily understood our vision and protected our budget. We closed ahead of schedule without compromising on quality.</p>
        </div>
        <div class="quote">
          <p class=""><strong class="">“We felt guided, never pressured.”</strong> Every viewing was purposeful. Sicily’s diligence spared us headaches we didn’t even know to expect.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="" id="contact">
    <div class="container contact">
      <div class="contact-card">
        <h3 style="font-family:'Playfair Display',serif;margin:0 0 8px">Contact Sicily</h3>
        <p class="meta">Calls &amp; WhatsApp: <a href="tel:+254705924255" class="">0705 924 255</a> • <a href="https://wa.me/254705924255" target="_blank" rel="noopener" class="">wa.me/254705924255</a></p>

        <form action="#" method="post" onsubmit="alert('Thank you! Sicily will reach out shortly.'); return false;" class="">
          <div class="contact-grid">
            <div class="">
              <label for="name" class="meta">Your name</label>
              <input class="input" type="text" placeholder="e.g., Briver" required="" id="name">
            </div>
            <div class="">
              <label for="phone" class="meta">Phone</label>
              <input id="phone" class="input" type="tel" placeholder="+254..." required="">
            </div>
            <div class="">
              <label for="email" class="meta">Email</label>
              <input id="email" class="input" type="email" placeholder="you@example.com">
            </div>
            <div class="">
              <label for="interest" class="meta">What are you looking for?</label>
              <select class="input" required="" id="interest">
                <option value="">Select an option</option>
                <option>Buy a home</option>
                <option>Sell a home</option>
                <option>Rent</option>
                <option>Investment</option>
                <option>Private tour</option>
              </select>
            </div>
          </div>
          <div style="margin-top:12px" class="">
            <label for="message" class="meta">Message</label>
            <textarea id="message" placeholder="Share your goals, budget range, preferred locations..." class=""></textarea>
          </div>
          <div style="margin-top:12px;display:flex;gap:10px" class="">
            <button class="btn btn-primary" type="submit">Request callback</button>
            <a class="btn" href="https://wa.me/254705924255?text=Hi%20Sicily%2C%20I%27d%20like%20to%20chat%20about%20a%20property." target="_blank" rel="noopener">Chat on WhatsApp</a>
          </div>
          <p class="legal">By submitting, you consent to be contacted regarding your inquiry.</p>
        </form>
      </div>

      <div class="contact-card bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/530a6850-f662-492b-b650-2b4eefa6be08_1600w.png)] bg-cover">
        <h4 style="margin-top:0" class="">Office hours</h4>
        <p class="meta">Mon–Sat: 9:00–18:00 • Sunday by appointment</p>
        <h4 class="">Service areas</h4>
        <p class="meta">Juja • Thika Road • Kiambu • Westlands • Runda • Limuru • Coastal select</p>
        <h4 class="">Realtor- Sicily</h4>
        <div class="footer-logos">
          <!-- Light background logo variant -->
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/530a6850-f662-492b-b650-2b4eefa6be08_320w.png" alt="REAL ESTATE KENYA — REALTOR SICILY logo (light)" class="logo-light bg-center bg-stone-900 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="">
    <div class="container foot">
      <div>© <script>document.write(new Date().getFullYear())</script>202520252025202520252025202520252025202520252025202520252025202520252025 REAL ESTATE KENYA — REALTOR SICILY. All rights reserved.</div>
      <div>Elegant homes, tailored guidance.</div>
    </div>
  </footer>


</body></html>
