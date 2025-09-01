import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import { movieData } from './data/movieData';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
`;

const ContentContainer = styled.div`
  padding-top: 70px;
`;

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppContainer>
            <Navbar isScrolled={isScrolled} />
            <ContentContainer>
                <Hero />
                {movieData.map((category, index) => (
                    <ContentRow
                        key={index}
                        title={category.title}
                        movies={category.movies}
                        isLargeRow={index === 0}
                    />
                ))}
            </ContentContainer>
        </AppContainer>
    );
}

export default App; 