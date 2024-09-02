import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3750.000254706523!2d-44.348430558362594!3d-19.966491539923986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzAwLjkiUyA0NMKwMjAnNDguNSJX!5e0!3m2!1spt-BR!2sbr!4v1725280892523!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 + "px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
