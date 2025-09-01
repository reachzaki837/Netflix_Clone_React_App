import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  transition: all 0.3s ease;
  background: ${props => props.isScrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)'};
  display: flex;
  align-items: center;
  padding: 0 60px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 92px;
  height: 25px;
  margin-right: 40px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #e5e5e5;
  text-decoration: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #b3b3b3;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  color: #e5e5e5;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #b3b3b3;
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background: #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #555;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: transparent;
  border: 1px solid #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e5e5e5;
    width: 250px;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const Navbar = ({ isScrolled }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <Nav isScrolled={isScrolled}>
            <Logo
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            />

            <NavMenu>
                <NavItem href="#home">Home</NavItem>
                <NavItem href="#tv-shows">TV Shows</NavItem>
                <NavItem href="#movies">Movies</NavItem>
                <NavItem href="#new">New & Popular</NavItem>
                <NavItem href="#my-list">My List</NavItem>
                <NavItem href="#browse">Browse by Languages</NavItem>
            </NavMenu>

            <NavRight>
                <SearchContainer>
                    {showSearch && (
                        <SearchInput
                            placeholder="Search for titles, genres..."
                            autoFocus
                        />
                    )}
                    <Icon onClick={() => setShowSearch(!showSearch)}>
                        <FaSearch />
                    </Icon>
                </SearchContainer>

                <Icon>
                    <FaBell />
                </Icon>

                <UserAvatar>
                    <FaUser />
                </UserAvatar>
            </NavRight>
        </Nav>
    );
};

export default Navbar; 