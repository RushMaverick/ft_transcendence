
# Transcendence: Ping Pong contest Website

Transcendence is an innovative and engaging online Pong game platform designed to connect players from around the world. Built with real-time multiplayer functionality, the platform offers a modern twist to the classic Pong game, featuring advanced player matching, friend systems, and competitive ranking. The project is designed to be scalable, secure, and user-friendly, catering to both casual players and competitive gamers.



## Table of Contents

1. [Collaborators](#collaborators)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [API Documentation](#api-documentation)
8. [License](#license)
9. [Contact](#contact)




## Collaborators

- [Rasmus Rask](https://github.com/RushMaverick) - *Project Manager & Frontend Developer*
- [Rosa Mäkinen](https://github.com/rosamakinen) - *Frontend Developer*
- [Teemu Spoof](https://github.com/Stte) - *Full Stack Developer*
- [Yoonseon Lee](https://github.com/ynslee) - *Frontend Developer*
- [Juan Esteban Pelaez](https://github.com/jestebanpelaez18) - *Backend Developer*


## Features

- **User Management**: Secure user registration, authentication, and profile management, including avatar uploads and friend interactions. Utilizes JWT for token-based authentication.
- **Friends Functionality**: Comprehensive friend management with the ability to send, receive, and manage friend requests.
- **Multiplayer Gameplay**: Real-time multiplayer support with WebSocket integration for seamless online play.
- **Remote Players**: Seamless gameplay experience for users located on separate computers.
- **Tournaments**: Organize and participate in tournaments.
- **Multi-language Support**: User interface available in multiple languages to accommodate a diverse audience.
- **Advanced 3D Graphics**: Enhanced visual experience for the Pong game using advanced 3D techniques with ThreeJS.
- **API Development**: Robust APIs developed with Django REST framework.
- **Server-Side Pong**: Replaced the basic Pong game with a server-side implementation that handles gameplay, ball movement, scoring, and player interactions. API supports both web interface and Command-Line Interface (CLI) interaction.
- **Database Integration**: PostgreSQL used for reliable data management and consistency.
- **GDPR Compliance**: Features for user anonymization and local data management to meet GDPR requirements.
- **API Testing**: Tested using Postman to ensure reliability.
- **Browser Compatibility**: Improved support for various web browsers to ensure broad accessibility.
- **Scalable Architecture**: Built using Django Channels and Docker for efficient scaling and deployment.
## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Django, Django REST Framework
- **Database:** PostgreSQL
- **WebSocket**: Django Channels
- **API Testing:** Postman
- **Deployment:**: Nginx, Docker

## Installation

Follow these steps to set up and run the project using Docker and Docker Compose. The `Makefile` is provided to streamline the process.

### Prerequisites

Make sure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/RushMaverick/ft_transcendence.git
cd ft_transcendence
```

### Build and Start the Project

Use the Makefile to handle the setup, build, and start processes. Run:

```bash
make
```
This command will:

- Install frontend dependencies using npm.
- Build the frontend assets.
- Create necessary directories and copy static files.
- Build and start the Docker containers defined in docker-compose.yml

## Usage


```

