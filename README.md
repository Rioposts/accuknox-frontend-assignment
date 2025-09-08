# AccuKnox Frontend Trainee Assignment

This project is a dynamic dashboard application built with React, as part of the frontend trainee assignment for AccuKnox.

## Features

* **Dynamic Dashboard:** The UI is rendered dynamically from a JSON data structure.
* **State Management:** Uses Zustand for centralized state management, making the app's data flow predictable and easy to maintain.
* **Add & Remove Widgets:** Users can dynamically add new widgets to any category from a predefined list.
* **Search Functionality:** The "Add Widget" modal includes a search bar to easily filter and find available widgets.
* **Chart Visualization:** Integrates the Recharts library to display placeholder charts for data visualization.

## Tech Stack

* **Framework:** React (with Vite)
* **State Management:** Zustand
* **Charting:** Recharts
* **Styling:** Plain CSS

## How to Run Locally

Follow these steps to get the project running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18.x or higher) and `npm` installed on your computer.

### 1. Clone the repository

```bash
git clone [https://github.com/Rioposts/accuknox-frontend-assignment.git](https://github.com/Rioposts/accuknox-frontend-assignment.git)
```

### 2. Navigate to the project directory

```bash
cd accuknox-frontend-assignment
```

### 3. Install dependencies

This will install all the necessary packages for the project, including React, Zustand, and Recharts.

```bash
npm install
```

### 4. Start the development server

This command will start the application and open it in your default browser.

```bash
npm run dev
```

The application should now be running at `http://localhost:5173`.