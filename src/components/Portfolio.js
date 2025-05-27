// components/Portfolio.js
import React, { useState } from "react";

const projects = [
  { id: 1, title: "Project One", category: "Web", img: "p1.jpg",alt: "Project One" },

  { id: 2, title: "Project Two", category: "Mobile", img: "/diary.jpg" ,alt: "Project Two" },
  { id: 3, title: "Project Three", category: "Web", img: "p1.jpg" },
  { id: 4, title: "Project Four", category: "Design", img: "diary.jpg" },
];

const categories = ["All", "Web", "Mobile", "Design"];

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="mb-4">Portfolio</h2>

        <div className="mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn me-2 ${
                filter === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredProjects.map(({ id, title, img }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img src={img} alt={title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => alert(`Show details for ${title}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
