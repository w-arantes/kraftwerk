# Design to React Component Conversion Standard

This standard **must** be followed for any UI component work in `@kraftwerk/ui`.

## Stack

- **React 19** — Do not use `forwardRef`
- **TypeScript** — Strict mode
- **Tailwind CSS v4** — Use `@theme` and CSS variables
- **Base UI React** (`@base-ui/react`) — Headless components for complex logic
- **Tailwind Variants** (`tailwind-variants`) — Variant management
- **Tailwind Merge** (`tailwind-merge`) — Class merging
- **Icons** — Lucide React or Phosphor Icons

## Naming Conventions

- **Files**: lowercase with hyphens (e.g. `user-card.tsx`, `use-modal.ts`)
- **Exports**: Named exports only; no default exports
- **Structure**: No barrel files (`index.ts`) for internal directory structures

## Mandatory Coding Patterns

### 1. Imports

- Use `import type` for TypeScript types.

### 2. Component Structure (Example: Button)

```tsx
import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export const buttonVariants = tv({
  base: [
    'inline-flex cursor-pointer items-center justify-center font-medium rounded-lg border transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  variants: {
    variant: {
      primary: 'border-primary bg-primary text-primary-foreground hover:bg-primary-hover',
      secondary: 'border-border bg-secondary text-secondary-foreground hover:bg-muted',
    },
    size: {
      sm: 'h-6 px-2 gap-1.5 text-xs [&_svg]:size-3',
      md: 'h-7 px-3 gap-2 text-sm [&_svg]:size-3.5',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      data-slot="button"
      data-disabled={disabled ? '' : undefined}
      className={twMerge(buttonVariants({ variant, size }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 3. Compound Components

Use `data-slot` for identification.

```tsx
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface CardProps extends ComponentProps<'div'> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={twMerge('bg-surface flex flex-col gap-6 rounded-xl border border-border p-6 shadow-sm', className)}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-header" className={twMerge('flex flex-col gap-1.5', className)} {...props} />
}
```

### 4. Color System (CSS Variables via Tailwind v4 theme)

Do not use hardcoded hex. Use theme variables:

- **Backgrounds**: `bg-surface`, `bg-surface-raised`, `bg-primary`, `bg-secondary`, `bg-muted`, `bg-destructive`
- **Text**: `text-foreground`, `text-foreground-subtle`, `text-muted-foreground`, `text-primary-foreground`
- **Borders**: `border-border`, `border-input`, `border-primary`, `border-destructive`
- **Other**: `ring-ring` (focus ring)

### 5. Implementation Details

- **twMerge**: Always wrap `className` props with `twMerge`.
- **data-slot**: Add `data-slot="component-name"` to the root element of components and sub-components.
- **States**: Use data-attributes (`data-disabled`, `data-selected`). Style with `data-[state]:` in Tailwind.
- **Focus**: Use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`.
- **Icons**: Size via classes (e.g. `<Check className="size-4" />` or in variants via `[&_svg]:size-3.5`). Icon-only buttons must have `aria-label`.
- **Props**: Spread `{...props}` at the end of the element.

### 6. Base UI Usage

Use `@base-ui/react` for complex logic (Dialog, Tabs, Select, Menu). Example:

```tsx
import * as Dialog from '@base-ui/react/dialog'

<Dialog.Root>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup />
  </Dialog.Portal>
</Dialog.Root>
```

## References

- [Specification](specification.md)
- [AI Guidelines](ai-guidelines.md)
