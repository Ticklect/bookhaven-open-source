// Debug logging
console.log('=== Reading Resources App Initializing ===');

// Main application
class ReadingResourcesApp {
    constructor() {
        console.log('App constructor called');
        this.resources = [];
        this.filteredResources = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.showOnlyFavorites = false;
        this.favorites = JSON.parse(localStorage.getItem('readingResourcesFavorites') || '[]');
        
        console.log('Favorites from localStorage:', this.favorites);
        
        try {
            // Initialize the app
            console.log('Initializing event listeners...');
            this.initializeEventListeners();
            console.log('Loading resources...');
            this.loadResources();
            console.log('App initialization complete');
        } catch (error) {
            console.error('Error during app initialization:', error);
        }
    }

    // Load resources from data files
    async loadResources() {
        console.log('Starting to load resources...');
        try {
            // Show loading state
            this.showLoading(true);
            
            // Load books, comics, and academic resources
            console.log('Loading books, comics, and academic resources...');
            const booksComicsAcademicResources = window.getAllBookComicsAcademicResources ? 
                window.getAllBookComicsAcademicResources() : [];
            console.log(`Loaded ${booksComicsAcademicResources.length} book/comic/academic resources`);
            
            // Load audiobook resources
            console.log('Loading audiobook resources...');
            const audiobookResources = window.getAllAudiobookResources ? 
                window.getAllAudiobookResources() : [];
            console.log(`Loaded ${audiobookResources.length} audiobook resources`);

            // Combine all resources, removing duplicates by URL and name
            console.log('Combining and deduplicating resources...');
            const allResources = [...booksComicsAcademicResources, ...audiobookResources];
            const uniqueUrls = new Set();
            const uniqueNames = new Set();
            
            this.resources = allResources.filter(resource => {
                // Skip if URL or name is already seen
                if (uniqueUrls.has(resource.url) || uniqueNames.has(resource.name.toLowerCase())) {
                    console.log(`Skipping duplicate resource: ${resource.name}`);
                    return false;
                }
                uniqueUrls.add(resource.url);
                uniqueNames.add(resource.name.toLowerCase());
                return true;
            });

            console.log(`Total unique resources: ${this.resources.length}`);

            // Initialize categories and render resources
            console.log('Initializing categories...');
            this.initializeCategories();
            
            console.log('Filtering resources...');
            this.filterResources();
            
            console.log('Rendering resources...');
            this.renderResources();

            console.log('Resource loading completed successfully');
        } catch (error) {
            console.error('Error loading resources:', error);
        } finally {
            // Hide loading state
            console.log('Hiding loading state...');
            this.showLoading(false);
        }
    }

    // Show loading state
    showLoading(show) {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.style.display = show ? 'block' : 'none';
        }
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.trim().toLowerCase();
                this.filterResources();
                this.renderResources();
            });
        }

        // Search button
        const searchButton = document.getElementById('searchBtn');
        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.searchTerm = searchInput.value.trim().toLowerCase();
                this.filterResources();
                this.renderResources();
            });
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

    // Initialize categories in the sidebar
    initializeCategories() {
        // Get all unique categories from resources
        const categories = new Set();
        this.resources.forEach(resource => {
            if (resource.categories) {
                resource.categories.forEach(cat => categories.add(cat));
            }
        });

        // Add 'All' at the beginning
        const categoryList = [
            { id: 'all', name: 'All Resources', icon: 'fa-globe' },
            ...Array.from(categories).sort().map(cat => ({
                id: cat,
                name: this.formatCategoryName(cat),
                icon: this.getCategoryIcon(cat)
            }))
        ];

        const categoryListElement = document.getElementById('categoryList');
        if (!categoryListElement) return;
        
        categoryListElement.innerHTML = '';

        categoryList.forEach(category => {
            const item = document.createElement('a');
            item.href = '#';
            item.className = 'list-group-item list-group-item-action d-flex align-items-center';
            item.dataset.category = category.id;
            item.innerHTML = `
                <i class="fas ${category.icon} me-2"></i>
                ${category.name}
                <span class="badge bg-primary rounded-pill ms-auto">
                    ${this.getResourceCountByCategory(category.id)}
                </span>
            `;
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = category.id;
                this.filterResources();
                this.renderResources();
                
                // Update active state
                document.querySelectorAll('[data-category]').forEach(btn => {
                    btn.classList.remove('active');
                });
                item.classList.add('active');
            });
            categoryListElement.appendChild(item);
        });
    }

    // Format category name for display
    formatCategoryName(category) {
        if (!category) return '';
        return category
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Get appropriate icon for category
    getCategoryIcon(category) {
        if (!category) return 'fa-tag';
        
        const icons = {
            'books': 'fa-book',
            'academic': 'fa-graduation-cap',
            'comics': 'fa-book-open',
            'manga': 'fa-dragon',
            'audiobooks': 'fa-headphones',
            'magazines': 'fa-newspaper',
            'newspapers': 'fa-newspaper',
            'tools': 'fa-tools',
            'search': 'fa-search',
            'education': 'fa-graduation-cap',
            'research': 'fa-microscope',
            'public domain': 'fa-copyright',
            'webcomics': 'fa-laptop-code',
            'classics': 'fa-scroll',
            'stories': 'fa-book-reader',
            'fanfiction': 'fa-pen-fancy',
            'original': 'fa-lightbulb',
            'banned': 'fa-ban'
        };
        return icons[category] || 'fa-tag';
    }

    // Get resource count by category
    getResourceCountByCategory(category) {
        if (category === 'all') return this.resources.length;
        return this.resources.filter(resource => 
            resource.categories && resource.categories.includes(category)
        ).length;
    }

    // Filter resources based on search term and category
    filterResources() {
        this.filteredResources = this.resources.filter(resource => {
            // Filter by category
            let categoryMatch = false;
            
            if (this.currentCategory === 'all') {
                categoryMatch = true;
            } else {
                // Map resources to our 6 main categories
                const categories = resource.categories || [];
                const name = resource.name.toLowerCase();
                const description = (resource.description || '').toLowerCase();
                
                switch(this.currentCategory) {
                    case 'books':
                        categoryMatch = categories.includes('books') || 
                                     categories.includes('book') ||
                                     description.includes('book') ||
                                     description.includes('novel') ||
                                     description.includes('literature');
                        break;
                        
                    case 'audiobooks':
                        categoryMatch = categories.includes('audiobook') || 
                                      categories.includes('audio') ||
                                      name.includes('audiobook') ||
                                      description.includes('audiobook') ||
                                      description.includes('audio book');
                        break;
                        
                    case 'comics':
                        categoryMatch = categories.includes('comic') || 
                                      categories.includes('manga') ||
                                      name.includes('comic') ||
                                      description.includes('comic') ||
                                      description.includes('graphic novel') ||
                                      description.includes('manga');
                        break;
                        
                    case 'academic':
                        categoryMatch = categories.includes('academic') || 
                                      categories.includes('research') || 
                                      categories.includes('education') ||
                                      description.includes('academic') ||
                                      description.includes('research') ||
                                      description.includes('education') ||
                                      description.includes('university') ||
                                      description.includes('college');
                        break;
                        
                    case 'tools':
                        categoryMatch = categories.includes('tool') || 
                                      categories.includes('utility') ||
                                      description.includes('tool') ||
                                      description.includes('utility') ||
                                      description.includes('software') ||
                                      description.includes('app') ||
                                      description.includes('application');
                        break;
                        
                    case 'others':
                        // Default category for anything that doesn't fit above
                        const isOther = ![
                            'books', 'book', 'novel', 'literature',
                            'audiobook', 'audio',
                            'comic', 'manga', 'graphic novel',
                            'academic', 'research', 'education', 'university', 'college',
                            'tool', 'utility', 'software', 'app', 'application'
                        ].some(term => 
                            (resource.categories || []).includes(term) ||
                            name.includes(term) ||
                            description.includes(term)
                        );
                        categoryMatch = isOther || categories.includes('other') || categories.includes('misc');
                        break;
                }
            }
            
            // Filter by search term
            const searchMatch = !this.searchTerm || 
                resource.name.toLowerCase().includes(this.searchTerm) ||
                (resource.description && resource.description.toLowerCase().includes(this.searchTerm)) ||
                (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(this.searchTerm)));
            
            // Filter by favorites if needed
            const favoriteMatch = !this.showOnlyFavorites || this.favorites.includes(resource.id);
            
            return categoryMatch && searchMatch && favoriteMatch;
        });
    }

    // Render resources to the page
    renderResources() {
        const container = document.getElementById('resourcesContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (this.filteredResources.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                    <h4>No resources found</h4>
                    <p class="text-muted">Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        this.filteredResources.forEach(resource => {
            const isFavorite = this.favorites.includes(resource.id);
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-4';
            card.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start">
                            <h5 class="card-title mb-1">${resource.name}</h5>
                            <button class="btn btn-sm btn-link text-decoration-none p-0" data-resource-id="${resource.id}">
                                <i class="${isFavorite ? 'fas' : 'far'} fa-star text-warning"></i>
                            </button>
                        </div>
                        <p class="card-text text-muted small">${resource.description || 'No description available.'}</p>
                        <div class="d-flex flex-wrap gap-1 mb-2">
                            ${resource.categories ? resource.categories.map(cat => 
                                `<span class="badge bg-secondary">${this.formatCategoryName(cat)}</span>`
                            ).join('') : ''}
                        </div>
                        ${resource.tags && resource.tags.length > 0 ? `
                            <div class="d-flex flex-wrap gap-1">
                                ${resource.tags.map(tag => 
                                    `<span class="badge bg-light text-dark border">${tag}</span>`
                                ).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="${resource.url}" target="_blank" class="btn btn-primary btn-sm">
                            Visit Site <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
            
            // Add favorite toggle
            const favoriteBtn = card.querySelector('button[data-resource-id]');
            if (favoriteBtn) {
                favoriteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleFavorite(resource.id);
                    this.renderResources();
                });
            }
            
            container.appendChild(card);
        });
    }
    
    // Toggle favorite status
    toggleFavorite(resourceId) {
        const index = this.favorites.indexOf(resourceId);
        if (index === -1) {
            this.favorites.push(resourceId);
        } else {
            this.favorites.splice(index, 1);
        }
        localStorage.setItem('readingResourcesFavorites', JSON.stringify(this.favorites));
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new ReadingResourcesApp();
});
