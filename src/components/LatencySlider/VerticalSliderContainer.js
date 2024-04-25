import { styled, Box } from '@mui/system'

const VerticalSliderContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '0.25rem',
  marginRight: '1rem',
  marginTop: '0.75rem',
  gap: theme.spacing(20, 'auto'), // Adjust the gap between sliders
}))

export default VerticalSliderContainer
