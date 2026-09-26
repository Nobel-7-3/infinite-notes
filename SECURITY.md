# Security

## Reporting a problem

Please **don't** open a public issue for a security problem. Use
[**Report a vulnerability**](https://github.com/Nobel-7-3/infinite-notes/security/advisories/new)
(the Security tab of this repository), which only the maintainer can see. Say
what you found, which app and version, and how to reproduce it.

Only the latest release of each app receives fixes.

## Check your download

Every release includes `SHA256SUMS.txt`. Before installing, compare the file's
hash with the one listed there:

```powershell
# Windows PowerShell
Get-FileHash .\InfiniteNotes-Windows-Setup.exe -Algorithm SHA256
```

```bash
# macOS / Linux, for the APK
shasum -a 256 InfiniteNotes-Android.apk
```

Only download Infinite Notes from this repository's
[Releases](https://github.com/Nobel-7-3/infinite-notes/releases). A copy from
anywhere else may have been modified. Official Android builds are always signed
with the same key, so Android will refuse to update your app with a copy signed
by someone else.

## How the apps protect your notes

- **No servers, no accounts.** There is nothing to breach on our side: your notes
  are never uploaded to us.
- **Android:** notes live in the app's private storage, which other apps cannot
  read. A locked note needs your fingerprint or face to open. It is a lock in the
  app, **not encryption** — anyone who can read the device's storage directly, or
  an exported backup file, can read it.
- **Windows:** the desktop app's server listens only on `127.0.0.1`, so nothing
  on your Wi-Fi or network can reach your notes. The tablet reaches it through the
  USB cable.
- **Imports are contained:** backup bundles are unpacked with path checks, and
  external tools are run without passing your input through a shell.

## Known limitations

- The Windows app isn't code-signed yet, so SmartScreen warns on first run. Check
  the SHA-256 before choosing *Run anyway*.
- Backup files you export are not encrypted. Store them somewhere you trust.
