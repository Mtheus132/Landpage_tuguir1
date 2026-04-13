# Design System Strategy: Grupo Tuguir

## 1. Overview & Creative North Star

### The Creative North Star: "The Obsidian Chronometer"
This design system is built to evoke the precision of a master watchmaker and the prestige of high-end Brazilian luxury. It is not a website; it is a digital boutique. The experience centers on **The Obsidian Chronometer**—a philosophy where deep, ink-like shadows meet the brilliance of brushed gold. 

We break the "template" look through **Intentional Asymmetry**. Products are rarely centered in a rigid box; they bleed off the edges of containers, overlap background shifts, and command attention through high-contrast scales. We treat the screen as an editorial spread in a premium magazine, utilizing white space (and "dark space") as a functional element to give the high-quality product photography room to breathe.

---

## 2. Colors

The palette is a sophisticated interplay of deep charcoal and luminous gold, designed to highlight the metallic textures of the watches.

*   **Primary (`#ebbf8a` - `#c29967`):** This is our "Tuguir Gold." It is used sparingly for high-impact CTAs and critical information.
*   **Background & Surface (`#131313`):** The "Obsidian" base. It provides a non-reflective, matte finish that allows product imagery to pop.
*   **Tertiary & Accent (`#abcaea`):** A muted slate blue used for subtle technical details or secondary highlights, providing a "cool" counterpoint to the "warm" gold.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are prohibited for sectioning or containment. Boundaries must be defined through background color shifts. Use `surface-container-low` for a section sitting on a `surface` background to create a logical break without a harsh line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
1.  **Base:** `surface` (#131313).
2.  **Raised Sections:** `surface-container-low` (#1c1b1b) for large background blocks.
3.  **Interactive Elements:** `surface-container-high` (#2a2a2a) for hover states or nested cards.
This creates "tonal depth" that feels architectural rather than digital.

### The "Glass & Gradient" Rule
To add soul, use subtle gradients on primary buttons transitioning from `primary` (#ebbf8a) to `primary_container` (#c29967). For floating navigation or overlays, apply **Glassmorphism**: use semi-transparent versions of `surface` with a 20px-40px backdrop-blur to maintain a sense of environmental depth.

---

## 3. Typography

The typography uses a single, highly-flexible typeface: **Manrope**. Its geometric yet modern construction mirrors the precision of watch internals.

*   **Display (3.5rem - 2.25rem):** Set with tight tracking (-2%) and used for product names. This is the "Headline" of an editorial piece.
*   **Headline & Title (2rem - 1rem):** Used for storytelling and section headers. High contrast between `on_surface` (white-grey) and `primary` (gold) for prices or labels.
*   **Body (1rem - 0.75rem):** Generous line-height (1.6) is mandatory to ensure readability against dark backgrounds.
*   **Label (0.75rem - 0.68rem):** Often set in All-Caps with increased letter-spacing (0.1rem) to denote "Technical Specifications" or "Luxury Status."

---

## 4. Elevation & Depth

We convey importance through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "recessed" look. 
*   **Ambient Shadows:** Floating elements (like a featured watch floating in the Hero) must use ultra-diffused shadows. 
    *   *Spec:* Blur: 60px, Opacity: 8%, Color: Toned with `on_surface`.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., input fields), use `outline_variant` at 15% opacity. Never use 100% opaque borders.
*   **Asymmetric Overlaps:** High-quality watch photography should often overlap two different surface containers (e.g., half on `surface`, half on `surface-container-low`) to break the grid and add a premium, custom feel.

---

## 5. Components

### Buttons
*   **Primary:** Filled with a gold gradient (`primary` to `primary_container`). Text color: `on_primary_fixed`. Radius: `sm` (0.125rem) for a sharp, precision-cut look.
*   **Secondary:** Ghost style with a "Ghost Border" and `primary` text.
*   **Tertiary:** Text-only in `primary` gold with a subtle underline that appears on hover.

### Input Fields
Avoid boxes. Use a bottom-only border (`outline_variant` at 20%) to mimic a signature line on a luxury document. Labels should be `label-md` in `primary` gold.

### Cards & Lists
*   **Forbid Divider Lines.** Use vertical white space from the spacing scale (32px or 48px) to separate items.
*   **Product Cards:** Use `surface_container_low` for the background. On hover, transition the background to `surface_container_high` and subtly scale the product image by 5%.

### Additional Component: The "Detail Lens"
A unique component for this system—a floating chip or tooltip that appears when hovering over specific parts of a watch (the dial, the movement, the strap), using glassmorphism and `tertiary` text to explain technical craftsmanship.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme high-contrast layouts (Pure dark vs. Luminous gold).
*   **Do** let product photography bleed out of its containers to create a sense of scale.
*   **Do** use `manrope` in light weights for body text to maintain a "clean" aesthetic.
*   **Do** treat every page scroll as a transition between "gallery rooms."

### Don't
*   **Don't** use pure black (#000000); always use the `surface` token (#131313) to avoid "crushing" the blacks in photography.
*   **Don't** use rounded corners above `md` (0.375rem). Luxury is found in sharp, precise edges, not bubbly containers.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, it shouldn't be there.
*   **Don't** clutter. If a section doesn't have a single clear focus, remove elements until it does.