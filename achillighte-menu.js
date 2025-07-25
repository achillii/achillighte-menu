class AchillighteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 20px 0;
          font-family: 'Helvetica Neue', sans-serif;
          background: transparent;
        }

        nav a {
          position: relative;
          color: white;
          text-decoration: none;
          padding-bottom: 6px;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        nav a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #FFD580;
          opacity: 0.3;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        nav a:hover {
          color: #FFD580;
        }

        nav a:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }
      </style>

      <nav>
        <a href="#home">Home</a>
        <a href="#booking">Booking</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Service</a>
        <a href="#about">About Me</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
        <a href="/blog">Blog</a>
      </nav>
    `;
  }
}
customElements.define('achillighte-menu', AchillighteMenu);

