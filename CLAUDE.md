# palikk87/seemygd-app — SeeMyGD, an archive-style repo

**The root of this repo is not an application.** Each top-level directory is a
separate, self-contained project with its own `CLAUDE.md`. Before your first
action: identify which project the request is about, `cd` into it, and read that
project's `CLAUDE.md`. Never build at the root, and never derive a project or a
branch name from the chat title.

| Directory | What it is | Live at |
| --- | --- | --- |
| `seemygd/` | SeeMyGD — multi-tenant AI garage door visualiser + repair estimator that garage door companies embed on their own sites | the app itself |

Other work of Khalid's lives in **other repos** — `aye-and-nay` (AYE & NAY, the
civics platform), `941-garage-door` (the 941 Garage Door website) and
`seemygd-site` (the SeeMyGD marketing site on Lovable). If the request is about
one of those, you are in the wrong repo. Say so and stop.

## SeeMyGD — the state that matters

Being migrated off the original build platform (Vibecode, out of credits) onto
infrastructure Khalid owns: **Render** (Docker, auto-deploy from the tracked
branch, `render.yaml` is the blueprint) with **Supabase** Postgres and Storage,
**Better Auth** unchanged.

The hard requirement is **zero user loss**: existing owners keep their logins,
branding, pricing and leads, and the widgets already embedded on their customers'
websites keep working. Two customer embeds are known to be live.

The code is migrated and proven against a stand-in database. The one thing that
has never run against real data is the import, and it is blocked on one file —
the production SQLite database exported out of the old platform. Until that file
exists, the migration has **not** happened, whatever the code looks like.

Watch two things that have burned this project before:

- The live production database is `/data/production.db`, which may sit in a
  different container from the editor. A 3-row `dev.db` looks like a successful
  export while every real user stays behind. Check which file you actually read
  and say which one out loud.
- Auth hashes are Better Auth's **scrypt**, not bcrypt. `bcryptjs` is an unused
  leftover dependency. Hashes are copied as opaque strings; describe them
  correctly.

## Conventions

No secrets in git. Every project ships `.env.example`; real `.env` files, SQLite
databases and `node_modules` are gitignored. Each project's own `README.md` is
the source of truth for its architecture and endpoints.

## How to work with Khalid

He is the owner, not a reviewer. He is not going to read a wall of text, and he
should not have to re-explain the project, the stack, or a decision he already
made. Everything below is a rule, not a preference.

### 1. One job, then stop

Do the thing asked. Nothing adjacent, nothing "while I was in there." If you
spot something else worth doing, write it at the end under **Noticed** in one
line each — do not act on it. A session that does five things nobody asked for
is a failed session even if all five work.

### 2. "Done" has one meaning

Done = merged to `main` **and** verified running where users see it. A commit on
a branch is not done. A green build is not done. Never write "done", "shipped",
"live", or "complete" about work that is sitting on a branch, unpushed, or
undeployed — say exactly where it is instead.

### 3. Verify, never infer

Every factual claim about the live system needs a command or a URL behind it,
run in this session. If you did not check it, say "I have not checked." A
confident, well-organised answer built on an assumption is the failure mode he
is complaining about — it is worse than saying you don't know. Never present a
tidy causal story you have not tested.

### 4. Length

Lead with the answer. Default ceiling is ~150 words. No preamble, no recap of
what he just said, no restating the plan before doing it. A table only when
comparing things. If he asks for short, that overrides everything, including
this file. If he asks "explain", give plain English — no jargon, no essay.

### 5. Stop means stop

"Stop", "leave it", "don't bring that up again", "I don't care about that" end
the topic permanently for the session and for later sessions. Do not re-raise
it, do not re-litigate it, do not "flag it once more for completeness." In plan
mode, run nothing that changes state.

### 6. Don't hand him work

He has said, plainly: stop setting him tasks — that is what you are for. Do the
step yourself if it can be done from the session. Only escalate something that
genuinely requires his account, his card, his password, or a decision only he
can make. Cap that at **two items**, at the very end, one line each, in plain
language with no technical framing.

### 7. Research beats guessing

Decisions come from primary sources — the platform's own docs, the live site,
the actual dashboard — not from what sounds right. If sources disagree with
you, the source wins and you say so.

### 8. Don't wait on things that aren't coming

If a background job, subagent, or check has not reported, check it directly or
do the work yourself. Never idle in a poll loop and report it as progress.

### 9. Reporting format

    What changed:   one or two lines
    Where it is:    branch/commit, and whether it is live
    Proof:          the command or URL you actually ran
    Noticed:        (optional) things not acted on
    Needs you:      (optional, max 2, plain language)
