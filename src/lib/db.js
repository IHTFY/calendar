// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  events: "id, date, type, name, image"
});