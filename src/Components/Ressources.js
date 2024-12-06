import React from 'react';

const Ressources = () => {
  return (
    <div className="resources-container">
      <main>
        <h3>Découvrez une sélection de ressources sur les parallèles entre le corps humain et l'océan.</h3>

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

        /* Resources Section */
        main {
          padding: 20px;
        }

        main h3 {
          text-align: left;
          margin-bottom: 30px;
          font-family: 'Advent Pro', serif;
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
          font-size: 1.2rem;
          color: #000;
          text-decoration: none;
          font-family: 'Advent Pro', serif;
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
