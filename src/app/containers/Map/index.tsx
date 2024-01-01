import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3750.8298914881666!2d-44.41638942477269!3d-19.931571981457164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU1JzUzLjciUyA0NMKwMjQnNDkuNyJX!5e0!3m2!1sen!2sbr!4v1704133654537!5m2!1sen!2sbr"
        width="1600"
        height="400"
        style={{ border: 0 + "px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
