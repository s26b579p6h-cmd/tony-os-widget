# Tony OS top widget

Public presentation only: greeting, date, clock, supplied artwork and Mooresville, NC weather. No private Tony OS content, credentials, analytics, or server is required.

Serve this folder through GitHub Pages. The entry point is `index.html`. Embed its HTTPS URL at the top of the Tony OS homepage. Suggested desktop height: widget width / 4.05 + 35 pixels (up to 1120px wide), or widget width / 4.55 + 35 pixels for wider embeds. Narrow layouts need about 465px height. Notion may require manually adjusting the embed height.

The approved Morning, Day and Evening panorama is the full-bleed banner background. Dynamic information floats over it using transparent gradients and restrained text shadows; there are no separate opaque dashboard panels. Narrow screens keep the same continuous image while reflowing sun, rain and message information along the bottom.

Clock/date: browser Intl, explicitly America/New_York, including daylight saving time. Weather: Open-Meteo forecast API, public city-center coordinates (35.5849, -80.8101), Fahrenheit. Rain is today's maximum precipitation probability. Sunrise/sunset are timezone-formatted Unix timestamps. Refresh on load, every 15 minutes and after returning to an older tab; failures are labelled and retried. Weather values are forecast/model data. No n8n, API key, paid service or always-on computer.

Attribution: https://open-meteo.com/ (CC BY 4.0 weather data). Update `widget.js` for location/data behavior and `style.css` for layout. Preserve the approved composition. Changes deployed to the Pages source branch update the embed at the same URL.
