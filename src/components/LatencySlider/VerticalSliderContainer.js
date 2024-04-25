import { styled, Box } from '@mui/system'

const VerticalSliderContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  marginBottom: '0.25rem',
  marginTop: '0.75rem',
  gap: theme.spacing(50, 'auto'), // Adjust the gap between sliders
}))

export default VerticalSliderContainer
