# GitaGPT: Wisdom from the Bhagavad Gita with AI

Welcome to GitaGPT, a project dedicated to utilizing the timeless wisdom of the Bhagavad Gita to address real-life challenges. We combine the ancient teachings of the Gita with cutting-edge AI technology to generate insightful responses to various problems people face in their daily lives.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Bhagavad Gita is a revered Hindu scripture offering guidance and inspiration to millions of people worldwide. At GitaGPT, we leverage OpenAI's GPT-3 language model to generate AI-generated responses based on carefully crafted prompts inspired by the Bhagavad Gita.

Our project consists of two main components:

1. The frontend, built using React, provides a user-friendly web interface for users to interact with GitaGPT and receive insightful responses.

2. The backend, created with Node.js and Express, handles API requests from the frontend, interacts with the OpenAI GPT-3 language model, and returns the AI-generated responses.

## Features

- Get insightful responses based on prompts inspired by the Bhagavad Gita.
- Explore solutions to various life challenges, all derived from the ancient wisdom of the Gita.
- Enjoy a user-friendly web interface to interact with GitaGPT.
- Listen to AI-generated responses using the text-to-speech feature.

## Folder Structure

```
GitaGPT/
  ├── frontend/
  │   ├── public/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── App.js
  │   │   ├── index.js
  │   │   └── ...
  │   ├── package.json
  │   └── ...
  └── server/
      ├── node_modules/
      ├── src/
      │   ├── routes/
      │   ├── index.js
      │   └── ...
      ├── .env
      ├── package.json
      └── ...
```

- The `frontend` folder contains all the files and code related to the React frontend of the application.
- The `server` folder contains the Node.js and Express backend code.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/niladri2002/GitaGPT.git
   cd GitaGPT
   ```

2. Install the required dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Install the required dependencies for the backend:

   ```bash
   cd ../server
   npm install
   ```

### How to Use

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

3. Access the GitaGPT web application in your browser at `http://localhost:3000`.

4. On the home page, enter your query or problem in the input field and click the "Find Wisdom" button.

5. GitaGPT will respond with an AI-generated answer inspired by Lord Krishna's teachings from the Bhagavad Gita.

6. You can listen to the response by clicking the "Listen" button or stop the speech using the "Stop" button.

7. To interact with GitaGPT using voice, click the microphone icon, and start speaking. GitaGPT will process your speech input and provide the corresponding response.

## Contributing

We welcome contributions from the community to enhance GitaGPT's capabilities and usability. Please feel free to submit issues or pull requests to help us improve this project.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of this license.

