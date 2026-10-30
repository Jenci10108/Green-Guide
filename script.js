// 🌱 Green Guide Plant Database

const plantDatabase = {

    mango: {
        name: "Mango",
        scientificName: "Mangifera indica",
        regions: "South Asia and tropical regions",
        light: "Full sunlight",
        water: "Moderate watering. Avoid waterlogging.",
        temperature: "Warm tropical and subtropical climate",
        soil: "Fertile, well-drained soil",
        growth: "Large perennial tree",
        season: "Generally the rainy season in suitable regions",
        care: [
            "Choose a location with sufficient sunlight.",
            "Use fertile and well-drained soil.",
            "Water according to weather and plant growth.",
            "Provide enough space for root and tree growth.",
            "Regularly check leaves and branches."
        ]
    },

    neem: {
        name: "Neem",
        scientificName: "Azadirachta indica",
        regions: "Indian subcontinent and tropical regions",
        light: "Full sunlight",
        water: "Low to moderate watering",
        temperature: "Warm tropical and subtropical climate",
        soil: "Well-drained soil",
        growth: "Medium to large tree",
        season: "Rainy season is generally suitable",
        care: [
            "Provide plenty of sunlight.",
            "Use well-drained soil.",
            "Avoid excessive watering.",
            "Give the tree enough growing space.",
            "Remove damaged branches when necessary."
        ]
    },

    rose: {
        name: "Rose",
        scientificName: "Rosa",
        regions: "Widely cultivated around the world",
        light: "At least several hours of sunlight",
        water: "Regular watering without waterlogging",
        temperature: "Mild to warm climate",
        soil: "Fertile and well-drained soil",
        growth: "Shrub",
        season: "Depends on local climate",
        care: [
            "Provide sufficient sunlight.",
            "Use fertile, well-drained soil.",
            "Water near the soil rather than constantly wetting leaves.",
            "Remove dead flowers and damaged growth.",
            "Check regularly for pests."
        ]
    },

    lemon: {
        name: "Lemon",
        scientificName: "Citrus × limon",
        regions: "Cultivated widely in warm regions",
        light: "Full sunlight",
        water: "Regular moderate watering",
        temperature: "Warm subtropical climate",
        soil: "Well-drained, fertile soil",
        growth: "Small to medium tree",
        season: "Rainy season or suitable local planting period",
        care: [
            "Provide plenty of sunlight.",
            "Avoid waterlogged soil.",
            "Use nutrient-rich soil.",
            "Protect young plants from extreme cold.",
            "Monitor leaves for pests."
        ]
    },

    aloe: {
        name: "Aloe Vera",
        scientificName: "Aloe vera",
        regions: "Originally associated with the Arabian Peninsula; widely cultivated",
        light: "Bright light and some direct sunlight",
        water: "Low watering; allow soil to dry between watering",
        temperature: "Warm and dry conditions",
        soil: "Sandy, well-drained soil",
        growth: "Succulent perennial",
        season: "Warm season is generally suitable",
        care: [
            "Use well-drained soil.",
            "Do not overwater.",
            "Provide bright light.",
            "Use a container with drainage holes.",
            "Protect from prolonged extreme cold."
        ]
    }

};


const translations = {

    en: {
        title: "Know Your Plant, Grow It Better 🌱",
        description:
            "Upload a plant photo and discover its identity, growing requirements and care information.",
        start: "📷 Identify Your Plant",
        result: {
    title: "🌱 Plant Information",
    native: "Native / Typical Regions",
    distribution: "Reported Distribution",
    light: "Light Requirement",
    water: "Water Requirement",
    temperature: "Temperature / Climate",
    soil: "Soil Type",
    growth: "Expected Growth",
    season: "Best Planting Season",
    care: "🌿 How to Grow & Care",
    health: "📷 Visual Health Assessment",
    unavailable: "Information unavailable.",
    nativeUnavailable: "Native region information is not available from the current sources.",
    seasonUnavailable: "Season information is not available.",
    seasonUnavailable: "Season information is not available.",
careUnavailable: "Detailed care information is currently unavailable.",
healthStatus: "Basic visual check",
healthDescription: "The uploaded plant image has been visually reviewed. This is an informational check and not a professional diagnosis.",
habitat: "Habitat",
lifeForm: "Life form",
confidence: "Identification confidence",
aiEstimate: "AI estimate"
}
    },

    hi: {
        title: "अपने पौधे को जानें, उसे बेहतर उगाएं 🌱",
        description:
            "पौधे की फोटो अपलोड करें और उसकी पहचान, बढ़ने की आवश्यकताएं और देखभाल की जानकारी पाएं।",
        start: "📷 अपने पौधे की पहचान करें",
        result: {
    title: "🌱 पौधे की जानकारी",
    native: "मूल / सामान्य क्षेत्र",
    distribution: "रिपोर्ट किया गया वितरण",
    light: "प्रकाश की आवश्यकता",
    water: "पानी की आवश्यकता",
    temperature: "तापमान / जलवायु",
    soil: "मिट्टी का प्रकार",
    growth: "अपेक्षित वृद्धि",
    season: "रोपण का सर्वोत्तम मौसम",
    care: "🌿 पौधे को कैसे उगाएं और उसकी देखभाल करें",
    health: "📷 दृश्य स्वास्थ्य आकलन",
   
unavailable: "जानकारी उपलब्ध नहीं है।",
nativeUnavailable: "वर्तमान स्रोतों से मूल क्षेत्र की जानकारी उपलब्ध नहीं है।",
seasonUnavailable: "मौसम की जानकारी उपलब्ध नहीं है।",
careUnavailable: "विस्तृत देखभाल की जानकारी अभी उपलब्ध नहीं है।",
healthStatus: "दृश्य जांच पूरी हुई",
healthDescription: "एक सामान्य दृश्य जांच पूरी की गई है। यह पेशेवर निदान नहीं है।",
habitat: "आवास",
lifeForm: "जीवन रूप",
confidence: "पहचान का विश्वास स्तर",
aiEstimate: "AI अनुमान"
}
    },

    gu: {
        title: "તમારા છોડને જાણો અને તેને વધુ સારી રીતે ઉગાડો 🌱",
        description:
            "છોડનો ફોટો અપલોડ કરો અને તેની ઓળખ, ઉગાડવાની જરૂરિયાતો અને સંભાળની માહિતી મેળવો.",
        start: "📷 તમારા છોડને ઓળખો",
        result: {
    title: "🌱 છોડની માહિતી",
    native: "મૂળ / સામાન્ય વિસ્તારો",
    distribution: "નોંધાયેલ વિતરણ",
    light: "પ્રકાશની જરૂરિયાત",
    water: "પાણીની જરૂરિયાત",
    temperature: "તાપમાન / આબોહવા",
    soil: "માટીનો પ્રકાર",
    growth: "અપેક્ષિત વૃદ્ધિ",
    season: "વાવેતર માટેની શ્રેષ્ઠ ઋતુ",
    care: "🌿 કેવી રીતે ઉગાડવું અને સંભાળ રાખવી",
    health: "📷 દૃશ્ય આરોગ્ય મૂલ્યાંકન",
unavailable: "માહિતી ઉપલબ્ધ નથી.",
seasonUnavailable: "મોસમની માહિતી ઉપલબ્ધ નથી.",
careUnavailable: "વિગતવાર સંભાળની માહિતી હાલમાં ઉપલબ્ધ નથી.",
healthStatus: "દૃશ્ય તપાસ પૂર્ણ થઈ",
healthDescription: "મૂળભૂત દૃશ્ય તપાસ પૂર્ણ કરવામાં આવી છે. આ વ્યાવસાયિક નિદાન નથી.",
habitat: "આવાસ",
lifeForm: "જીવન સ્વરૂપ",
confidence: "ઓળખનો વિશ્વાસ સ્તર",
aiEstimate: "AI અંદાજ"
}
    }
};


const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("selectedLanguage");

if (savedLanguage) {
    languageSelect.value = savedLanguage;
}

languageSelect.addEventListener("change", function () {

    if (!document.getElementById("title")) return;

    const language = languageSelect.value;

    document.getElementById("title").textContent =
        translations[language].title;

    document.getElementById("description").textContent =
        translations[language].description;

    document.getElementById("startButton").textContent =
        translations[language].start;

});

// Identify Plant button
const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {
        window.location.href = "upload.html";
    });
}

// Plant image preview
const plantImage = document.getElementById("plantImage");
const imagePreview = document.getElementById("imagePreview");

if (plantImage && imagePreview) {

    plantImage.addEventListener("change", function () {

        const file = plantImage.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = "block";
            };

            reader.readAsDataURL(file);
        }

    });

}

// Analyze Plant button
const analyzeButton = document.getElementById("analyzeButton");

if (analyzeButton) {
    analyzeButton.addEventListener("click", async function () {

        const file = plantImage.files[0];

        if (!file) {
            alert("Please select a plant image first.");
            return;
        }

        const formData = new FormData();
        formData.append("plantImage", file);

        try {

            analyzeButton.textContent = "🔄 Analyzing...";
            analyzeButton.disabled = true;

            const response = await fetch(
                "http://localhost:5000/api/identify",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            console.log("Pl@ntNet result:", data);

            if (data.success) {
localStorage.setItem("selectedLanguage", languageSelect.value);
                // Save identification result
                localStorage.setItem(
                    "plantIdentification",
                    JSON.stringify(data.plant)
                );

                // Save image for result page
                const reader = new FileReader();

                reader.onload = function (event) {

                    localStorage.setItem(
                        "uploadedPlantImage",
                        event.target.result
                    );

                    window.location.href = "result.html";
                };

                reader.readAsDataURL(file);

            } else {

                alert(
                    "Plant identification failed.\n\n" +
                    data.message
                );
            }

        } catch (error) {

            console.error("Error:", error);

            alert(
                "Could not connect to the Green Guide backend.\n\n" +
                "Make sure the backend server is running."
            );

        } finally {

            analyzeButton.textContent = "🔍 Analyze Plant";
            analyzeButton.disabled = false;
        }
    });
}

// Display uploaded plant image on result page

const resultImage = document.getElementById("resultImage");

if (resultImage) {

    const savedImage = localStorage.getItem("uploadedPlantImage");

    if (savedImage) {

        resultImage.src = savedImage;

        document.getElementById("healthStatus").textContent = "Basic visual check";

        resultImage.style.display = "block";

    } else {

        resultImage.style.display = "none";

        alert("No plant image found. Please upload an image again.");

    }
}

// 🌱 Display identified plant information

const plantIdentification = localStorage.getItem("plantIdentification");
const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
if (plantIdentification) {

    const plant = JSON.parse(plantIdentification);

    const plantName = document.getElementById("plantName");
    const scientificName = document.getElementById("scientificName");

    if (plantName) {
        plantName.textContent = plant.commonName;
    }

    if (scientificName) {
        scientificName.textContent = plant.scientificName;
    }
    const habitatInfo = document.getElementById("habitatInfo");
const lifeFormInfo = document.getElementById("lifeFormInfo");

if (habitatInfo && plant.habitat) {
habitatInfo.textContent =
    "🌍 " + translations[languageSelect.value].result.habitat +
    ": " + plant.habitat;
}

if (lifeFormInfo && plant.lifeForm) {
 lifeFormInfo.textContent =
    "🌱 " + translations[languageSelect.value].result.lifeForm +
    ": " + plant.lifeForm;
}
    const confidenceInfo = document.getElementById("confidenceInfo");

    if (confidenceInfo && plant.confidence !== undefined) {
  confidenceInfo.textContent =
    translations[languageSelect.value].result.confidence +
    ": " +
    (plant.confidence * 100).toFixed(1) +
    "% (" +
    translations[languageSelect.value].result.aiEstimate +
    ")";
}

    // Use automatic PlantSolve information
if (plant.plantCare || plant.plantSolve || plant.automaticPlantInfo) {
// Display plant information from available sources

const info =
     plant.plantSolve ||
    plant.plantCare ||
    plant.automaticPlantInfo ||
    {};
    console.log("PLANTSOLVE IN RESULT:", plant.plantSolve);
    console.log("LIGHT VALUE:", plant.plantSolve?.light);
    console.log("WATER VALUE:", plant.plantSolve?.water);
    console.log("NATIVE REGION VALUE:", info.nativeRegion);
document.getElementById("nativeInfo").textContent =
    !info.nativeRegion ||
    info.nativeRegion.includes("not available")
        ? translations[languageSelect.value].result.nativeUnavailable
        : info.nativeRegion;
document.getElementById("lightInfo").textContent =
    info.light ||
   translations[languageSelect.value].result.unavailable
   console.log("DISPLAYED LIGHT:", document.getElementById("lightInfo").textContent);
console.log("DISPLAYED WATER:", info.water);
document.getElementById("waterInfo").textContent =
    info.water ||
    translations[languageSelect.value].result.unavailable

document.getElementById("temperatureInfo").textContent =
    info.temperature ||
   translations[languageSelect.value].result.unavailable

document.getElementById("soilInfo").textContent =
    info.soil ||
   translations[languageSelect.value].result.unavailable

document.getElementById("growthInfo").textContent =
    info.growth ||
    translations[languageSelect.value].result.unavailable
console.log("SEASON TRANSLATION:", translations[selectedLanguage].result.seasonUnavailable);

console.log("SEASON VALUE:", info.season);

document.getElementById("seasonInfo").textContent =
   info.season === "Information unavailable."
        ? translations[languageSelect.value].result.seasonUnavailable
        : info.season;
// Care Guide
const careList = document.getElementById("careList");

careList.innerHTML = "";

if (info.care && info.care.length > 0) {
    console.log("CARE DATA:", info.care);

    info.care.forEach(function (care) {

        const li = document.createElement("li");
if (languageSelect.value === "hi") {
    console.log("HINDI CARE TRANSLATION RUNNING");
    if (care.startsWith("This plant is suited to areas with")) {
        li.textContent = care
            .replace(
                "This plant is suited to areas with",
                "यह पौधा"
            )
            .replace(
                "mm of annual rainfall.",
                "मिमी वार्षिक वर्षा वाले क्षेत्रों के लिए उपयुक्त है।"
            );
    } else if (care.startsWith("Prune when needed")) {
        li.textContent =
            "स्वस्थ संरचना बनाए रखने और क्षतिग्रस्त वृद्धि को हटाने के लिए आवश्यकता अनुसार छंटाई करें।";
    } else if (care.startsWith("Suitable temperature")) {
        li.textContent = care.replace(
            "Suitable temperature:",
            "उपयुक्त तापमान:"
        );
    } else if (care.startsWith("Prefer soil with a pH of")) {
        li.textContent =
            "5–6 pH वाली मिट्टी उपयुक्त है।";
    } else {
        li.textContent = care;
    }
} else {
    li.textContent = care;
}

    

        careList.appendChild(li);

    });

} else {

    careList.innerHTML =
    "<li>" +
    translations[languageSelect.value].result.careUnavailable +
    "</li>";
}
}const distributionInfo = document.getElementById("distributionInfo");

if (distributionInfo) {
    if (
        plant.reportedDistribution &&
        plant.reportedDistribution.length > 0
    ) {
       distributionInfo.textContent =
    plant.reportedDistribution
        .slice(0, 5)
        .map(function (item) {
            return item.length > 80
                ? item.substring(0, 80) + "..."
                : item;
        })
        .join(", ");
    } else {
        distributionInfo.textContent =
            "Information unavailable.";
    }
}
} else {

    alert("No plant identification found. Please analyze an image again.");

}
// Result page translations
const resultTitle = document.getElementById("resultTitle");

if (resultTitle && languageSelect) {

    function updateResultLanguage() {

        const language = languageSelect.value;
        const result = translations[language].result;

        document.getElementById("resultTitle").textContent = result.title;
        document.getElementById("nativeTitle").textContent = result.native;
       document.getElementById("nativeInfo").textContent =
    JSON.parse(plantIdentification)?.plantSolve?.nativeRegion || result.nativeUnavailable;
        
   document.getElementById("lightInfo").textContent =
    JSON.parse(plantIdentification)?.plantSolve?.light || result.unavailable;
document.getElementById("waterInfo").textContent =
    JSON.parse(plantIdentification)?.plantSolve?.water || result.unavailable;

document.getElementById("temperatureInfo").textContent =
    JSON.parse(plantIdentification)?.plantSolve?.temperature || result.unavailable;
document.getElementById("soilInfo").textContent =
    
JSON.parse(plantIdentification)?.plantSolve?.soil || result.unavailable;
document.getElementById("growthInfo").textContent =
    JSON.parse(plantIdentification)?.plantSolve?.growth || result.unavailable;
        document.getElementById("distributionTitle").textContent = result.distribution;

        document.getElementById("lightTitle").textContent = result.light;
        document.getElementById("waterTitle").textContent = result.water;
        document.getElementById("temperatureTitle").textContent = result.temperature;
        document.getElementById("soilTitle").textContent = result.soil;
        document.getElementById("growthTitle").textContent = result.growth;
        document.getElementById("seasonTitle").textContent = result.season;
        const seasonInfo = document.getElementById("seasonInfo");

if (seasonInfo && plantIdentification) {
    const plant = JSON.parse(plantIdentification);

    const info =
        plant.plantCare ||
        plant.plantSolve ||
        plant.automaticPlantInfo ||
        {};

    seasonInfo.textContent =
        info.season === "Information unavailable." ||
        info.season === "Season information unavailable."
            ? result.seasonUnavailable
            : info.season;
}
        document.getElementById("careTitle").textContent = result.care;
        if (plantIdentification) {
    const plant = JSON.parse(plantIdentification);

    if (plant.habitat) {
        document.getElementById("habitatInfo").textContent =
            "🌍 " + result.habitat + ": " + plant.habitat;
    }

    if (plant.lifeForm) {
        document.getElementById("lifeFormInfo").textContent =
            "🌱 " + result.lifeForm + ": " + plant.lifeForm;
            
    }
    const info =
    plant.plantCare ||
    plant.plantSolve ||
    plant.automaticPlantInfo ||
    {};

document.getElementById("seasonInfo").textContent =
    info.season === "Season information unavailable."
        ? result.seasonUnavailable
        : info.season;
}
        document.getElementById("healthTitle").textContent = result.health;
        const confidenceInfo = document.getElementById("confidenceInfo");

if (confidenceInfo && plantIdentification) {
    const plant = JSON.parse(plantIdentification);

    if (plant.confidence !== undefined) {
        confidenceInfo.textContent =
            result.confidence +
            ": " +
            (plant.confidence * 100).toFixed(1) +
            "% (" +
            result.aiEstimate +
            ")";
    }
}document.getElementById("healthStatus").textContent =
    plant.visualHealth?.status || result.healthStatus;

document.getElementById("healthDescription").textContent =
    plant.visualHealth?.description || result.healthDescription;
    }

    languageSelect.addEventListener("change", updateResultLanguage);
    languageSelect.addEventListener("change", function () {
    if (plantIdentification) {
        location.reload();
    }
});

    updateResultLanguage();
}