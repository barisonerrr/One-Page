// Menu Items Data
const menuItems = [
    {
        category: 'starters',
        name: 'Bruschetta',
        description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
        price: '$8.99',
        image: 'images/bruschetta.jpg'
    },
    {
        category: 'starters',
        name: 'Calamari',
        description: 'Crispy fried squid served with marinara sauce',
        price: '$12.99',
        image: 'images/calamari.jpg'
    },
    {
        category: 'mains',
        name: 'Grilled Salmon',
        description: 'Fresh salmon fillet with lemon butter sauce',
        price: '$24.99',
        image: 'images/salmon.jpg'
    },
    {
        category: 'mains',
        name: 'Beef Tenderloin',
        description: 'Premium cut beef with red wine reduction',
        price: '$32.99',
        image: 'images/beef.jpg'
    },
    {
        category: 'desserts',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone',
        price: '$8.99',
        image: 'images/tiramisu.jpg'
    },
    {
        category: 'desserts',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with vanilla ice cream',
        price: '$9.99',
        image: 'images/lava-cake.jpg'
    },
    {
        category: 'drinks',
        name: 'Signature Cocktail',
        description: 'House special mixed drink',
        price: '$12.99',
        image: 'images/cocktail.jpg'
    },
    {
        category: 'drinks',
        name: 'Wine Selection',
        description: 'Premium wine by the glass',
        price: '$10.99',
        image: 'images/wine.jpg'
    }
];

// Initialize Menu
const menuContainer = document.querySelector('.menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');

function displayMenuItems(category = 'all') {
    menuContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Category Filter
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Filter menu items
        displayMenuItems(this.dataset.category);
    });
});

// Initialize menu with all items
displayMenuItems();

// Reservation Form
const reservationForm = document.querySelector('.reservation-form form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            date: this.querySelector('input[type="date"]').value,
            time: this.querySelector('input[type="time"]').value,
            guests: this.querySelector('input[type="number"]').value,
            occasion: this.querySelector('select').value,
            requests: this.querySelector('textarea').value
        };

        // Here you would typically send the form data to a server
        console.log('Reservation submitted:', formData);
        
        // Show success message
        alert('Reservation submitted successfully!');
        this.reset();
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Basic email validation
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically send the email to your server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Gallery Image Modal
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${imgSrc}" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
}); 