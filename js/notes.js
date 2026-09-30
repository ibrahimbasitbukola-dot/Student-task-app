function createNote(note) { return { ...note, id: makeId('note'), updatedAt: new Date().toISOString() }; }
