// Main application class
class ReadingResourcesApp {
    constructor() {
        this.resources = [];
        this.filteredResources = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.showOnlyFavorites = false;
        this.favorites = JSON.parse(localStorage.getItem('readingResourcesFavorites')) || [];
        
        // Initialize the app
        this.initializeEventListeners();
        this.loadResources();
    }

    // Load resources
    async loadResources() {
        try {
            // Show loading state
            this.showLoading(true);
            
            // Load resources data
            this.resources = [
                // Search Engines & Aggregators
                {
                    id: 1,
                    name: 'Anna\'s Archive',
                    url: 'https://annas-archive.org',
                    description: 'Search engine for books, papers, comics, and magazines from various sources.',
                    categories: ['books', 'comics', 'academic', 'magazines'],
                    tags: ['search engine', 'direct download', 'comprehensive']
                },
                {
                    id: 2,
                    name: 'Open Slum',
                    url: 'https://open-slum.org/',
                    description: 'Book site index with uptime tracking for various book resources.',
                    categories: ['books', 'search'],
                    tags: ['index', 'uptime tracking']
                },
                {
                    id: 3,
                    name: 'Library Genesis',
                    url: 'http://gen.lib.rus.ec',
                    description: 'Scientific articles, books, images, comics, and magazines.',
                    categories: ['books', 'academic', 'comics', 'magazines'],
                    tags: ['scientific', 'research', 'textbooks']
                },
                
                // Public Domain & Classic Literature
                {
                    id: 20,
                    name: 'Project Gutenberg',
                    url: 'https://www.gutenberg.org',
                    description: 'Over 60,000 free eBooks in the public domain.',
                    categories: ['books', 'classics'],
                    tags: ['public domain', 'epub', 'free']
                },
                
                // Academic & Research
                {
                    id: 40,
                    name: 'Sci-Hub',
                    url: 'https://sci-hub.se',
                    description: 'Access millions of research papers and academic articles.',
                    categories: ['academic'],
                    tags: ['research papers', 'science', 'academic']
                },
                
                // Audiobooks
                {
                    id: 50,
                    name: 'LibriVox',
                    url: 'https://librivox.org',
                    description: 'Free public domain audiobooks read by volunteers.',
                    categories: ['audiobooks'],
                    tags: ['public domain', 'volunteer-read', 'classics']
                },
                
                // Comics & Manga
                {
                    id: 60,
                    name: 'GetComics',
                    url: 'https://getcomics.info',
                    description: 'Download comics, graphic novels, and manga.',
                    categories: ['comics', 'manga'],
                    tags: ['dc', 'marvel', 'graphic novels']
                },
                
                // Magazines & Periodicals
                {
                    id: 70,
                    name: 'MagazineLib',
                    url: 'https://magazinelib.com',
                    description: 'Free PDF and digital magazines.',
                    categories: ['magazines'],
                    tags: ['periodicals', 'pdf', 'current issues']
                }
            ];

            // Hide loading state
            this.showLoading(false);
            
            // Initial render
            this.filterResources();
            this.renderCategories();
            this.renderResources();
            this.updateActiveCategory();

        } catch (error) {
            console.error('Error loading resources:', error);
            this.showError('Failed to load resources. Please try again later.');
            this.showLoading(false);
        }
    }

    // Filter resources based on current filters
    filterResources() {
        this.filteredResources = this.resources.filter(resource => {
            // Filter by category
            const categoryMatch = this.currentCategory === 'all' || 
                               resource.categories.includes(this.currentCategory);
            
            // Filter by search term
            const searchMatch = !this.searchTerm || 
                              resource.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                              resource.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                              resource.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
            
            // Filter by favorites if needed
            const favoriteMatch = !this.showOnlyFavorites || this.favorites.includes(resource.id);
            
            return categoryMatch && searchMatch && favoriteMatch;
        });
    }

    // Render categories in the sidebar
    renderCategories() {
        const categoryList = document.getElementById('categoryList');
        if (!categoryList) return;
        
        // Get all unique categories from resources
        const allCategories = ['all', 'books', 'academic', 'comics', 'audiobooks', 'magazines', 'search'];
        
        // Clear existing categories
        categoryList.innerHTML = '';
        
        allCategories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'list-group-item list-group-item-action';
            button.textContent = this.capitalizeFirstLetter(category);
            button.dataset.category = category;
            
            if (category === this.currentCategory) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = category;
                this.filterResources();
                this.renderResources();
                this.updateActiveCategory();
            });
            
            categoryList.appendChild(button);
        });
    }
    
    // Render resources in the main content area
    renderResources() {
        const container = document.getElementById('resourcesContainer');
        if (!container) return;
        
        // Clear existing resources
        container.innerHTML = '';
        
        if (this.filteredResources.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-book-open fa-3x mb-3 text-muted"></i>
                    <h4>No resources found</h4>
                    <p class="text-muted">Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }
        
        // Render each resource as a card
        this.filteredResources.forEach(resource => {
            const isFavorite = this.favorites.includes(resource.id);
            
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-4';
            card.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${resource.name}</h5>
                            <button class="btn btn-sm btn-link text-decoration-none p-0" 
                                    data-resource-id="${resource.id}">
                                <i class="${isFavorite ? 'fas' : 'far'} fa-star text-warning"></i>
                            </button>
                        </div>
                        <p class="card-text text-muted small">${resource.description}</p>
                        <div class="d-flex flex-wrap gap-1 mb-2">
                            ${resource.categories.map(cat => 
                                `<span class="badge bg-primary">${this.capitalizeFirstLetter(cat)}</span>`
                            ).join('')}
                        </div>
                        <a href="${resource.url}" target="_blank" class="btn btn-sm btn-outline-primary w-100">
                            Visit Resource <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
            
            // Add event listener for favorite toggle
            const favoriteBtn = card.querySelector('button');
            favoriteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFavorite(resource.id);
            });
            
            container.appendChild(card);
        });
    }
    
    // Toggle favorite status of a resource
    toggleFavorite(resourceId) {
        const index = this.favorites.indexOf(resourceId);
        
        if (index === -1) {
            this.favorites.push(resourceId);
        } else {
            this.favorites.splice(index, 1);
        }
        
        // Save to localStorage
        localStorage.setItem('readingResourcesFavorites', JSON.stringify(this.favorites));
        
        // Update the UI
        this.renderResources();
    }
    
    // Update active category in the sidebar
    updateActiveCategory() {
        const buttons = document.querySelectorAll('#categoryList button');
        buttons.forEach(button => {
            if (button.dataset.category === this.currentCategory) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Show loading state
    showLoading(show) {
        const container = document.getElementById('resourcesContainer');
        if (!container) return;
        
        if (show) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-2">Loading resources...</p>
                </div>
            `;
        }
    }
    
    // Show error message
    showError(message) {
        const container = document.getElementById('resourcesContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    ${message}
                </div>
            </div>
        `;
    }
    
    // Initialize event listeners
    initializeEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }
        
        // Favorites toggle
        const favoritesToggle = document.getElementById('showFavorites');
        if (favoritesToggle) {
            favoritesToggle.addEventListener('change', (e) => {
                this.showOnlyFavorites = e.target.checked;
                this.filterResources();
                this.renderResources();
            });
        }
    }
    
    // Handle search
    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            this.searchTerm = searchInput.value.trim();
            this.filterResources();
            this.renderResources();
        }
    }
    
    // Helper function to capitalize first letter
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ReadingResourcesApp();
});
