// Audiobook resources from FMHY Reading Piracy Guide
const audiobookResources = [
    // Downloading
    {
        id: 1001,
        name: 'Mobilism Audiobooks',
        url: 'https://forum.mobilism.org/viewforum.php?f=124',
        description: 'Forum for sharing audiobooks across various genres and languages.',
        categories: ['audiobooks'],
        tags: ['forum', 'community', 'direct download']
    },
    {
        id: 1002,
        name: 'AudiobookBay',
        url: 'https://audiobookbay.lu/',
        description: 'Torrent index for a large collection of audiobooks.',
        categories: ['audiobooks'],
        tags: ['torrent', 'large collection', 'various genres'],
        warning: 'Use with caution and ensure you have proper security measures in place.'
    },
    {
        id: 1003,
        name: 'MyAnonaMouse',
        url: 'https://www.myanonamouse.net/',
        description: 'Private torrent tracker for ebooks, audiobooks, and music.',
        categories: ['audiobooks', 'books'],
        tags: ['private tracker', 'invite only', 'high quality']
    },
    {
        id: 1004,
        name: 'Audiobook CSE',
        url: 'https://cse.google.com/cse?cx=006516753008110874046:cwbbza56vhd',
        description: 'Custom search engine for finding audiobooks across multiple sources.',
        categories: ['audiobooks', 'search'],
        tags: ['search engine', 'multiple sources']
    },
    {
        id: 1005,
        name: 'AudioBooksBee',
        url: 'https://audiobooksbee.com/',
        description: 'Download audiobooks in various genres and formats.',
        categories: ['audiobooks'],
        tags: ['direct download', 'various genres']
    },
    {
        id: 1006,
        name: 'Loyal Books (formerly Books Should Be Free)',
        url: 'https://www.loyalbooks.com/',
        description: 'Free public domain audiobooks and ebooks.',
        categories: ['audiobooks', 'classics'],
        tags: ['public domain', 'free', 'classic literature']
    },
    {
        id: 1007,
        name: 'LibriVox',
        url: 'https://librivox.org/',
        description: 'Free public domain audiobooks read by volunteers.',
        categories: ['audiobooks', 'classics'],
        tags: ['public domain', 'volunteer-read', 'free']
    },
    {
        id: 1008,
        name: 'Audiobooks For Soul',
        url: 'https://audiobooks4soul.com/',
        description: 'Collection of audiobooks in various categories.',
        categories: ['audiobooks'],
        tags: ['direct download', 'various genres']
    },
    
    // Streaming
    {
        id: 1101,
        name: 'Tokybook',
        url: 'https://tokybook.com/',
        description: 'Streaming platform for audiobooks across multiple genres.',
        categories: ['audiobooks', 'streaming'],
        tags: ['streaming', 'various genres', 'free']
    },
    {
        id: 1102,
        name: 'Spotify Audiobooks',
        url: 'https://open.spotify.com/artist/1FSWXfsYsosTxjcV9WoLax',
        description: 'Selected audiobooks available on Spotify.',
        categories: ['audiobooks', 'streaming'],
        tags: ['streaming', 'selected titles', 'requires account']
    },
    {
        id: 1103,
        name: 'Full Length Audiobooks',
        url: 'https://fulllengthaudiobooks.net/',
        description: 'Stream full-length audiobooks in various categories.',
        categories: ['audiobooks', 'streaming'],
        tags: ['streaming', 'full length']
    },
    
    // Tools & Utilities
    {
        id: 1201,
        name: 'AudiobookShelf',
        url: 'https://www.audiobookshelf.org/',
        description: 'Self-hosted audiobook server for managing and streaming your personal audiobook collection.',
        categories: ['audiobooks', 'tools'],
        tags: ['self-hosted', 'server', 'streaming']
    },
    {
        id: 1202,
        name: 'Libation',
        url: 'https://getlibation.com/',
        description: 'Tool to download and manage your Audible audiobooks.',
        categories: ['audiobooks', 'tools'],
        tags: ['audible', 'drm removal', 'conversion']
    },
    {
        id: 1203,
        name: 'AudioBookConverter',
        url: 'https://github.com/yermak/AudioBookConverter',
        description: 'Convert between different audiobook formats.',
        categories: ['audiobooks', 'tools'],
        tags: ['conversion', 'open source']
    }
];

// Function to get all audiobook resources - make it globally available
window.getAllAudiobookResources = function() {
    return audiobookResources;
};

// Function to get audiobook resources by category
function getAudiobookResourcesByCategory(category) {
    return audiobookResources.filter(resource => 
        resource.categories.includes(category)
    );
}

// Function to search audiobook resources
function searchAudiobookResources(query) {
    const searchQuery = query.toLowerCase();
    return audiobookResources.filter(resource => 
        resource.name.toLowerCase().includes(searchQuery) ||
        resource.description.toLowerCase().includes(searchQuery) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
    );
}
