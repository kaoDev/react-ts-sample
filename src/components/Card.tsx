import glamorous from 'glamorous'
import { rgba } from 'rgba-string'

export const Card = glamorous.div(
  {
    background: '#fff',
    borderRadius: '2px',
    display: 'inline-block',
    height: '300px',
    margin: '1rem',
    position: 'relative',
    width: '300px',
  },
  ({ level = 1 }: { level?: number }) => {
    const first = level
    const shade1 = rgba(0, 0.12 + (level - 1) * 0.04)
    const shade2 = rgba(0, 0.24 - (level - 1) * Math.floor(level / 2))
    return {
      boxShadow: `0 ${first}px ${first ** first +
        level}px ${shade1}, 0 ${level ** level - (level - 1)}px ${level **
        level -
        (level - 1)}px ${shade2}`,
    }
  }
)
