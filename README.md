# Tony OS top widget

Public presentation only: greeting, date, clock, supplied artwork and Mooresville, NC weather. No private Tony OS content, credentials, analytics, or server is required.

Serve this folder through GitHub Pages. The entry point is `index.html`. Embed its HTTPS URL into the first row of the Tony OS homepage. Suggested desktop height: widget width / 4.35 + 35 pixels (up to 1200px wide), or width / 4.78 + 35 pixels for wider embeds. Narrow layouts need about 470px height. Notion may require manually adjusting the embed height.

The panorama uses a CSS viewport into the original approved reference image; the artwork is unchanged. Desktop layout follows the approved left greeting, central panorama, weather and far-right sun/rain layout. Narrow screens stack the panorama below the two information columns to keep values legible.

Clock/date: browser Intl, explicitly America/New_York, including daylight saving time. Weather: Open-Meteo forecast API, public city-center coordinates (35.5849, -80.8101), Fahrenheit. Rain is today's maximum precipitation probability. Sunrise/sunset are timezone-formatted Unix timestamps. Refresh on load, every 15 minutes and after returning to an older tab; failures are labelled and retried. Weather values are forecast/model data. No n8n, API key, paid service or always-on computer.

Attribution: https://open-meteo.com/ (CC BY 4.0 weather data). Update `widget.js` for location/data behavior and `style.css` for layout. Preserve the approved composition. Changes deployed to the Pages source branch update the embed at the same URL.
