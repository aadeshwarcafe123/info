# Aadeshwar Café - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero section and menu preview
├── menu.html               # Full menu with filtering system
├── about.html              # Café story and heritage connection
├── contact.html            # Location, contact info, and map
├── main.js                 # Core JavaScript functionality
├── resources/              # Media assets folder
│   ├── hero-cafe.jpg       # Main hero image - café interior
│   ├── hero-food.jpg       # Food hero image - street food spread
│   ├── about-interior.jpg  # About page - café atmosphere
│   ├── dish-*.jpg          # Individual menu item images (15+ items)
│   └── gallery-*.jpg       # Additional food and café images
├── interaction.md          # Interaction design documentation
├── design.md              # Design style guide
└── outline.md             # This project outline
```

## Page Structure & Content

### 1. index.html - Homepage
**Purpose:** Create immediate impact and drive engagement

**Sections:**
- **Navigation Bar:** Sticky header with logo, menu items, and call-to-action
- **Hero Section:** 
  - Large hero image of café interior with warm lighting
  - Animated tagline: "Flavors of Heritage, Fresh Every Day"
  - Prominent "Order Now" and "View Menu" buttons
- **Featured Dishes Carousel:** 
  - Horizontal scrolling showcase of signature items
  - Auto-playing with manual navigation controls
  - Hover effects revealing prices and descriptions
- **Daily Offers Banner:**
  - "30% Off on Dabeli" with countdown timer
  - Special combo deals highlighting
- **Quick Actions:**
  - Three-column layout: Menu | Order Online | Visit Us
  - Icon-based navigation with hover animations
- **Customer Testimonials:**
  - Rotating testimonials with star ratings
  - Customer photos and authentic reviews
- **Footer:** Contact info, hours, and social links

### 2. menu.html - Menu Page
**Purpose:** Comprehensive menu with advanced filtering

**Sections:**
- **Navigation Bar:** Consistent with homepage
- **Filter Navigation:**
  - Sticky filter bar with categories: All, Combos, Meals, Sandwiches, Snacks, Chaat
  - Search bar for specific dishes
  - Price range slider
- **Menu Grid:**
  - Responsive card layout (3 columns desktop, 2 tablet, 1 mobile)
  - Each card contains: image, name, description, price, "Add to Order" button
  - Hover effects with smooth animations
- **Category Sections:**
  - **Combos:** Chinese Combo 1 & 2 (₹195 each)
  - **Meals:** Phulka with Gravy (₹185)
  - **Sandwiches:** 8 varieties ranging from ₹130-₹220
  - **Snacks:** Vada Pav, Cheese Vada Pav, Veg Fried Rice
  - **Chaat:** 11 varieties including house specialties
- **Special Offers Sidebar:**
  - Today's specials highlighting
  - Popular items ranking
  - Customer favorites
- **Order Actions:**
  - "Call to Order" button with phone number
  - Zomato integration link
  - Cart simulation (visual only)

### 3. about.html - About Page
**Purpose:** Tell the café's story and build emotional connection

**Sections:**
- **Navigation Bar:** Consistent design
- **Hero Section:**
  - Interior café image showing heritage elements
  - "Our Story" heading with elegant typography
- **Heritage Story:**
  - History of Aadeshwar Café in Heritage Town
  - Connection to Puducherry's French colonial past
  - Family legacy and traditional recipes
- **Our Mission:**
  - Bringing authentic street flavors to modern café setting
  - Commitment to fresh, quality ingredients
  - Community engagement and local sourcing
- **Café Gallery:**
  - Image carousel of interior spaces
  - Food preparation areas
  - Customer dining experiences
- **Values & Vision:**
  - Quality commitment
  - Cultural preservation
  - Customer satisfaction focus
- **Team Section:**
  - Meet the founders/chefs
  - Heritage and expertise background

### 4. contact.html - Contact Page
**Purpose:** Provide comprehensive contact and location information

**Sections:**
- **Navigation Bar:** Consistent design
- **Contact Hero:**
  - "Visit Us" heading
  - Subtle background with contact icons
- **Location Information:**
  - Complete address: 81, Ground Floor, Eswaran Koil Street, Heritage Town, Puducherry
  - Interactive Google Maps embed
  - Directions and parking information
- **Contact Details:**
  - Phone: +91 95145 48888
  - Email contact option
  - Social media links
- **Opening Hours:**
  - Daily: 12:00 PM – 10:30 PM
  - Holiday hours information
  - Best times to visit
- **Order Options:**
  - Zomato ordering link
  - Phone ordering instructions
  - Takeaway and delivery information
- **FAQ Section:**
  - Common questions about ordering, dietary options, parking
  - Expandable accordion-style answers

## JavaScript Functionality (main.js)

### Core Features
1. **Menu Filtering System**
   - Real-time search functionality
   - Category-based filtering with smooth animations
   - Price range filtering
   - Reset and clear filters

2. **Interactive Animations**
   - Scroll-triggered reveal animations
   - Hover effects for menu cards
   - Loading states and transitions
   - Mobile gesture support

3. **Carousel Management**
   - Hero image rotation
   - Featured dishes slider
   - Testimonial rotation
   - Gallery navigation

4. **User Experience Enhancements**
   - Smooth scrolling navigation
   - Mobile menu toggle
   - Form validation
   - Local storage for user preferences

### Library Integration
- **Anime.js:** Menu filtering animations, card transitions
- **Splide.js:** Image carousels and sliders
- **ECharts.js:** Customer rating visualizations
- **p5.js:** Background particle effects
- **Pixi.js:** Interactive hover effects
- **Matter.js:** Playful physics animations

## Visual Effects Implementation

### Background Effects
- **Liquid Gradient Flow:** Warm yellow to cream gradient animation
- **Particle System:** Subtle spice-inspired particles using p5.js
- **Parallax Scrolling:** Multi-layer depth on hero sections

### Interactive Elements
- **Menu Card Hover:** 3D tilt effect with shadow expansion
- **Button Animations:** Color morphing and micro-interactions
- **Image Galleries:** Ken Burns effect with smooth transitions

### Scroll Motion
- **Reveal Animations:** Staggered content appearance
- **Progress Indicators:** Visual feedback for page position
- **Sticky Navigation:** Header transformation on scroll

## Content Strategy

### Menu Items (25+ items total)
**Combos (2 items):**
- Chinese Combo 1: Noodles + Veg Ball Manchurian (₹195)
- Chinese Combo 2: Fried Rice + Veg Ball Manchurian (₹195)

**Meals (1 item):**
- Phulka with Gravy: 3 Phulka + Paneer Butter Masala (₹185)

**Sandwiches (8 items):**
- Corn Grilled Sandwich (₹185)
- Chilli Cheese Sandwich (₹209)
- Paneer Grilled Sandwich (₹209)
- Veg Grilled Sandwich (₹185)
- Veg Sandwich (₹140)
- Murukku Sandwich (₹169)
- Butter Jam Toast Sandwich (₹130)
- Aadeshwar Special Toast Sandwich (₹220)

**Snacks (3 items):**
- Cheese Vada Pav (₹120)
- Vada Pav (₹90)
- Veg Fried Rice (₹200)

**Chaat (11 items):**
- Dahi Samosa Chaat (₹169)
- Dahi Aloo Tikki Chaat (₹169)
- Raj Kachori (₹169)
- Dahi Papdi Chaat (₹160)
- Aadeshwar Maharaja Chaat (₹190)
- Bhel Puri (₹145)
- Cheese Bhel Puri (₹150)
- Aadeshwar Bhel Puri (₹169)
- Lays Bhel Puri (₹145)
- Kurkure Bhel Puri (₹145)
- Hot Aloo Tikki Chaat (₹170)
- Hot Papdi Chaat (₹120)
- Hot Samosa Chaat (₹160)

### Image Requirements
- **Hero Images:** 2 high-quality café and food images
- **Menu Items:** 25+ individual dish photographs
- **Gallery Images:** 10+ additional food and atmosphere shots
- **About Images:** 3-5 interior and preparation area photos

## Technical Specifications

### Performance Targets
- **Page Load Time:** Under 3 seconds
- **Image Optimization:** WebP format with fallbacks
- **JavaScript Bundle:** Minified and compressed
- **CSS Optimization:** Critical CSS inlined

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Support:** iOS Safari, Chrome Mobile
- **Progressive Enhancement:** Graceful degradation for older browsers

### Accessibility Standards
- **WCAG 2.1 AA Compliance:** Full accessibility support
- **Keyboard Navigation:** Complete site navigation without mouse
- **Screen Reader Support:** Semantic HTML and ARIA labels
- **Color Contrast:** 4.5:1 minimum ratio for all text

This comprehensive outline ensures we deliver a visually stunning, functionally robust, and culturally authentic website that captures the essence of Aadeshwar Café and Heritage Town's unique charm.