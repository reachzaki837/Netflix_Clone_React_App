import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RowContainer = styled.div`
  margin: 20px 0;
  padding: 0 60px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const RowTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #e5e5e5;
`;

const RowContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const RowPosters = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 20px 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Poster = styled.img`
  width: ${props => props.isLargeRow ? '200px' : '150px'};
  height: ${props => props.isLargeRow ? '300px' : '225px'};
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.08);
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    width: ${props => props.isLargeRow ? '150px' : '120px'};
    height: ${props => props.isLargeRow ? '225px' : '180px'};
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }
  
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentRow = ({ title, movies, isLargeRow }) => {
    const rowRef = React.useRef(null);

    const scroll = (direction) => {
        if (rowRef.current) {
            const { current } = rowRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <RowContainer>
            <RowTitle>{title}</RowTitle>
            <RowContent>
                <ScrollButton
                    direction="left"
                    onClick={() => scroll('left')}
                >
                    <FaChevronLeft />
                </ScrollButton>

                <RowPosters ref={rowRef}>
                    {movies.map((movie, index) => (
                        <Poster
                            key={index}
                            src={movie.poster}
                            alt={movie.title}
                            isLargeRow={isLargeRow}
                        />
                    ))}
                </RowPosters>

                <ScrollButton
                    direction="right"
                    onClick={() => scroll('right')}
                >
                    <FaChevronRight />
                </ScrollButton>
            </RowContent>
        </RowContainer>
    );
};

export default ContentRow; 