import React from 'react';

const Ressources = () => {
  return (
    <div className="resources-container">
      <header className="header">
        <h1 className="logo">Omer Dallor</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#ressources">Ressources</a></li>
            <li><a href="#quiz">Quiz</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Découvrez une sélection de ressources sur les parallèles entre le corps humain et l'océan.</h2>

        <div className="resources">
          <div className="resource-item">
            <span role="img" aria-label="earth">🌍</span>
            <div>
              <a href="https://www.nationalgeographic.com/environment/oceans/" target="_blank" rel="noopener noreferrer">
                National Geographic - Océans
              </a>
            </div>
          </div>

          <div className="resource-item">
            <span role="img" aria-label="brain">🧠</span>
            <div>
              <a href="https://www.britannica.com/science/human-body" target="_blank" rel="noopener noreferrer">
                Encyclopædia Britannica - Le corps humain
              </a>
            </div>
          </div>

          <div className="resource-item">
            <span role="img" aria-label="ocean">🌊</span>
            <div>
              <a href="https://www.bbc.com/earth/story/20160412-the-incredible-ways-the-ocean-and-your-body-are-connected" 
                 target="_blank" 
                 rel="noopener noreferrer">
                BBC - Les liens incroyables entre l'océan et le corps humain
              </a>
            </div>
          </div>

          <div className="resource-item">
            <span role="img" aria-label="book">📖</span>
            <div>
              <a href="https://www.amazon.fr/Lhomme-mer-Yves-Paccalet/dp/2226125684" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Livre : "L'homme et la mer" d'Yves Paccalet
              </a>
            </div>
          </div>

          <div className="resource-item">
            <span role="img" aria-label="video">🎥</span>
            <div>
              <a href="https://www.youtube.com/watch?v=nNtVBcKuqxo" target="_blank" rel="noopener noreferrer">
                Documentaire : "L'océan, notre source de vie" (YouTube)
              </a>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        /* Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #007bff;
          color: white;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
        }

        nav {
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #ffeb3b;
        }

        /* Resources Section */
        main {
          padding: 20px;
        }

        main h2 {
          text-align: center;
          margin-bottom: 30px;
        }

        .resources {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 20px 0;
        }

        .resource-item {
          display: flex;
          align-items: center;
          background: #f9f9f9;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }

        .resource-item span {
          font-size: 2rem;
          margin-right: 15px;
        }

        .resource-item a {
          font-size: 1rem;
          color: #000;
          text-decoration: none;
        }

        .resource-item a:hover {
          text-decoration: underline;
          color: #007bff;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-direction: column;
            gap: 10px;
          }

          .logo {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Ressources;
