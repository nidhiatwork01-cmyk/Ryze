# Image Replacement Guide

This guide explains how to replace placeholder images with actual images from the Ryze website or your own assets.

## Current Image Placements

### 1. Hero Section - Dashboard Image
**Location:** `components/Hero.tsx`
**Current:** Unsplash analytics dashboard image
**Replace with:** Actual Ryze dashboard screenshot

```tsx
// Replace this URL:
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"

// With your image:
src="/images/dashboard.png" // or your image URL
```

### 2. Creative Analyzer - Ad Creative
**Location:** `components/CreativeAnalyzer.tsx`
**Current:** Unsplash running shoes image
**Replace with:** Actual ad creative example

```tsx
// Replace this URL:
src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"

// With your image:
src="/images/running-shoes-ad.png"
```

### 3. Testimonials - Profile Pictures
**Location:** `components/Testimonials.tsx`
**Current:** Pravatar placeholder avatars
**Replace with:** Actual customer photos or company logos

```tsx
// Replace this URL:
src={`https://i.pravatar.cc/150?img=${index + 1}`}

// With actual images:
src="/images/testimonials/roger-dunn.jpg"
```

### 4. Client Logos
**Location:** `components/ClientLogos.tsx`
**Current:** Unsplash placeholder logos
**Replace with:** Actual client company logos

```tsx
// Replace these URLs with actual client logos:
const clients = [
  { name: 'Client 1', logo: '/images/clients/client1.png' },
  { name: 'Client 2', logo: '/images/clients/client2.png' },
  // ... etc
]
```

## How to Add Your Own Images

### Option 1: Local Images (Recommended)
1. Create an `images` folder in the `public` directory:
   ```
   public/
     images/
       dashboard.png
       running-shoes-ad.png
       clients/
         client1.png
         client2.png
   ```

2. Update the image sources:
   ```tsx
   <Image
     src="/images/dashboard.png"
     alt="Ryze Dashboard"
     width={800}
     height={600}
   />
   ```

### Option 2: External URLs
1. Add the domain to `next.config.js`:
   ```js
   images: {
     domains: ['your-cdn.com', 'your-image-host.com'],
   }
   ```

2. Use the full URL:
   ```tsx
   <Image
     src="https://your-cdn.com/images/dashboard.png"
     alt="Ryze Dashboard"
     width={800}
     height={600}
   />
   ```

## Image Optimization Tips

1. **Use Next.js Image Component** - Already implemented for automatic optimization
2. **Recommended Sizes:**
   - Hero dashboard: 1200x800px
   - Ad creatives: 800x600px
   - Client logos: 200x100px
   - Profile pictures: 150x150px
3. **File Formats:** Use PNG for logos, JPG for photos, WebP for better compression

## Getting Images from Ryze Website

1. Visit https://www.get-ryze.ai
2. Right-click on images you want to use
3. Save them to your `public/images` folder
4. Update the component with the new paths

## Quick Replace Script

To quickly replace all placeholder images, search for:
- `images.unsplash.com` - Replace with your dashboard/feature images
- `i.pravatar.cc` - Replace with actual profile pictures
- Update client logos in `ClientLogos.tsx`

All images are already using Next.js Image component for optimal performance!







