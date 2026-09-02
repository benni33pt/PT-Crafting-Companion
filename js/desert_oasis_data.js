/* =====================================================================
   DESERT OASIS EVENT DATA ARCHIVE
   ===================================================================== */
const desertOasisItems = [
    // --- CACTI & PLANTS ---
    { id: "saguaro_cactus", name: "Saguaro Cactus", timeMinutes: 120, mats: { "Pyramid Coin": 200 }, lore: "A hardy cactus that thrives among the rugged sand dunes.", image: "Images/DesertOasis/Saguaro Cactus.png" },
    { id: "columnar_cactus", name: "Columnar Cactus", timeMinutes: 120, mats: { "Pyramid Coin": 200 }, lore: "An iconic desert cactus that stretches proudly toward the sky.", image: "Images/DesertOasis/Columnar Cactus.png" },
    { id: "paddle_cactus", name: "Paddle Cactus", timeMinutes: 120, mats: { "Pyramid Coin": 200 }, lore: "A charming cactus with broad, paddle-shaped stems.", image: "Images/DesertOasis/Paddle Cactus.png" },
    { id: "golden_barrel_cactus", name: "Golden Barrel Cactus", timeMinutes: 120, mats: { "Pyramid Coin": 200 }, lore: "A round cactus adorned with shimmering golden spines.", image: "Images/DesertOasis/Golden Barrel Cactus.png" },
    { id: "oasis_cactus", name: "Oasis Cactus", timeMinutes: 120, mats: { "Pyramid Coin": 200 }, lore: "A lush cactus that flourishes around refreshing desert oases.", image: "Images/DesertOasis/Oasis Cactus.png" },

    // --- CARTS & MARKET STANDS ---
    { id: "oasis_cart", name: "Oasis Cart", timeMinutes: 320, mats: { "Pyramid Coin": 400, "Torn Papyrus": 5, "Tree Branch": 20 }, lore: "A wooden cart used to transport goods through the desert village.", image: "Images/DesertOasis/Oasis Cart.png" },
    { id: "oasis_drink_stand", name: "Oasis Drink Stand", timeMinutes: 440, mats: { "Pyramid Coin": 400, "Cracked Clay Tablet": 5, "Torn Papyrus": 3, "Tree Branch": 20 }, lore: "A small stand that sells refreshing drinks.", image: "Images/DesertOasis/Oasis Drink Stand.png" },
    { id: "oasis_food_stand", name: "Oasis Food Stand", timeMinutes: 440, mats: { "Pyramid Coin": 400, "Cracked Clay Tablet": 5, "Torn Papyrus": 3, "Tree Branch": 20 }, lore: "A food stand that sells a variety of desert dishes.", image: "Images/DesertOasis/Oasis Food Stand.png" },

    // --- STRUCTURES & DECOR ---
    { id: "wooden_signpost", name: "Wooden Signpost", timeMinutes: 120, mats: { "Pyramid Coin": 200, "Tree Branch": 3 }, lore: "A wooden sign that points travelers toward nearby paths and places.", image: "Images/DesertOasis/Wooden Signpost.png" },
    { id: "oasis_banner", name: "Oasis Banner", timeMinutes: 110, mats: { "Pyramid Coin": 200, "Torn Papyrus": 3, "Tree Branch": 10 }, lore: "A decorative banner that brightens up the oasis.", image: "Images/DesertOasis/Oasis Banner.png" },
    { id: "oasis_jar", name: "Oasis Jar", timeMinutes: 90, mats: { "Pyramid Coin": 200, "Broken Pottery Shards": 3 }, lore: "A large jar used to store precious water and food.", image: "Images/DesertOasis/Oasis Jar.png" },
    { id: "ancient_beast_bones", name: "Ancient Beast Bones", timeMinutes: 700, mats: { "Pyramid Coin": 500 }, lore: "The weathered remains of a beast left in the desert for many years.", image: "Images/DesertOasis/Ancient Beast Bones.png" },

    // --- PET FURNITURE ---
    { id: "oasis_pet_bed", name: "Oasis Pet Bed", timeMinutes: 160, mats: { "Pyramid Coin": 400, "Broken Pottery Shards": 3, "Cracked Clay Tablet": 10 }, lore: "Rest is just as important when preparing for a long journey.", image: "Images/DesertOasis/Oasis Pet Bed.png" },
    { id: "oasis_pet_bathtub", name: "Oasis Pet Bathtub", timeMinutes: 240, mats: { "Pyramid Coin": 400, "Broken Pottery Shards": 3, "Oasis Water": 3 }, lore: "A special pet bathtub filled with the crystal-clear spring water of an oasis.", image: "Images/DesertOasis/Oasis Pet Bathtub.png" }
];

const desertOasisPets = [
    { id: "fennec_fox_egg_normal", name: "Fennec Fox Egg (Normal)", timeMinutes: 200, mats: { "Pyramid Coin": 400, "Normal Egg": 1 }, lore: "A little desert guardian slumbers quietly within.", image: "Images/DesertOasis/Fennec Fox Egg.png" },
    { id: "fennec_fox_egg_premium", name: "Fennec Fox Egg (Premium)", timeMinutes: 100, mats: { "Pyramid Coin": 200, "Premium Egg": 1 }, lore: "A little desert guardian slumbers quietly within.", image: "Images/DesertOasis/Fennec Fox Egg.png" },
    { id: "oasis_supplement", name: "Oasis Supplement", timeMinutes: 10, mats: { "Pyramid Coin": 100, "Oasis Water": 1 }, lore: "A supplement infused with the refreshing energy of a tranquil oasis. Increases EXP by 50.", image: "Images/DesertOasis/Oasis Supplement.png" },
    { id: "premium_oasis_supplement", name: "Premium Oasis Supplement", timeMinutes: 30, mats: { "Pyramid Coin": 200, "Oasis Water": 3 }, lore: "A supplement infused with the refreshing energy of a tranquil oasis. Increases EXP by 200.", image: "Images/DesertOasis/Premium Oasis Supplement.png" },
    { id: "special_oasis_supplement", name: "Special Oasis Supplement", timeMinutes: 60, mats: { "Pyramid Coin": 400, "Oasis Water": 5 }, lore: "A supplement infused with the refreshing energy of a tranquil oasis. Increases EXP by 700.", image: "Images/DesertOasis/Special Oasis Supplement.png" }
];

const desertOasisGlossary = [
    { name: "Pyramid Coin", lore: "Used in events.", source: "Event", image: "Images/DesertOasis/Pyramid Coin.png" },
    { name: "Torn Papyrus", lore: "A torn sheet of papyrus bearing ancient records.", source: "(Excavation) Ancient Jar", image: "Images/DesertOasis/Torn Papyrus.png" },
    { name: "Cracked Clay Tablet", lore: "A clay tablet once used to record history, now cracked with age.", source: "(Excavation) Ancient Jar", image: "Images/DesertOasis/Cracked Clay Tablet.png" },
    { name: "Broken Pottery Shards", lore: "Fragments of everyday pottery once used in daily life.", source: "(Excavation) Ancient Jar", image: "Images/DesertOasis/Broken Pottery Shards.png" },
    { name: "Oasis Water", lore: "Crystal-clear, refreshing spring water drawn from the oasis.", source: "Event Vendor", image: "Images/DesertOasis/Oasis Water.png" }
];
