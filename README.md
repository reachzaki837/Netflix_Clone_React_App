# Netflix Clone

A modern, responsive Netflix clone built with React and styled-components, featuring a beautiful UI similar to the original Netflix platform.

## Features

- 🎬 **Hero Section** - Featured content with background image and action buttons
- 📺 **Content Rows** - Horizontal scrollable movie/show categories
- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔍 **Search Functionality** - Interactive search bar in the navigation
- 🎭 **Smooth Animations** - Hover effects and transitions
- 🐳 **Docker Support** - Easy deployment with Docker and Docker Compose

## Tech Stack

- **Frontend**: React 18, Styled Components
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx

## Quick Start

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Build and run with Docker**
   ```bash
   # Development mode (easier to test)
   docker build -f Dockerfile.dev -t netflix-clone-dev .
   docker run -d -p 8080:3000 --name netflix-clone-dev-container netflix-clone-dev
   ```

3. **Access the application**
   - Open your browser and go to `http://localhost:8080`

### Alternative: Using Docker Compose
```bash
docker-compose up --build
# Access at http://localhost:3000
```

## AWS EC2 Linux Deployment

### Prerequisites

Before deploying to AWS EC2, ensure you have:
- AWS account with EC2 access
- EC2 instance running Amazon Linux 2 or Ubuntu
- Security group configured to allow HTTP (port 80) and HTTPS (port 443)
- SSH access to your EC2 instance

### System Requirements

**Minimum Requirements:**
- **CPU**: 1 vCPU
- **RAM**: 2 GB
- **Storage**: 20 GB
- **OS**: Amazon Linux 2, Ubuntu 20.04+, or CentOS 8+

**Recommended Requirements:**
- **CPU**: 2 vCPU
- **RAM**: 4 GB
- **Storage**: 40 GB
- **OS**: Amazon Linux 2 or Ubuntu 22.04

### Step-by-Step Deployment

#### 1. Connect to Your EC2 Instance
```bash
# Or using username for Ubuntu
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

#### 2. Update System Packages
```bash
# For Ubuntu
sudo apt update && sudo apt upgrade -y
```

#### 3. Install Required Software

**Install Node.js and npm:**
```bash
# For Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

**Install Docker:**
```bash
# For Ubuntu
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -a -G docker ubuntu

# Logout and login again, or run:
newgrp docker
```

**Install Git:**
```bash
# For Ubuntu
sudo apt-get install -y git
```

#### 4. Clone and Deploy the Application

```bash
# Clone the repository
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone

# Build and run with Docker (Production)
docker build -t netflix-clone .
docker run -d -p 80:80 --name netflix-clone-app netflix-clone

# Or for development mode
docker build -f Dockerfile.dev -t netflix-clone-dev .
docker run -d -p 3000:3000 --name netflix-clone-dev netflix-clone-dev
```

#### 5. Configure Security Groups

In AWS Console:
1. Go to EC2 → Security Groups
2. Select your instance's security group
3. Add inbound rules:
   - **Type**: HTTP, **Port**: 80, **Source**: 0.0.0.0/0
   - **Type**: HTTPS, **Port**: 443, **Source**: 0.0.0.0/0 (optional)
   - **Type**: Custom TCP, **Port**: 3000, **Source**: 0.0.0.0/0 (if using dev mode)

#### 6. Access Your Application

- **Production**: `http://your-ec2-public-ip`
- **Development**: `http://your-ec2-public-ip:3000`

### Using Docker Compose (Alternative)

```bash
# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone and run
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
docker-compose up -d
```

### Production Deployment with Nginx

For better performance in production:

```bash
# Build production image
docker build -t netflix-clone .

# Run with nginx
docker run -d -p 80:80 --name netflix-clone-prod netflix-clone

# Check logs
docker logs netflix-clone-prod

# Monitor container
docker stats netflix-clone-prod
```

### SSL/HTTPS Setup (Optional)

For HTTPS support:

```bash
# Install Certbot
sudo yum install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Monitoring and Maintenance

```bash
# Check container status
docker ps

# View logs
docker logs netflix-clone-app

# Update application
git pull
docker build -t netflix-clone .
docker stop netflix-clone-app
docker rm netflix-clone-app
docker run -d -p 80:80 --name netflix-clone-app netflix-clone

# Backup data (if any)
docker cp netflix-clone-app:/app/data ./backup/
```

### Troubleshooting

**Common Issues:**

1. **Port already in use:**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo kill -9 <PID>
   ```

2. **Docker permission denied:**
   ```bash
   sudo usermod -a -G docker $USER
   newgrp docker
   ```

3. **Out of memory:**
   ```bash
   # Check memory usage
   free -h
   # Increase swap if needed
   sudo fallocate -l 2G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

4. **Application not accessible:**
   ```bash
   # Check if container is running
   docker ps
   # Check container logs
   docker logs netflix-clone-app
   # Check firewall
   sudo iptables -L
   ```

### Development Mode

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Access the application**
   - Open your browser and go to `http://localhost:3000`

## Docker Commands

### Development Docker (Recommended for testing)
```bash
# Build development image
docker build -f Dockerfile.dev -t netflix-clone-dev .

# Run development container
docker run -d -p 8080:3000 --name netflix-clone-dev-container netflix-clone-dev

# Access at http://localhost:8080
```

### Production Docker
```bash
# Build production image
docker build -t netflix-clone .

# Run production container
docker run -p 3000:80 netflix-clone
```

### Docker Management
```bash
# Check running containers
docker ps

# Stop container
docker stop netflix-clone-dev-container

# Start container
docker start netflix-clone-dev-container

# Remove container
docker rm netflix-clone-dev-container

# View logs
docker logs netflix-clone-dev-container
```

### Using Docker Compose
```bash
# Start the application
docker-compose up

# Start in background
docker-compose up -d

# Stop the application
docker-compose down

# Rebuild and start
docker-compose up --build
```

## Project Structure

```
netflix-clone/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   └── ContentRow.js
│   ├── data/
│   │   └── movieData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── Dockerfile          # Production build with nginx
├── Dockerfile.dev      # Development build with React dev server
├── docker-compose.yml
├── nginx.conf
├── package.json
├── .dockerignore
├── .gitignore
└── README.md
```

## Features Breakdown

### Navigation Bar
- Netflix logo
- Menu items (Home, TV Shows, Movies, etc.)
- Search functionality
- User profile and notifications

### Hero Section
- Featured content background
- Title and description
- Play and More Info buttons
- Responsive design

### Content Rows
- Multiple categories (Trending, Popular, New Releases, etc.)
- Horizontal scrolling with arrow navigation
- Hover effects on movie posters
- Responsive grid layout

## Customization

### Adding New Content
Edit `src/data/movieData.js` to add new categories or movies:

```javascript
{
  title: "Your Category",
  movies: [
    {
      title: "Movie Title",
      poster: "image-url"
    }
  ]
}
```

### Styling
The application uses styled-components for styling. You can modify the styles in each component file.

## Performance Optimizations

- **Multi-stage Docker build** for smaller production images
- **Nginx configuration** with gzip compression and caching
- **Optimized images** with proper sizing
- **Lazy loading** for better performance
- **Development and production Docker configurations** for different use cases

## Testing

The application has been tested and verified to work with:
- ✅ React development server (`npm start`)
- ✅ Docker development container (`Dockerfile.dev`)
- ✅ Docker production container (`Dockerfile`)
- ✅ Cross-browser compatibility
- ✅ Responsive design on multiple screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only. Netflix is a registered trademark of Netflix, Inc.

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 
