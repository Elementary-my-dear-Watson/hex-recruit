# Hex Recruit

## Description

The **Hex Recruit** is a React-based web application built with TypeScript that allows employers to search and review potential candidates via the GitHub API. Users can view candidates' details, accept or reject them, and keep track of potential hires. The application features a sleek interface with persistent storage, making it easy to manage and revisit saved candidates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Search GitHub Users:** Enter a username or a search term to find GitHub users.
- **Display User Information:** View details like username, avatar, profile URL, and additional user stats.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Error Handling:** Displays meaningful error messages for failed requests (e.g., unauthorized access, rate limits).
## Technologies Used
- **Frontend:** React, TypeScript, React Router
- **API:** GitHub REST API
- **Styling:** Bootstrap (with customizations), CSS
- **Build Tools:** Vite
## Installation
### Prerequisites
- **Node.js** and **npm** installed on your machine
- A **GitHub Personal Access Token** with read-only access to public data
### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/github-user-search.git
   cd github-user-search
2. **Install Dependencies:**
   ```bash
   npm install
3. **Setup the Environment Variables:**
   ```bash
   VITE_GITHUB_TOKEN=your_github_token_here
4. **Run the Application:**
   ```bash
   npm run dev
4. **Build the Application:**
   ```bash
   npm run build
## Usage
1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Enter a GitHub username in the search bar.
3. Click **Search** to view the user's GitHub profile information.
## Contributing
- **Fork the Repository**
- **Create a New Branch:** git checkout -b feature-branch
- **Make your Changes**
- **Commit Your Changes:** git commit -m "Add new feature"
- **Push to the branch:** git push origin feature-branch
- **Create a new pull request**
## License
- **This project is licensed under the MIT License**
## Questions
- **If you have any questions about the project, feel free to contact me:**
- GitHub: https://github.com/Elementary-my-dear-Watson
- Email: marthacdenzer@gmail.com