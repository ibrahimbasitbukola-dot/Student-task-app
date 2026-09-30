function updateProfile(fields) { const user = currentUser(); if (!user) return; const users = getUsers().map(item => item.id === user.id ? { ...item, ...fields } : item); saveUsers(users); }
