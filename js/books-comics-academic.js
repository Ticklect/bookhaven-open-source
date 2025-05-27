// Books, Comics, and Academic Resources
const bookComicsAcademicResources = [
    // === Books & Ebooks ===
    {
        id: 1001,
        name: 'Anna\'s Archive',
        url: 'https://annas-archive.org',
        description: 'Search engine for books, papers, comics, and magazines from various sources.',
        categories: ['books', 'comics', 'academic'],
        tags: ['search engine', 'direct download']
    },
    {
        id: 1002,
        name: 'Open Library',
        url: 'https://openlibrary.org/',
        description: 'Digital library with millions of free books, including many public domain works.',
        categories: ['books', 'academic'],
        tags: ['borrow', 'public domain']
    },
    {
        id: 1003,
        name: 'PDF Drive',
        url: 'https://www.pdfdrive.com/',
        description: 'Search engine for PDF books and documents.',
        categories: ['books', 'academic'],
        tags: ['pdf', 'textbooks']
    },
    {
        id: 1005,
        name: 'Library Genesis',
        url: 'https://libgen.rs/',
        description: 'Massive collection of books and academic papers.',
        categories: ['books', 'academic'],
        tags: ['direct download', 'research']
    },
    {
        id: 1006,
        name: 'Z-Library',
        url: 'https://z-lib.gd/',
        description: 'Large digital library with millions of books and articles.',
        categories: ['books', 'academic'],
        tags: ['direct download', 'multiple formats']
    },

    // === Audiobooks ===
    {
        id: 2001,
        name: 'Librivox',
        url: 'https://librivox.org/',
        description: 'Free public domain audiobooks read by volunteers.',
        categories: ['audiobooks'],
        tags: ['public domain', 'classics', 'free']
    },
    {
        id: 2002,
        name: 'Loyal Books',
        url: 'https://www.loyalbooks.com/',
        description: 'Thousands of free public domain audiobooks and ebooks.',
        categories: ['audiobooks'],
        tags: ['public domain', 'classics']
    },
    {
        id: 2003,
        name: 'Libby',
        url: 'https://www.overdrive.com/apps/libby',
        description: 'Borrow ebooks and audiobooks from your local library.',
        categories: ['audiobooks', 'books'],
        tags: ['library', 'borrow', 'app']
    },
    {
        id: 2004,
        name: 'Audible',
        url: 'https://www.audible.com/',
        description: 'Amazon\'s audiobook service with a large collection.',
        categories: ['audiobooks', 'subscription'],
        tags: ['premium', 'large collection', 'amazon']
    },
    {
        id: 2005,
        name: 'HD Audiobooks',
        url: 'https://hdaudiobooks.net/',
        description: 'Collection of free audiobooks in high quality, including popular titles.',
        categories: ['audiobooks'],
        tags: ['free', 'high quality', 'popular titles']
    },

    // === Comics & Manga ===
    {
        id: 3001,
        name: 'MangaDex',
        url: 'https://mangadex.org/',
        description: 'Manga reader with official and fan translations.',
        categories: ['comics'],
        tags: ['manga', 'online reading']
    },
    {
        id: 3002,
        name: 'Webtoon',
        url: 'https://www.webtoons.com/',
        description: 'Official platform for webtoons and digital comics.',
        categories: ['comics'],
        tags: ['webtoons', 'official']
    },
    {
        id: 3003,
        name: 'ReadComicsOnline',
        url: 'https://readcomiconline.li/',
        description: 'Large collection of comics available to read online.',
        categories: ['comics'],
        tags: ['superhero', 'graphic novels']
    },

    // === Academic & Education ===
    {
        id: 4001,
        name: 'OpenStax',
        url: 'https://openstax.org/',
        description: 'Free, peer-reviewed, openly licensed college textbooks.',
        categories: ['academic'],
        tags: ['textbooks', 'education']
    },
    {
        id: 4002,
        name: 'Google Scholar',
        url: 'https://scholar.google.com/',
        description: 'Search scholarly literature across many disciplines.',
        categories: ['academic', 'search'],
        tags: ['research papers', 'citations', 'scholarly']
    },
    {
        id: 4003,
        name: 'PubMed Central',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/',
        description: 'Free full-text archive of biomedical and life sciences journal literature.',
        categories: ['academic', 'research'],
        tags: ['biomedical', 'life sciences', 'free access']
    },

    // === Other Resources ===
    // Public Domain
    {
        id: 5001,
        name: 'Project Gutenberg',
        url: 'https://www.gutenberg.org/',
        description: 'Over 60,000 free eBooks in the public domain.',
        categories: ['public domain'],
        tags: ['classics', 'epub']
    },
    {
        id: 5002,
        name: 'Standard Ebooks',
        url: 'https://standardebooks.org/',
        description: 'High-quality, carefully formatted public domain ebooks.',
        categories: ['public domain'],
        tags: ['well-formatted', 'high quality']
    },
    
    // Tools & Apps
    {
        id: 5003,
        name: 'Calibre',
        url: 'https://calibre-ebook.com/',
        description: 'E-book library management software.',
        categories: ['tools'],
        tags: ['ebooks', 'management']
    },
    
    // Learning Platforms
    {
        id: 5004,
        name: 'edX',
        url: 'https://www.edx.org/',
        description: 'Online learning platform with courses from top universities.',
        categories: ['education'],
        tags: ['courses', 'learning']
    },
    {
        id: 5005,
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        description: 'Online courses from top universities and companies.',
        categories: ['education'],
        tags: ['courses', 'learning']
    },
    
    // Audiobook Resources
    {
        id: 5006,
        name: 'HD Audiobooks',
        url: 'https://hdaudiobooks.net/',
        description: 'Collection of free audiobooks in high quality, including popular titles.',
        categories: ['audiobooks'],
        tags: ['free', 'high quality', 'popular titles']
    },
    
    // Stories & Writing
    {
        id: 5007,
        name: 'Archive of Our Own',
        url: 'https://archiveofourown.org/',
        description: 'Fanfiction archive with a wide variety of works.',
        categories: ['stories'],
        tags: ['fanfiction', 'community']
    },
    {
        id: 5008,
        name: 'Royal Road',
        url: 'https://royalroad.com/',
        description: 'Home to web novels and fictions.',
        categories: ['stories'],
        tags: ['web novels', 'original']
    },
    {
        id: 1003,
        name: 'PDF Drive',
        url: 'https://www.pdfdrive.com/',
        description: 'Search engine for PDF books and documents.',
        categories: ['books', 'academic'],
        tags: ['pdf', 'textbooks']
    },
    {
        id: 1004,
        name: 'Open Slum',
        url: 'https://open-slum.org/',
        description: 'Book site index with uptime tracking for various reading resources.',
        categories: ['books'],
        tags: ['index', 'tracking', 'multiple sources']
    },
    {
        id: 1005,
        name: 'Library Genesis',
        url: 'https://libgen.rs/',
        description: 'Massive collection of books and academic papers.',
        categories: ['books', 'academic'],
        tags: ['direct download', 'research']
    },
    {
        id: 1006,
        name: 'Z-Library',
        url: 'https://z-lib.gd/',
        description: 'Large digital library with millions of books and articles.',
        categories: ['books', 'academic'],
        tags: ['direct download', 'multiple formats']
    },
    {
        id: 1007,
        name: 'Mobilism',
        url: 'https://forum.mobilism.org',
        description: 'Community for sharing books and other media.',
        categories: ['books', 'audiobooks'],
        tags: ['community', 'signup required']
    },
    {
        id: 1008,
        name: 'MyAnonaMouse',
        url: 'https://www.myanonamouse.net/',
        description: 'Private tracker for books and audiobooks.',
        categories: ['books', 'audiobooks'],
        tags: ['private tracker', 'invite required']
    },
    {
        id: 1009,
        name: 'Archive.org Books',
        url: 'https://archive.org/details/texts',
        description: 'Digital library with millions of free books and media.',
        categories: ['books', 'public domain'],
        tags: ['digital library', 'historical']
    },
    
    // === Public Domain ===
    {
        id: 1101,
        name: 'Project Gutenberg',
        url: 'https://www.gutenberg.org/',
        description: 'Over 60,000 free eBooks in the public domain.',
        categories: ['books', 'public domain'],
        tags: ['classics', 'epub']
    },
    {
        id: 1102,
        name: 'Standard Ebooks',
        url: 'https://standardebooks.org/',
        description: 'High-quality, carefully formatted public domain ebooks.',
        categories: ['books', 'public domain'],
        tags: ['well-formatted', 'high quality']
    },
    {
        id: 1103,
        name: 'ManyBooks',
        url: 'https://manybooks.net/',
        description: 'Wide selection of free ebooks in various categories.',
        categories: ['books', 'public domain'],
        tags: ['multiple formats', 'classics']
    },
    
    // === Comics & Manga ===
    {
        id: 1201,
        name: 'MangaDex',
        url: 'https://mangadex.org/',
        description: 'Manga reader with official and fan translations.',
        categories: ['comics'],
        tags: ['manga', 'online reading']
    },
    {
        id: 1202,
        name: 'Webtoon',
        url: 'https://www.webtoons.com/',
        description: 'Official platform for webtoons and digital comics.',
        categories: ['comics'],
        tags: ['webtoons', 'official']
    },
    {
        id: 1203,
        name: 'ReadComicsOnline',
        url: 'https://readcomiconline.li/',
        description: 'Large collection of comics available to read online.',
        categories: ['comics'],
        tags: ['superhero', 'graphic novels']
    },
    
    // === Academic & Education ===
    {
        id: 1301,
        name: 'OpenStax',
        url: 'https://openstax.org/',
        description: 'Free, peer-reviewed, openly licensed college textbooks.',
        categories: ['academic'],
        tags: ['textbooks', 'education']
    },
    {
        id: 1302,
        name: 'LibreTexts',
        url: 'https://libretexts.org/',
        description: 'Open educational resources for post-secondary education.',
        categories: ['academic'],
        tags: ['textbooks', 'education']
    },
    {
        id: 1303,
        name: 'Open Textbook Library',
        url: 'https://open.umn.edu/opentextbooks/',
        description: 'Textbooks that have been funded and published to be freely used.',
        categories: ['academic'],
        tags: ['textbooks', 'education']
    },
    
    // === Search & Research ===
    {
        id: 1401,
        name: 'Google Scholar',
        url: 'https://scholar.google.com/',
        description: 'Search scholarly literature across many disciplines.',
        categories: ['academic', 'search'],
        tags: ['research papers', 'citations', 'scholarly']
    },
    {
        id: 1402,
        name: 'Semantic Scholar',
        url: 'https://www.semanticscholar.org/',
        description: 'AI-powered research tool for scientific literature.',
        categories: ['academic', 'search', 'research'],
        tags: ['research papers', 'ai', 'citations']
    },
    {
        id: 1403,
        name: 'PubMed Central',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/',
        description: 'Free full-text archive of biomedical and life sciences journal literature.',
        categories: ['academic', 'research', 'medical'],
        tags: ['biomedical', 'life sciences', 'free access']
    },
    
    // === Audiobooks ===
    {
        id: 1401,
        name: 'Librivox',
        url: 'https://librivox.org/',
        description: 'Free public domain audiobooks read by volunteers.',
        categories: ['audiobooks'],
        tags: ['public domain', 'classics', 'free']
    },
    {
        id: 1402,
        name: 'Loyal Books',
        url: 'https://www.loyalbooks.com/',
        description: 'Thousands of free public domain audiobooks and ebooks.',
        categories: ['audiobooks', 'books'],
        tags: ['public domain', 'classics']
    },
    {
        id: 1403,
        name: 'Audiobook Bay',
        url: 'https://audiobookbay.li/',
        description: 'Large collection of audiobooks available for download.',
        categories: ['audiobooks'],
        tags: ['torrent', 'large collection']
    },
    {
        id: 1404,
        name: 'Libby',
        url: 'https://www.overdrive.com/apps/libby',
        description: 'Borrow ebooks and audiobooks from your local library.',
        categories: ['audiobooks', 'books'],
        tags: ['library', 'borrow', 'app']
    },
    {
        id: 1405,
        name: 'Project Gutenberg Audio',
        url: 'https://www.gutenberg.org/browse/categories/1',
        description: 'Human-read audiobooks from Project Gutenberg.',
        categories: ['audiobooks', 'public domain'],
        tags: ['classics', 'free']
    },
    {
        id: 1406,
        name: 'HD Audiobooks',
        url: 'https://hdaudiobooks.net/',
        description: 'Collection of free audiobooks in high quality, including popular titles.',
        categories: ['audiobooks'],
        tags: ['free', 'high quality', 'popular titles']
    },
    {
        id: 1407,
        name: 'Loyal Books',
        url: 'https://www.loyalbooks.com/genre/Audio_Books',
        description: 'Free public domain audiobooks from the former Books Should Be Free.',
        categories: ['audiobooks', 'public domain'],
        tags: ['classics', 'free']
    },
    {
        id: 1407,
        name: 'Open Culture Audiobooks',
        url: 'https://www.openculture.com/freeaudiobooks',
        description: 'Collection of free audiobooks from various sources.',
        categories: ['audiobooks'],
        tags: ['free', 'collection', 'various genres']
    },
    {
        id: 1408,
        name: 'Lit2Go',
        url: 'https://etc.usf.edu/lit2go/',
        description: 'Free online collection of stories and poems in audio format.',
        categories: ['audiobooks', 'education'],
        tags: ['free', 'education', 'classics']
    },
    {
        id: 1409,
        name: 'LoudLit',
        url: 'http://www.loudlit.org/',
        description: 'Free public domain audiobooks and text resources.',
        categories: ['audiobooks', 'public domain'],
        tags: ['free', 'classics', 'text included']
    },
    {
        id: 1410,
        name: 'ThoughtAudio',
        url: 'https://www.thoughtaudio.com/',
        description: 'Free classic audiobooks with a focus on philosophy and literature.',
        categories: ['audiobooks', 'philosophy', 'literature'],
        tags: ['free', 'classics', 'philosophy']
    },
    {
        id: 1411,
        name: 'Internet Archive Audio Books',
        url: 'https://archive.org/details/audio_bookspoetry&tab=collection',
        description: 'Large collection of free audiobooks from the Internet Archive.',
        categories: ['audiobooks', 'public domain'],
        tags: ['free', 'large collection', 'various genres']
    },
    {
        id: 1412,
        name: 'Loyal Books - Sci-Fi',
        url: 'https://www.loyalbooks.com/genre/SciFi',
        description: 'Science fiction audiobooks in the public domain.',
        categories: ['audiobooks', 'sci-fi', 'public domain'],
        tags: ['free', 'science fiction']
    },
    {
        id: 1413,
        name: 'Audiobooks.com',
        url: 'https://www.audiobooks.com/',
        description: 'Subscription service with a large collection of audiobooks.',
        categories: ['audiobooks', 'subscription'],
        tags: ['premium', 'large collection', 'app']
    },
    {
        id: 1414,
        name: 'Scribd',
        url: 'https://www.scribd.com/audiobooks',
        description: 'Subscription service offering ebooks, audiobooks, and more.',
        categories: ['audiobooks', 'books', 'subscription'],
        tags: ['premium', 'large collection', 'app']
    },
    {
        id: 1415,
        name: 'Hoopla',
        url: 'https://www.hoopladigital.com/',
        description: 'Borrow digital media from your local library.',
        categories: ['audiobooks', 'library'],
        tags: ['free', 'library card required', 'app']
    },
    {
        id: 1416,
        name: 'Audiobook Reviews',
        url: 'https://www.audiobookreviewer.com/',
        description: 'Reviews and recommendations for audiobooks.',
        categories: ['audiobooks', 'reviews'],
        tags: ['reviews', 'recommendations']
    },
    {
        id: 1417,
        name: 'Audiobooks Unleashed',
        url: 'https://audiobooksu.com/',
        description: 'Free and discounted audiobook deals.',
        categories: ['audiobooks', 'deals'],
        tags: ['deals', 'discounts', 'promotions']
    },
    {
        id: 1418,
        name: 'AudiobookSTORE',
        url: 'https://www.audiobookstore.com/',
        description: 'Large collection of audiobooks for purchase.',
        categories: ['audiobooks', 'retail'],
        tags: ['purchase', 'large collection']
    },
    {
        id: 1419,
        name: 'Downpour',
        url: 'https://www.downtowndelirium.com/',
        description: 'DRM-free audiobook store and rental service.',
        categories: ['audiobooks', 'retail'],
        tags: ['drm-free', 'rental', 'purchase']
    },
    {
        id: 1420,
        name: 'Libro.fm',
        url: 'https://libro.fm/',
        description: 'Audiobook service that supports local bookstores.',
        categories: ['audiobooks', 'retail'],
        tags: ['local bookstores', 'subscription', 'purchase']
    },
    {
        id: 1421,
        name: 'Chirp',
        url: 'https://www.chirpbooks.com/',
        description: 'Discounted audiobook deals from BookBub.',
        categories: ['audiobooks', 'deals'],
        tags: ['discounts', 'deals', 'limited time']
    },
    {
        id: 1422,
        name: 'Audiobooks.com Free Listens',
        url: 'https://www.audiobooks.com/audiobooks/free-listens',
        description: 'Free audiobooks from Audiobooks.com.',
        categories: ['audiobooks'],
        tags: ['free', 'rotating selection']
    },
    {
        id: 1423,
        name: 'Google Play Audiobooks',
        url: 'https://play.google.com/store/books/category/audiobooks',
        description: 'Audiobooks available for purchase on Google Play.',
        categories: ['audiobooks', 'retail'],
        tags: ['purchase', 'android', 'app']
    },
    {
        id: 1424,
        name: 'Apple Books Audiobooks',
        url: 'https://books.apple.com/us/genre/audiobooks/id500000006',
        description: 'Audiobooks available for purchase on Apple Books.',
        categories: ['audiobooks', 'retail'],
        tags: ['purchase', 'ios', 'app']
    },
    {
        id: 1425,
        name: 'Audiobooks Now',
        url: 'https://www.audiobooksnow.com/',
        description: 'Audiobook store with membership options.',
        categories: ['audiobooks', 'subscription', 'retail'],
        tags: ['purchase', 'membership', 'app']
    },
    {
        id: 1426,
        name: 'Kobo Audiobooks',
        url: 'https://www.kobo.com/us/en/audiobooks',
        description: 'Audiobooks available for purchase on Kobo.',
        categories: ['audiobooks', 'retail'],
        tags: ['purchase', 'ereader', 'app']
    },
    {
        id: 1427,
        name: 'Audible',
        url: 'https://www.audible.com/',
        description: 'Amazon\'s audiobook service with a large collection.',
        categories: ['audiobooks', 'subscription', 'retail'],
        tags: ['premium', 'large collection', 'amazon']
    },
    {
        id: 1428,
        name: 'Audiobook Creation Exchange',
        url: 'https://www.acx.com/',
        description: 'Platform for creating and distributing audiobooks.',
        categories: ['audiobooks', 'creation'],
        tags: ['narration', 'production', 'rights']
    },
    {
        id: 1429,
        name: 'Audiobook Boom',
        url: 'https://audiobookboom.com/',
        description: 'Free audiobooks in exchange for honest reviews.',
        categories: ['audiobooks', 'reviews'],
        tags: ['free', 'reviews', 'arc']
    },
    {
        id: 1430,
        name: 'Audiobook Jukebox',
        url: 'http://audiobookjukebox.com/',
        description: 'Audiobook reviews and promotions.',
        categories: ['audiobooks', 'reviews'],
        tags: ['reviews', 'promotions', 'blog']
    },
    
    // === Learning Platforms ===
    {
        id: 1501,
        name: 'edX',
        url: 'https://www.edx.org/',
        description: 'Online learning platform with courses from top universities.',
        categories: ['academic'],
        tags: ['courses', 'education']
    },
    {
        id: 1502,
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        description: 'Online courses from top universities and companies.',
        categories: ['academic'],
        tags: ['courses', 'education']
    },
    
    // === Tools & Apps ===
    {
        id: 1601,
        name: 'Calibre',
        url: 'https://calibre-ebook.com/',
        description: 'E-book library management software.',
        categories: ['tools'],
        tags: ['ebooks', 'management']
    },
    
    // === Stories & Writing ===
    {
        id: 1701,
        name: 'Archive of Our Own',
        url: 'https://archiveofourown.org/',
        description: 'Fanfiction archive with a wide variety of works.',
        categories: ['stories'],
        tags: ['fanfiction', 'community']
    },
    {
        id: 1702,
        name: 'Royal Road',
        url: 'https://royalroad.com/',
        description: 'Home to web novels and fictions.',
        categories: ['stories'],
        tags: ['web novels', 'original']
    }
];

// Function to get all resources - make it globally available
window.getAllBookComicsAcademicResources = function() {
    return bookComicsAcademicResources;
};

// Function to get resources by category
function getResourcesByCategory(category) {
    return bookComicsAcademicResources.filter(resource => 
        resource.categories.includes(category)
    );
}

// Function to search resources
function searchResources(query) {
    const searchQuery = query.toLowerCase();
    return bookComicsAcademicResources.filter(resource => 
        resource.name.toLowerCase().includes(searchQuery) ||
        resource.description.toLowerCase().includes(searchQuery) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
    );
}

// Function to get all categories
function getAllCategories() {
    const categories = new Set();
    bookComicsAcademicResources.forEach(resource => {
        resource.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories).sort();
}

// Function to get resources by tag
function getResourcesByTag(tag) {
    const searchTag = tag.toLowerCase();
    return bookComicsAcademicResources.filter(resource => 
        resource.tags && resource.tags.some(t => t.toLowerCase() === searchTag)
    );
}

// Function to get all tags
function getAllTags() {
    const tags = new Set();
    bookComicsAcademicResources.forEach(resource => {
        if (resource.tags) {
            resource.tags.forEach(tag => tags.add(tag.toLowerCase()));
        }
    });
    return Array.from(tags).sort();
}
