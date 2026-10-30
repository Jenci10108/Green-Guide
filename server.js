const express = require("express");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();
const plantCareDatabase = require("./plantCareDatabase");
const db = require("./db");
const app = express();

app.use(cors());

const upload = multer({
    storage: multer.memoryStorage()
});

// Test route
app.get("/api/health", (req, res) => {
   
    res.json({
        success: true,
        message: "Green Guide backend is running 🌱"
    });
});

// Plant identification route
app.post("/api/identify", upload.single("plantImage"), async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image uploaded"
            });
        }

        if (!process.env.PLANTNET_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "Pl@ntNet API key is missing"
            });
        }

        // Create form data for Pl@ntNet
        const form = new FormData();

        form.append(
            "images",
            new Blob([req.file.buffer], {
                type: req.file.mimetype
            }),
            req.file.originalname
        );
        

        // Let Pl@ntNet automatically determine the plant organ
        form.append("organs", "auto");

        // Send image to Pl@ntNet
        const plantNetResponse = await fetch(
            `https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(
                process.env.PLANTNET_API_KEY
            )}&lang=en`,
            {
                method: "POST",
                body: form
            }
        );

        const data = await plantNetResponse.json();

        console.log("Pl@ntNet response:", data);

        if (!plantNetResponse.ok) {
            return res.status(plantNetResponse.status).json({
                success: false,
                message: "Pl@ntNet identification failed",
                details: data
            });
        }

        // Check whether Pl@ntNet found any species
        if (!data.results || data.results.length === 0) {
          console.log(
    "GBIF lifeForm raw:",
    JSON.stringify(speciesProfile?.results?.[0]?.lifeForm, null, 2)
); 
            return res.json({
                success: false,
                message: "No plant could be identified from this image."
            });
        }

        // Highest-scoring result
        const best = data.results[0];
        console.log("Complete best result:", JSON.stringify(best, null, 2));
        

        // Get scientific name from Pl@ntNet
const scientificName =
    best.species.scientificNameWithoutAuthor || "Unknown";

const commonName =
    best.species.commonNames?.[0] || "Unknown";

   const localPlantCare =
    plantCareDatabase[scientificName] ||
    plantCareDatabase[scientificName.split(" ")[0]] ||
    null;
 // Search PlantSolve for plant-care information
let plantCare = null;
// Perenual fallback
let perenualCare = null;
let automaticPlantInfo = null;
// Flora Codex fallback
let floraCodexCare = null;

try {
    const perenualSearchResponse = await fetch(
    `https://perenual.com/api/v2/species-list?key=${encodeURIComponent(
        process.env.PERENUAL_API_KEY
    )}&q=${encodeURIComponent(
        scientificName.split(" ")[0]
    )}`
);
console.log(
    "Perenual search status:",
    perenualSearchResponse.status
);
    if (perenualSearchResponse.ok) {
        const perenualSearch =
            await perenualSearchResponse.json();
            console.log("Perenual raw response:", perenualSearch);

        if (perenualSearch.data && perenualSearch.data.length > 0) {

       const exactMatch = perenualSearch.data.find((item) => {
    const names = Array.isArray(item.scientific_name)
        ? item.scientific_name
        : [item.scientific_name];

    return names.some(
        (name) =>
            name &&
            name.toLowerCase() === scientificName.toLowerCase()
    );
});

if (exactMatch) {
    console.log("Perenual exact match:", exactMatch);
    perenualCare = exactMatch;
} else {
    console.log(
        "No exact Perenual match for:",
        scientificName
    );
}    
if (exactMatch) {
    console.log("Perenual basic information available:", {
        commonName: exactMatch.common_name,
        scientificName: exactMatch.scientific_name,
        family: exactMatch.family,
        genus: exactMatch.genus
    });

    const detailsResponse = await fetch(
        `https://perenual.com/api/v2/species/details/${exactMatch.id}?key=${encodeURIComponent(
            process.env.PERENUAL_API_KEY
        )}`
    );

    if (detailsResponse.ok) {
        perenualCare =
            await detailsResponse.json();

        console.log(
            "Perenual details loaded:",
            perenualCare
        );
    } else {
        const errorText =
            await detailsResponse.text();

        console.log(
            "Perenual details failed:",
            detailsResponse.status,
            errorText
        );
    }
}
        }
    }
} catch (error) {
    console.log(
        "Perenual search error:",
        error.message
    );
}// Flora Codex fallback
try {
    if (process.env.FLORA_CODEX_API_KEY) {
        const floraResponse = await fetch(
         `https://api.floracodex.com/v2/species?q=${encodeURIComponent(
    scientificName
)}`  ,
            {
               headers: {
    "Authorization": `ApiKey ${process.env.FLORA_CODEX_API_KEY}`
}
            }
        );

        console.log(
            "Flora Codex status:",
            floraResponse.status
        );

        if (floraResponse.ok) {
            const floraData = await floraResponse.json();

           console.log(
    "Flora Codex response:",
    floraData
);

floraCodexCare = floraData;
            if (floraData.data && floraData.data.length > 0) {
    const floraId = floraData.data[0].id;

    const floraDetailsResponse = await fetch(
        `https://api.floracodex.com/v2/species/${floraId}`,
        {
            headers: {
                "Authorization": `ApiKey ${process.env.FLORA_CODEX_API_KEY}`
            }
        }
    );

    console.log(
        "Flora Codex details status:",
        floraDetailsResponse.status
    );

   if (floraDetailsResponse.ok) {

    const floraDetails =
        await floraDetailsResponse.json();

    console.log(
        "Flora Codex details:",
        floraDetails
    );

    console.log(
        "Flora Codex growth details:",
        JSON.stringify(
            floraDetails.data.growth,
            null,
            2
        )
    );

    console.log(
    "Flora Codex extra plant data:",
    JSON.stringify(
        {
            specifications: floraDetails.data.specifications,
            growth: floraDetails.data.growth
        },
        null,
        2
    )
);

    console.log(
        "Flora Codex specifications:",
        JSON.stringify(
            floraDetails.data.specifications,
            null,
            2
        )
    );

    floraCodexCare = floraDetails.data;
}
}
        }
    }
} catch (error) {
    console.log(
        "Flora Codex error:",
        error.message
    );
}

try {
    const plantSolveIndexResponse = await fetch(
        "https://www.plantsolve.com/api/v1/plants/index.json"
    );

    if (plantSolveIndexResponse.ok) {

        const plantSolveIndex =
            await plantSolveIndexResponse.json();

        const normalizedScientificName =
            scientificName
                .toLowerCase()
                .replace(/\(.*?\)/g, "")
                .replace(/\s+l\.$/i, "")
                .trim();

    const plantSolveMatch = plantSolveIndex.find(function (item) {

    if (!item.scientificName) {
        return false;
    }

    const indexName =
        item.scientificName
            .toLowerCase()
            .replace(/\(.*?\)/g, "")
            .replace(/\bauthor\b/gi, "")
            .replace(/\s+l\.$/i, "")
            .replace(/×/g, "x")
            .replace(/[.'"]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    const searchName =
        normalizedScientificName
            .replace(/×/g, "x")
            .replace(/[.'"]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    return (
        indexName === searchName ||
        indexName.includes(searchName) ||
        searchName.includes(indexName)
    );
});
        if (plantSolveMatch) {
            console.log(
                "PlantSolve match:",
                plantSolveMatch
            );

            plantCare = plantSolveMatch;

          const profileResponse = await fetch(
    `https://www.plantsolve.com/api/v1/plants/${encodeURIComponent(
        plantSolveMatch.slug
    )}.json`
);

if (profileResponse.ok) {

    plantCare = await profileResponse.json();

    console.log(
        "PlantSolve care profile loaded:",
        plantCare
    );

} else {

    console.log(
        "Could not load PlantSolve care profile."
    );
}  
        } else {
            console.log(
                "No PlantSolve match found for:",
                scientificName
            );
            if (!plantSolveMatch) {

    const tomatoMatches = plantSolveIndex.filter(function (item) {

        const text = JSON.stringify(item).toLowerCase();

        return text.includes("tomato");

    });

    console.log(
        "PlantSolve tomato matches:",
        tomatoMatches
    );
}
        }
    }

} catch (error) {

    console.log(
        "PlantSolve search error:",
        error.message
    );
}   

// Ask GBIF to match this scientific name
const gbifResponse = await fetch(
    `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(
        scientificName
    )}`
);

const gbifData = await gbifResponse.json();
console.log("GBIF species key:", gbifData.usage?.key);
const speciesKey = gbifData.usage?.key;
let distributions = null;

if (speciesKey) {

    const distributionResponse = await fetch(
        `https://api.gbif.org/v1/species/${speciesKey}/distributions`
    );

    if (distributionResponse.ok) {

    distributions = await distributionResponse.json();

    const distributionNames =
        distributions.results
            .filter(function (item) {
                return item.locality;
            })
            .map(function (item) {
                return item.locality;
            });

    console.log(
        "GBIF distribution locations:",
        distributionNames
    );

}

}
console.log("GBIF species key:", speciesKey);

let speciesProfile = null;

if (speciesKey) {
    const profileResponse = await fetch(
        `https://api.gbif.org/v1/species/${speciesKey}/speciesProfiles`
    );

    if (profileResponse.ok) {
        speciesProfile = await profileResponse.json();
    }
}

console.log("GBIF species profile:", speciesProfile);
automaticPlantInfo = speciesProfile?.results?.[0] || null;
console.log("GBIF response:", gbifData);




// Send identification + GBIF information to frontend
console.log("FINAL LIGHT:", perenualCare?.sunlight?.[0]);
console.log("FINAL WATER:", perenualCare?.watering);
console.log("FINAL GROWTH:", perenualCare?.dimensions);
console.log("FINAL NATIVE REGION:", perenualCare?.origin);
res.json({
    success: true,

    plant: {
        plantCare: localPlantCare,
        scientificName: scientificName,
        perenual: perenualCare
    ? {
        id: perenualCare.id,
        commonName: perenualCare.common_name,
        scientificName:
            perenualCare.scientific_name,
        family: perenualCare.family,
        genus: perenualCare.genus,
        speciesEpithet:
            perenualCare.species_epithet
    }
    : null,
        commonName: commonName,
        scientificName: scientificName,
        confidence: best.score,
    visualHealth: {

    status:
        req.file.size < 50000
            ? "Image may be unclear"
            : "Image suitable for visual review",

    description:
        "This check is based on the uploaded image quality and is not a professional plant-health diagnosis."

},
        gbifKey: gbifData.usage?.key || null,
        gbifName:
            gbifData.usage?.canonicalName || scientificName,
          reportedDistribution:
    distributions?.results
        ?.filter(function (item) {
            return item.locality && item.locality !== "Global";
        })
        .map(function (item) {
            return item.locality;
        })
        .slice(0, 8) || [],
       habitat:
    automaticPlantInfo?.habitat === "terrestrial"
        ? "Terrestrial tree"
        : automaticPlantInfo?.habitat || null,
lifeForm:
    (() => {
        const rawLifeForm =
            speciesProfile?.results?.find(
                item => item.lifeForm
            )?.lifeForm;

        if (!rawLifeForm) return null;

        try {
            const parsed = JSON.parse(rawLifeForm);

         const lifeFormText = parsed.lifeForm?.join(", ") || null;

return lifeFormText === "Palmeira"
    ? "Palm"
    : lifeFormText;
        } catch (error) {
            return rawLifeForm;
        }
    })(),
            automaticPlantInfo: automaticPlantInfo,
        plantSolve: (
    plantCare ||
    perenualCare ||
    floraCodexCare ||
    automaticPlantInfo
)
    ? {
        nativeRegion:
    plantCare?.plantHero?.nativeRegion ||
plantCare?.taxonomy?.origin ||
perenualCare?.origin?.[0] ||
automaticPlantInfo?.nativeRegion ||
"Information unavailable.",
light:
    Array.isArray(perenualCare?.sunlight)
        ? perenualCare.sunlight[0]
        : perenualCare?.sunlight ||
    plantCare?.plantHero?.light ||
    plantCare?.lighting?.sunlightHours ||
    (
    floraCodexCare?.growth?.light != null
        ? (
            floraCodexCare.growth.light >= 8
                ? "Bright light to full sun"
                : floraCodexCare.growth.light >= 5
                    ? "Full sun"
                    : "Partial shade"
        )
        : null
) ||
    "Information unavailable.",
        
  water:
    plantCare?.plantHero?.water ||
    plantCare?.care?.watering ||
  perenualCare?.watering ||
    (
        floraCodexCare?.growth?.minimum_precipitation?.mm != null &&
        floraCodexCare?.growth?.maximum_precipitation?.mm != null
            ? `Rainfall: ${floraCodexCare.growth.minimum_precipitation.mm}–${floraCodexCare.growth.maximum_precipitation.mm} mm/year`
            : null
    ) ||
    "Information unavailable.",
temperature:
    plantCare?.plantHero?.temperature ||
    plantCare?.parameters?.temperature?.recommended ||
   null ||
    (
        floraCodexCare?.growth?.optimal_temperature?.deg_c?.min != null &&
        floraCodexCare?.growth?.optimal_temperature?.deg_c?.max != null
            ? `${floraCodexCare.growth.optimal_temperature.deg_c.min}–${floraCodexCare.growth.optimal_temperature.deg_c.max}°C`
            : null
    ) ||
    "Information unavailable.",
     soil:
    plantCare?.plantHero?.soil ||
    plantCare?.care?.soil ||
    (perenualCare?.soil?.length ? perenualCare.soil : null) ||
    (
        floraCodexCare?.growth?.ph_minimum != null &&
        floraCodexCare?.growth?.ph_maximum != null
            ? `Soil pH: ${floraCodexCare.growth.ph_minimum}–${floraCodexCare.growth.ph_maximum}`
            : null
    ) ||
    "Information unavailable.",
 growth:
    plantCare?.plantHero?.matureSize ||
    plantCare?.growthCharacteristics?.matureHeight ||
(
    perenualCare?.dimensions?.[0]
        ? `${perenualCare.dimensions[0].min_value}–${perenualCare.dimensions[0].max_value} ${perenualCare.dimensions[0].unit}`
        : null
) ||
    (
        floraCodexCare?.specifications?.growth_rate
            ? `${floraCodexCare.specifications.growth_rate === "FAST" ? "Fast-growing" : floraCodexCare.specifications.growth_rate} ${floraCodexCare.specifications.growth_habit || "plant"}`
            : floraCodexCare?.specifications?.growth_habit
                ? `Growth habit: ${floraCodexCare.specifications.growth_habit}`
                : null
    ) ||
    "Information unavailable.",

       season:
    plantCare?.plantHero?.seasonality ||
    plantCare?.growthCharacteristics?.floweringSeason ||
    plantCare?.plantHero?.floweringSeason ||

 "Information unavailable.",
   
   care: [
 (
    plantCare?.care?.watering === "Average"
        ? "Water moderately and avoid overwatering."
        : plantCare?.care?.watering
) ||
      (
    perenualCare?.watering === "Average"
        ? "Water moderately and avoid overwatering."
        : perenualCare?.watering
) ||
        (
            floraCodexCare?.growth?.minimum_precipitation?.mm != null &&
            floraCodexCare?.growth?.maximum_precipitation?.mm != null
               ? (
   (req.body.language || "en") === "hi"
        ? `यह पौधा ${floraCodexCare.growth.minimum_precipitation.mm}–${floraCodexCare.growth.maximum_precipitation.mm} मिमी वार्षिक वर्षा वाले क्षेत्रों के लिए उपयुक्त है।`
        :(req.body.language || "en") === "gu"
            ? `આ છોડ ${floraCodexCare.growth.minimum_precipitation.mm}–${floraCodexCare.growth.maximum_precipitation.mm} મિમી વાર્ષિક વરસાદવાળા વિસ્તારો માટે યોગ્ય છે.`
            : `This plant is suited to areas with ${floraCodexCare.growth.minimum_precipitation.mm}–${floraCodexCare.growth.maximum_precipitation.mm} mm of annual rainfall.`
)
                : null
        ),
       "Provide adequate sunlight for healthy growth.",
(
    floraCodexCare?.specifications?.growth_habit === "tree"
        ? (
          (req.body.language || "en") === "hi"
                ? "स्वस्थ संरचना बनाए रखने और क्षतिग्रस्त हिस्सों को हटाने के लिए आवश्यकतानुसार छंटाई करें।"
                :(req.body.language || "en") === "gu"
                    ? "સ્વસ્થ રચના જાળવવા અને નુકસાન થયેલા ભાગોને દૂર કરવા માટે જરૂર મુજબ કાપણી કરો."
                    : "Prune when needed to maintain healthy structure and remove damaged growth."
        )
        : plantCare?.care?.pruning ||
          perenualCare?.pruning ||
          null
),

    plantCare?.nutrients?.fertilizerFrequency ||
        perenualCare?.fertilizing,

    (
        floraCodexCare?.growth?.optimal_temperature?.deg_c?.min != null &&
        floraCodexCare?.growth?.optimal_temperature?.deg_c?.max != null
            ? `Suitable temperature: ${floraCodexCare.growth.optimal_temperature.deg_c.min}–${floraCodexCare.growth.optimal_temperature.deg_c.max}°C.`
            : null
    ),

    (
        floraCodexCare?.growth?.ph_minimum != null &&
        floraCodexCare?.growth?.ph_maximum != null
            ? `Prefer soil with a pH of ${floraCodexCare.growth.ph_minimum}–${floraCodexCare.growth.ph_maximum}.`
            : null
    )
].filter(Boolean)

    }
    : null
    }
});


    } catch (error) {

        console.error("Identification error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while identifying the plant."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Green Guide backend running on http://localhost:${PORT}`
    );
});