export const findNote = (notes=[], note_id) =>
  notes.find(note => note.id === note_id)