Calgary Traffic Cameras — PWA v1.0.2

UPLOAD TO GITHUB PAGES
1. Extract the ZIP.
2. Upload ALL files into the same repository folder. Keep index.html at that folder's root.
3. In GitHub Settings > Pages, enable deployment from your branch and folder.
4. Open the HTTPS Pages address and allow the first load to finish.
5. Use Install app. iPhone: Safari > Share > Add to Home Screen.

No API key, account in the app, build tool or backend is needed.
PWA installation and service workers require HTTPS (or localhost).
Double-clicking index.html still opens the app, but cannot install a PWA.

OFFLINE
The app interface and bundled MapLibre 5.24.0 files are cached after a successful first visit.
A previously fetched camera directory is saved when browser storage permits.
Map tiles and live camera images require internet and are never cached by the service worker.
Camera image load time is not capture time. Images may be delayed or cameras offline.

UPDATES
Upload all replacement files together. Close every app tab/window and reopen to activate a downloaded update.

CONTROLS
Search and quadrant filtering, camera list, 30-second image refresh, circular N north reset.
Original 2D map; no 3D buildings.

ATTRIBUTION
Camera data and images: City of Calgary Open Data.
Map tiles: OpenStreetMap contributors (copyright and terms linked in the map).
MapLibre GL JS 5.24.0: BSD-3-Clause; see MAPLIBRE-LICENSE.txt.
