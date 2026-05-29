# KUI — Minimal Dark/Light Component Library

A minimal, themeable component library built with React, TypeScript, and Tailwind CSS.
Designed for developers who want clean, copy-paste-ready components with full dark/light
theme support and accessibility built in.

## Features

- **Copy-Paste Ready**: No installation required — copy the component files directly into your project
- **TypeScript**: Fully typed components with CVA-powered variant props and autocomplete support
- **Dark/Light Theming**: CSS variable token system — toggle a class on `<html>` to switch themes
- **Class Variance Authority (CVA)**: Clean, type-safe variant management for every component
- **Tailwind CSS v4**: Utility-first styling with no custom CSS overhead
- **Composable**: Sub-components like `CardHeader`, `ModalFooter`, `TabsContent` for flexible layouts
- **Accessible**: ARIA roles, keyboard navigation, focus management, and screen reader support across all components

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Variant Management**: Class Variance Authority (CVA)
- **Class Merging**: clsx + tailwind-merge
- **Icons**: Lucide React

## Components

| Component   | Variants / Options                                          | Description                                                    |
|-------------|-------------------------------------------------------------|----------------------------------------------------------------|
| `Button`    | `solid`, `ghost`, `danger`, `muted`                         | Flexible button with 4 variants, 3 sizes, and ARIA disabled    |
| `Badge`     | `default`, `solid`, `success`, `warning`, `danger`, `muted` | Status labels with `role="status"` for screen readers          |
| `Card`      | `default`, `elevated`, `outline`, `ghost`                   | Container with composable sub-components                       |
| `Input`     | `default`, `success`, `error`                               | Text input with label, hint, error, icon, and `aria-invalid`   |
| `Avatar`    | sizes `xs` `sm` `md` `lg` `xl`                              | Image/fallback/icon avatar with status indicator and group     |
| `Dropdown`  | `align`, `side`                                             | Accessible menu with arrow key nav and focus management        |
| `Modal`     | `sm`, `md`, `lg`, `xl`, `full`                              | Dialog with focus trap, auto-focus, and `role="dialog"`        |
| `Toast`     | `default`, `success`, `error`, `warning`, `info`            | Announces via `role="alert"` and `aria-live="assertive"`       |
| `Tabs`      | —                                                           | Tablist with arrow key nav, `aria-selected`, and panel linking |

## Theming

KUI v2 uses a CSS variable token system. Add the base tokens to your global CSS:

```css
@layer base {
  :root {
    --background: 0 0% 4%;
    --background-subtle: 0 0% 6%;
    --background-muted: 0 0% 9%;

    --foreground: 0 0% 100%;
    --foreground-muted: 0 0% 60%;
    --foreground-subtle: 0 0% 40%;

    --border: 0 0% 100% / 0.1;
    --border-strong: 0 0% 100% / 0.2;

    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 0%;

    --success: 142 76% 36%;
    --success-foreground: 142 76% 70%;
    --success-muted: 142 76% 36% / 0.2;

    --warning: 38 92% 50%;
    --warning-foreground: 38 92% 70%;
    --warning-muted: 38 92% 50% / 0.2;

    --danger: 0 84% 60%;
    --danger-foreground: 0 84% 70%;
    --danger-muted: 0 84% 60% / 0.2;

    --ring: 0 0% 100% / 0.1;
  }

  .light {
    --background: 0 0% 100%;
    --background-subtle: 0 0% 97%;
    --background-muted: 0 0% 94%;

    --foreground: 0 0% 4%;
    --foreground-muted: 0 0% 40%;
    --foreground-subtle: 0 0% 60%;

    --border: 0 0% 0% / 0.1;
    --border-strong: 0 0% 0% / 0.2;

    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;

    --success: 142 76% 36%;
    --success-foreground: 142 76% 30%;
    --success-muted: 142 76% 36% / 0.15;

    --warning: 38 92% 50%;
    --warning-foreground: 38 92% 35%;
    --warning-muted: 38 92% 50% / 0.15;

    --danger: 0 84% 60%;
    --danger-foreground: 0 84% 45%;
    --danger-muted: 0 84% 60% / 0.15;

    --ring: 0 0% 0% / 0.1;
  }
}
```

To switch to light mode, add the `light` class to your `<html>` element:

```tsx
<html className="light">
```

## Usage

KUI follows the **copy-paste** pattern popularized by shadcn/ui. Browse the docs,
find a component you like, and copy the file directly into your project.

### Prerequisites

```bash
npm install @kennbalino/kui lucide-react

# Optional — only if you want to use CVA, cn(), or lucide icons directly
npm install class-variance-authority clsx tailwind-merge
```

### Setup the `cn()` utility

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Button

```tsx
import { Button } from "@kennbalino/kui";

<Button variant="solid">Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="muted">Muted</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button disabled>Disabled</Button>
```

### Badge

```tsx
import { Badge } from "@kennbalino/kui";

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@kennbalino/kui";

<Card variant="elevated" hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>Content goes here.</CardContent>
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "@kennbalino/kui";
import { Search } from "lucide-react";

<Input placeholder="Default input" />

<Input
  label="Email"
  hint="We'll never share your email."
  placeholder="you@example.com"
/>

<Input
  label="Search"
  placeholder="Search components..."
  leftIcon={<Search size={14} />}
/>

<Input
  label="Username"
  placeholder="Enter username"
  error="Username is already taken."
/>

<Input placeholder="Disabled input" disabled />
```

### Avatar

```tsx
import { Avatar, AvatarGroup } from "@kennbalino/kui";

<Avatar src="/photo.jpg" alt="User" size="md" />
<Avatar fallback="KJ" size="lg" status="online" />
<Avatar size="sm" />

<AvatarGroup max={3}>
  <Avatar fallback="A" />
  <Avatar fallback="B" />
  <Avatar fallback="C" />
  <Avatar fallback="D" />
</AvatarGroup>
```

### Dropdown

```tsx
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator, DropdownLabel } from "@kennbalino/kui";

<Dropdown>
  <DropdownTrigger>
    <Button variant="ghost">Options</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownLabel>Account</DropdownLabel>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownSeparator />
    <DropdownItem variant="danger">Sign out</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Modal

```tsx
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter } from "@kennbalino/kui";

const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader onClose={() => setOpen(false)}>
    <ModalTitle>Confirm Action</ModalTitle>
    <ModalDescription>This action cannot be undone.</ModalDescription>
  </ModalHeader>
  <ModalContent>Are you sure you want to continue?</ModalContent>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger">Confirm</Button>
  </ModalFooter>
</Modal>
```

### Toast

```tsx
import { ToastProvider, useToast } from "@kennbalino/kui";

// Wrap your app
<ToastProvider>
  <App />
</ToastProvider>

// Use anywhere inside
const { toast } = useToast();

toast.show("Message sent");
toast.success("Saved successfully");
toast.error("Something went wrong");
toast.warning("Check your input");
toast.info("Update available");
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@kennbalino/kui";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
  <TabsContent value="billing">Billing content</TabsContent>
</Tabs>
```

## Accessibility

All components ship with ARIA roles, keyboard navigation, and screen reader support:

- **Button** — `aria-disabled` for disabled state
- **Badge** — `role="status"` for screen reader announcements
- **Input** — `htmlFor`/`id` linking, `aria-describedby` for hints and errors, `aria-invalid` on error
- **Modal** — `role="dialog"`, `aria-modal`, `aria-labelledby`, focus trap, auto-focus on open
- **Dropdown** — `role="menu/menuitem"`, `aria-expanded`, `aria-haspopup`, full arrow key navigation
- **Tabs** — `role="tablist/tab/tabpanel"`, `aria-selected`, `aria-controls`, arrow key navigation
- **Toast** — `role="alert"`, `aria-live="assertive"`, `aria-atomic`

## Local Development

```bash
git clone https://github.com/Kleinnnn1/KUI-v1.git
cd KUI-v1
npm install
npm run dev
```

The docs site will be available at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Author

Kenneth Jhun N. Balino 

Full Stack Developer

Built with Next.js, TypeScript, and Tailwind CSS.

## License

MIT © Kenneth Jhun N. Balino