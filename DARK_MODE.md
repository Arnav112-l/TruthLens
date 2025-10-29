# 🌓 Dark Mode Feature

## Overview
TruthLens Dashboard now includes a beautiful dark mode toggle that enhances user experience and reduces eye strain.

## Features

✅ **System Preference Detection** - Automatically detects your OS theme preference
✅ **Persistent Storage** - Remembers your choice using localStorage
✅ **Smooth Transitions** - Animated transitions between themes
✅ **Icon Toggle** - Sun icon for dark mode, Moon icon for light mode
✅ **Full Coverage** - All pages and components support dark mode

## How to Use

### Toggle Dark Mode
Click the **Sun/Moon icon** in the top right corner of the header, next to the search bar.

- 🌙 **Moon Icon** = Light Mode (click to switch to dark)
- ☀️ **Sun Icon** = Dark Mode (click to switch to light)

### Keyboard Shortcut (Future)
You can add a keyboard shortcut (e.g., `Ctrl + D` or `Cmd + D`) to toggle dark mode.

## Technical Implementation

### 1. Theme Context
Located at: `client/src/context/ThemeContext.jsx`

Provides:
- `darkMode` state
- `toggleDarkMode` function
- Automatic localStorage persistence
- System preference detection

### 2. Tailwind Dark Mode
Configured in: `client/tailwind.config.js`

```javascript
darkMode: 'class', // Enables class-based dark mode
```

### 3. CSS Classes
All components use Tailwind's `dark:` prefix:

```jsx
<div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-gray-100">Title</h1>
</div>
```

### 4. Color Scheme

#### Light Mode
- Background: White (#FFFFFF) / Gray-50 (#F9FAFB)
- Text: Gray-900 (#111827)
- Cards: White (#FFFFFF)
- Borders: Gray-200 (#E5E7EB)

#### Dark Mode
- Background: Gray-900 (#111827) / Gray-800 (#1F2937)
- Text: Gray-100 (#F3F4F6)
- Cards: Gray-800 (#1F2937)
- Borders: Gray-700 (#374151)

## Components with Dark Mode

✅ Layout & Sidebar
✅ Header
✅ All Cards
✅ All Tables
✅ All Forms
✅ All Buttons
✅ Charts (automatically adapted)
✅ Modals & Dialogs

## Customization

### Change Default Theme
Edit `client/src/context/ThemeContext.jsx`:

```javascript
const [darkMode, setDarkMode] = useState(true); // Default to dark mode
```

### Customize Dark Colors
Edit `client/tailwind.config.js` to add custom dark mode colors:

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        bg: '#0a0a0a',
        card: '#1a1a1a',
        // ... more colors
      }
    }
  }
}
```

### Add Dark Mode to New Components

```jsx
// Example component with dark mode
export default function MyComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6">
      <h2 className="text-gray-900 dark:text-gray-100">Title</h2>
      <p className="text-gray-600 dark:text-gray-400">Description</p>
      <button className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
        Click Me
      </button>
    </div>
  );
}
```

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Opera 76+

## Performance

- **No Performance Impact** - Uses CSS classes, no JavaScript computation
- **Instant Switch** - Theme changes immediately with smooth transitions
- **Efficient Storage** - Only stores one boolean value in localStorage

## Future Enhancements

- [ ] Auto-switch based on time of day
- [ ] Multiple theme presets (Nord, Dracula, Solarized, etc.)
- [ ] Keyboard shortcut
- [ ] Theme customizer in Settings page
- [ ] High contrast mode
- [ ] Color blind friendly themes

## Troubleshooting

### Dark mode not working?
1. Check browser console for errors
2. Verify `tailwind.config.js` has `darkMode: 'class'`
3. Clear localStorage: `localStorage.clear()`
4. Hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R`)

### Colors not changing?
Make sure all your components use the `dark:` prefix:
```jsx
// ❌ Wrong
<div className="bg-white">

// ✅ Correct
<div className="bg-white dark:bg-gray-800">
```

## Accessibility

✅ **WCAG AA Compliant** - Contrast ratios meet accessibility standards
✅ **Screen Reader Support** - Toggle button has proper ARIA labels
✅ **Reduced Motion** - Respects `prefers-reduced-motion` setting
✅ **Keyboard Navigation** - Toggle accessible via Tab key

---

**Enjoy your new dark mode! 🌓**

Made with ❤️ for better user experience
