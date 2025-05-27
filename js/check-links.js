const https = require('https');
const http = require('http');
const { URL } = require('url');

// Extract URLs from app.js
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Find all URLs in the file
const urlRegex = /url: ['"](https?:\/\/[^'"]+)['"]/g;
const urls = [];
let match;

while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
}

// Remove duplicates
const uniqueUrls = [...new Set(urls)];

console.log(`Found ${uniqueUrls.length} unique URLs to check.`);

// Function to check a single URL
function checkUrl(url) {
    return new Promise((resolve) => {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;
        
        const options = {
            method: 'HEAD',
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + (parsedUrl.search || ''),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 10000
        };

        const req = client.request(options, (res) => {
            res.resume(); // Consume response data to free up memory
            resolve({
                url,
                status: res.statusCode,
                statusText: res.statusMessage,
                redirected: res.headers.location ? `Redirected to: ${res.headers.location}` : 'No redirect'
            });
        });

        req.on('error', (error) => {
            resolve({
                url,
                error: error.message
            });
        });

        req.on('timeout', () => {
            req.destroy();
            resolve({
                url,
                error: 'Request timed out'
            });
        });

        req.end();
    });
}

// Check all URLs with a delay between requests
async function checkAllUrls() {
    console.log('Starting URL checks...\n');
    
    for (const url of uniqueUrls) {
        try {
            const result = await checkUrl(url);
            
            if (result.error) {
                console.log(`❌ ${url}\n   Error: ${result.error}\n`);
            } else if (result.status >= 400) {
                console.log(`⚠️  ${url}\n   Status: ${result.status} ${result.statusText}\n   ${result.redirected}\n`);
            } else {
                console.log(`✅ ${url}\n   Status: ${result.status} ${result.statusText}\n   ${result.redirected}\n`);
            }
            
            // Add a small delay between requests
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.log(`❌ Error checking ${url}: ${error.message}\n`);
        }
    }
    
    console.log('\nFinished checking all URLs.');
}

// Run the checks
checkAllUrls();
