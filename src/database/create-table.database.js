import { sql } from "./pg-connection.database.js";

// sql`
// DROP TABLE IF EXISTS videos
// `.then(() => {
//   console.log("Tabela removida!");
// });

sql`
CREATE TABLE videos (
  id          TEXT PRIMARY KEY,
  title       TEXT,
  description TEXT,
  duration    INTEGER
)`.then(() => {
  console.log("Tabela criada!");
});
