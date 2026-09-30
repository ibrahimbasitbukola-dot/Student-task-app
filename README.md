# StudentHub — Editable Vanilla Source Project

StudentHub is a **free, beginner-friendly frontend prototype** built with HTML5, CSS3, Vanilla JavaScript ES6+, Bootstrap 5, and Bootstrap Icons. It is independent of React, TypeScript, Tailwind, Node.js, PHP, Python, and website-builder lock-in.

## Important authentication and storage note

This project implements local prototype authentication in the browser. Accounts, hashed passwords, notifications, PDFs, and student data are stored in `localStorage` on the current device. This is useful for learning and local demos, but it is **not production authentication or production file storage**. For a real service, replace `js/auth.js` and `js/storage.js` with HTTPS API calls to a secure backend with server-side password hashing, secure sessions/tokens, database storage, password reset, email verification, and cloud file storage.

There are no pre-created users and no demo data. The first launch starts with zero accounts.

## Folder structure

```text
studenthub-vanilla/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── tasks.html
├── courses.html
├── timetable.html
├── exams.html
├── notes.html
├── gpa.html
├── attendance.html
├── expenses.html
├── study-planner.html
├── resources.html
├── tools.html
├── profile.html
├── css/
│   ├── style.css
│   └── auth.css
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── storage.js
│   ├── dashboard.js
│   ├── tasks.js
│   ├── courses.js
│   ├── timetable.js
│   ├── exams.js
│   ├── notes.js
│   ├── gpa.js
│   ├── attendance.js
│   ├── expenses.js
│   ├── study-planner.js
│   ├── tools.js
│   └── profile.js
└── assets/
    ├── images/README.md
    └── icons/README.md
```

## Run locally

1. Download and extract this folder.
2. Open the extracted folder in VS Code.
3. Double-click `index.html` for a quick static preview, or use VS Code's Live Server extension for the most reliable local experience.
4. Select **Create account**, register a new student, and sign in.
5. Add a course and task, choose a deadline/reminder, create a note, and try the dashboard quick actions.
6. Refresh or close and reopen the project; the data remains on that browser/device.
7. Edit files in `css/` and `js/` and refresh the browser to see changes.

## Features and upgrade highlights

- Tasks support descriptions, course assignment, date, time, priority, edit, complete/reopen, delete confirmation, overdue detection, and reminders.
- Reminders are reliable while the app is open and appear in the notification center. Browser notifications can be enabled by the user when supported. A closed-browser notification service requires a future PWA/service worker or backend.
- Notes support create, edit, save, delete confirmation, title/course/content search, course filtering, sorting, unsaved-change protection, and local PDF attachments.
- PDFs are validated as PDFs and limited to 2 MB for this localStorage prototype. They are never uploaded to an external service.
- The dashboard shows real current-user data, quick actions, upcoming tasks, overdue work, progress, notifications, and recent activity.
- Dark mode is stored per user. All important records remain isolated by user ID.

## Reminder behavior

In-app reminders are checked while a StudentHub page is open. Browser notifications are requested only when the user clicks **Enable browser alerts**, and the user's permission choice is respected. A website that is completely closed cannot reliably deliver localStorage-only notifications. Closed-browser reminders require a PWA service worker, push subscription, or backend notification service in a future version.

## PDF behavior

PDF files are validated before saving and stored as local data URLs only for this prototype. The current limit is 2 MB per PDF to avoid pretending that localStorage is suitable for large private files. A production version should use private authenticated file storage and a backend record associated with the user's account.

## Test checklist

- Register with a new email.
- Try the same email again and verify the duplicate is rejected.
- Try an incorrect password and verify the generic error message.
- Use the password visibility toggle and verify the password remains hidden by default.
- Verify the account-created success state appears before entering the dashboard.
- Open `dashboard.html` while signed out and verify redirect to `login.html`.
- Add a task and mark it complete.
- Log out, sign in again, and verify the task remains.
- Create a second account and verify it starts empty and cannot see the first account's data.
- Create a task with a past deadline and verify it appears under **Overdue** and in the notification center.
- Create, edit, search, filter, sort, and delete a note; verify the delete confirmation appears.
- Try uploading a non-PDF or a PDF over 2 MB and verify a clear validation message appears.
- Toggle dark mode and verify it remains after a refresh.
- Resize to a mobile viewport and verify the bottom navigation, cards, forms, and buttons remain usable.

## Bootstrap

Bootstrap 5.3.3 and Bootstrap Icons are loaded from jsDelivr in each HTML file. The application itself remains plain HTML, CSS, and JavaScript. If you need an offline version, download those assets into local `assets/` files and update the `<link>` and `<script>` paths.
