Calgary Traffic Cameras PWA v1.2.0
Upload all files for a new install. Existing v1.0.8 users only replace index.html and sw.js.

Road alerts: official City of Calgary Events MapServer layers 0 (Construction Detours) and 1 (Traffic Incidents). Refreshed every 5 minutes while visible. Expired reports are excluded; upcoming reports are labelled Scheduled. Points show report locations, not road segment extents. Daily work schedules are not computed; consult report details and signs. Failed updates retain prior reports with an outdated-data warning. No road data is cached offline by the service worker.

🚧 = Roadworks / detour; red × = Closure classified by the source detour type; purple ! = Incident. Toggle each layer or tap Alerts for the list and fetch status. Tap a marker for details. Camera search filters cameras only.

PWA: HTTPS hosting required for installation. iPhone Safari > Share > Add to Home Screen. App shell can open offline after first successful load; map tiles and camera images need internet. No API key or build tools.

MapLibre GL JS 5.24.0: BSD-3-Clause; see MAPLIBRE-LICENSE.txt. Map: OpenStreetMap contributors. Cameras and road alerts: City of Calgary. Source links remain visible in the app.

3D: use the circular 3D button beside the north compass. It becomes 2D to return to the flat map. Zoom to street level to load nearby City of Calgary building footprints. Heights are rooftop elevation minus highest ground elevation: simplified extrusions, not full roof models or terrain. Only a bounded nearby area and up to 6000 shapes load per move. More buildings load when panning. Source: https://data.calgary.ca/Base-Maps/3D-Buildings-Citywide/cchr-krqg/about_data . Requires WebGL. Reset returns to 2D. Update index.html and sw.js.

V1.2.1: Roadworks/Incidents controls at map top. Building status flows immediately below camera status, above footer credits. Existing installs: replace index.html and sw.js.

V1.2.2: Roadworks markers now use 🚧. Closure × and incident ! are unchanged. Replace index.html and sw.js.
