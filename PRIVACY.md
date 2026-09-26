# Privacy Policy — Infinite Notes

**Effective date:** 26 September 2026
**Apps:** Infinite Notes for Android (`com.sai.infinitenotes`) and Infinite Notes
for Windows (the desktop companion)
**Developer:** Sai, an independent developer
**Contact:** [open an issue](https://github.com/Nobel-7-3/infinite-notes/issues) or,
for anything sensitive, [report privately](https://github.com/Nobel-7-3/infinite-notes/security/advisories/new)

## The short version

- **We collect nothing.** There are no Infinite Notes servers, no accounts, no
  ads, no analytics and no crash reporting.
- **Your notes stay on your devices** — the tablet, and your own laptop if you
  use the desktop app.
- **One outside party:** the handwriting recogniser comes from Google's ML Kit.
  It runs on the tablet and does not send your handwriting anywhere, but Google
  receives anonymous performance and usage metrics from it (details below).

## What the apps handle, and where it goes

**Your notes.** Handwriting, text, imported PDFs, Word documents, images, audio,
video and study material are stored in the Android app's private storage and, if
you use the desktop app, in a folder on your laptop that you choose (by default
`Documents\Infinite Notes`). We cannot see them and they are never sent to us.

**Handwriting to text (Google ML Kit).** The first time you convert handwriting,
the app downloads a recognition model from Google. After that, recognition runs
entirely on your tablet — your handwriting is not sent to Google or to us. ML Kit
does send Google **performance and usage metrics** (for example, how long a
recognition took), which Google uses to maintain the service and detect abuse.
See the [ML Kit terms](https://developers.google.com/ml-kit/terms) and
[Google's privacy policy](https://policies.google.com/privacy).

**Fingerprint or face unlock.** Locking a note uses Android's own biometric
prompt. The app never receives your biometric data — Android only tells it
"verified" or "not verified".

**USB sync.** The tablet and the desktop app exchange notes over the USB cable,
directly between your two devices. The desktop app only accepts connections from
the laptop itself (`127.0.0.1`); nothing on your network can reach it.

**Lecture capture (optional, advanced).** When you record a lecture, audio is
sent over the USB cable to a program on **your own laptop**, which transcribes it
there. The write-up into revision notes is done by a tool **you** choose and set
up: a local model through Ollama (nothing leaves your laptop), or the Claude Code
command-line tool, in which case the transcript is sent to Anthropic under your
own account and Anthropic's terms. Recording other people may require their
consent — **always get permission before recording a lecture.**

**Optional desktop extras.** If you connect them yourself, the desktop app can
back up its notes folder to **your own** Google Drive (using your own Google
Cloud credentials, with access limited to files the app creates), import from
NotebookLM using a separate third-party command-line tool, or let Claude Desktop
create notes on your laptop. Each of these talks to that service under your own
account and its own terms. None of them is on by default.

**Android backup.** If *Back up to Google Drive* is on in your tablet's settings,
Android may include the app's data in your own Google account backup. That is
controlled by Android and your Google account, not by us.

## Permissions (Android)

| Permission | Used for |
|---|---|
| Internet | Downloading the handwriting model once; ML Kit metrics (above). |
| Biometric | Unlocking notes you chose to lock. |
| Microphone, foreground service | Recording a lecture, only while you are recording. |
| Notifications | The "recording" indicator while a lecture is being recorded. |

Files are opened through Android's own pickers, so the app does not ask for broad
access to your storage or photos.

## Sharing and selling

We do not share, sell, rent or trade any information — we have none to share.

## Children

The apps are not directed at children under 13 and collect no personal
information from anyone.

## Your control

Your data lives on your devices. Delete a note in the app, or delete everything
by clearing the app's storage or uninstalling it (on Android, uninstalling deletes
every note — export a backup first if you want to keep them). On Windows, your
notes folder is yours to keep, move or delete.

## Security

Notes on Android are kept in the app's private, sandboxed storage. A locked note
needs your fingerprint or face to open, but it is not separately encrypted. See
[SECURITY.md](SECURITY.md).

## Changes

If this policy changes, the effective date above changes with it, and the history
of every version is kept in this repository.
