/* =====================================================================
   GIANT VEGGIE EVENT DATA ENGINE
   ===================================================================== */

const giantVeggieItems = [
    {
        id: "frontier_tumbleweed",
        name: "Frontier Tumbleweed",
        type: "furniture",
        timeMinutes: 50,
        mats: { "Veggie Coin": 350, "Tree Branch": 5, "Copper Ore": 10 },
        lore: "Whenever the frontier wind blows, it goes tumbling off to who knows where.",
        image: "Images/GiantVeggie/Frontier Tumbleweed.png"
    },
    {
        id: "bull_weathervane",
        name: "Bull Weathervane",
        type: "furniture",
        timeMinutes: 50,
        mats: { "Veggie Coin": 350, "Iron Ore": 5, "Large Broccoli Chunk": 10 },
        lore: "See which way the bull is facing to find out where the wind's blowing from.",
        image: "Images/GiantVeggie/Bull Weathervane.png"
    },
    {
        id: "ranch_water_pump",
        name: "Ranch Water Pump",
        type: "furniture",
        timeMinutes: 100,
        mats: { "Veggie Coin": 700, "Tree Branch": 10, "Water": 10, "Large Onion Chunk": 20 },
        lore: "Give it a good pump and out comes fresh, cool water! A must-have for any ranch.",
        image: "Images/GiantVeggie/Ranch Water Pump.png"
    },
    {
        id: "saddle_rack",
        name: "Saddle Rack",
        type: "furniture",
        timeMinutes: 50,
        mats: { "Veggie Coin": 350, "Tree Branch": 5, "Large Onion Chunk": 10 },
        lore: "After a long day of riding, both horse and saddle deserve a little rest.",
        image: "Images/GiantVeggie/Saddle Rack.png"
    },
    {
        id: "vegetable_prep_station",
        name: "Vegetable Prep Station",
        type: "furniture",
        timeMinutes: 30,
        mats: { "Veggie Coin": 700, "Large Onion Chunk": 20, "Large Carrot Chunk": 20, "Large Broccoli Chunk": 20 },
        lore: "A spacious workstation perfect for washing, chopping, and prepping freshly harvested vegetables.",
        image: "Images/GiantVeggie/Vegetable Prep Station.png"
    },
    {
        id: "vegetable_target_range",
        name: "Vegetable Target Range",
        type: "furniture",
        timeMinutes: 30,
        mats: { "Veggie Coin": 700, "Large Onion Chunk": 20, "Large Carrot Chunk": 20, "Large Broccoli Chunk": 20 },
        lore: "Take aim at the carrots, onions, and broccoli! Who'll be today's sharpshooter?",
        image: "Images/GiantVeggie/Vegetable Target Range.png"
    },
    {
        id: "western_cactus_patch",
        name: "Western Cactus Patch",
        type: "furniture",
        timeMinutes: 20,
        mats: { "Veggie Coin": 350, "Saguaro Cactus": 2, "Large Onion Chunk": 10 },
        lore: "A cluster of hardy cacti that don't mind the scorching sun.",
        image: "Images/GiantVeggie/Western Cactus Patch.png"
    },
    {
        id: "western_oil_lantern",
        name: "Western Oil Lantern",
        type: "furniture",
        timeMinutes: 140,
        mats: { "Veggie Coin": 850, "Copper Ore": 5, "Tree Branch": 10, "Large Carrot Chunk": 20 },
        lore: "An old lantern that casts a gentle glow across the dark frontier at night.",
        image: "Images/GiantVeggie/Western Oil Lantern.png"
    },
    {
        id: "western_outdoor_cooking_station",
        name: "Western Outdoor Cooking Station",
        type: "furniture",
        timeMinutes: 510,
        mats: { "Veggie Coin": 1400, "Tomato Stew": 10, "Broccoli Soup": 10, "Tree Branch": 20 },
        lore: "An outdoor kitchen equipped with hot burners and cooking tools. Harvest Festival cooking starts here!",
        image: "Images/GiantVeggie/Western Outdoor Cooking Station.png"
    },
    {
        id: "western_ranch_bell",
        name: "Western Ranch Bell",
        type: "furniture",
        timeMinutes: 110,
        mats: { "Veggie Coin": 700, "Iron Ore": 5, "Large Broccoli Chunk": 20 },
        lore: "Ding, ding! Ring the bell and it feels like everyone on the ranch will start gathering around.",
        image: "Images/GiantVeggie/Western Ranch Bell.png"
    },
    {
        id: "western_ranch_sign",
        name: "Western Ranch Sign",
        type: "furniture",
        timeMinutes: 100,
        mats: { "Veggie Coin": 700, "Iron Ore": 5, "Tree Branch": 10, "Large Broccoli Chunk": 20 },
        lore: "A ranch sign decorated with a horseshoe. Welcome to our ranch!",
        image: "Images/GiantVeggie/Western Ranch Sign.png"
    },
    {
        id: "western_ranch_swinging_doors",
        name: "Western Ranch Swinging Doors",
        type: "furniture",
        timeMinutes: 80,
        mats: { "Veggie Coin": 700, "Tree Branch": 20, "Large Carrot Chunk": 20 },
        lore: "Push through these swinging doors and feel like you've stepped into a Western!",
        image: "Images/GiantVeggie/Western Ranch Swinging Doors.png"
    },
    {
        id: "western_windmill",
        name: "Western Windmill",
        type: "furniture",
        timeMinutes: 90,
        mats: { "Veggie Coin": 700, "Silver Ore": 3, "Large Onion Chunk": 20 },
        lore: "It spins round and round in the strong frontier winds!",
        image: "Images/GiantVeggie/Western Windmill.png"
    }
];

const giantVeggiePets = [
    {
        id: "cactus_egg_normal",
        name: "Cactus Egg (Normal)",
        type: "pet",
        timeMinutes: 100,
        mats: { "Veggie Coin": 400, "Normal Egg": 1 },
        lore: "How exciting! What will it grow into? The beginnings of a little cactus are waiting inside.",
        image: "Images/GiantVeggie/Cactus Egg.png"
    },
    {
        id: "cactus_egg_premium",
        name: "Cactus Egg (Premium)",
        type: "pet",
        timeMinutes: 50,
        mats: { "Veggie Coin": 200, "Premium Egg": 1 },
        lore: "How exciting! What will it grow into? The beginnings of a little cactus are waiting inside.",
        image: "Images/GiantVeggie/Cactus Egg.png"
    },
    {
        id: "cactus_supplement",
        name: "Cactus Supplement",
        type: "pet",
        timeMinutes: 10,
        mats: { "Veggie Coin": 100, "Large Onion Chunk": 10 },
        lore: "One sip gives any cactus a boost! Grants 50 EXP.",
        image: "Images/GiantVeggie/Cactus Supplement.png"
    },
    {
        id: "premium_cactus_supplement",
        name: "Premium Cactus Supplement",
        type: "pet",
        timeMinutes: 30,
        mats: { "Veggie Coin": 200, "Large Onion Chunk": 15, "Large Carrot Chunk": 15 },
        lore: "One sip gives any cactus a boost! Grants 200 EXP.",
        image: "Images/GiantVeggie/Premium Cactus Supplement.png"
    },
    {
        id: "special_cactus_supplement",
        name: "Special Cactus Supplement",
        type: "pet",
        timeMinutes: 60,
        mats: { "Veggie Coin": 400, "Large Onion Chunk": 20, "Large Carrot Chunk": 20, "Large Broccoli Chunk": 20 },
        lore: "One sip gives any cactus a boost! Grants 700 EXP.",
        image: "Images/GiantVeggie/Special Cactus Supplement.png"
    }
];

const giantVeggieGlossary = [
    { name: "Veggie Coin", lore: "Used in events.", source: "Event", image: "Images/GiantVeggie/Veggie Coin.png" },
    { name: "Large Onion Chunk", lore: "A chunk obtained by defeating a Giant Onion.", source: "Event", image: "Images/GiantVeggie/Large Onion Chunk.png" },
    { name: "Large Broccoli Chunk", lore: "A chunk obtained by defeating a Giant Broccoli.", source: "Event", image: "Images/GiantVeggie/Large Broccoli Chunk.png" },
    { name: "Large Carrot Chunk", lore: "A chunk obtained by defeating a Giant Carrot.", source: "Event", image: "Images/GiantVeggie/Large Carrot Chunk.png" },
    { name: "Broccoli Soup", lore: "A smooth, savory soup packed with broccoli!", source: "Cooking", image: "Images/GiantVeggie/Broccoli Soup.png" },
    { name: "Tomato Stew", lore: "Ripe tomatoes simmered to bring out their sweet and tangy flavor.", source: "Cooking", image: "Images/GiantVeggie/Tomato Stew.png" },
    { name: "Saguaro Cactus", lore: "This plant thrives in the desert.", source: "Seed Shop", image: "Images/GiantVeggie/Saguaro Cactus.png" }
];