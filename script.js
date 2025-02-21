// Elements Data (with rows and columns)
const elements = [
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, electronegativity: 2.1, category: "nonmetals", group: 1, period: 1 },
    { name: "Helium", symbol: "He", atomicNumber: 2, electronegativity: 0.00, category: "noblegases", group: 18, period: 1 },
    { name: "Lithium", symbol: "Li", atomicNumber: 3, electronegativity: 1.0, category: "alkalimetals", group: 1, period: 2 },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, electronegativity: 1.5, category: "alkalineearth", group: 2, period: 2 },
    { name: "Boron", symbol: "B", atomicNumber: 5, electronegativity: 2.0, category: "metalloids", group: 13, period: 2 },
    { name: "Carbon", symbol: "C", atomicNumber: 6, electronegativity: 2.5, category: "nonmetals", group: 14, period: 2 },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, electronegativity: 3.0, category: "nonmetals", group: 15, period: 2 },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, electronegativity: 3.5, category: "nonmetals", group: 16, period: 2 },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, electronegativity: 4.0, category: "Halogens", group: 17, period: 2 },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, electronegativity: 0.00, category: "noblegases", group: 18, period: 2 },
    {name: "Sodium", symbol: "Na", atomicNumber: 11, electronegativity: 0.9, category: "alkalimetals", group: 1, period: 3 },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, electronegativity: 1.2, category: "alkalineearth", group: 2, period: 3 },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, electronegativity: 1.5, category: "posttransitionmetals", group: 13, period: 3 },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, electronegativity: 1.8, category: "metalloids", group: 14, period: 3 },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, electronegativity: 2.1, category: "nonmetals", group: 15, period: 3 },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, electronegativity: 2.5, category: "nonmetals", group: 16, period: 3 },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, electronegativity: 2.3, category: "halogens", group: 17, period: 3 },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, electronegativity: 0.00, category: "noblegases", group: 18, period: 3 },
    { name: "Potassium", symbol: "K", atomicNumber: 19, electronegativity: 0.8, category: "alkalimetals", group: 1, period: 4 },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, electronegativity: 1.0, category: "alkalineearth", group: 2, period: 4 },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, electronegativity: 1.3, category: "transitionmetals", group: 3, period: 4 },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, electronegativity: 1.5, category: "transitionmetals", group: 4, period: 4 },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, electronegativity: 1.6, category: "transitionmetals", group: 5, period: 4 },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, electronegativity: 1.6, category: "transitionmetals", group: 6, period: 4 },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, electronegativity: 1.5, category: "transitionmetals", group: 7, period: 4 },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, electronegativity: 1.8, category: "transitionmetals", group: 8, period: 4 },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, electronegativity: 1.8,  category: "latetransitionmetals", group: 9, period: 4 },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, electronegativity: 1.8, category: "latetransitionmetals", group: 10, period: 4 },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, electronegativity: 1.9, category: "latetransitionmetals", group: 11, period: 4 },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, electronegativity: 1.6, category: "latetransitionmetals", group: 12, period: 4 },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, electronegativity: 1.6, category: "posttransitionmetals", group: 13, period: 4 },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, electronegativity: 1.8, category: "metalloids", group: 14, period: 4 },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, electronegativity: 2.0, category: "metalloids", group: 15, period: 4 },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, electronegativity: 2.4, category: "nonmetals", group: 16, period: 4 },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, electronegativity: 2.8, category: "halogens", group: 17, period: 4 },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, electronegativity: 3.0, category: "noblegases", group: 18, period: 4 },
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, electronegativity: 0.8, category: "alkalimetals", group: 1, period: 5 },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, electronegativity: 1.0, category: "alkalineearth", group: 2, period: 5 },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, electronegativity: 1.3, category: "transitionmetals", group: 3, period: 5 },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, electronegativity: 1.4, category: "transitionmetals", group: 4, period: 5 },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, electronegativity: 1.6, category: "transitionmetals", group: 5, period: 5 },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, electronegativity: 1.8, category: "transitionmetals", group: 6, period: 5 },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, electronegativity: 1.9, category: "transitionmetals", group: 7, period: 5 },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, electronegativity: 2.2, category: "transitionmetals", group: 8, period: 5 },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, electronegativity: 2.2, category: "latetransitionmetals", group: 9, period: 5 },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, electronegativity: 2.2, category: "latetransitionmetals", group: 10, period: 5 },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, electronegativity: 1.9, category: "latetransitionmetals", group: 11, period: 5 },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, electronegativity: 1.7, category: "latetransitionmetals", group: 12, period: 5 },
    { name: "Indium", symbol: "In", atomicNumber: 49, electronegativity: 1.7, category: "posttransitionmetals", group: 13, period: 5 },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, electronegativity: 1.8, category: "posttransitionmetals", group: 14, period: 5 },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, electronegativity: 1.9, category: "metalloids", group: 15, period: 5 },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, electronegativity: 2.1, category: "metalloids", group: 16, period: 5 },
    { name: "Iodine", symbol: "I", atomicNumber: 53, electronegativity: 2.5, category: "halogens", group: 17, period: 5 },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, electronegativity: 2.6, category: "noblegases", group: 18, period: 5 },
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, electronegativity: 0.7, category: "alkalimetals", group: 1, period: 6 },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, electronegativity: 0.9, category: "alkalineearth", group: 2, period: 6 },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, electronegativity: 1.3, category: "transitionmetals", group: 4, period: 6 },
{ name: "Tantalum", symbol: "Ta", atomicNumber: 73, electronegativity: 1.5, category: "transitionmetals", group: 5, period: 6 },
{ name: "Tungsten", symbol: "W", atomicNumber: 74, electronegativity: 1.7, category: "transitionmetals", group: 6, period: 6 },
{ name: "Rhenium", symbol: "Re", atomicNumber: 75, electronegativity: 1.9, category: "transitionmetals", group: 7, period: 6 },
{ name: "Osmium", symbol: "Os", atomicNumber: 76, electronegativity: 2.2, category: "transitionmetals", group: 8, period: 6 },
{ name: "Iridium", symbol: "Ir", atomicNumber: 77, electronegativity: 2.2, category: "latetransitionmetals", group: 9, period: 6 },
{ name: "Platinum", symbol: "Pt", atomicNumber: 78, electronegativity: 2.2, category: "latetransitionmetals", group: 10, period: 6 },
{ name: "Gold", symbol: "Au", atomicNumber: 79, electronegativity: 2.4, category: "latetransitionmetals", group: 11, period: 6 },
{ name: "Mercury", symbol: "Hg", atomicNumber: 80, electronegativity: 1.9, category: "latetransitionmetals", group: 12, period: 6 },
{ name: "Thallium", symbol: "Tl", atomicNumber: 81, electronegativity: 1.9, category: "posttransitionmetals", group: 13, period: 6 },
{ name: "Lead", symbol: "Pb", atomicNumber: 82, electronegativity: 1.8, category: "posttransitionmetals", group: 14, period: 6 },
{ name: "Bismuth", symbol: "Bi", atomicNumber: 83, electronegativity: 1.9, category: "posttransitionmetals", group: 15, period: 6 },
{ name: "Polonium", symbol: "Po", atomicNumber: 84, electronegativity: 2.0, category: "metalloids", group: 16, period: 6 },
{ name: "Astatine", symbol: "At", atomicNumber: 85, electronegativity: 2.2, category: "halogens", group: 17, period: 6 },
{ name: "Radon", symbol: "Rn", atomicNumber: 86, electronegativity: 0.00, category: "noblegases", group: 18, period: 6 },
{ name: "Francium", symbol: "Fr", atomicNumber: 87, electronegativity: 0.7, category: "alkalimetals", group: 1, period: 7 },
{ name: "Radium", symbol: "Ra", atomicNumber: 88, electronegativity: 0.9, category: "alkalineearth", group: 2, period: 7 },
{ name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, electronegativity: 0.00, category: "transitionmetals", group: 4, period: 7 },
{ name: "Dubnium", symbol: "Db", atomicNumber: 105, electronegativity: 0.00, category: "transitionmetals", group: 5, period: 7 },
{ name: "Seaborgium", symbol: "Sg", atomicNumber: 106, electronegativity: 0.00, category: "transitionmetals", group: 6, period: 7 },
{ name: "Bohrium", symbol: "Bh", atomicNumber: 107, electronegativity: 0.00, category: "transitionmetals", group: 7, period: 7 },
{ name: "Hassium", symbol: "Hs", atomicNumber: 108, electronegativity: 0.00, category: "transitionmetals", group: 8, period: 7 },
{ name: "Meitnerium", symbol: "Mt", atomicNumber: 109, electronegativity: 0.00, category: "latetransitionmetals", group: 9, period: 7 },
{ name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, electronegativity: 0.00, category: "latetransitionmetals", group: 10, period: 7 },
{ name: "Roentgenium", symbol: "Rg", atomicNumber: 111, electronegativity: 0.00, category: "latetransitionmetals", group: 11, period: 7 },
{ name: "Copernicium", symbol: "Cn", atomicNumber: 112, electronegativity: 0.00, category: "latetransitionmetals", group: 12, period: 7 },
{ name: "Nihonium", symbol: "Nh", atomicNumber: 113, electronegativity: 0.00, category: "posttransitionmetals", group: 13, period: 7 },
{ name: "Flerovium", symbol: "Fl", atomicNumber: 114, electronegativity: 0.00, category: "posttransitionmetals", group: 14, period: 7 },
{ name: "Moscovium", symbol: "Mc", atomicNumber: 115, electronegativity: 0.00, category: "posttransitionmetals", group: 15, period: 7 },
{ name: "Livermorium", symbol: "Lv", atomicNumber: 116, electronegativity: 0.00, category: "posttransitionmetals", group: 16, period: 7 },
{ name: "Tennessine", symbol: "Ts", atomicNumber: 117, electronegativity: 0.00, category: "halogens", group: 17, period: 7 },
{ name: "Oganesson", symbol: "Og", atomicNumber: 118, electronegativity: 0.00, category: "noblegases", group: 18, period: 7 },
{ name: "Lanthanum", symbol: "La", atomicNumber: 57, electronegativity: 1.1, category: "lanthanides", group: 4, period: 8 },
{ name: "Cerium", symbol: "Ce", atomicNumber: 58, electronegativity: 1.1, category: "lanthanides", group: 5, period: 8 },
{ name: "Praseodymium", symbol: "Pr", atomicNumber: 59, period: 8, group: 6, electronegativity: 1.1, category: "Lanthanides" },
{ name: "Neodymium", symbol: "Nd", atomicNumber: 60, period: 8, group: 7, electronegativity: 1.2, category: "Lanthanides"},
{ name: "Promethium", symbol: "Pm", atomicNumber: 61, period: 8, group: 8, electronegativity: 0.00, category: "Lanthanides" },
{ name: "Samaruim", symbol: "Sm", atomicNumber: 62, period: 8, group: 9, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Europium", symbol: "Eu", atomicNumber: 63, period: 8, group: 10, electronegativity: 0.00, category: "Lanthanides" },
{ name: "Gadolinuim", symbol: "Gd", atomicNumber: 64, period: 8, group: 11, electronegativity: 1.1, category: "Lanthanides" },
{ name: "Terbuim", symbol: "Tb", atomicNumber: 65, period: 8, group: 12, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Dysprosium", symbol: "Dy", atomicNumber: 66, period: 8, group: 13, electronegativity: 0.00, category: "Lanthanides" },
{ name: "Holmium", symbol: "Ho", atomicNumber: 67, period: 8, group: 14, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Erbium", symbol: "Er", atomicNumber: 68, period: 8, group: 15, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Thulium", symbol: "Tm", atomicNumber: 69, period: 8, group: 16, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Ytterbium", symbol: "Yb", atomicNumber: 70, period: 8, group: 17, electronegativity: 1.1, category: "Lanthanides" },
{ name: "Lutetium", symbol: "Lu", atomicNumber: 71, period: 8, group: 18, electronegativity: 1.2, category: "Lanthanides" },
{ name: "Actinium", symbol: "Ac", atomicNumber: 89, electronegativity: 1.1, category: "actinides", group: 4, period: 9 },
    { name: "Thorium", symbol: "Th", atomicNumber: 90, electronegativity: 1.3, category: "actinides", group: 5, period: 9 },
    { name: "Protactinium", symbol: "Pa", atomicNumber: 91, electronegativity: 1.5, category: "actinides", group: 6, period: 9 },
    { name: "Uranium", symbol: "U", atomicNumber: 92, electronegativity: 1.7, category: "actinides", group: 7, period: 9 },
    { name: "Neptunium", symbol: "Np", atomicNumber: 93, electronegativity: 1.3, category: "actinides", group: 8, period: 9 },
    { name: "Plutonium", symbol: "Pu", atomicNumber: 94, electronegativity: 1.3, category: "actinides", group: 9, period: 9 },
    { name: "Americium", symbol: "Am", atomicNumber: 95, electronegativity: 1.3, category: "actinides", group: 10, period: 9 },
    { name: "Curium", symbol: "Cm", atomicNumber: 96, electronegativity: 0.00, category: "actinides", group: 11, period: 9 },
    { name: "Berkelium", symbol: "Bk", atomicNumber: 97, electronegativity: 0.00, category: "actinides", group: 12, period: 9 },
    { name: "Californium", symbol: "Cf", atomicNumber: 98, electronegativity: 0.00, category: "actinides", group: 13, period: 9 },
    { name: "Einsteinium", symbol: "Es", atomicNumber: 99, electronegativity: 0.00, category: "actinides", group: 14, period: 9 },
    { name: "Fermium", symbol: "Fm", atomicNumber: 100, electronegativity: 0.00, category: "actinides", group: 15, period: 9 },
    { name: "Mendelevium", symbol: "Md", atomicNumber: 101, electronegativity: 0.00, category: "actinides", group: 16, period: 9 },
    { name: "Nobelium", symbol: "No", atomicNumber: 102, electronegativity: 0.00, category: "actinides", group: 17, period: 9 },
    { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, electronegativity: 0.00, category: "actinides", group: 18, period: 9 }


    // More elements go here...
    
];

// Category color mappings
const categoryColors = {
    "nonmetals": "#ff6666",         // Red
    "noblegases": "#8b4513",        // Brown
    "alkalimetals": "#ff6600",      // Orange
    "alkalineearth": "#99ff99",     // Light Green
    "transitionmetals": "#ff66b2",  // Pink
    "posttransitionmetals": "#66ccff", // Light Blue
    "metalloids": "#66cc66",        // Green
    "halogens": "#00cc99",          // Teal
    "lanthanides": "#9966ff",       // Purple
    "actinides": "#c28e2c",         // Light Brown
    "latetransitionmetals": "#ffff66" // Yellow
};


/// Function to get the color based on category
function getCategoryColor(category) {
    // Normalize category key (convert spaces to underscores, lowercase)
    const formattedCategory = category.toLowerCase().replace(/\s+/g, "_");
    return categoryColors[formattedCategory] || categoryColors["other"];
}

// Function to generate the periodic table
function generateTable() {
    const tableContainer = document.querySelector('.periodic-table');

    if (!elements || elements.length === 0) {
        console.error("Error: `elements` array is empty or not defined.");
        return;
    }

    elements.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        // Assign background color
        const bgColor = getCategoryColor(element.category);
        console.log(`Element: ${element.name}, Category: ${element.category}, Color: ${bgColor}`);
        elementDiv.style.backgroundColor = bgColor;

        // Set grid position
        elementDiv.style.gridColumnStart = element.group;
        elementDiv.style.gridRowStart = element.period;

        // Add content and click event
        elementDiv.innerHTML = `<p>${element.symbol}</p><p>${element.electronegativity || "..."}</p>`;
        elementDiv.onclick = () => handleElementClick(element);

        // Check if the element is in row 7 and is the first element in row 8
        if (element.period === 7 && element.group === 1) {
            // Add a spacer div to create space between row 7 and 8
            const spacerDiv = document.createElement('div');
            spacerDiv.style.gridColumnStart = 1;
            spacerDiv.style.gridColumnEnd = 19;
            spacerDiv.style.height = "20px";  // Adjust the gap size as needed
            tableContainer.appendChild(spacerDiv);
        }

        tableContainer.appendChild(elementDiv);
    });
}

// Handle element clicks
let selectedElements = [];
function handleElementClick(element) {
    selectedElements.push(element);
    if (selectedElements.length === 2) {
        showBondInfo();
    }
}

// Calculate bond type and display result
function showBondInfo() {
    const [el1, el2] = selectedElements;
    if (!el1 || !el2) return;

    // Calculate electronegativity difference
    const electronegativityDifference = Math.abs(el1.electronegativity - el2.electronegativity);
    
    // Formula display (using delta symbol for EN)
    const formula = `ΔEN = (${el1.symbol} - ${el2.symbol})`;
    const electronegativityCalculation = `ΔEN = (${el1.electronegativity.toFixed(2)} - ${el2.electronegativity.toFixed(2)}) = ${electronegativityDifference.toFixed(2)}`;

    // Determine bond type
    let bondType = "";
    if (electronegativityDifference > 1.7) {
        bondType = "Ionic Bond";
    } else if (electronegativityDifference > 0.4) {
        bondType = "Polar Covalent Bond";
    } else {
        bondType = "Non-Polar Covalent Bond";
    }

    // Display the information in the popup
    document.getElementById("bond-info").innerHTML = `
        <strong>Element Selected:</strong> ${el1.name} (${el1.symbol}) and ${el2.name} (${el2.symbol}) <br>
        <strong>Formula:</strong> ${formula} <br>
        <strong>Electronegativity:</strong> ${electronegativityCalculation} <br>
        
    `;

    // Set correct bond type as a hidden value
    document.getElementById("bond-info").setAttribute("data-correct-answer", bondType);

    // Reset previous input and result message
    document.getElementById("bond-type-input").value = "";
    document.getElementById("bond-result").innerText = "";

    // Show the popup
    document.getElementById("popup").style.display = "flex";
    
    // Reset selected elements for next selection
    selectedElements = [];
}

// Function to check bond type answer
function checkBondType() {
    let userAnswer = document.getElementById("bond-type-input").value.trim();
    let correctAnswer = document.getElementById("bond-info").getAttribute("data-correct-answer");

    let resultText = document.getElementById("bond-result");

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultText.innerHTML = "✅ Correct!";
        resultText.style.color = "lightgreen";
    } else {
        resultText.innerHTML = "❌ Try again!";
        resultText.style.color = "red";
    }
}

// Close popup when clicking 'X'
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});


// Search functionality for filtering elements
function searchElement() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredElements = elements.filter(element =>
        element.name.toLowerCase().includes(query) || element.symbol.toLowerCase().includes(query)
    );

    // Re-generate the table with filtered elements
    const tableContainer = document.querySelector('.periodic-table');
    tableContainer.innerHTML = "";
    filteredElements.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        // Assign background color
        elementDiv.style.backgroundColor = getCategoryColor(element.category);

        // Set grid position
        elementDiv.style.gridColumnStart = element.group;
        elementDiv.style.gridRowStart = element.period;

        elementDiv.innerHTML = `<p>${element.symbol}</p><p>${element.name}</p>`;
        elementDiv.onclick = () => handleElementClick(element);
        tableContainer.appendChild(elementDiv);
    });
}

// Close popup
document.getElementById("close-popup").onclick = () => {
    document.getElementById("popup").style.display = "none";
};

// Initialize table generation
document.addEventListener("DOMContentLoaded", generateTable);
