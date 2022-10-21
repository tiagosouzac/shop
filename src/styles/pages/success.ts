import { styled } from '..'

export const Container = styled('main', {
  height: 656,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    maxWidth: 560,
    marginTop: '2rem',
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
  },

  a: {
    marginTop: '5rem',
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'color 0.15s',
    display: 'block',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  padding: '0.25rem',
  marginTop: '4rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465b4 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})
