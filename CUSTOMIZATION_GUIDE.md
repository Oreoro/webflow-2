# Customization Guide - Digital SAT Landing Page

## 🎨 Quick Customization Points

### 1. Update Contact Information

#### LiveChat Component (`src/components/LiveChat.tsx`)
```typescript
// Line 142-145: Update WhatsApp number
<a
  href="https://wa.me/923001234567"  // ← Change this number
  target="_blank"
```

#### FAQ Component (`src/components/FAQ.tsx`)
```typescript
// Line 106: Update email address
href="mailto:info@digitalsatpakistan.com"  // ← Change email

// Line 116: Update WhatsApp number
href="https://wa.me/923001234567"  // ← Change number
```

### 2. Update Content & Copy

#### Hero Section (`src/components/Hero.tsx`)
- **Line 20**: Main headline
- **Line 26**: Subheadline (program details)
- **Line 28**: Success story count
- **Line 34**: Primary CTA button text
- **Line 40**: Secondary CTA link text

#### Value Proposition (`src/components/ValueProposition.tsx`)
- **Lines 7-34**: Three benefit cards (icon, title, description)
- **Line 81**: Urgency message

#### Pricing (`src/components/Pricing.tsx`)
- **Lines 6-59**: Three pricing tiers
  - Update `price`, `duration`, `features`
  - Toggle `popular` flag
  - Modify `notIncluded` items

#### Testimonials (`src/components/SocialProof.tsx`)
- **Lines 4-41**: Student testimonials
  - Update `name`, `score`, `improvement`, `university`, `quote`
  - Replace emoji placeholders with actual images

### 3. Update Styling & Colors

#### Global Styles (`src/styles/global.css`)
Primary colors are defined in CSS variables:

```css
:root {
  --primary: teal-600;     /* Main brand color */
  --accent: orange-500;    /* CTA and urgency */
  --success: green-500;    /* Checkmarks, success */
}
```

#### Component-Level Colors
Use Tailwind classes throughout:
- `bg-teal-600`: Primary background
- `bg-orange-500`: CTA buttons
- `text-gray-900`: Main text
- `text-gray-600`: Secondary text

### 4. Update Countdown Timer

#### FinalCTA Component (`src/components/FinalCTA.tsx`)
```typescript
// Line 13-15: Set deadline
endDate.setDate(endDate.getDate() + 3);  // ← Change days
endDate.setHours(23, 59, 59, 999);       // ← Set time
```

### 5. Modify Metrics & Numbers

#### Update throughout components:
- **500+ students**: Change in Hero, SocialProof, FinalCTA
- **4.9/5 rating**: Update in multiple locations
- **1400+ guarantee**: Consistent across all sections
- **PKR pricing**: Update in Pricing component

### 6. Add Real Images

Replace emoji placeholders in testimonials:
```typescript
// Before:
image: '👩‍🎓',

// After:
image: '/images/students/ayesha-khan.jpg',
```

Add proper `alt` attributes for accessibility.

### 7. Configure SEO

#### Main Layout (`src/layouts/main.astro`)
```html
<!-- Lines 12-15: Update meta tags -->
<title>Your Custom Title</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords" />

<!-- Lines 17-20: Update Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="/your-og-image.jpg" />
```

### 8. Modify FAQ Questions

#### FAQ Component (`src/components/FAQ.tsx`)
```typescript
// Lines 4-41: Update questions and answers
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer (2-3 sentences max)'
  },
  // Add more...
];
```

### 9. Update Trust Badges

#### SocialProof Component (`src/components/SocialProof.tsx`)
```typescript
// Lines 43-47: Modify trust badges
const trustBadges = [
  { text: 'Your Certification', icon: '✓' },
  { text: 'Your Partnership', icon: '✓' },
  { text: 'Your Accreditation', icon: '✓' }
];
```

### 10. Customize Live Chat Responses

#### LiveChat Component (`src/components/LiveChat.tsx`)
```typescript
// Lines 24-47: Update bot responses
const getBotResponse = (userMessage: string): string => {
  // Modify responses based on keywords
  // Add more conditions as needed
};

// Lines 54-59: Update quick reply buttons
const quickReplies = [
  'Your Option 1',
  'Your Option 2',
  'Your Option 3',
  'Your Option 4'
];
```

## 🔧 Advanced Customization

### Add New Sections

1. Create new component in `src/components/`
2. Import in `src/components/LandingPage.tsx`
3. Add between existing sections

Example:
```typescript
// src/components/LandingPage.tsx
import YourNewSection from './YourNewSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <YourNewSection />  {/* ← Add here */}
      <ValueProposition />
      // ... rest
    </div>
  );
}
```

### Modify Animation Timing

All animations use `transition-all duration-X`:
- `duration-300`: Fast (0.3s)
- `duration-500`: Medium (0.5s)
- `duration-700`: Slow (0.7s)

Adjust in component classes:
```typescript
className="transition-all duration-500"  // ← Change number
```

### Change Scroll Animations

Components use IntersectionObserver:
```typescript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  },
  { threshold: 0.1 }  // ← Adjust threshold (0-1)
);
```

### Modify Responsive Breakpoints

Tailwind breakpoints:
- `sm:` → 640px
- `md:` → 768px
- `lg:` → 1024px
- `xl:` → 1280px

Example:
```typescript
className="text-2xl md:text-4xl lg:text-5xl"
// Mobile: 2xl, Tablet: 4xl, Desktop: 5xl
```

## 📊 Analytics Integration

### Add Google Analytics

In `src/layouts/main.astro`:
```html
<head>
  <!-- ... existing tags ... -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

### Add Facebook Pixel

```html
<!-- Facebook Pixel -->
<script is:inline>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Track CTA Clicks

Add onClick handlers:
```typescript
<Button
  onClick={() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'hero_cta'
      });
    }
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  }}
>
  Start Your Free Trial Class
</Button>
```

## 🚀 Performance Optimization

### Image Optimization

1. Use WebP format for images
2. Compress images (TinyPNG, Squoosh)
3. Add lazy loading:
```html
<img loading="lazy" src="..." alt="..." />
```

### Code Splitting

Already implemented via:
- `client:only="react"` in index.astro
- Component-level imports

### Font Loading

Fonts are preloaded in main layout:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
```

## 🔐 Form Integration

### Connect to Backend API

Example for enrollment form:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/enroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Success handling
    }
  } catch (error) {
    // Error handling
  }
};
```

### Add Form Validation

Use react-hook-form (already installed):
```typescript
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm();
```

## 📱 Mobile Testing Checklist

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check tap target sizes (56px min)
- [ ] Verify scroll performance
- [ ] Test form inputs
- [ ] Check chat widget positioning
- [ ] Verify countdown timer display
- [ ] Test accordion functionality

## 🎯 Conversion Tracking

### Key Events to Track
1. Page load
2. Hero CTA click
3. Scroll to pricing
4. Pricing tier selection
5. FAQ expansion
6. Chat widget open
7. Form submission
8. External link clicks

### Heatmap Tools
- Hotjar
- Crazy Egg
- Microsoft Clarity (free)

## 📝 Content Writing Tips

### Effective Headlines
- Use numbers (1400+, 500+, 12 weeks)
- Include benefits (guarantee, proven, success)
- Create urgency (limited spots, enrollment closes)

### CTA Copy
- Action verbs (Start, Begin, Book, Join)
- Benefit-focused (Master, Achieve, Unlock)
- Remove friction (Free, No obligation)

### Social Proof
- Specific numbers (+280 points, not "improved")
- Real names and universities
- Video testimonials > text

## 🌐 Internationalization (Future)

To add Urdu language support:
1. Use i18n library (astro-i18n)
2. Create translation files
3. Add language switcher
4. Test RTL layout

## 🔄 Regular Updates

### Monthly
- Update student count
- Refresh testimonials
- Update pricing (if changed)
- Check broken links

### Quarterly
- Update statistics
- Refresh images
- Review and update FAQ
- A/B test new variations

### Annually
- Major design refresh
- Update trust badges
- Renew certifications
- Performance audit

---

For additional help, refer to:
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Documentation](https://react.dev)
