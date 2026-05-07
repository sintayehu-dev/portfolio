/**
 * Project data structure
 * 
 * NOTE: This file is kept for reference only.
 * All project data is now fetched from Contentful CMS.
 * 
 * To add/edit projects, use the Contentful dashboard:
 * https://app.contentful.com
 * 
 * Project structure in Contentful:
 * - title: Text
 * - description: Text
 * - detailedDescription: Long Text
 * - image: Media
 * - screenshots: Media (multiple)
 * - technologies: Tags
 * - github: Text
 * - demo: Text
 * - features: Long Text (JSON array)
 * - challenges: Long Text (JSON array)
 * - solutions: Long Text (JSON array)
 * - category: Text
 * - status: Text
 * - duration: Text
 * - teamSize: Number
 * - videoUrl: Text (optional)
 * - documentUrl: Text (optional)
 */

// This file no longer exports hardcoded data
// All projects are fetched from Contentful via src/services/contentful.js

export default [];
