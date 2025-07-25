{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 class AchillighteMenu extends HTMLElement \{\
  connectedCallback() \{\
    this.innerHTML = `\
      <style>\
        nav \{\
          display: flex;\
          justify-content: center;\
          gap: 24px;\
          padding: 12px 0;\
          background: transparent;\
          font-family: 'Helvetica Neue', sans-serif;\
        \}\
        a \{\
          position: relative;\
          color: white;\
          text-decoration: none;\
          padding-bottom: 6px;\
          font-size: 16px;\
          transition: color 0.3s ease;\
        \}\
        a::after \{\
          content: "";\
          position: absolute;\
          left: 0;\
          bottom: 0;\
          height: 2px;\
          width: 100%;\
          background-color: #FFD580;\
          opacity: 0.3;\
          transform: scaleX(0);\
          transform-origin: left;\
          transition: transform 0.3s ease, opacity 0.3s ease;\
        \}\
        a:hover \{\
          color: #FFD580;\
        \}\
        a:hover::after \{\
          transform: scaleX(1);\
          opacity: 1;\
        \}\
      </style>\
      <nav>\
        <a href="#home">Home</a>\
        <a href="#booking">Booking</a>\
        <a href="#portfolio">Portfolio</a>\
        <a href="#services">Service</a>\
        <a href="#about">About Me</a>\
        <a href="#testimonial">Testimonial</a>\
        <a href="#contact">Contact</a>\
        <a href="/blog">Blog</a>\
      </nav>\
    `;\
  \}\
\}\
\
customElements.define("achillighte-menu", AchillighteMenu);}