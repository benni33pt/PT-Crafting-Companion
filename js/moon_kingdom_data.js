/* =====================================================================
   MOON KINGDOM EVENT DATA ENGINE
   ===================================================================== */

const moonKingdomItems = [
    // --- FARM CROPS (TOP OF FURNITURE SECTION) ---
    { 
        id: "lunar_carrot_seed", 
        name: "Lunar Carrot Seed", 
        type: "crop",
        timeMinutes: 45, 
        mats: { "Moon Coin": 150, "Lunar Powder": 5 }, 
        lore: "A mysterious carrot seed that absorbs lunar energy to grow quickly.", 
        image: "Images/MoonKingdom/Lunar Carrot Seed.png" 
    },

    // --- VEHICLES ---
    { 
        id: "crescent_moon_ship", 
        name: "Crescent Moon Ship", 
        timeMinutes: 720, 
        mats: { "Moon Coin": 2500, "Moonstone": 20, "Starlight Essence": 15, "Iron Ore": 30 }, 
        lore: "A floating vessel shaped like a crescent moon, built to sail through the night sky.", 
        image: "Images/MoonKingdom/Crescent Moon Ship.png" 
    },
    { 
        id: "moon_rabbit_cart", 
        name: "Moon Rabbit Cart", 
        timeMinutes: 360, 
        mats: { "Moon Coin": 1200, "Moonstone": 10, "Tree Branch": 25 }, 
        lore: "A charming cart pulled by lunar magic, perfect for hauling moonlight harvests.", 
        image: "Images/MoonKingdom/Moon Rabbit Cart.png" 
    },

    // --- FURNITURE & STRUCTURES ---
    { 
        id: "moonlight_pavilion", 
        name: "Moonlight Pavilion", 
        timeMinutes: 480, 
        mats: { "Moon Coin": 1500, "Moonstone": 12, "Tree Branch": 40 }, 
        lore: "An elegant pavilion designed for watching the full moon on quiet evenings.", 
        image: "Images/MoonKingdom/Moonlight Pavilion.png" 
    },
    { 
        id: "lunar_throne", 
        name: "Lunar Throne", 
        timeMinutes: 300, 
        mats: { "Moon Coin": 800, "Starlight Essence": 8, "Moonstone": 5 }, 
        lore: "A majestic throne that shines with a serene blue radiance.", 
        image: "Images/MoonKingdom/Lunar Throne.png" 
    },
    { 
        id: "starlight_lantern", 
        name: "Starlight Lantern", 
        timeMinutes: 90, 
        mats: { "Moon Coin": 300, "Starlight Essence": 3, "Iron Ore": 5 }, 
        lore: "A street lantern containing trapped starlight that never goes out.", 
        image: "Images/MoonKingdom/Starlight Lantern.png" 
    },
    { 
        id: "moon_rabbit_statue", 
        name: "Moon Rabbit Statue", 
        timeMinutes: 240, 
        mats: { "Moon Coin": 600, "Lunar Powder": 15, "Stone": 20 }, 
        lore: "A statue carved in the image of the legendary rabbit pounding rice cakes on the moon.", 
        image: "Images/MoonKingdom/Moon Rabbit Statue.png" 
    },
    { 
        id: "lunar_gate", 
        name: "Lunar Gate", 
        timeMinutes: 360, 
        mats: { "Moon Coin": 1000, "Moonstone": 8, "Iron Ore": 15 }, 
        lore: "An archway infused with moonlight that marks the entrance to the Moon Kingdom.", 
        image: "Images/MoonKingdom/Lunar Gate.png" 
    },
    { 
        id: "starlit_garden_bench", 
        name: "Starlit Garden Bench", 
        timeMinutes: 120, 
        mats: { "Moon Coin": 400, "Tree Branch": 15, "Lunar Powder": 5 }, 
        lore: "A comfortable bench bathed in soft moonlight.", 
        image: "Images/MoonKingdom/Starlit Garden Bench.png" 
    }
];

const moonKingdomPets = [
    // --- PET EGGS ---
    { 
        id: "moon_rabbit_egg_normal", 
        name: "Moon Rabbit Egg (Normal)", 
        timeMinutes: 180, 
        mats: { "Moon Coin": 500, "Normal Egg": 1, "Lunar Powder": 10 }, 
        lore: "A soft, glowing egg containing a timid Moon Rabbit waiting to hatch.", 
        image: "Images/MoonKingdom/Moon Rabbit Egg.png" 
    },
    { 
        id: "moon_rabbit_egg_premium", 
        name: "Moon Rabbit Egg (Premium)", 
        timeMinutes: 90, 
        mats: { "Moon Coin": 300, "Premium Egg": 1, "Lunar Powder": 5 }, 
        lore: "A shimmering celestial egg that hatches a rare Moon Rabbit companion.", 
        image: "Images/MoonKingdom/Moon Rabbit Egg.png" 
    },

    // --- PET SUPPLEMENTS ---
    { 
        id: "lunar_supplement", 
        name: "Lunar Supplement", 
        timeMinutes: 15, 
        mats: { "Moon Coin": 100, "Lunar Powder": 2 }, 
        lore: "A snack infused with gentle moonlight. Increases Pet EXP by 50.", 
        image: "Images/MoonKingdom/Lunar Supplement.png" 
    },
    { 
        id: "premium_lunar_supplement", 
        name: "Premium Lunar Supplement", 
        timeMinutes: 45, 
        mats: { "Moon Coin": 250, "Lunar Powder": 6, "Starlight Essence": 1 }, 
        lore: "A rich treat made from concentrated lunar powder. Increases Pet EXP by 200.", 
        image: "Images/MoonKingdom/Premium Lunar Supplement.png" 
    },
    { 
        id: "special_lunar_supplement", 
        name: "Special Lunar Supplement", 
        timeMinutes: 90, 
        mats: { "Moon Coin": 500, "Lunar Powder": 12, "Starlight Essence": 3 }, 
        lore: "A celestial delicacy glowing with moonlight energy. Increases Pet EXP by 700.", 
        image: "Images/MoonKingdom/Special Lunar Supplement.png" 
    }
];

const moonKingdomGlossary = [
    { 
        name: "Moon Coin", 
        lore: "Special currency earned during Moon Kingdom event missions and activities.", 
        source: "Event", 
        image: "Images/MoonKingdom/Moon Coin.png" 
    },
    { 
        name: "Lunar Powder", 
        lore: "Finely ground powder infused with radiant moonlight.", 
        source: "Event Gathering", 
        image: "Images/MoonKingdom/Lunar Powder.png" 
    },
    { 
        name: "Starlight Essence", 
        lore: "Pure, concentrated essence harvested from fallen night stars.", 
        source: "Nighttime Spawns", 
        image: "Images/MoonKingdom/Starlight Essence.png" 
    },
    { 
        name: "Moonstone", 
        lore: "A rare, smooth stone that emanates a peaceful lunar warmth.", 
        source: "Mining & Event", 
        image: "Images/MoonKingdom/Moonstone.png" 
    }
];
