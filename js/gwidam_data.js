// Gwidam Village Event Data (Archived Season)
const gwidamItems = [
    { id: "traditional_jar", name: "Traditional Jar", timeMinutes: 30, mats: { "Guardian Yeopjeon": 40, "Stone": 10 }, lore: "Place it somewhere that gets plenty of sunshine.", image: "Images/Gwidam/Traditional Jar.png" },
    { id: "guardian_monument", name: "Village Guardian Monument", timeMinutes: 30, mats: { "Guardian Yeopjeon": 60, "Health Charm": 5, "Stone": 20 }, lore: "A guardian monument that has watched over the village for generations.", image: "Images/Gwidam/Village Guardian Monument.png" },
    { id: "mysterious_well", name: "Mysterious Well", timeMinutes: 80, mats: { "Guardian Yeopjeon": 60, "Eoduksini": 3, "Water": 10 }, lore: "Ancient secrets lie hidden deep within this well.", image: "Images/Gwidam/Mysterious Well.png" },
    { id: "cheongsachorong", name: "Cheongsachorong Lantern", timeMinutes: 120, mats: { "Guardian Yeopjeon": 60, "Will-o'-the-Wisp": 3 }, lore: "Its gentle glow lights the way through the quiet night.", image: "Images/Gwidam/Cheongsachorong Lantern.png" },
    { id: "latticework_lantern", name: "Traditional Latticework Lantern", timeMinutes: 120, mats: { "Guardian Yeopjeon": 60, "Will-o'-the-Wisp": 3 }, lore: "Made with traditional latticework and hanji paper.", image: "Images/Gwidam/Traditional Latticework Lantern.png" },
    { id: "moon_pavilion", name: "Moon-Viewing Pavilion", timeMinutes: 230, mats: { "Guardian Yeopjeon": 100, "Cursed Scarecrow": 15, "Stone": 10 }, lore: "Welcome the rising moon on a peaceful night.", image: "Images/Gwidam/Moon-Viewing Pavilion.png" },
    { id: "moonlit_thatched_cottage", name: "Moonlit Thatched Cottage", timeMinutes: 160, mats: { "Guardian Yeopjeon": 100, "Cursed Scarecrow": 15, "Ivory Cube": 2 }, lore: "A thatched cottage bathed in the gentle glow of moonlight.", image: "Images/Gwidam/Moonlit Thatched Cottage.png" },
    { id: "underworld_totem", name: "Female General of the Underworld Totem", timeMinutes: 150, mats: { "Guardian Yeopjeon": 150, "Female General Totem (Material)": 1, "Health Charm": 5 }, lore: "It is said to govern the energy that flows beneath the earth.", image: "Images/Gwidam/Female General of the Underworld Totem.png" },
    { id: "heaven_totem", name: "Great General of All Under Heaven Totem", timeMinutes: 150, mats: { "Guardian Yeopjeon": 150, "Great General Totem (Material)": 1, "Health Charm": 5 }, lore: "Said to watch over the village and ward off evil spirits.", image: "Images/Gwidam/Great General of All Under Heaven Totem.png" },
    { id: "haechi_statue", name: "Haechi Statue", timeMinutes: 390, mats: { "Guardian Yeopjeon": 250, "Haechi Statue (Material)": 1, "Yeopjeon Knot Ornament": 5, "Someone's Nameplate": 3 }, lore: "Imbued with the protective spirit of the righteous guardian beast, Haechi.", image: "Images/Gwidam/Haechi Statue.png" },
    { id: "market_stall", name: "Village Market Stall", timeMinutes: 360, mats: { "Guardian Yeopjeon": 200, "Will-o'-the-Wisp": 5, "Someone's Nameplate": 3 }, lore: "A simple market stall that fits perfectly in a cozy village marketplace.", image: "Images/Gwidam/Village Market Stall.png" },
    { id: "thatched_barn", name: "Thatched Barn", timeMinutes: 110, mats: { "Guardian Yeopjeon": 80, "Misfortune Doll": 5, "Tree Branch": 10 }, lore: "A cozy barn topped with warm straw.", image: "Images/Gwidam/Thatched Barn.png" },
    { id: "traditional_signboard", name: "Traditional Signboard", timeMinutes: 180, mats: { "Guardian Yeopjeon": 100, "Someone's Norigae": 10, "Misfortune Doll": 5 }, lore: "Leave a message for the village.", image: "Images/Gwidam/Traditional Signboard.png" },
    { id: "wooden_platform", name: "Peaceful Wooden Platform", timeMinutes: 40, mats: { "Guardian Yeopjeon": 40, "Tree Branch": 20 }, lore: "Take a break and enjoy the gentle breeze.", image: "Images/Gwidam/Peaceful Wooden Platform.png" }
];

const gwidamPets = [
    { id: "divine_beast_supplement", name: "Divine Beast Supplement", timeMinutes: 40, mats: { "Guardian Yeopjeon": 50, "Misfortune Doll": 3, "Water": 5 }, lore: "Filled with pure spiritual energy to nurture the growth of your Divine Beast. Increases EXP by 50.", image: "Images/Gwidam/divine_beast_supplement.png" },
    { id: "premium_divine_beast_supplement", name: "Premium Divine Beast Supplement", timeMinutes: 40, mats: { "Guardian Yeopjeon": 100, "Will-o'-the-Wisp": 1, "Water": 5 }, lore: "Filled with pure spiritual energy to nurture the growth of your Divine Beast. Increases EXP by 200.", image: "Images/Gwidam/premium_divine_beast_supplement.png" },
    { id: "super_premium_divine_beast_supplement", name: "Super Premium Divine Beast Supplement", timeMinutes: 40, mats: { "Guardian Yeopjeon": 150, "Eoduksini": 1, "Water": 5 }, lore: "Filled with pure spiritual energy to nurture the growth of your Divine Beast. Increases EXP by 700.", image: "Images/Gwidam/super_premium_divine_beast_supplement.png" },
    { id: "divine_beast_barrier_pet_fence", name: "Divine Beast Barrier Pet Fence", timeMinutes: 990, mats: { "Guardian Yeopjeon": 250, "Health Charm": 10, "Yeopjeon Knot Ornament": 20, "Stone": 1 }, lore: "A mystical barrier created to safeguard the divine beasts.", image: "Images/Gwidam/divine_beast_barrier_pet_fence.png" },
    { id: "divine_beast_egg_normal", name: "Divine Beast Egg (Normal)", timeMinutes: 100, mats: { "Guardian Yeopjeon": 200, "Normal Egg": 1 }, lore: "A mysterious presence can be felt from within the shell.", image: "Images/Gwidam/divine_beast_egg.png" },
    { id: "divine_beast_egg_premium", name: "Divine Beast Egg (Premium)", timeMinutes: 100, mats: { "Guardian Yeopjeon": 100, "Premium Egg": 1 }, lore: "A mysterious presence can be felt from within the shell.", image: "Images/Gwidam/divine_beast_egg.png" }
];

const gwidamGlossary = [
    { name: "Someone's Nameplate", source: "(Excavation) Mysterious Jar", lore: "Beyond the weathered name, forgotten memories still linger." },
    { name: "Cursed Scarecrow", source: "Gwidam Village All Areas All Day", lore: "Time of Appearance: Ghost Story Event Season" },
    { name: "Eoduksini", source: "Gwidam Village Restricted Area All Day", lore: "Time of Appearance: Ghost Story Event Season" },
    { name: "Yeopjeon Knot Ornament", source: "(Excavation) Mysterious Jar", lore: "Carefully woven strand by strand, as though each knot carries a wish for good fortune." },
    { name: "Haechi Statue (Material)", source: "Excavation", lore: "Imbued with the protective spirit of the righteous guardian beast, Haechi." },
    { name: "Someone's Norigae", source: "(Excavation) Mysterious Jar", lore: "Its former brilliance has faded, but the signs of having been dearly cherished remain." },
    { name: "Female General Totem (Material)", source: "Excavation", lore: "It is said to govern the energy that flows beneath the earth." },
    { name: "Great General Totem (Material)", source: "Excavation", lore: "Said to watch over the village and ward off evil spirits." },
    { name: "Health Charm", source: "(Excavation) Mysterious Jar", lore: "A charm filled with wishes for good health in both body and mind." },
    { name: "Misfortune Doll", source: "(Excavation) Mysterious Jar", lore: "A doll that bears the traces of someone's wish to take away their misfortune." },
    { name: "Will-o'-the-Wisp", source: "Gwidam Village Shrine All Day", lore: "Time of Appearance: Ghost Story Event Season" },
    { name: "Guardian Yeopjeon", source: "Event", lore: "Used at the Haechi Altar to pray for health and peace. Used in events." }
];
