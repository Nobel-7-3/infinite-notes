# AGENTS.md — installing Infinite Notes for someone

Instructions for AI assistants (Claude Code, Google Antigravity, OpenAI Codex,
Cursor, GitHub Copilot, Gemini CLI). A person has asked you to install Infinite
Notes on their Windows computer or their Android tablet. This repository holds
the official downloads; the source code is not public, so do not try to build it.

## Ground rules

1. **Ask before you download or install anything**, and say exactly what: the
   file name, where it comes from (this repository's Releases), and its size.
2. **Verify every download** against `SHA256SUMS.txt` from the same release. If
   the hash does not match, stop, delete the file and tell the person.
3. **Only use this repository's Releases.** Never a mirror, a re-upload or a
   search result.
4. **Never disable** Windows SmartScreen, Microsoft Defender or Android's
   Play Protect. If SmartScreen warns, explain it (the app is not code-signed yet)
   and let the person choose *More info → Run anyway* themselves.
5. **Never touch the person's notes.** Don't read, move or delete
   `Documents\Infinite Notes`, `%APPDATA%\infinite-notes-desktop\`, or anything
   inside the Android app.
6. **Never uninstall the Android app, or clear its data.** That deletes every
   note on the tablet. Install updates over the top.
7. **Don't change network settings.** The desktop app listens only on
   `127.0.0.1` on purpose; never set `INFINITE_NOTES_HOST`.

## Windows

Windows 10 or 11, 64-bit. Run in PowerShell:

```powershell
$dir  = Join-Path $env:TEMP "infinite-notes-install"
New-Item -ItemType Directory -Force $dir | Out-Null
$base = "https://github.com/Nobel-7-3/infinite-notes/releases/latest/download"
Invoke-WebRequest "$base/InfiniteNotes-Windows-Setup.exe" -OutFile "$dir\InfiniteNotes-Windows-Setup.exe"
Invoke-WebRequest "$base/SHA256SUMS.txt"                  -OutFile "$dir\SHA256SUMS.txt"

$expected = ((Get-Content "$dir\SHA256SUMS.txt") | Where-Object { $_ -match "InfiniteNotes-Windows-Setup.exe" }).Split(" ")[0]
$actual   = (Get-FileHash "$dir\InfiniteNotes-Windows-Setup.exe" -Algorithm SHA256).Hash.ToLower()
if ($actual -ne $expected) { throw "Checksum mismatch - do not run this file." }
"Checksum OK: $actual"
```

Then install for the current user (no admin rights needed) and start it:

```powershell
Start-Process "$dir\InfiniteNotes-Windows-Setup.exe" -ArgumentList "/S" -Wait
$exe = Get-ChildItem "$env:LOCALAPPDATA\Programs" -Recurse -Filter "Infinite Notes.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
Start-Process $exe.FullName
```

Confirm it is running and private to this computer:

```powershell
Invoke-RestMethod http://127.0.0.1:5173/api/sync-info   # lanExposed must be False
```

If the person prefers not to install anything, use
`InfiniteNotes-Windows-Portable.exe` instead — same checks, then just run it.

**Connecting the tablet** needs Android platform-tools
(`winget install Google.PlatformTools` — ask first) and *USB debugging* on the
tablet. The app sets up the USB link by itself; sync from the tablet's USB button.

## Android tablet

Needs Android 10 or newer. With the tablet plugged in and USB debugging on
(`adb devices` lists it):

```powershell
$dir  = Join-Path $env:TEMP "infinite-notes-install"
New-Item -ItemType Directory -Force $dir | Out-Null
$base = "https://github.com/Nobel-7-3/infinite-notes/releases/latest/download"
Invoke-WebRequest "$base/InfiniteNotes-Android.apk" -OutFile "$dir\InfiniteNotes-Android.apk"
Invoke-WebRequest "$base/SHA256SUMS.txt"            -OutFile "$dir\SHA256SUMS.txt"

$expected = ((Get-Content "$dir\SHA256SUMS.txt") | Where-Object { $_ -match "InfiniteNotes-Android.apk" }).Split(" ")[0]
$actual   = (Get-FileHash "$dir\InfiniteNotes-Android.apk" -Algorithm SHA256).Hash.ToLower()
if ($actual -ne $expected) { throw "Checksum mismatch - do not install this file." }

adb install -r "$dir\InfiniteNotes-Android.apk"
```

`-r` keeps the existing app and its notes. If the install fails with
`INSTALL_FAILED_UPDATE_INCOMPATIBLE`, the tablet has a copy signed by someone
else. **Stop and tell the person** — do not uninstall to "fix" it.

Without a cable, the person can simply download the APK on the tablet and open it;
see [docs/install-android.md](docs/install-android.md).

## If the repository is private

While the repository is private, the download URLs above need the person's GitHub
access. Use the GitHub CLI instead:

```powershell
gh release download --repo Nobel-7-3/infinite-notes --dir $dir --pattern "InfiniteNotes-Windows-Setup.exe" --pattern "SHA256SUMS.txt"
```
