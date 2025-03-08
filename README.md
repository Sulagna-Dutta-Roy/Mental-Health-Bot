# Mental Health Chatbot

A sleek, dark-themed chatbot inspired by Apple's design, built to provide mental health support using the **Gemini API**.

## Features
- AI-powered chatbot using **Google Gemini API**
- Dark-themed, gradient UI inspired by Apple
- Smooth message animations and user-friendly experience
- Fully responsive design

## Tech Stack
- **Frontend:** HTML, CSS , JS
- **Backend:** Node.js, Express.js
- **API:** Google Gemini API
- **Deployment:** Vercel (Frontend), Render (Backend)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mental-health-chatbot.git
   cd mental-health-chatbot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your **Gemini API key**:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```
5. Open `index.html` in your browser or use a local server.

## Deployment

### Deploy Frontend to Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

### Deploy Backend to Render
1. Push your code to GitHub.
2. Go to [Render](https://render.com/), create a new **Web Service**.
3. Connect your repository and select the branch.
4. Set **Environment Variables** (`GEMINI_API_KEY`).
5. Deploy!

## Usage
- Type your message and hit **Enter** or click **Send**.
- The chatbot responds using the Gemini API.
- Experience a smooth, stylish chat interface.

## License
This project is open-source under the MIT License.
