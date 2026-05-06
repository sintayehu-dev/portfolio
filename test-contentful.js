/**
 * Test script to verify Contentful connection
 * Run with: node test-contentful.js
 */

const contentful = require('contentful');
require('dotenv').config();

// Get credentials from environment or use hardcoded values for testing
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID || 'ljv58ycon8ns';
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || 'NOL_cKEn9psxI0Njm0kFaRYZLJIqJZnFUnHJ-vidDXc';
const ENVIRONMENT = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT
});

console.log('🔍 Testing Contentful Connection...\n');
console.log('Space ID:', SPACE_ID);
console.log('Access Token:', ACCESS_TOKEN ? '✓ Set' : '✗ Not Set');
console.log('Environment:', ENVIRONMENT);
console.log('\n---\n');

async function testConnection() {
  try {
    console.log('📡 Fetching projects from Contentful...\n');
    
    const response = await client.getEntries({
      content_type: 'pproject', // Changed to match your Contentful model name
      order: '-sys.createdAt' // Order by creation date instead of custom order field
    });

    console.log(`✅ Success! Found ${response.items.length} project(s)\n`);
    
    if (response.items.length > 0) {
      console.log('📋 Projects:\n');
      response.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.fields.title || 'Untitled'}`);
        console.log(`   ID: ${item.sys.id}`);
        console.log(`   Slug: ${item.fields.slug || 'N/A'}`);
        console.log(`   Category: ${item.fields.category || 'N/A'}`);
        console.log(`   Status: ${item.fields.status || 'N/A'}`);
        console.log('');
      });
    } else {
      console.log('⚠️  No projects found in Contentful.');
      console.log('   Make sure you have created and published at least one project.');
    }
    
  } catch (error) {
    console.error('❌ Error connecting to Contentful:\n');
    console.error('Error Message:', error.message);
    console.error('\nPossible issues:');
    console.error('1. Check your Space ID and Access Token in .env file');
    console.error('2. Make sure you created a "project" content type in Contentful');
    console.error('3. Verify your project is published (not just saved as draft)');
    console.error('4. Check your internet connection');
  }
}

testConnection();
