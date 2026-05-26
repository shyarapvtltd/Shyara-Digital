interface OrnamentalDividerProps {
  className?: string
  variant?: 'simple' | 'ornate'
}

export default function OrnamentalDivider({ className = '', variant = 'ornate' }: OrnamentalDividerProps) {
  if (variant === 'simple') {
    return <div className={`wedding-divider ${className}`} />
  }
  return <div className={`ornamental-divider ${className}`} />
}
