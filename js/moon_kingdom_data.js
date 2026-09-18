/* =====================================================================
   MOON KINGDOM EVENT DATA ENGINE
   ===================================================================== */

const moonKingdomItems = [
    // --- 1. VEHICLES ---
    {
        id: "mk_f01",
        name: "Full Moon Hot Air Balloon",
        type: "furniture",
        timeMinutes: 600,
        lore: "Shaped like a full moon, it makes the night sky even more romantic.",
        image: "Images/MoonKingdom/Full Moon Hot Air Balloon.png",
        mats: {
            "Full Moon Coin": 18000,
            "Tree Branch": 20,
            "Stone": 10
        }
    },
    {
        id: "mk_f02",
        name: "Moon Carrot Kart",
        type: "furniture",
        timeMinutes: 480,
        lore: "Made from a special carrot infused with moonlight!",
        image: "Images/MoonKingdom/Moon Carrot Kart.png",
        mats: {
            "Full Moon Coin": 16000,
            "Moon Carrot": 25
        }
    },

    // --- 2. FURNITURE & DECOR ---
	
	{
        id: "mk_f05",
        name: "Moon Rabbit Tent",
        type: "furniture",
        timeMinutes: 290,
        lore: "They say you'll have sweet dreams if you sleep in this Moon Rabbit-shaped tent.",
        image: "Images/MoonKingdom/Moon Rabbit Tent.png",
        mats: {
            "Full Moon Coin": 1200,
            "Tree Branch": 5
        }
    },
	
    {
        id: "mk_f17",
        name: "Moon Kingdom Bench",
        type: "furniture",
        timeMinutes: 20,
        lore: "Take a break and enjoy the moonlight.",
        image: "Images/MoonKingdom/Moon Kingdom Bench.png",
        mats: {
            "Full Moon Coin": 150,
            "Tree Branch": 10
        }
    },
    {
        id: "mk_f06",
        name: "Moon Village Streetlight",
        type: "furniture",
        timeMinutes: 120,
        lore: "Filled with soft starlight, it lights up the night.",
        image: "Images/MoonKingdom/Moon Village Streetlight.png",
        mats: {
            "Full Moon Coin": 150,
            "Stone": 3,
            "Tree Branch": 5,
            "Iron Ore": 1
        }
    },
    {
        id: "mk_f07",
        name: "Crescent Moon Fountain",
        type: "furniture",
        timeMinutes: 100,
        lore: "The gentle sound of flowing water makes a moonlit night even more beautiful.",
        image: "Images/MoonKingdom/Crescent Moon Fountain.png",
        mats: {
            "Full Moon Coin": 800,
            "Stone": 15,
            "Water": 10
        }
    },
    {
        id: "mk_f09",
        name: "Pointy Moon Tree",
        type: "furniture",
        timeMinutes: 90,
        lore: "It grew tall and slender like a crescent moon.",
        image: "Images/MoonKingdom/Pointy Moon Tree.png",
        mats: {
            "Full Moon Coin": 250,
            "Bright Grass Cube": 1
        }
    },
    {
        id: "mk_f10",
        name: "Round Star Tree",
        type: "furniture",
        timeMinutes: 90,
        lore: "It sparkles as if filled with starlight.",
        image: "Images/MoonKingdom/Round Star Tree.png",
        mats: {
            "Full Moon Coin": 250,
            "Bright Grass Cube": 1,
            "Onion": 5
        }
    },
    {
        id: "mk_f12",
        name: "Round Moon Tree",
        type: "furniture",
        timeMinutes: 120,
        lore: "It grew full and lush, just like the full moon.",
        image: "Images/MoonKingdom/Round Moon Tree.png",
        mats: {
            "Full Moon Coin": 250,
            "Bright Grass Cube": 1
        }
    },

    // --- 3. TANKS & CRITTER CONTAINERS ---
    {
        id: "mk_f18",
        name: "Dreamland Fish Tank (S)",
        type: "furniture",
        timeMinutes: 15,
        lore: "Put in the fish you caught and show it to your friends!",
        image: "Images/MoonKingdom/Dreamland Fish Tank (S).png",
        mats: {
            "Full Moon Coin": 75,
            "Water": 5,
            "Acrylic Sheet": 1,
            "Iron Ore": 3
        }
    },
    {
        id: "mk_f16",
        name: "Dreamland Fish Tank (M)",
        type: "furniture",
        timeMinutes: 30,
        lore: "Put in the fish you caught and show it to your friends!",
        image: "Images/MoonKingdom/Dreamland Fish Tank (M).png",
        mats: {
            "Full Moon Coin": 150,
            "Water": 10,
            "Acrylic Sheet": 1,
            "Copper Ore": 3
        }
    },
    {
        id: "mk_f13",
        name: "Dreamland Aquarium (L)",
        type: "furniture",
        timeMinutes: 60,
        lore: "Put in the fish you caught and show it to your friends!",
        image: "Images/MoonKingdom/Dreamland Aquarium (L).png",
        mats: {
            "Full Moon Coin": 300,
            "Water": 15,
            "Acrylic Sheet": 1
        }
    },
    {
        id: "mk_f11",
        name: "Dreamland Fish Tank (XL)",
        type: "furniture",
        timeMinutes: 90,
        lore: "Put in the fish you caught and show it to your friends!",
        image: "Images/MoonKingdom/Dreamland Fish Tank (XL).png",
        mats: {
            "Full Moon Coin": 450,
            "Water": 20,
            "Acrylic Sheet": 1
        }
    },
    {
        id: "mk_f15",
        name: "Dreamland Insect Basket",
        type: "furniture",
        timeMinutes: 210,
        lore: "Gift the critter inside a taste of Dreamland!",
        image: "Images/MoonKingdom/Dreamland Insect Basket.png",
        mats: {
            "Full Moon Coin": 75,
            "Acrylic Sheet": 1
        }
    },

    // --- 4. PET STUFF ---
    {
        id: "mk_f14",
        name: "Moon Rabbit Pet Bed",
        type: "furniture",
        timeMinutes: 60,
        lore: "A cozy place for your Moon Rabbit to rest.",
        image: "Images/MoonKingdom/Moon Rabbit Pet Bed.png",
        mats: {
            "Full Moon Coin": 660,
            "Tree Branch": 20
        }
    },
    {
        id: "mk_f08",
        name: "Full Moon Pet Bathtub",
        type: "furniture",
        timeMinutes: 90,
        lore: "Enjoy a relaxing bath under the warm moonlight.",
        image: "Images/MoonKingdom/Full Moon Pet Bathtub.png",
        mats: {
            "Full Moon Coin": 900,
            "Stone": 5
        }
    },

    // --- 5. MISC (FOOD & DRINK STANDS) ---
    {
        id: "mk_f03",
        name: "Moon Kingdom Drink Stand",
        type: "furniture",
        timeMinutes: 360,
        lore: "It's stocked with refreshing, sweet drinks from the Moon Kingdom.",
        image: "Images/MoonKingdom/Moon Kingdom Drink Stand.png",
        mats: {
            "Full Moon Coin": 550,
            "Tree Branch": 20
        }
    },
    {
        id: "mk_f04",
        name: "Moon Kingdom Food Stand",
        type: "furniture",
        timeMinutes: 360,
        lore: "Fill up on delicious food from the Moon Kingdom.",
        image: "Images/MoonKingdom/Moon Kingdom Food Stand.png",
        mats: {
            "Full Moon Coin": 550,
            "Tree Branch": 20
        }
    }
];

const moonKingdomPets = [
    // --- EGGS ---
    {
        id: "mk_p01",
        name: "Moon Rabbit Egg (Premium)",
        type: "pet",
        timeMinutes: 180,
        lore: "An egg containing a mysterious rabbit found only in the Moon Kingdom.",
        image: "Images/MoonKingdom/Moon Rabbit Egg.png",
        mats: {
            "Full Moon Coin": 400,
            "Premium Egg": 1
        }
    },
    {
        id: "mk_p02_normal",
        name: "Moon Rabbit Egg (Normal)",
        type: "pet",
        timeMinutes: 180,
        lore: "An egg containing a mysterious rabbit found only in the Moon Kingdom.",
        image: "Images/MoonKingdom/Moon Rabbit Egg.png",
        mats: {
            "Full Moon Coin": 200,
            "Normal Egg": 1
        }
    },

    // --- SUPPLEMENTS ---
    {
        id: "mk_p05",
        name: "Moon Carrot Supplement",
        type: "pet",
        timeMinutes: 10,
        lore: "A supplement packed with the nutritional goodness of Moon Carrots. Increases EXP by 50.",
        image: "Images/MoonKingdom/Moon Carrot Supplement.png",
        mats: {
            "Full Moon Coin": 100,
            "Moon Carrot": 3,
            "Salt": 1
        }
    },
    {
        id: "mk_p04",
        name: "Premium Moon Carrot Supplement",
        type: "pet",
        timeMinutes: 30,
        lore: "A supplement packed with the nutritional goodness of Moon Carrots. Increases EXP by 200.",
        image: "Images/MoonKingdom/Premium Moon Carrot Supplement.png",
        mats: {
            "Full Moon Coin": 200,
            "Moon Carrot": 5,
            "Salt": 3
        }
    },
    {
        id: "mk_p03",
        name: "Special Moon Carrot Supplement",
        type: "pet",
        timeMinutes: 90,
        lore: "A supplement packed with the nutritional goodness of Moon Carrots. Increases EXP by 700.",
        image: "Images/MoonKingdom/Special Moon Carrot Supplement.png",
        mats: {
            "Full Moon Coin": 400,
            "Moon Carrot": 10,
            "Salt": 5
        }
    }
];

const moonKingdomGlossary = [
    {
        name: "Full Moon Coin",
        lore: "Full Moon Coin",
        source: "Event",
        image: "Images/MoonKingdom/Full Moon Coin.png"
    },
    {
        name: "Moon Carrot",
        lore: "A lunar delicacy known for its subtle moonlight aroma and sweet flavor.",
        source: "Event",
        image: "Images/MoonKingdom/Moon Carrot.png"
    }
];
