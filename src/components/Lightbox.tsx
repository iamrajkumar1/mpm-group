import { useEffect } from 'react'

type Props = {
  src: string
  caption?: string
  onClose: () => void
}

export function Lightbox({ src, caption, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox-close" type="button" onClick={onClose}>
        Close
      </button>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={caption || 'Expanded photograph'} />
        {caption ? <p className="lightbox-caption">{caption}</p> : null}
      </div>
    </div>
  )
}
