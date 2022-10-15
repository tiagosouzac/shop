import { styled } from '../../styles'

export const Container = styled('a', {
  borderRadius: 8,
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465b4 100%)',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },

  footer: {
    padding: '2rem',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 0,
    transform: 'translateY(110%)',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    strong: {
      color: '$gray100',
      fontSize: '$lg',
    },

    span: {
      color: '$green300',
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
})
