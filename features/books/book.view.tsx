export const live = true;

export const load = {
  books: { list: "book" },
  heading: { value: "Reading list" },
};

export default function BookView(props) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Reading list</title>
        <style>
          {
            ":root{--bg:#f4f0e8;--ink:#1a1625;--muted:#6b6578;--line:#d4cfc4;--accent:#4338ca;--accent-ink:#eef2ff;--danger:#b91c1c;--card:#fffcf5}*{box-sizing:border-box}body{margin:0;font-family:Source Serif 4,Georgia,serif;background:linear-gradient(165deg,#e0e7ff 0%,transparent 35%),linear-gradient(15deg,#fef3c7 0%,transparent 40%),var(--bg);color:var(--ink);min-height:100vh}.shell{max-width:42rem;margin:0 auto;padding:1.5rem 1.25rem 3rem}nav.puddly-nav{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem 1.25rem;margin-bottom:1.5rem;padding-bottom:0.75rem;border-bottom:1px solid var(--line);font-family:IBM Plex Sans,Segoe UI,sans-serif;font-size:0.95rem}nav.puddly-nav a{color:var(--accent);text-decoration:none;font-weight:600}nav.puddly-nav a:hover{text-decoration:underline}nav.puddly-nav button{font:inherit;cursor:pointer;border:1px solid var(--line);background:#fff;padding:0.35rem 0.65rem;color:var(--ink)}h1{font-family:IBM Plex Sans,Segoe UI,sans-serif;font-size:1.85rem;margin:0 0 0.35rem;letter-spacing:-0.02em}.lede{color:var(--muted);margin:0 0 1.25rem;font-size:1.05rem}.book-create{display:grid;gap:0.65rem;margin-bottom:1.5rem;background:var(--card);padding:1rem;border:1px solid var(--line);font-family:IBM Plex Sans,Segoe UI,sans-serif}.book-create label{display:flex;flex-direction:column;gap:0.3rem;font-size:0.88rem}.book-create input,.book-create select,.book-create textarea{padding:0.5rem 0.65rem;border:1px solid var(--line);font:inherit;background:#fff}.book-create button[type=submit]{justify-self:start;font:inherit;cursor:pointer;padding:0.5rem 1rem;background:var(--accent);color:var(--accent-ink);border:1px solid var(--accent)}.book-list{list-style:none;margin:0;padding:0;font-family:IBM Plex Sans,Segoe UI,sans-serif}.book-list:empty::after{content:\"No books yet — add one above.\";display:block;color:var(--muted);padding:1rem 0.25rem;border:1px dashed var(--line);background:var(--card)}.book-row,[data-puddly-island=BookRow]{padding:1rem;margin-bottom:0.65rem;background:var(--card);border:1px solid var(--line)}.book-main{margin-bottom:0.75rem}.book-title{display:block;font-size:1.1rem;font-weight:700;font-family:Source Serif 4,Georgia,serif}.book-author{display:block;font-size:0.9rem;color:var(--muted)}.book-edit{display:grid;gap:0.55rem}.book-edit label{display:flex;flex-direction:column;gap:0.25rem;font-size:0.85rem}.book-edit select,.book-edit textarea{padding:0.45rem 0.6rem;border:1px solid var(--line);font:inherit;background:#fff}.book-actions{display:flex;flex-wrap:wrap;gap:0.5rem}.book-actions button{font:inherit;cursor:pointer;border:1px solid var(--line);background:#fff;padding:0.4rem 0.75rem}.book-actions button.danger{color:var(--danger);border-color:#fecaca}.puddly-error,[data-puddly-error]{color:var(--danger);font-size:0.9rem;margin:0.5rem 0;min-height:1.2em;font-family:IBM Plex Sans,Segoe UI,sans-serif}"
          }
        </style>
      </head>
      <body>
        <div class="shell">
          <nav class="puddly-nav">
            <a href="/">Reading list</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <button
              type="button"
              data-puddly-rpc="auth.logout"
              data-puddly-redirect="/login"
            >
              Logout
            </button>
          </nav>
          <main class="book-app">
            <h1>{props.heading}</h1>
            <p class="lede">Track what you want to read, are reading, and have finished.</p>
            <p class="puddly-error" data-puddly-error=""></p>
            <form data-puddly-rpc="book.create" class="book-create">
              <label>
                Title
                <input name="title" type="text" placeholder="Book title" />
              </label>
              <label>
                Author
                <input name="author" type="text" placeholder="Author name" />
              </label>
              <label>
                Status
                <select name="status">
                  <option value="want">Want to read</option>
                  <option value="reading">Reading</option>
                  <option value="finished">Finished</option>
                </select>
              </label>
              <label>
                Notes
                <textarea name="notes" rows="2" placeholder="Optional notes"></textarea>
              </label>
              <button type="submit">Add book</button>
            </form>
            <ul class="book-list">
              {props.books.items.map((item) => (
                <BookRow
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  status={item.status}
                  notes={item.notes}
                />
              ))}
            </ul>
          </main>
        </div>
        <script src="/puddly-islands.js"></script>
      </body>
    </html>
  );
}
