```javascript
// Example showing the issue with Tailwind's arbitrary value restriction
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
  <p>This should have a gradient background.</p>
</div>

// Tailwind may not apply the gradient if the values are not in the predefined scale or are too specific
```