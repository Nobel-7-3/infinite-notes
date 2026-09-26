# Infinite Notes for Android — install guide

How to get it on your tablet, what it does, and the two features that need a
laptop beside it. Everything else works on the tablet alone.

## What it is

A notebook with no edges. You write on it with a pen, and the page carries on in
every direction as far as you keep writing. The part that makes it worth
installing is that your study material goes on the same page as your
handwriting: a video plays while you write over the top of it, a slide deck sits
next to your notes on the same topic, a quiz waits at the bottom.

It was built by a student, for studying. It is not on the Play Store yet, which
is why you install it from a file.

## What you need

- **An Android tablet with a pen.** It was built and tested on a Samsung Galaxy
  Tab with its S Pen. Palm rejection is on by default — a finger pans the
  page and only the pen draws, so you can rest your hand while you write.
  If your tablet has no pen, open a note, tap the three dots and choose
  **Allow finger drawing**. It works. It was not designed for it.
- **Android 10 or newer.** Check under Settings → About tablet → Software
  information. Anything from the last six or seven years is fine.
- **About 250 MB of free space.** The app file itself is a little over 100 MB, most of
  which is the handwriting-recognition library it ships with.
- A phone will run it, but the page is the whole point and a phone is a keyhole.

## Installing

The file is an `.apk` — Android's app format. Google Play is not involved, so
Android will ask your permission once before it will install something that did
not come from the store.

1. **Download it on the tablet** from
   [**Releases**](https://github.com/Nobel-7-3/infinite-notes/releases/latest)
   — `InfiniteNotes-Android.apk` — then open it: usually Files → Downloads → tap it.
   Only download it from there; a copy from anywhere else may have been changed.
   (Each release lists the file's SHA-256 checksum if you want to check it.)
2. **Android will refuse the first time.** It says something close to *"For your
   security, your tablet is not allowed to install unknown apps from this
   source."* Tap **Settings** in that message, turn on **Allow from this
   source**, then press back.
   The permission belongs to whichever app you opened the file *with*. If you
   open the next one from Drive instead of Files, it asks again.
3. **Tap Install.**
4. **Play Protect may complain** that it does not recognise the developer. Tap
   through it — *More details* → *Install anyway*. It says that about any app it
   has not seen on the Play Store before.
5. On first launch it may ask to send notifications. That is only used by the
   lecture recorder; say no if you like.

**To update later:** just open the newer `.apk` and install over the top. Your
notes stay where they are. Do not uninstall first — uninstalling deletes every
note on the tablet.

If Android says *"App not installed"*, it is almost always one of two things:
not enough free space, or a copy of the app already on the tablet that was built
by someone else. Android will not replace an app with one signed by a different
key.

## Finding your way around

**The library** is the first screen. The plus button makes a note. Long-press
any note for Rename, Move to folder, a colour tag, **Lock note (Biometrics)** —
which puts it behind your fingerprint — and Delete.

**Inside a note**, the toolbar along the bottom holds the pens (pen, pencil,
fountain, marker, highlighter), study tape, a laser pointer, the eraser, lasso
select, a text tool and a hand for panning. The round swatches are quick
colours; long-press one to save whatever pen you are currently holding into that
slot. Tap the active swatch for the full palette and thickness.

**The three-dot menu** has Insert image, Import PDF, Add from NotebookLM,
Background & paper, Zoom to fit content, and the finger-drawing toggle.

Lasso a patch of your own handwriting and you can convert it to typed text. The
first time you do that it downloads a recogniser of about 20 MB, so it needs the
internet once; after that it is offline forever.

## Putting study material on the page

Three dots → **Add from NotebookLM**. It asks what the file is *before* it opens
the file picker, then only shows you files of that type. Nine kinds:

| | |
| --- | --- |
| **Audio Overview** | An `.m4a` or `.mp3`. Sits as a strip across the page — something you start and then ignore while you write. |
| **Video Overview** | An `.mp4`, or any clip at all. Plays on the page, and the pen writes straight across it. |
| **Slide deck** | A `.pdf` you page through. It reopens on the slide you left it on. |
| **Report or briefing** | A `.md` or `.txt`, rendered as real markdown — headings, bold, lists — and scrollable where it sits. |
| **Infographic or image** | A `.png` or `.jpg` pinned to the page. |
| **Data table** | A `.csv`, scrollable sideways as well as down. |
| **Mind map** | A `.json` tree. Drag a node and it stays moved, tap one to fold its branch away, pinch to zoom the map inside its box, double-tap to fit it, long-press to rename a node. |
| **Flashcards** | A `.json` deck. Tap a card to flip it, arrows to move through it. It remembers which card you were on, not whether it was flipped. |
| **Quiz** | A `.json` set of questions. Tap an answer and it marks yours and the right one, with the explanation if the file carried one. |

If you would rather not choose, the **Add anything** button opens everything at
once and works out what each file is by looking inside it.

Three of those — mind map, flashcards and quiz — have no download button in
NotebookLM. There is nothing to export, so nothing to import. They have to be
made by another tool and imported as `.json` files. Most of the time you will be
using the six that NotebookLM will actually hand you a file for.

## Moving, resizing and deleting what you added

**Press and hold on it with the pen.** Not with a finger — a finger belongs to
whatever is inside the box, so it scrolls the report and works the video's
controls. The pen writes straight through, which leaves press-and-hold as the
one gesture it has spare.

The menu offers:

- **Move & resize** — puts a handle on the top-left corner to drag it around and
  one on the bottom-right to change its size.
- **Loop: on / off** — video and audio only. Useful for an exercise
  demonstration you want to watch ten times while you write.
- **Reset size** — back to the size that kind is comfortable to read at.
- **Bring to front** — for when two boxes overlap.
- **Delete** — undoable. The undo arrow at the top of the screen brings it back.

To write over something, just write. Ink lands on top of a playing video, not
behind it.

## What works with no internet

All of the above. The notes live on the tablet. The only thing that ever needs a
connection is the one-off handwriting-recogniser download. The two features in
the next section need a laptop, not the internet.

## Two features that need a laptop

Two buttons in the top bar of the library screen talk to a Windows laptop over
a USB cable. Without one they simply report that the laptop isn't there.

### The USB icon — sync with a laptop

Sync runs over a USB cable to the free Infinite Notes desktop app for Windows —
see [install-windows.md](install-windows.md).
No cloud account is involved, and nothing goes over the internet. You pick the
direction each time: tablet to laptop, laptop to tablet, or both. It needs:

- the desktop app running on the laptop,
- *USB debugging* on in the tablet's Developer options (Settings → About tablet
  → Software information → tap *Build number* seven times), and
- the tablet's *Allow USB debugging?* prompt accepted when you plug in.

Without all three, the dialog says **Laptop not found** and does nothing.

**Without a laptop, your notes live on this tablet and nowhere else.** That is
worth taking seriously. The same dialog has two things underneath sync that work
offline, with no laptop at all:

- **Save a backup file** — writes every note into a single `.zip`. Put that
  somewhere that is not the tablet: your own cloud storage, a laptop, a USB stick.
- **Restore from a backup file** — reads it back.

Do that occasionally. If the tablet is lost or wiped and you never exported,
the notes are gone; there is no copy of them anywhere else.

### The microphone icon — record a lecture *(early access)*

This records the lecture, sends it in twenty-second pieces to a program on your
laptop, transcribes it there on the laptop's graphics card, and has the laptop
write the finished revision notes back onto a page.

The laptop program that does this is in early testing and **not part of the
public download yet**, so for now the dialog will say **Not reachable** and stop.
Nothing breaks if you tap it out of curiosity.

When it is available: **always get permission before you record a lecture** —
many universities and lecturers require it, and in some places recording people
without consent is against the law.

### Everything else works on its own

The canvas, the pens, PDFs, images, the NotebookLM files, folders, locked notes,
backup and restore. All of it offline, all of it on your tablet, none of it
going anywhere.

## If something is not working

- **Nothing draws when you write.** Check the pen itself first. If the tablet
  has no pen, three dots → Allow finger drawing.
- **Converting handwriting gives you nothing.** It needs the internet the first
  time, to fetch the recogniser. Connect once and try again.
- **A file will not import.** Use the matching row in *Add from NotebookLM*
  rather than *Add anything* — telling it what the file is beats letting it
  guess, especially with `.json` files.
- **Sync says Laptop not found.** Check the desktop app is open, USB debugging
  is on, and you accepted *Allow USB debugging?* on the tablet. Unplug and plug
  back in, then try again.
