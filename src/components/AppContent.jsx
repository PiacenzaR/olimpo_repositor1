import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup'; 
import Section from './Section';
import ImageGallery from './ImageGallery';
import TeamPhotos from './TeamPhotos';
import Cadastro from '../outros component/cadastro';


function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <>
          <section className="main-section">
            <img 
              src="../assets/academia1.gif" 
              alt="Academia" 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                zIndex: -1
              }}
            />
            <div className="overlay">
              <h1>SEJAM BEM-VINDOS AO OLIMPO!</h1>
              <ButtonGroup navigateTo={navigateTo} />
            </div>
          </section>

          <Section title="Força, foco, disciplina" content="A motivação está dentro de você!">
            <ImageGallery />
          </Section>

          <Section title="No OLIMPO, cada treino é um desafio" content="Se desafie e evolua com a gente!">
            <img src="imagem4.jpg" alt="Desafio no OLIMPO" className="section-image" />
          </Section>

          <Section title="Equipe OLIMPO">
            <TeamPhotos />
          </Section>

          <Section title="Motivação e Resultados" content="Conquiste o seu melhor com a nossa equipe de treinadores especializados!">
            <img src="imagem5.jpg" alt="Academia" className="full-width-image" />
          </Section>

          <footer />
        </>
      )}

      {currentPage === 'cadastrar' && <Cadastro navigateTo={navigateTo} />}
    </div>
  );
}


export default AppContent;
