# Infinite Notes for Windows — install guide

The desktop companion opens the same notes as your tablet on a big screen, lets
you write and study on them, and syncs with the tablet over a USB cable. It is
optional: the tablet app works fully on its own.

## What you need

- Windows 10 or 11, 64-bit
- About 500 MB of free space (the app itself is about 380 MB installed)
- For syncing: a USB cable that carries data (not a charge-only cable)

## Install

1. Download **`InfiniteNotes-Windows-Setup.exe`** from
   [**Releases**](https://github.com/Nobel-7-3/infinite-notes/releases/latest).
   Only download it from there.
2. *(Recommended)* Check it is the genuine file. In PowerShell, in your Downloads
   folder:
   ```powershell
   Get-FileHash .\InfiniteNotes-Windows-Setup.exe -Algorithm SHA256
   ```
   The result must match the line for that file in the release's `SHA256SUMS.txt`.
3. Run it. Windows SmartScreen will say *"Windows protected your PC"*, because
   the app is not code-signed yet — click **More info → Run anyway**.
4. Open **Infinite Notes** from the Start menu.

Rather not install anything? Download **`InfiniteNotes-Windows-Portable.exe`**
instead and run it from anywhere.

Your notes are kept in **`Documents\Infinite Notes`**. You can point the app at a
different folder from **⇄ Tablet Sync**.

## Connect your tablet

Sync runs over the USB cable — nothing goes through the internet.

1. **On the tablet**, turn on USB debugging: Settings → About tablet → Software
   information → tap *Build number* seven times → back → **Developer options** →
   **USB debugging** on.
2. **On the laptop**, install Android's platform-tools. In PowerShell:
   ```powershell
   winget install Google.PlatformTools
   ```
3. Plug the tablet in and accept **Allow USB debugging?** on the tablet.
4. On the tablet, tap the **USB** icon in the library and choose a direction —
   tablet to laptop, laptop to tablet, or both.

The desktop app sets up the USB link by itself every few seconds, so there is no
address to type.

## Where your data lives

| What | Where | Leaves your computer? |
|---|---|---|
| Your notes | `Documents\Infinite Notes` (or the folder you chose) | No |
| Settings | `%APPDATA%\infinite-notes-desktop\config.json` | No |

The app runs a small server that only accepts connections from this computer
(`127.0.0.1`). Nothing else on your Wi-Fi or network can reach your notes.

## Updating

Download the newer installer and run it. Your notes folder is not touched.

## Uninstalling

Settings → Apps → **Infinite Notes** → Uninstall. Your notes folder and settings
are left in place — delete `Documents\Infinite Notes` and
`%APPDATA%\infinite-notes-desktop` yourself if you want them gone.

## If something is not working

- **The window stays blank, or shows something else.** Another program on the
  computer is using port 5173 (developer tools often do). Close it and open
  Infinite Notes again.
- **The tablet says Laptop not found.** Check the desktop app is open, USB
  debugging is on, you accepted the prompt on the tablet, and the cable carries
  data. In PowerShell, `adb devices` should list the tablet.
- **SmartScreen blocks it.** See step 3 of *Install*. Check the SHA-256 first if
  you are unsure where the file came from.

Still stuck? [Open an issue](https://github.com/Nobel-7-3/infinite-notes/issues/new/choose).
