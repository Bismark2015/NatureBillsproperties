 
const properties = [
    { 
        name: "Skyline Tower", 
        location: "New Legon, Accra", 
        type: "Residential", 
        size: "15,000 sq ft", 
        images: [
            "images/property1.jpg",
            "images/property1.jpg",
            "images/property3.jpg"
        ]
    },
    { 
        name: "Green Valley Apartments", 
        location: "LakeSide, Accra", 
        type: "Residential", 
        size: "8,500 sq ft", 
        images: [
            "images/property4.jpg",
            "images/property5.jpg",
            "images/property6.jpg"
        ]
    },
    { 
        name: "Ocean View Plaza", 
        location: "LakeSide community 8, Accra", 
        type: "Mixed Use", 
        size: "20,000 sq ft", 
        images: [
            "images/property2.jpg",
            "images/property8.jpg",
            "images/property9.jpg"
        ]
    },
    { 
        name: "Heritage Court", 
        location: "LakeSide, Accra", 
        type: "Residential", 
        size: "12,000 sq ft", 
        images: [
            "images/property3.jpg",
            "images/property11.jpg",
            "images/property12.jpg"
        ]
        
    },
    { 
        name: "Sunrise Business Center", 
        location: "New Legon, Accra", 
        type: "Commercial", 
        size: "18,000 sq ft", 
        images: [
            "images/property5.jpg",
            "images/property15.jpg",
            "images/property16.jpg"
        ]
    },   
        
        
    { 
        name: "Palm Gardens", 
        location: "LakeSide, Accra", 
        type: "Residential", 
        size: "10,000 sq ft", 
        images: [
            "images/property5.jpg",
            "images/property6.jpg",
            "images/property6.jpg"
        ]
        

    },
    { 
        name: "Crystal Heights", 
        location: "LakeSide, Accra", 
        type: "Commercial", 
        size: "16,500 sq ft", 
        images: [
            "images/property6.jpg",
            "images/property7.jpg",
            "images/property7.jpg"
        ]
    },
    { 
        name: "Riverside Estates", 
        location: "New Legon, Greater Accra", 
        type: "Residential", 
        size: "14,000 sq ft", 
        images: [
            "images/property7.jpg",
            "images/property8.jpg",
            "images/property8.jpg"
        ]
    },
    { 
        name: "Golden Gate Complex", 
        location: "LakeSide community 11, Accra", 
        type: "Mixed Use", 
        size: "22,000 sq ft", 
        images: [
            "images/property8.jpg",
            "images/property9.jpg",
            "images/property9.jpg"
        ]
    },
    { 
        name: "Royal Mansion", 
        location: "LakeSide community 18, Accra", 
        type: "Residential", 
        size: "9,500 sq ft", 
        images: [
            "images/property9.jpg",
            "images/property10.jpg",
            "images/property10.jpg"
        ]
    },
    { 
        name: "Trade Center Building", 
        location: "37 , Accra", 
        type: "Commercial", 
        size: "17,000 sq ft", 
        images: [
            "images/property10.jpg",
            "images/property1.jpg",
            "images/property1.jpg"
        ]
    },
    { 
        name: "Harmony Residences", 
        location: "LakeSide community 15, Accra", 
        type: "Residential", 
        size: "11,000 sq ft", 
        images: [
            "images/property11.jpg",
            "images/property12.jpg",
            "images/property13.jpg"
        ]
    },
    { 
        name: "Metro Square", 
        location: "Legon Hills, Accra", 
        type: "Mixed Use", 
        size: "19,500 sq ft", 
        images: [
            "images/property12.jpg",
            "images/property13.jpg",
            "images/property11.jpg"
        ]
    },
    { 
        name: "Garden City Towers", 
        location: "Legon Hills, Accra", 
        type: "Residential", 
        size: "13,500 sq ft", 
        images: [
            "images/property13.jpg",
            "images/property1.jpg",
            "images/property6.jpg"
        ]
    },
    { 
        name: "Executive Plaza", 
        location: "Legon Hills, Accra", 
        type: "Commercial", 
        size: "21,000 sq ft", 
        images: [
            "images/property14.jpg",
            "images/property15.jpg",
            "images/property15.jpg"
        ]
    }
];

// Video data - Replace these YouTube IDs with your actual video IDs
const videos = [
    { id: "dQw4w9WgXcQ", title: "Skyline Tower Virtual Tour", description: "Complete walkthrough of our premium commercial space" },
    { id: "dQw4w9WgXcQ", title: "Green Valley Apartments", description: "Luxury residential living at its finest" },
    { id: "dQw4w9WgXcQ", title: "Ocean View Plaza Overview", description: "Mixed-use development with stunning views" }
];

// WhatsApp number - You can change this to whichever number you prefer
const whatsappNumber = "233247932172"; // or use "233551697437"

// Lightbox variables
let currentPropertyImages = [];
let currentImageIndex = 0;
let currentPropertyName = "";

// Render properties
const propertiesGrid = document.getElementById('propertiesGrid');
properties.forEach((property, index) => {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
    const color = colors[index % colors.length];
    
    const whatsappMessage = `Hi! I'm interested in ${property.name} located at ${property.location}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show only the first image, but make it clickable to open lightbox
    let imageHTML = '';
    if (property.images && property.images.length > 0) {
        const mainImage = property.images[0];
        imageHTML = `
            <div class="property-image" style="background: linear-gradient(135deg, ${color}, ${color}dd); cursor: pointer;" onclick="openLightbox(${index}, 0)">
                <img src="${mainImage}" alt="${property.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        `;
    } else {
        imageHTML = `<div class="property-image" style="background: linear-gradient(135deg, ${color}, ${color}dd);">${index + 1}</div>`;
    }
    
    const propertyCard = `
        <div class="property-card">
            ${imageHTML}
            <div class="property-info">
                <h3 class="property-title">${property.name}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-details">
                    <span><strong>Type:</strong> ${property.type}</span>
                    <span><strong>Size:</strong> ${property.size}</span>
                </div>
                <a href="${whatsappLink}" class="whatsapp-btn" target="_blank">
                    <span class="whatsapp-icon">💬</span>
                    Inquire on WhatsApp
                </a>
            </div>
        </div>
    `;
    propertiesGrid.innerHTML += propertyCard;
});

// Open lightbox
function openLightbox(propertyIndex, imageIndex) {
    const property = properties[propertyIndex];
    currentPropertyImages = property.images;
    currentImageIndex = imageIndex;
    currentPropertyName = property.name;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxInfo = document.getElementById('lightboxInfo');
    
    lightboxImage.src = currentPropertyImages[currentImageIndex];
    lightboxInfo.innerHTML = `<strong>${currentPropertyName}</strong><br>Image ${currentImageIndex + 1} of ${currentPropertyImages.length}`;
    lightbox.classList.add('active');
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Change lightbox image (next/previous)
function changeLightboxImage(direction) {
    currentImageIndex += direction;
    
    // Loop around if at the end or beginning
    if (currentImageIndex < 0) {
        currentImageIndex = currentPropertyImages.length - 1;
    } else if (currentImageIndex >= currentPropertyImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxInfo = document.getElementById('lightboxInfo');
    
    lightboxImage.src = currentPropertyImages[currentImageIndex];
    lightboxInfo.innerHTML = `<strong>${currentPropertyName}</strong><br>Image ${currentImageIndex + 1} of ${currentPropertyImages.length}`;
}

// Close lightbox with Escape key, navigate with arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxImage(-1);
    if (e.key === 'ArrowRight') changeLightboxImage(1);
});

// Render videos
const videoGrid = document.getElementById('videoGrid');
videos.forEach(video => {
    const videoCard = `
        <div class="video-container">
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p>${video.description}</p>
            </div>
        </div>
    `;
    videoGrid.innerHTML += videoCard;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});