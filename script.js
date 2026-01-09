const team = [
    { id: "ar", country: "Argentina", zone: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
    { id: "co", country: "Colombia", zone: "America/Bogota", flag: "🇨🇴" },
    { id: "pe", country: "Perú", zone: "America/Lima", flag: "🇵🇪" },
    { id: "mx", country: "México (CDMX)", zone: "America/Mexico_City", flag: "🇲🇽" },
    { id: "ve", country: "Venezuela", zone: "America/Caracas", flag: "🇻🇪" }
];

//  Referencias al DOM
const clocksGrid = document.getElementById('clocks-grid');
const calcGrid = document.getElementById('calculator-grid');
const baseCountrySelect = document.getElementById('base-country-select');

//  Referencia al select de horas 
const baseTimeSelect = document.getElementById('base-time-select');

// --- 0. Inicialización ---

// A. Llenar el select con los países
team.forEach(member => {
    const option = document.createElement('option');
    option.value = member.zone;
    option.textContent = `${member.flag} ${member.country}`;
    baseCountrySelect.appendChild(option);
});

// B. Función para llenar el select de horas (AM/PM)

function populateTimeSelect() {
    // Generamos intervalos cada 30 minutos
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 30) {
            // Formato interno (value): "18:30" (para facilitar el cálculo matemático)
            const hours24 = i.toString().padStart(2, '0');
            const minutes = j.toString().padStart(2, '0');
            const value = `${hours24}:${minutes}`;

            // Formato visual (text): "6:30 PM" (lo que ve el usuario)
            const period = i >= 12 ? 'PM' : 'AM';
            let hours12 = i % 12;
            hours12 = hours12 ? hours12 : 12; // Si es 0, mostrar 12
            const label = `${hours12}:${minutes} ${period}`;

            const option = document.createElement('option');
            option.value = value; 
            option.textContent = label;

            // Seleccionar por defecto las 6:00 PM (18:00)
            if (value === "18:00") option.selected = true;

            baseTimeSelect.appendChild(option);
        }
    }
}
// Ejecutamos la función inmediatamente
populateTimeSelect();


// --- 1. Reloj en Vivo (Formato AM/PM) ---

function renderClocks() {
    clocksGrid.innerHTML = ''; 
    const now = new Date();

    team.forEach(member => {
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: member.zone,
            hour: 'numeric',
            minute: '2-digit',
            hour12: true 
        }).format(now);

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="country-flag">${member.flag}</span>
            <div class="country-name">${member.country}</div>
            <div class="time-display">${timeString}</div>
        `;
        clocksGrid.appendChild(card);
    });
}

setInterval(renderClocks, 1000);
renderClocks();

// --- 2. Calculadora Inteligente ---

function updateCalculator() {
    calcGrid.innerHTML = '';
    
    const baseZone = baseCountrySelect.value;
    // Leemos del select que acabamos de llenar
    const [hours, minutes] = baseTimeSelect.value.split(':'); 
    
    const now = new Date();
    
    // Calcular Offset
    const baseDateString = now.toLocaleString('en-US', { timeZone: baseZone });
    const baseDateObj = new Date(baseDateString);

    team.forEach(member => {
        const targetDateString = now.toLocaleString('en-US', { timeZone: member.zone });
        const targetDateObj = new Date(targetDateString);
        const diff = targetDateObj.getTime() - baseDateObj.getTime();

        // Crear fecha propuesta
        const proposedBaseDate = new Date();
        proposedBaseDate.setHours(hours);
        proposedBaseDate.setMinutes(minutes);
        
        // Aplicar diferencia
        const calculatedDate = new Date(proposedBaseDate.getTime() + diff);

        // Formatear AM/PM
        const timeString = calculatedDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        
        const isSelected = member.zone === baseZone;
        
        const card = document.createElement('div');
        card.className = 'card';
        if(isSelected) card.classList.add('selected-card');
        
        // Estilo especial para el seleccionado
        const style = isSelected ? 'color: var(--accent); font-weight: bold;' : '';
        
        card.innerHTML = `
            <span class="country-flag">${member.flag}</span>
            <div class="country-name">${member.country}</div>
            <div class="time-display calc-time" style="${style}">
                ${timeString}
            </div>
        `;
        calcGrid.appendChild(card);
    });
}

// Event Listeners
baseTimeSelect.addEventListener('change', updateCalculator);
baseCountrySelect.addEventListener('change', updateCalculator);

// Ejecución inicial
updateCalculator();