# Sprint Notes

A lightweight web application for managing sprint notes and team updates. Built with Node.js, HTML, CSS, and JavaScript.

## Overview

Sprint Notes is a simple yet effective tool for development teams to track sprint activities, blockers, and progress. The application provides an intuitive interface for creating, viewing, and managing sprint-related notes.

## Features

- **Create Sprint Notes**: Add new notes with title and description
- **View All Notes**: Browse through all sprint notes in a clean, organized layout
- **Delete Notes**: Remove outdated or unnecessary notes
- **Persistent Storage**: Notes are saved and persist across sessions

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: JSON file-based storage (easily upgradable to database)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AaronPrimmer/Sprint-Notes.git
cd sprint-notes
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
node sprintNotes.js
```

4. Open your browser and navigate to:

```
http://localhost:3001
```

## Usage

### Creating a New Note

1. Click the "Add Note" button
2. Enter a title and description
3. Click "Save" to store the note

### Deleting a Note

1. Click the "Delete" button on any note

## API Endpoints

- `GET /api/notes` - Retrieve all notes
- `POST /api/notes` - Create a new note
- `DELETE /api/notes/:id` - Delete a note

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please open an issue on GitHub or contact the maintainers.

## Acknowledgments

- Built with passion for agile development teams
- Inspired by the need for simple, effective sprint tracking tools
