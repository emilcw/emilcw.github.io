---
permalink: /languages/
title: "Languages & Global Experience"
author_profile: true
---

## Languages Spoken

<!-- Add languages you speak and proficiency levels -->

### Language 1

**Proficiency:** <!-- Add proficiency level (e.g., Native, Fluent, Conversational, Basic) -->

**Description:** <!-- Add any additional details -->

## Global Experience

### Countries Visited

<!-- List countries you have visited -->

<div id="countries-progress" style="margin: 20px 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <span id="countries-count" style="color: var(--global-text-color);">Loading...</span>
        <span id="countries-percentage" style="color: var(--global-text-color);">0%</span>
    </div>
    <div style="width: 100%; height: 30px; background-color: #333; border-radius: 4px; overflow: hidden; border: 1px solid #555;">
        <div id="countries-progress-bar" style="height: 100%; background-color: #4caf50; width: 0%; transition: width 0.5s ease; display: flex; align-items: center; justify-content: center;">
            <span id="countries-progress-text" style="color: #fff; font-weight: bold; font-size: 0.9em;"></span>
        </div>
    </div>
</div>

<div id="countries-map" style="height: 500px; width: 100%; margin: 20px 0; border: 1px solid #333; border-radius: 4px;"></div>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- Countries map script -->
<script src="{{ '/assets/js/countries-map.js' | relative_url }}"></script>

