# PlayTogether Companion Engine

A lightweight, mobile-first web utility and crafting planner for **PlayTogether**. Built as a modular, generic engine that calculates parallel crafting times, aggregates raw material requirements, and tracks project progress across seasonal events and base game crafting.

📱 **Live App:** [View Companion Tool](https://benni33pt.github.io/PT-Crafting-Companion/)

---

## 🛠️ Key Features

* **Active Event Workshop Planner (Calculator Tab):** 
  * Features a dynamic **Parallax Hero Banner** and custom seasonal theme styling for the current event (*Desert Oasis*).
  * Seamlessly toggles between **Furniture** items and **Pets & Divine Beasts**.
  * Retains project goals on the Calculator tab even as items are completed in the queue.
* **Compact 2x2 Floating Bottom Sheet:** 
  * Displays macro-level project totals in real time: **Total Selected Items**, **Total Parallel Crafting Time**, and **Raw Material Requirements**.
  * Dynamically greys out completed materials without zeroing out target counts or cluttering the view with unneeded materials.
  * Calculates real remaining crafting time using a simulated **4-slot parallel crafting queue**.
* **Active Project Checklist:** 
  * Automatically groups required raw materials into activity categories (*Catching/Net, Mining, Excavation, Gathering, Mega Mart, Events, Furniture Shop*).
  * Features an itemized **Furniture Assembly** and **Pet Incubator** queue with a **500ms strikethrough animation delay** for clear tactile feedback when completing items.
  * Includes **collapsible headers** and **smart auto-collapsing** when all items in a category are checked off.
* **Slide-Out Hamburger Navigation Drawer (`≡`):** 
  * **Past Event Archives:** Access read-only lore, catalog entries, and item requirements for retired seasons (*Gwidam Village*).
  * **Master Item & Material Index:** View evergreen base game items (*PlayTogether Core*) alongside event-specific drop locations.
  * **External Resource Hub:** Quick access links to official coupon redemptions, wikis, and community hubs.
  * **Pinned Escape Hatch:** Features a sticky `🏠 Back to Current Event` button in the navigation bar when browsing archived data.
* **Offline & State Persistence:** 
  * Automatically saves active event target quantities and checklist progress to `localStorage` using generic key structures (`active_event_quantities`, `active_event_checklist`).

---

## 🏗️ Architecture & Tech Stack

This project is built as a **zero-dependency, modular web application** designed for fast mobile load times, low maintenance overhead, and easy event updates.

* **Frontend:** HTML5, Modern CSS (Variables, Grid, Flexbox, Parallax Gradients), Vanilla JavaScript (ES6+).
* **Data Decoupling:** Event data is fully separated from the main app engine into external data files (`js/playtogether_core.js` and `js/gwidam_data.js`).
* **Hosting:** GitHub Pages (Static delivery via relative pathing).
* **Data Persistence:** Browser `localStorage`.

### Core Algorithms & Engine Logic

* **Parallel Queue Calculation (`calculateParallelTime`):** Models a 4-slot crafting queue by sorting item build durations in descending order and assigning each task to the earliest available slot.
* **Goal-Reduction Queue Workflow:** Completing an item on the Active Checklist moves it to a "Completed" accordion section and subtracts its quantity from the active target without wiping project parameters.
