# Reading list (Puddly)

Personal reading-list app: **books** with title, author, status (`want` / `reading` / `finished`), and notes. Full CRUD via RPC and a simple SSR list UI.

## Prerequisites

- `puddly` on PATH ([Puddly README](https://github.com) — `./install.sh` or `cargo install --path crates/puddly-cli`)
- Node.js 22+
- Postgres

## Setup

```powershell
$env:DATABASE_URL = "postgres://postgres:postgres@127.0.0.1:5432/puddly_ex"

puddly check .
puddly manifest generate .
# migrations/0001_puddly_auth.sql and 0002_sync.sql are already in repo
puddly migrate apply .
puddly build .   # or: puddly install .
puddly dev .
```

Open [http://127.0.0.1:3000/register](http://127.0.0.1:3000/register), create an account, then use **/** for your list.

One-shot: `puddly up` (migrate → build → dev) with `DATABASE_URL` set.

## Layout

| Path | Role |
| --- | --- |
| `features/books/book.resource.ts` | `book` resource + access rules |
| `features/books/book.view.tsx` | Home page: add form + list |
| `features/books/book-row.island.tsx` | Per-row update / delete |
| `features/users/user.resource.ts` | App user rows (auth) |
| `features/auth/*.view.tsx` | Login / register |
| `migrations/` | Auth + schema SQL |
| `tools/puddly-action-sidecar.mjs` | Sidecar template for `puddly build` (standalone apps) |

See [CONVENTIONS.md](./CONVENTIONS.md) for Puddly file naming and RPC details.
