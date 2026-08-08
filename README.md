# 🏮 Gwidam Village Workshop Companion

A lightweight, mobile-first web utility and crafting planner for **Gwidam Village**. Built to calculate parallel crafting times, aggregate raw material requirements, and track project progress across furniture crafting and pet incubation.

📱 **Live App:** [View Companion Tool](https://benni33pt.github.io/PT-gwidam-workshop-companion/)

---

## 🛠️ Key Features

* **Gwidam Workshop Planner (Calculator Tab):** 
  * Select project goals for **Furniture** items and **Pets & Divine Beasts**.
  * Adjust quantities without losing target goals when tracking active progress.
* **Expandable Floating Bottom Sheet:** 
  * Displays total required materials in real-time.
  * Dynamically subtracts costs as items or raw materials are checked off the active project.
  * Calculates real remaining crafting time using a simulated **4-slot parallel crafting queue**.
* **Active Project Checklist:** 
  * Automatically groups required raw materials into activity categories (*Catching/Net, Mining, Excavation, Gathering, Mega Mart, Events, Furniture Shop*).
  * Features an itemized **Furniture Assembly** and **Pet Incubator** queue.
  * Includes **collapsible headers** and **smart auto-collapsing** when all items in a category are completed.
* **Reference Catalogs & Lore:** 
  * **Furniture Index:** Browse full item costs, craft times, and flavor lore.
  * **Material Index:** Quick lookup for material drop locations and acquisition sources.
* **Offline & State Persistence:** 
  * Automatically saves project targets and checklist completion to `localStorage`.

---

## 🏗️ Architecture & Tech Stack

This project is intentionally built as a **zero-dependency, single-file web application** to ensure fast mobile load times and low maintenance overhead.

* **Frontend:** HTML5, Modern CSS (Variables, Grid, Flexbox), Vanilla JavaScript (ES6+).
* **Hosting:** GitHub Pages (Static delivery).
* **Data Persistence:** Browser `localStorage` (`gwidam_workshop_quantities` and `gwidam_workshop_checklist`).

### Core Algorithms

* **Parallel Queue Calculation (`calculateParallelTime`):** Models a 4-slot crafting queue by sorting item build durations in descending order and assigning each task to the earliest available slot.
* **Dynamic Material Math (`calculateTotals`):** Evaluates completed assembly queue items (`craft_id_index`) and raw material checks (`mat_name`) against initial target goals to update the remaining required materials in the floating bottom sheet without altering project targets.

---

## 📂 Repository Structure

```text
├── index.html                  # Core single-file application logic, CSS, and data arrays
├── README.md                   # Repository documentation
└── assets/                     # Item preview graphics and images
