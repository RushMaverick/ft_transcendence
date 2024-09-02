
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

1. **Access the Web Application**: Open your web browser and navigate to [https://localhost:8443](https://localhost:8443). This is where you can interact with the user interface of the Pong game and manage your account.

2. **User Authentication**:
   - **Sign Up**: Register a new account by filling out the sign-up form on the main page.
   - **Log In**: Access your account by logging in with your credentials.
   - **Profile Management**: Once logged in, navigate to the
   - **Profile** page from the sidebar. You can update your profile information, upload an avatar, and manage your settings. The profile page will display your username, avatar, and game statistics such as wins and losses.
     
     - **Win/Loss Stats**: Track your performance with win and loss counts displayed alongside fun emojis.
     - **Match History**: Click on "View Match History" to see detailed statistics about your previous games.

3. **Playing the Game**:
   - **Multiplayer**: Join or create multiplayer matches and play against others. Players can compete in real-time matches directly from the web interface.
   - **Tournaments**: Participate in or organize tournaments through the application interface.

4. **Friends and Social Features**:
   - **Add Friends**: Use the **Friends** section in the sidebar to send and receive friend requests. View your friends' online status and invite them to play.
   - **Profile Viewing**: Click on friends' profiles to view their statistics and match history.

5. **Settings**:
   - Adjust application settings, including changing the language for multi-language support and updating account details.

6. **Languages**: Use the language selector in the settings menu to switch between supported languages, accommodating different user preferences.



## Screenshots

### Log In

[![Log In](https://i.postimg.cc/gcxKZxVt/temp-Imagey-REs-RI.avif)](https://postimg.cc/grPR9kB3)

- The log-in screen provides a secure and user-friendly interface for users to access their accounts. It features input fields for email and password, along with options to register a new account or recover forgotten passwords. This streamlined design ensures a smooth authentication process for users.

### Dashboard

[![Dashboard](https://i.postimg.cc/jjh7pbz7/temp-Imagel3-UM0n.avif)](https://postimg.cc/p9prj3cW)

- The dashboard acts as the central hub of the application, offering quick access to key features such as user profiles, friends, ongoing games, and settings. It displays essential information and notifications, allowing users to easily navigate and manage their activities within the application.

### Profile

[![Profile](https://i.postimg.cc/ZRTrnRTH/temp-Image-EW4-Ua9.avif)](https://postimg.cc/yJbJr733)

- The profile page showcases detailed user information, including username, avatar, and game statistics such as wins and losses. Users can view their match history and update personal information. The design is clean and intuitive, making it easy to manage and personalize user profiles.

### Friend Request

[![Friend Request](https://i.postimg.cc/4xQvgVGy/temp-Image-Bqj-Hc3.avif)](https://postimg.cc/v4Dx71cw)

- The friend request screen allows users to manage their social interactions by sending, accepting, or declining friend requests. This feature enhances the social connectivity of the application, encouraging users to engage with others and form connections within the gaming community.

### Game

[![Game](https://i.postimg.cc/GmwT92KD/temp-Image-KUGXep.avif)](https://postimg.cc/KRf8Hmdc)

- The game screen provides a dynamic and immersive experience where users can participate in real-time multiplayer Pong games. The interface is designed to be responsive and interactive, ensuring a seamless gaming experience. Players can enjoy head-to-head matches, complete with score tracking and responsive controls.


## License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details. 




## Contact

Contact us via linkedin.

- [Rasmus Rask](https://www.linkedin.com/in/rasmus-rask/)
- [Juan Esteban Pelaez](https://www.linkedin.com/in/jestebanpelaez18/)
