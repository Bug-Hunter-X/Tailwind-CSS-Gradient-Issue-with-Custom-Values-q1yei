# Tailwind CSS Gradient Issue with Custom Values

This repository demonstrates a common issue encountered when using custom values or values outside Tailwind's predefined scales with gradients.  Tailwind may not apply the gradient if the values are not in the predefined scale or are too specific.

## Bug Description

The problem arises when trying to use specific color values or color values not found in the default Tailwind palette within the `gradient-*` utility classes. This often results in the gradient not rendering correctly or not at all.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies (if any are needed for your project setup).
3. Open `bug.js` and observe the rendered component. The gradient background may not be applied correctly.

## Solution

The solution typically involves using color values from Tailwind's predefined scales, or if custom colors are necessary, using techniques to create your own color palette within Tailwind.  Refer to `bugSolution.js` for a demonstration.

## How to use custom colors with Tailwind

- Create a custom color palette within your Tailwind configuration file.
- Use the custom color palette values in your components.
