import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const HeroContainer = styled.div`
  height: 80vh;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  padding: 0 60px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    height: 60vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PlayButton = styled(Button)`
  background: #ffffff;
  color: #000000;
  
  &:hover {
    background: #e5e5e5;
  }
`;

const InfoButton = styled(Button)`
  background: rgba(109, 109, 110, 0.7);
  color: #ffffff;
  
  &:hover {
    background: rgba(109, 109, 110, 0.9);
  }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBackground />
            <HeroContent>
                <HeroTitle>Stranger Things</HeroTitle>
                <HeroDescription>
                    When a young boy vanishes, a small town uncovers a mystery involving
                    secret experiments, terrifying supernatural forces and one strange little girl.
                </HeroDescription>
                <HeroButtons>
                    <PlayButton>
                        <FaPlay />
                        Play
                    </PlayButton>
                    <InfoButton>
                        <FaInfoCircle />
                        More Info
                    </InfoButton>
                </HeroButtons>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero; 