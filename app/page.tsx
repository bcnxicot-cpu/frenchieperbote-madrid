import Image from "next/image";

const WHATSAPP =
  "https://wa.me/34675214221?text=Hola%2C%20quer%C3%ADa%20consultar%20una%20cita%20para%20mi%20perro.";
const COURSE_WHATSAPP =
  "https://wa.me/34675214221?text=Hola%2C%20quer%C3%ADa%20informaci%C3%B3n%20sobre%20el%20curso%20de%20peluquer%C3%ADa%20canina.";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Frenchieperbote+Calle+Rosa+Pardo+1+San+Fernando+de+Henares";
const SHOP = "https://frenchieperbote.com/collections/all";
const INSTAGRAM = "https://www.instagram.com/frenchieperbote/";
const EMAIL = "mailto:frenchieperbote@hotmail.com";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.5a3.5 3.5 0 0 1-3.5 3.5H9l-5 3 1.5-4.4A6.8 6.8 0 0 1 4 13.4V9.5A5.5 5.5 0 0 1 9.5 4h5A5.5 5.5 0 0 1 20 9.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="9" cy="10" r="5" />
      <circle cx="9" cy="30" r="5" />
      <path d="m13 13 22 21M13 27 35 6M18 22l-5-5" />
    </svg>
  );
}

const reviews = [
  "Experiencia muy positiva: nos ha encantado el trato y mi perro, feliz.",
  "Una gran profesional y amante de los perros.",
  "Cualquier duda puedes preguntarles.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Frenchieperbote, inicio">
          <span>FRENCHIE</span>
          <strong>PERBOTE</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#peluqueria">Peluquería</a>
          <a href="#formacion">Formación</a>
          <a href="#opiniones">Opiniones</a>
        </nav>
        <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          <ChatIcon /> <span>Pedir cita</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">PELUQUERÍA CANINA · SAN FERNANDO DE HENARES</p>
          <h1>
            Cada perro
            <span>tiene su manera</span>
            de estar guapo.
          </h1>
          <p className="hero-intro">
            Quince años entre baños, tijeras y perros que no se parecen en nada. Cuéntanos cómo es el tuyo y vemos qué necesita.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href={WHATSAPP} target="_blank" rel="noreferrer">
              <ChatIcon /> Pedir cita por WhatsApp
            </a>
            <a className="text-button" href="#formacion">Quiero aprender el oficio</a>
          </div>
        </div>
        <figure className="hero-image">
          <Image
            src="/images/hero-dogs.jpg"
            alt="Dos perros recién arreglados sobre una mesa de peluquería"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <figcaption>PELUQUERÍA · FORMACIÓN · TIENDA</figcaption>
        </figure>
      </section>

      <a className="rating" href={MAPS} target="_blank" rel="noreferrer" aria-label="Leer 55 reseñas en Google">
        <span className="rating-score">4,9</span>
        <span className="rating-stars">★★★★★</span>
        <span className="rating-copy"><strong>55 reseñas en Google</strong><small>Ver qué cuentan quienes ya han venido</small></span>
        <span className="rating-link">Leer reseñas</span>
      </a>

      <section className="services" id="peluqueria">
        <div className="services-title">
          <p className="eyebrow">TRES FORMAS DE ENTRAR</p>
          <h2>¿Qué necesitas hoy?</h2>
        </div>
        <div className="service-grid">
          <article className="service-card card-blue">
            <span>01</span>
            <ScissorsIcon />
            <h3>Quiero una cita</h3>
            <p>Baño, corte o mantenimiento. Escríbenos con la raza, el tamaño y lo que tienes en mente.</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon /> Hablar de mi perro</a>
          </article>
          <article className="service-card card-coral">
            <span>02</span>
            <strong className="card-mark">200 h</strong>
            <h3>Quiero aprender</h3>
            <p>Formación práctica de peluquería canina, en grupos pequeños y trabajando el oficio desde dentro.</p>
            <a href={COURSE_WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon /> Preguntar por el curso</a>
          </article>
          <article className="service-card card-cream">
            <span>03</span>
            <strong className="card-mark">SHOP</strong>
            <h3>Busco algo para él</h3>
            <p>Accesorios disponibles en la tienda online de Frenchieperbote.</p>
            <a href={SHOP} target="_blank" rel="noreferrer">Abrir la tienda</a>
          </article>
        </div>
      </section>

      <section className="experience">
        <figure className="experience-art">
          <Image
            src="/images/dog-grooming-portrait.jpg"
            alt="Perro recién arreglado sobre una mesa de peluquería canina"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption>15 años de peluquería canina</figcaption>
        </figure>
        <div className="experience-copy">
          <p className="eyebrow">PELUQUERÍA CANINA DESDE HACE 15 AÑOS</p>
          <h2>No hace falta que sepas qué corte pedir.</h2>
          <p>
            Cuéntanos cómo es, qué pelo tiene y cómo lleva normalmente la peluquería. Con eso podemos orientarte antes de la cita.
          </p>
          <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">
            <ChatIcon /> Consultar una cita
          </a>
        </div>
      </section>

      <section className="school" id="formacion">
        <div className="school-number">
          <strong>200</strong>
          <span>HORAS<br />PRÁCTICAS</span>
        </div>
        <div className="school-copy">
          <p className="eyebrow">CURSO PRÁCTICO DE PELUQUERÍA CANINA</p>
          <h2>El oficio se aprende haciéndolo.</h2>
          <p className="school-lead">
            Un curso de 200 horas para entender el trabajo, ganar seguridad y salir con una base real.
          </p>
          <ul>
            <li><span>01</span> Práctica desde el principio</li>
            <li><span>02</span> Atención individual y grupos reducidos</li>
            <li><span>03</span> Diploma al terminar</li>
          </ul>
          <a className="button button-yellow" href={COURSE_WHATSAPP} target="_blank" rel="noreferrer">
            <ChatIcon /> Preguntar por la próxima plaza
          </a>
        </div>
      </section>

      <section className="reviews" id="opiniones">
        <div className="reviews-head">
          <p className="eyebrow">LO DICEN EN GOOGLE</p>
          <h2>El resultado se ve. El trato se recuerda.</h2>
        </div>
        <div className="review-list">
          {reviews.map((review, index) => (
            <a href={MAPS} target="_blank" rel="noreferrer" className="review" key={review}>
              <span>0{index + 1}</span>
              <blockquote>“{review}”</blockquote>
              <small>Reseña pública en Google</small>
            </a>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-copy">
          <p className="eyebrow">ROSA PARDO, 1 · SAN FERNANDO DE HENARES</p>
          <h2>¿Le buscamos un hueco?</h2>
          <p>Escríbenos con su raza, tamaño y lo que necesita. Para el horario actualizado, consulta la ficha de Google.</p>
          <div className="contact-actions">
            <a className="button button-yellow" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon /> Pedir cita</a>
            <a className="button button-outline" href={MAPS} target="_blank" rel="noreferrer"><PinIcon /> Cómo llegar</a>
          </div>
        </div>
        <div className="contact-ticket">
          <span>FRENCHIEPERBOTE</span>
          <strong>4,9 ★</strong>
          <p>C. de Rosa Pardo, 1<br />28830 San Fernando de Henares</p>
          <a href="tel:+34675214221">675 214 221</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span>FRENCHIE</span><strong>PERBOTE</strong></a>
        <div className="footer-links">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
          <a href={EMAIL}>Email</a>
          <a href={SHOP} target="_blank" rel="noreferrer">Tienda</a>
        </div>
        <p>Peluquería canina y formación · Madrid</p>
      </footer>
    </main>
  );
}
