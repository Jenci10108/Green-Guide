const plantCareDatabase = {
    "Solanum lycopersicum": {
        nativeRegion: "Western South America",
        light: "Full sun, about 6–8 hours daily.",
        water: "Water regularly when the top soil begins to dry. Avoid waterlogging.",
        temperature: "Warm climate, approximately 18–30°C.",
        soil: "Fertile, well-draining soil rich in organic matter.",
        growth: "Usually 1–3 meters depending on variety and support.",
        season: "Best planted during the warm growing season.",
        care: [
            "Provide 6–8 hours of sunlight daily.",
            "Keep the soil consistently moist but not waterlogged.",
            "Provide support such as a stake or trellis for taller varieties.",
            "Use suitable organic or balanced fertilizer during growth.",
            "Check regularly for pests and leaf diseases."
        ]
    },

    "Mangifera indica": {
        nativeRegion: "Indian subcontinent and Southeast Asia",
        light: "Full sun, about 6–8 hours daily.",
        water: "Water deeply when the soil becomes moderately dry.",
        temperature: "Warm tropical and subtropical climate, approximately 24–30°C.",
        soil: "Deep, fertile and well-draining soil.",
        growth: "Large evergreen tree, commonly reaching 10–30 meters.",
        season: "Best planted during the warm and rainy season.",
        care: [
            "Provide plenty of direct sunlight.",
            "Water deeply while the young tree is establishing.",
            "Avoid standing water around the roots.",
            "Apply suitable organic fertilizer during the growing season.",
            "Prune damaged or overcrowded branches when needed."
        ]
    },

    "Azadirachta indica": {
        nativeRegion: "Indian subcontinent",
        light: "Full sun to partial sun.",
        water: "Water moderately; established trees are relatively drought tolerant.",
        temperature: "Warm tropical and subtropical climate.",
        soil: "Well-draining soil; can tolerate many soil types.",
        growth: "Large evergreen tree, commonly reaching 15–20 meters.",
        season: "Best planted during the rainy or warm growing season.",
        care: [
            "Provide good sunlight.",
            "Water young plants regularly.",
            "Avoid prolonged waterlogging.",
            "Add organic matter to improve soil quality.",
            "Prune damaged branches when necessary."
        ]
    },

    "Rosa": {
        nativeRegion: "Temperate and subtropical regions of the Northern Hemisphere",
        light: "Full sun, preferably 6 or more hours daily.",
        water: "Water deeply when the upper soil begins to dry.",
        temperature: "Generally grows well in mild to warm conditions.",
        soil: "Fertile, well-draining soil rich in organic matter.",
        growth: "Growth varies greatly by rose variety.",
        season: "Planting season varies with climate and rose variety.",
        care: [
            "Provide sufficient sunlight and good air circulation.",
            "Water the soil rather than keeping the leaves wet.",
            "Remove dead or damaged growth.",
            "Add compost or suitable fertilizer during active growth.",
            "Monitor regularly for pests and fungal problems."
        ]
    },

    "Ocimum tenuiflorum": {
        nativeRegion: "Indian subcontinent and Southeast Asia",
        light: "Full sun to partial shade.",
        water: "Water when the upper layer of soil becomes dry.",
        temperature: "Warm climate, approximately 20–30°C.",
        soil: "Rich, well-draining soil.",
        growth: "Usually around 30–60 cm depending on growing conditions.",
        season: "Best grown during warm weather.",
        care: [
            "Provide several hours of sunlight each day.",
            "Water when the soil starts becoming dry.",
            "Use well-draining soil.",
            "Pinch growing tips to encourage bushier growth.",
            "Remove damaged leaves regularly."
        ]
    },

    "Aloe vera": {
        nativeRegion: "Arabian Peninsula",
        light: "Bright light with several hours of sunlight.",
        water: "Water deeply but allow the soil to dry between watering.",
        temperature: "Warm conditions, approximately 15–30°C.",
        soil: "Very well-draining sandy or cactus-type soil.",
        growth: "Usually around 30–60 cm tall.",
        season: "Can be grown throughout warm conditions; avoid frost.",
        care: [
            "Use a pot or soil with excellent drainage.",
            "Allow the soil to dry before watering again.",
            "Avoid leaving water around the center of the plant.",
            "Provide bright sunlight.",
            "Protect the plant from frost and prolonged cold."
        ]
    }
    
};


plantCareDatabase["Rosa × damascena"] = plantCareDatabase["Rosa"];
plantCareDatabase["Aloe officinalis"] = plantCareDatabase["Aloe vera"];
plantCareDatabase["Jasminum sambac"] = {
    nativeRegion: "South Asia and Southeast Asia",
    light: "Bright light to full sun.",
    water: "Water when the upper soil begins to dry. Avoid waterlogging.",
    temperature: "Warm conditions, around 18–30°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Usually a small shrub, around 1–3 meters.",
    season: "Best grown during warm weather.",
    care: [
        "Provide bright light or several hours of direct sunlight.",
        "Water when the upper soil begins to dry.",
        "Use fertile, well-draining soil.",
        "Prune lightly after flowering.",
        "Check regularly for pests and damaged leaves."
    ]
};
plantCareDatabase["Hibiscus rosa-sinensis"] = {
    nativeRegion: "Tropical Asia",
    light: "Full sun to bright light.",
    water: "Keep the soil moderately moist but avoid waterlogging.",
    temperature: "Warm conditions, approximately 18–30°C.",
    soil: "Rich, fertile and well-draining soil.",
    growth: "Usually around 1–3 meters depending on growing conditions.",
    season: "Best grown during warm weather.",
    care: [
        "Provide several hours of direct sunlight.",
        "Water when the upper soil begins to dry.",
        "Use fertile, well-draining soil.",
        "Prune lightly to maintain healthy growth.",
        "Check regularly for pests and damaged leaves."
    ]
};
plantCareDatabase["Helianthus annuus"] = {
    nativeRegion: "North America",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly when the upper soil begins to dry.",
    temperature: "Warm conditions, approximately 18–30°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Usually around 1–3 meters depending on the variety.",
    season: "Best planted during the warm growing season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Keep the soil moderately moist.",
        "Use fertile, well-draining soil.",
        "Provide support for tall varieties if needed.",
        "Remove damaged leaves and monitor for pests."
    ]
};
plantCareDatabase["Mentha"] = {
    nativeRegion: "Europe, Asia and North America",
    light: "Full sun to partial shade.",
    water: "Keep the soil consistently moist but not waterlogged.",
    temperature: "Cool to moderate conditions, approximately 15–25°C.",
    soil: "Moist, fertile and well-draining soil.",
    growth: "Usually around 30–90 cm depending on the variety.",
    season: "Best grown during mild to warm growing conditions.",
    care: [
        "Provide sunlight with some protection from intense afternoon heat.",
        "Keep the soil evenly moist.",
        "Use fertile soil with good drainage.",
        "Trim regularly to encourage fresh growth.",
        "Check for pests and damaged leaves."
    ]
};
plantCareDatabase["Coriandrum sativum"] = {
    nativeRegion: "Mediterranean region and southwestern Asia",
    light: "Full sun to partial shade.",
    water: "Water regularly when the upper soil begins to dry.",
    temperature: "Cool to moderate conditions, approximately 10–25°C.",
    soil: "Fertile, loose and well-draining soil.",
    growth: "Usually around 30–60 cm tall.",
    season: "Best grown during cool to mild weather.",
    care: [
        "Provide several hours of sunlight each day.",
        "Keep the soil moderately moist.",
        "Use loose, well-draining soil.",
        "Harvest leaves regularly to encourage continued growth.",
        "Avoid excessive heat and waterlogging."
    ]
};
plantCareDatabase["Epipremnum aureum"] = {
    nativeRegion: "French Polynesia and the Society Islands",
    light: "Bright indirect light to partial shade.",
    water: "Water when the upper soil becomes slightly dry.",
    temperature: "Warm conditions, approximately 18–30°C.",
    soil: "Well-draining, fertile potting soil.",
    growth: "Trailing or climbing plant, commonly growing several meters.",
    season: "Can be grown throughout the year in warm conditions.",
    care: [
        "Provide bright indirect light.",
        "Allow the upper soil to dry slightly before watering.",
        "Avoid standing water around the roots.",
        "Trim long or damaged vines when needed.",
        "Check regularly for pests."
    ]
};
plantCareDatabase["Murraya koenigii"] = {
    nativeRegion: "Indian subcontinent and Southeast Asia",
    light: "Full sun to partial shade.",
    water: "Water when the upper soil begins to dry.",
    temperature: "Warm conditions, approximately 18–35°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Usually around 2–6 meters depending on growing conditions.",
    season: "Best planted during the warm growing season.",
    care: [
        "Provide several hours of direct sunlight.",
        "Water moderately and avoid waterlogging.",
        "Use fertile, well-draining soil.",
        "Prune regularly to encourage bushier growth.",
        "Protect young plants from extreme cold."
    ]
    
};
plantCareDatabase["Bergera koenigii"] =
    plantCareDatabase["Murraya koenigii"];
    
plantCareDatabase["Musa"] = {
    nativeRegion: "Southeast Asia and tropical regions",
    light: "Full sun to partial shade.",
    water: "Water regularly and keep the soil moderately moist.",
    temperature: "Warm tropical conditions, approximately 20–35°C.",
    soil: "Fertile, rich and well-draining soil.",
    growth: "Usually around 2–7 meters depending on the variety.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of sunlight.",
        "Keep the soil consistently moist but avoid waterlogging.",
        "Use fertile soil rich in organic matter.",
        "Apply suitable fertilizer during active growth.",
        "Remove damaged or dry leaves regularly."
    ]
};
plantCareDatabase["Psidium guajava"] = {
    nativeRegion: "Tropical America",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly, especially while the plant is young.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–30°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Usually around 3–10 meters depending on the variety.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water regularly without causing waterlogging.",
        "Use fertile soil with good drainage.",
        "Apply suitable organic fertilizer during active growth.",
        "Prune damaged or overcrowded branches when needed."
    ]
};
plantCareDatabase["Carica papaya"] = {
    nativeRegion: "Tropical Americas",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly and keep the soil moderately moist.",
    temperature: "Warm tropical conditions, approximately 21–32°C.",
    soil: "Fertile, well-draining soil rich in organic matter.",
    growth: "Usually around 2–10 meters depending on the variety.",
    season: "Best planted during warm weather.",
    care: [
        "Provide plenty of direct sunlight.",
        "Keep the soil moist but avoid waterlogging.",
        "Use fertile, well-draining soil.",
        "Provide suitable fertilizer during active growth.",
        "Protect young plants from strong winds."
    ]
};
plantCareDatabase["Citrus limon"] = {
    nativeRegion: "South Asia",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water deeply when the upper soil begins to dry.",
    temperature: "Warm subtropical conditions, approximately 15–30°C.",
    soil: "Fertile, well-draining, slightly acidic soil.",
    growth: "Usually around 3–6 meters depending on the variety.",
    season: "Best planted during the warm growing season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water deeply but avoid waterlogging.",
        "Use fertile, well-draining soil.",
        "Apply suitable citrus fertilizer during active growth.",
        "Prune damaged or overcrowded branches when needed."
    ]
};
plantCareDatabase["Punica granatum"] = {
    nativeRegion: "Iran to northern India",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly while young; established plants tolerate some dryness.",
    temperature: "Warm conditions, approximately 15–35°C.",
    soil: "Well-draining soil; tolerates a range of soil types.",
    growth: "Usually around 3–5 meters depending on the variety.",
    season: "Best planted during the warm growing season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water young plants regularly.",
        "Avoid prolonged waterlogging.",
        "Use suitable fertilizer during active growth.",
        "Prune damaged or overcrowded branches when needed."
    ]
};
plantCareDatabase["Cocos nucifera"] = {
    nativeRegion: "Tropical regions of the Indo-Pacific",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly, especially during dry periods.",
    temperature: "Warm tropical conditions, approximately 24–32°C.",
    soil: "Sandy, fertile and well-draining soil.",
    growth: "Usually around 15–30 meters tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water regularly during dry periods.",
        "Ensure excellent soil drainage.",
        "Add organic matter and suitable nutrients.",
        "Protect young plants from strong winds and extreme cold."
    ]
};
plantCareDatabase["Ficus religiosa"] = {
    nativeRegion: "Indian subcontinent and Southeast Asia",
    light: "Full sun to partial shade.",
    water: "Water regularly when young; established trees tolerate some dryness.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–35°C.",
    soil: "Well-draining fertile soil.",
    growth: "Large tree, commonly reaching 15–25 meters or more.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of sunlight.",
        "Water young plants regularly.",
        "Avoid prolonged waterlogging.",
        "Provide sufficient space for root and canopy growth.",
        "Prune damaged or unsafe branches when necessary."
    ]
};
plantCareDatabase["Ficus benghalensis"] = {
    nativeRegion: "Indian subcontinent",
    light: "Full sun to partial shade.",
    water: "Water regularly when young; mature trees tolerate periods of dryness.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–35°C.",
    soil: "Deep, fertile and well-draining soil.",
    growth: "Very large tree, commonly reaching 15–25 meters or more.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of sunlight.",
        "Water young plants regularly.",
        "Avoid prolonged waterlogging.",
        "Allow sufficient space for extensive roots and branches.",
        "Remove damaged or unsafe branches when necessary."
    ]
};
plantCareDatabase["Saraca asoca"] = {
    nativeRegion: "Indian subcontinent and Southeast Asia",
    light: "Full sun to partial shade.",
    water: "Water regularly and keep the soil moderately moist.",
    temperature: "Warm tropical conditions, approximately 20–30°C.",
    soil: "Fertile, moist and well-draining soil.",
    growth: "Usually around 6–10 meters tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide bright sunlight or partial shade.",
        "Keep the soil moderately moist.",
        "Avoid prolonged waterlogging.",
        "Add organic matter to improve soil fertility.",
        "Prune damaged branches when necessary."
    ]
};
plantCareDatabase["Phyllanthus emblica"] = {
    nativeRegion: "Indian subcontinent and Southeast Asia",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly while young; established trees tolerate some dryness.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–35°C.",
    soil: "Well-draining soil; can tolerate different soil types.",
    growth: "Usually around 8–18 meters tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water young plants regularly.",
        "Avoid prolonged waterlogging.",
        "Add organic matter to improve soil quality.",
        "Prune damaged or overcrowded branches when needed."
    ]
};
plantCareDatabase["Syzygium cumini"] = {
    nativeRegion: "Indian subcontinent and Southeast Asia",
    light: "Full sun to partial shade.",
    water: "Water regularly while young; mature trees tolerate some dryness.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–35°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Large evergreen tree, commonly reaching 10–30 meters.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of sunlight.",
        "Water young plants regularly.",
        "Avoid prolonged waterlogging.",
        "Use fertile soil with good drainage.",
        "Prune damaged or overcrowded branches when necessary."
    ]
};
plantCareDatabase["Moringa oleifera"] = {
    nativeRegion: "Indian subcontinent",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly while young; established trees tolerate dry conditions.",
    temperature: "Warm tropical and subtropical conditions, approximately 20–35°C.",
    soil: "Well-draining sandy or loamy soil.",
    growth: "Usually around 5–12 meters tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Water young plants regularly but avoid waterlogging.",
        "Use well-draining soil.",
        "Prune regularly to encourage branching.",
        "Remove damaged or dry branches when necessary."
    ]
};
plantCareDatabase["Curcuma longa"] = {
    nativeRegion: "South Asia and Southeast Asia",
    light: "Partial shade to full sun.",
    water: "Keep the soil consistently moist but avoid waterlogging.",
    temperature: "Warm tropical conditions, approximately 20–30°C.",
    soil: "Rich, fertile and well-draining soil.",
    growth: "Usually around 60–100 cm tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide bright light or partial shade.",
        "Keep the soil evenly moist.",
        "Avoid standing water around the roots.",
        "Use fertile soil rich in organic matter.",
        "Reduce watering when the leaves naturally begin to dry."
    ]
};
plantCareDatabase["Zingiber officinale"] = {
    nativeRegion: "Southeast Asia",
    light: "Partial shade to bright indirect light.",
    water: "Keep the soil consistently moist but avoid waterlogging.",
    temperature: "Warm conditions, approximately 20–30°C.",
    soil: "Rich, fertile and well-draining soil.",
    growth: "Usually around 60–120 cm tall.",
    season: "Best planted during the warm and rainy season.",
    care: [
        "Provide bright light with some protection from harsh afternoon sun.",
        "Keep the soil evenly moist.",
        "Avoid standing water around the roots.",
        "Use fertile soil rich in organic matter.",
        "Reduce watering when the leaves begin to dry naturally."
    ]
};
plantCareDatabase["Vitis vinifera"] = {
    nativeRegion: "Mediterranean region and Western Asia",
    light: "Full sun, preferably 6–8 hours daily.",
    water: "Water regularly during active growth, but avoid waterlogging.",
    temperature: "Warm conditions, approximately 15–30°C.",
    soil: "Fertile, well-draining soil.",
    growth: "Climbing vine that can grow several meters with suitable support.",
    season: "Best planted during the cool to mild growing season.",
    care: [
        "Provide plenty of direct sunlight.",
        "Use a strong support or trellis for the vine.",
        "Water regularly while avoiding waterlogged soil.",
        "Prune during the dormant season to maintain healthy growth.",
        "Monitor regularly for pests and fungal diseases."
    ]
};
module.exports = plantCareDatabase;