📝 Notes App (React)

A modern and minimal Notes Application built completely with React.
The app allows users to create, pin, archive, mark important, and delete notes with a smooth and intuitive UI.

This project is designed with clean state management, scalable architecture, and real-world React patterns.

🚀 Features

➕ Add new notes with title and content

📌 Pin / Unpin notes

📂 Archive & Unarchive notes

⭐ Mark notes as Important

🗑️ Delete notes from any section

🧭 Separate pages for:

Home

Archive

Important

🎨 Clean & responsive UI using Tailwind CSS

⚡ Fast navigation with React Router

🧠 Centralized state management using Context + Reducer

🛠️ Tech Stack

React (Hooks)

React Router DOM

Context API

useReducer

Tailwind CSS

UUID (for unique note IDs)

🧠 State Management Approach

The app uses a single source of truth:

notes: [
  {
    id,
    title,
    text,
    isPinned,
    isArchived,
    isImportant
  }
]


All pages (Home, Archive, Important) are derived using filters, which:

Prevents state duplication

Avoids sync bugs

Makes delete work everywhere automatically

📁 Folder Structure
src/
│
├── components/
│   ├── NotesCard/
│   ├── Sidebar/
│
├── context/
│   └── notes-context.jsx
│
├── reducers/
│   └── notesReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Archive.jsx
│   ├── Important.jsx
│
├── App.jsx
├── main.jsx

🧪 Available Actions (Reducer)

ADD_NOTE

TOGGLE_PIN

TOGGLE_ARCHIVE

TOGGLE_IMPORTANT

DELETE

CLEAR_INPUT

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/notes_app.git


Go to project directory

cd notes_app


Install dependencies

npm install


Start development server

npm run dev


Open in browser:

http://localhost:5173

📸 Screenshots (Optional)



🌱 Future Improvements

🔍 Search notes

🏷️ Tags / Labels

💾 LocalStorage / Backend integration

🌙 Dark mode

🔄 Undo delete

👨‍💻 Author

Yash Mudgal
B.Tech Student | Frontend Developer | React Enthusiast

GitHub: yashmudgal390

⭐ Show Your Support

If you like this project, don’t forget to star ⭐ the repository
It really helps!
