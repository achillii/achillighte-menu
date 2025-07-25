class AchillighteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 20px 0;
          background: transparent;
          font-family: 'Helvetica Neue', sans-serif;
          position: relative;
        }

        /* خط یکسره زیر کل منو */
        nav::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.2); /* خاکستری خیلی ملایم */
          z-index: 0;
        }

        nav a {
          position: relative;
          color: white;
          text-decoration: none;
          padding-bottom: 8px;
          font-size: 16px;
          transition: color 0.3s ease;
          z-index: 1;
        }

        /* خط کوچک که فقط روی لینک مورد هاور ظاهر می‌شه */
        nav a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #FFD580;
          transform: scaleX(0.3);
          opacity: 0;
          transform-origin: center;
          transition: transform 0.3s ease, opacity 0.3s ease;
          z-index: 2;
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
        <a href="#blog">Blog</a>
      </nav>
    `;
  }
}

customElements.define("achillighte-menu", AchillighteMenu);
