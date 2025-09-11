# 🖼️ How to Add Your Own Profile Picture

## Method 1: Upload Image to Project (Recommended)

1. **Save your profile picture** to the project directory (e.g., in a `public/images/` folder)
2. **Update the image path** in `/components/AnimatedProfilePicture.tsx`:
   ```tsx
   const PROFILE_IMAGE_URL = "/images/your-profile-picture.jpg";
   ```

## Method 2: Use External URL

1. **Upload your image** to an image hosting service (Imgur, Cloudinary, etc.)
2. **Copy the direct image URL**
3. **Replace the URL** in `/components/AnimatedProfilePicture.tsx`:
   ```tsx
   const PROFILE_IMAGE_URL = "https://your-image-host.com/your-picture.jpg";
   ```

## Method 3: Use in Hero Component

You can also pass a custom image directly when using the component:

```tsx
<AnimatedProfilePicture 
  imageUrl="/path/to/your/picture.jpg"
  altText="Your Name - Your Title"
/>
```

## 📝 Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: At least 400x400 pixels for best quality
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Under 2MB for optimal loading

## 🎨 Tips for Best Results

- Use a **high-quality headshot** with good lighting
- **Square cropping** works best with the circular frame
- **Professional attire** matches the portfolio theme
- **Clear background** or solid color backgrounds work well
- **Face should be centered** and clearly visible

## 🔧 Current Location

The profile picture configuration is in:
`/components/AnimatedProfilePicture.tsx` (line 6)

Just replace the `PROFILE_IMAGE_URL` constant with your image path!