# Aori Typography System

![Typography System](https://github.com/aori-io/aori-typography-system/blob/main/Aori-Typography_System.png)

[View Typography System PDF](https://github.com/aori-io/aori-typography-system/blob/main/Aori-Typography_System.pdf)

## About

This repository contains the official Aori typography system fonts for use in web apps and marketing materials.


## Installation

The official Aori typography system can be easily imported for use in frontend frameworks like Next.js, React, and Vue.

```bash
# or
bun add @aori/fonts
# or
npm install @aori/fonts
# or
yarn add @aori/fonts
```

## Usage

### Basic Font Import

Import the fonts in your root layout or app component:

```typescript
// app/layout.tsx or pages/_app.tsx
import "@aori/fonts";
```

### Tailwind Configuration

Add the Aori preset to your tailwind.config.js/ts:

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@aori/fonts/tailwind")],
  content: [
    // ...
  ],
};
```

### Next.js Configuration

Add this to your next.config.js:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
```

## Available Classes

### Font Family

```tsx
<div className="font-aori">Uses Aori font</div>;
{
  /* or */
}
<div className="font-sans">Uses Aori as system font</div>;
```

### Typography Scales

```tsx
<h1 className="text-aori-h1">Heading 1</h1>
<h2 className="text-aori-h2">Heading 2</h2>
<p className="text-aori-body">Body text</p>
```

### Letter Spacing

```tsx
<div className="tracking-aori-tight">Tight tracking</div>
<div className="tracking-aori-normal">Normal tracking</div>
<div className="tracking-aori-wide">Wide tracking</div>
```

### Utility Classes

```tsx
<h1 className="aori-heading-xl">Extra Large Heading</h1>
<h2 className="aori-heading-lg">Large Heading</h2>
```

## License

MIT © Aori
