// Main application
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

    // Load resources from data file
    async loadResources() {
        try {
            // Show loading state
            this.showLoading(true);
            
            // Comprehensive list of reading resources from FMHY Guide
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
                {
                    id: 4,
                    name: 'Z-Library',
                    url: 'https://z-lib.io',
                    description: 'Massive collection of ebooks and articles with millions of titles.',
                    categories: ['books', 'academic'],
                    tags: ['large collection', 'multiple formats', 'research papers']
                },
                {
                    id: 5,
                    name: 'Mobilism',
                    url: 'https://forum.mobilism.org',
                    description: 'Forum for sharing ebooks, audiobooks, magazines, and newspapers.',
                    categories: ['books', 'audiobooks', 'magazines', 'newspapers'],
                    tags: ['forum', 'community', 'various formats']
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
                {
                    id: 21,
                    name: 'Standard Ebooks',
                    url: 'https://standardebooks.org',
                    description: 'High-quality, carefully formatted public domain ebooks.',
                    categories: ['books', 'classics'],
                    tags: ['well-formatted', 'public domain', 'high quality']
                },
                {
                    id: 22,
                    name: 'ManyBooks',
                    url: 'https://manybooks.net',
                    description: 'Over 50,000 free ebooks in various categories and formats.',
                    categories: ['books'],
                    tags: ['multiple formats', 'classics', 'indie authors']
                },
                {
                    id: 23,
                    name: 'Open Library',
                    url: 'https://openlibrary.org',
                    description: 'One web page for every book ever published, with lending options.',
                    categories: ['books', 'academic'],
                    tags: ['borrow', 'public domain', 'digital library']
                },

                // PDF Resources
                {
                    id: 1000,
                    name: 'Audiobooks Collection',
                    url: 'javascript:void(0)',
                    description: 'A collection of audiobook resources from various sources.',
                    categories: ['audiobooks'],
                    tags: ['collection', 'audiobooks']
                },
                
                // Add all audiobook resources
                ...audiobookResources,
                
                // PDF Resources
                {
                    id: 30,
                    name: 'PDF Drive',
                    url: 'https://www.pdfdrive.com',
                    description: 'Search and download PDF books.',
                    categories: ['books', 'academic'],
                    tags: ['pdf', 'textbooks', 'research']
                },
                {
                    id: 31,
                    name: 'Ocean of PDF',
                    url: 'https://oceanofpdf.com',
                    description: 'Download books and comics in PDF format.',
                    categories: ['books', 'comics'],
                    tags: ['pdf', 'direct download']
                },
                {
                    id: 32,
                    name: 'PDF Room',
                    url: 'https://pdfroom.com',
                    description: 'Search and view PDF books and documents.',
                    categories: ['books', 'academic'],
                    tags: ['pdf', 'view online', 'documents']
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
                {
                    id: 41,
                    name: 'OpenStax',
                    url: 'https://openstax.org',
                    description: 'Free, peer-reviewed, openly licensed college textbooks.',
                    categories: ['academic'],
                    tags: ['textbooks', 'education', 'free']
                },
                {
                    id: 42,
                    name: 'Internet Archive',
                    url: 'https://archive.org',
                    description: 'Non-profit library of millions of free books, movies, software, music, and more.',
                    categories: ['books', 'academic', 'media'],
                    tags: ['archive', 'historical', 'multimedia']
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
                {
                    id: 51,
                    name: 'Loyal Books',
                    url: 'https://www.loyalbooks.com',
                    description: 'Free public domain audiobooks and ebooks.',
                    categories: ['audiobooks', 'books'],
                    tags: ['public domain', 'classics']
                },
                {
                    id: 52,
                    name: 'Audiobooks For Soul',
                    url: 'https://audiobooks4soul.com/',
                    description: 'Collection of free audiobooks in various genres.',
                    categories: ['audiobooks'],
                    tags: ['fiction', 'non-fiction', 'classics']
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
                {
                    id: 61,
                    name: 'Comic Book Plus',
                    url: 'https://comicbookplus.com',
                    description: 'Golden Age and public domain comics.',
                    categories: ['comics'],
                    tags: ['golden age', 'public domain', 'classic comics']
                },
                {
                    id: 62,
                    name: 'ReadComicsOnline',
                    url: 'https://readcomiconline.li',
                    description: 'Read comics online for free.',
                    categories: ['comics'],
                    tags: ['read online', 'marvel', 'dc', 'image']
                },

                // Magazines & Periodicals
                {
                    id: 70,
                    name: 'MagazineLib',
                    url: 'https://magazinelib.com',
                    description: 'Free PDF and digital magazines.',
                    categories: ['magazines'],
                    tags: ['periodicals', 'pdf', 'current issues']
                },
                {
                    id: 71,
                    name: 'PDF Magazines',
                    url: 'https://pdf-magazines-download.com',
                    description: 'Download magazines in PDF format.',
                    categories: ['magazines'],
                    tags: ['pdf', 'various genres', 'current issues']
                },

                // Educational Resources
                {
                    id: 80,
                    name: 'MIT OpenCourseWare',
                    url: 'https://ocw.mit.edu',
                    description: 'Free lecture notes, exams, and videos from MIT.',
                    categories: ['academic', 'education'],
                    tags: ['lectures', 'course materials', 'MIT']
                },
                {
                    id: 81,
                    name: 'Wikibooks',
                    url: 'https://www.wikibooks.org',
                    description: 'Open-content textbooks collection from the Wikimedia Foundation.',
                    categories: ['academic', 'education'],
                    tags: ['textbooks', 'open content', 'wiki']
                },

                // Specialized Collections
                {
                    id: 90,
                    name: 'BAEN Free Library',
                    url: 'https://www.baen.com/catalog/category/view/s/free-library/id/2012',
                    description: 'Free science fiction and fantasy ebooks from Baen Books.',
                    categories: ['books', 'scifi', 'fantasy'],
                    tags: ['sci-fi', 'fantasy', 'free ebooks']
                },
                {
                    id: 91,
                    name: 'Sherlock Holmes Canon',
                    url: 'https://sherlock-holm.es',
                    description: 'Complete collection of Sherlock Holmes stories.',
                    categories: ['books', 'classics', 'mystery'],
                    tags: ['sherlock holmes', 'arthur conan doyle', 'detective']
                },
                {
                    id: 92,
                    name: 'Unglue.it',
                    url: 'https://unglue.it',
                    description: 'Crowdfunding platform for making books free to read.',
                    categories: ['books'],
                    tags: ['crowdfunded', 'free ebooks', 'creative commons']
                },
                {
                    id: 31,
                    name: 'Loyal Books',
                    url: 'https://www.loyalbooks.com',
                    description: 'Free public domain audiobooks and ebooks.',
                    categories: ['audiobooks', 'books'],
                    tags: ['public domain', 'classics']
                },

                // Comics & Manga
                {
                    id: 40,
                    name: 'GetComics',
                    url: 'https://getcomics.info',
                    description: 'Download comics, graphic novels, and manga.',
                    categories: ['comics'],
                    tags: ['dc', 'marvel', 'graphic novels', 'manga']
                },
                {
                    id: 41,
                    name: 'Comic Book Plus',
                    url: 'https://comicbookplus.com',
                    description: 'Golden Age and public domain comics.',
                    categories: ['comics'],
                    tags: ['golden age', 'public domain', 'classic comics']
                },

                // Magazines & Periodicals
                {
                    id: 50,
                    name: 'MagazineLib',
                    url: 'https://magazinelib.com',
                    description: 'Free PDF and digital magazines.',
                    categories: ['magazines'],
                    tags: ['periodicals', 'pdf', 'current issues']
                },
                {
                    id: 51,
                    name: 'PDF Magazines',
                    url: 'https://pdf-magazines-download.com',
                    description: 'Download magazines in PDF format.',
                    categories: ['magazines'],
                    tags: ['pdf', 'various genres', 'current issues']
                },

                // Educational Resources
                {
                    id: 60,
                    name: 'MIT OpenCourseWare',
                    url: 'https://ocw.mit.edu',
                    description: 'Free lecture notes, exams, and videos from MIT.',
                    categories: ['academic', 'education'],
                    tags: ['lectures', 'course materials', 'MIT']
                },
                {
                    id: 61,
                    name: 'Wikibooks',
                    url: 'https://www.wikibooks.org',

    // Specialized Collections
    {
        id: 70,
        name: 'BAEN Free Library',
        url: 'https://www.baen.com/catalog/category/view/s/free-library/id/2012',
        description: 'Free science fiction and fantasy ebooks from Baen Books.',
        categories: ['books', 'scifi', 'fantasy'],
        tags: ['sci-fi', 'fantasy', 'free ebooks']
    },
    {
        id: 71,
        name: 'Sherlock Holmes Canon',
        url: 'https://sherlock-holm.es',
        description: 'Complete collection of Sherlock Holmes stories.',
        categories: ['books', 'classics', 'mystery'],
        tags: ['sherlock holmes', 'arthur conan doyle', 'detective']
    },
    {
        id: 72,
        name: 'Unglue.it',
        url: 'https://unglue.it',
        description: 'Crowdfunding platform for making books free to read.',
        categories: ['books'],
        tags: ['crowdfunded', 'free ebooks', 'creative commons']
    },

    // Academic & Research
    {
        id: 70,
        name: 'Academia.edu',
        url: 'https://www.academia.edu',
        description: 'Access millions of academic papers and connect with researchers.',
        categories: ['academic', 'research'],
        tags: ['research papers', 'academic networking', 'scholarly articles']
    },
    {
        id: 71,
        name: 'ResearchGate',
        url: 'https://www.researchgate.net',
        description: 'Network for researchers to share and access research papers.',
        categories: ['academic', 'research'],
        tags: ['research papers', 'academic networking', 'scholarly articles']
    },
    {
        id: 72,
        name: 'Google Scholar',
        url: 'https://scholar.google.com',
        description: 'Search engine for scholarly literature across many disciplines.',
        categories: ['academic', 'research'],
        tags: ['scholarly articles', 'citations', 'research papers']
    }
];

// Define class for managing resources
class ResourceManager {
    constructor() {
        this.resources = resources;
        this.filteredResources = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.showOnlyFavorites = false;
        this.favorites = JSON.parse(localStorage.getItem('readingResourcesFavorites')) || [];
    }

    // Load resources
    loadResources() {
        try {
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
                },

                // Academic & Research
                {
                    id: 70,
                    name: 'Academia.edu',
                    url: 'https://www.academia.edu',
                    description: 'Access millions of academic papers and connect with researchers.',
                    categories: ['academic'],
                    tags: ['research papers', 'academic', 'scholarly']
                },
                {
                    id: 61,
                    name: 'ResearchGate',
                    url: 'https://www.researchgate.net',
                    description: 'European commercial social networking site for scientists and researchers.',
                    categories: ['academic'],
                    tags: ['scientific research', 'papers', 'collaboration']
                },

                // Book Search Engines
                {
                    id: 70,
                    name: 'BookFinder',
                    url: 'https://www.bookfinder.com',
                    description: 'Search and compare book prices from multiple sellers.',
                    categories: ['books'],
                    tags: ['price comparison', 'new & used', 'textbooks']
                },
                {
                    id: 71,
                    name: 'Open Library',
                    url: 'https://openlibrary.org',
                    description: 'Open, editable library catalog with millions of books.',
                    categories: ['books'],
                    tags: ['catalog', 'borrow', 'read online']
                },

                // Alternative Reading Platforms
                {
                    id: 80,
                    name: 'ManyBooks',
                    url: 'https://manybooks.net',
                    description: 'Over 50,000 free ebooks in various categories and formats.',
                    categories: ['books'],
                    tags: ['multiple formats', 'classics', 'indie authors']
                },
                {
                    id: 81,
                    name: 'Scribd',
                    url: 'https://www.scribd.com',
                    description: 'Digital library with books, audiobooks, and documents.',
                    categories: ['books', 'audiobooks', 'documents'],
                    tags: ['subscription', 'large collection', 'premium content']
                },

                // Specialized Collections
                {
                    id: 90,
                    name: 'Baen Free Library',
                    url: 'https://www.baen.com/categories/free-library',
                    description: 'Free science fiction and fantasy ebooks from Baen Books.',
                    categories: ['books'],
                    tags: ['sci-fi', 'fantasy', 'free ebooks']
                },
                {
                    id: 91,
                    name: 'MIT OpenCourseWare',
                    url: 'https://ocw.mit.edu',
                    description: 'Free lecture notes, exams, and videos from MIT.',
                    categories: ['academic'],
                    tags: ['lectures', 'course materials', 'MIT']
                },

                // Additional Resources
                {
                    id: 100,
                    name: 'Google Scholar',
                    url: 'https://scholar.google.com',
                    description: 'Search across many disciplines and sources for scholarly literature.',
                    categories: ['academic'],
                    tags: ['research', 'papers', 'citations']
                },
                {
                    id: 101,
                    name: 'Internet Archive',
                    url: 'https://archive.org',
                    description: 'Non-profit library of millions of free books, movies, software, music, and more.',
                    categories: ['books', 'academic', 'media'],
                    tags: ['archive', 'historical', 'multimedia']
                }
            ];

            // Process the resources
            this.filterResources();
            this.renderCategories();
            this.renderResources();
            
        } catch (error) {
            console.error('Error loading resources:', error);
            this.showError('Failed to load resources. Please try again later.');
        } finally {
        
        // Filter by search term
        const searchMatch = !this.searchTerm || 
                          resource.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
        
        // Filter by favorites if needed
        const favoriteMatch = !this.showOnlyFavorites || this.favorites.includes(resource.id);
        // Clear existing categories
        categoryList.innerHTML = '';
        
        // Add each category as a list item
        allCategories.forEach(category => {
            const count = category === 'all' 
                ? this.resources.length 
                : this.resources.filter(r => r.categories.includes(category)).length;
            
            const listItem = document.createElement('a');
            listItem.href = '#';
            listItem.className = `list-group-item list-group-item-action ${this.currentCategory === category ? 'active' : ''}`;
            listItem.dataset.category = category;
            listItem.innerHTML = `
                ${this.capitalizeFirstLetter(category)} 
                <span class="badge bg-primary rounded-pill float-end">${count}</span>
            `;
            
            listItem.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = category;
                this.filterResources();
                this.renderResources();
                this.updateActiveCategory();
            });
            
            categoryList.appendChild(listItem);
        });
    }

    // Render resources in the main content area
    renderResources() {
        const container = document.getElementById('resourcesContainer');
        if (!container) return;
        
        // Clear existing resources
        container.innerHTML = '';
        
        // Update current category title
        const currentCategoryElement = document.getElementById('currentCategory');
        if (currentCategoryElement) {
            currentCategoryElement.textContent = this.currentCategory === 'all' 
                ? 'All Resources' 
                : `Resources: ${this.capitalizeFirstLetter(this.currentCategory)}`;
        }
        
        // Show message if no resources found
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
        
        // Add each resource as a card
        this.filteredResources.forEach(resource => {
            const isFavorite = this.favorites.includes(resource.id);
            
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-4';
            card.innerHTML = `
                <div class="card resource-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${resource.name}</h5>
                            <button class="btn-favorite ${isFavorite ? 'fas fa-star active' : 'far fa-star'}" 
                                    data-resource-id="${resource.id}"></button>
                        </div>
                        <p class="card-text">${resource.description}</p>
                        <div class="mt-auto">
                            ${resource.tags.map(tag => `<span class="badge bg-light text-dark mb-1">${tag}</span>`).join(' ')}
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="${resource.url}" target="_blank" class="btn btn-sm btn-outline-primary w-100">
                            Visit Site <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
        
        // Add event listeners to favorite buttons
        document.querySelectorAll('.btn-favorite').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const resourceId = parseInt(button.dataset.resourceId);
                this.toggleFavorite(resourceId);
            });
        });
    }

    // Toggle favorite status of a resource
    toggleFavorite(resourceId) {
        const index = this.favorites.indexOf(resourceId);
        
        if (index === -1) {
            // Add to favorites
            this.favorites.push(resourceId);
        } else {
            // Remove from favorites
            this.favorites.splice(index, 1);
        }
        
        // Save to localStorage
        localStorage.setItem('readingResourcesFavorites', JSON.stringify(this.favorites));
        
        // Update UI
        if (this.showOnlyFavorites) {
            this.filterResources();
            this.renderResources();
        } else {
            // Just update the star icon
            const button = document.querySelector(`.btn-favorite[data-resource-id="${resourceId}"]`);
            if (button) {
                button.classList.toggle('far');
                button.classList.toggle('fas');
                button.classList.toggle('active');
            }
        }
    }

    // Update active category in the sidebar
    updateActiveCategory() {
        document.querySelectorAll('#categoryList .list-group-item').forEach(item => {
            if (item.dataset.category === this.currentCategory) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
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
                    <div class="spinner"></div>
                    <p class="mt-3 text-muted">Loading resources...</p>
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
                    <i class="fas fa-exclamation-circle me-2"></i>
                    ${message}
                </div>
            </div>
        `;
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Search button click
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }
        
        // Search input enter key
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }
        
        // Show favorites toggle
        const showFavorites = document.getElementById('showFavorites');
        if (showFavorites) {
            showFavorites.addEventListener('change', (e) => {
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
    const app = new ReadingResourcesApp();
});
