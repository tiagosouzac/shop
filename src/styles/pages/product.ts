import { styled } from '@stitches/react'

export const Container = styled('main', {
  maxWidth: 1180,
  marginInline: 'auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  padding: '0.25rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465b4 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    marginTop: '1rem',
    color: '$green300',
    fontSize: '$2xl',
    display: 'block',
  },

  p: {
    marginTop: '2.5rem',
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  button: {
    padding: '1.25rem',
    marginTop: 'auto',
    border: 0,
    borderRadius: 8,
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 700,
    transition: 'background-color 0.15s',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
