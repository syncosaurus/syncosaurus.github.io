import { styled, Box } from '@mui/system';

const VerticalSliderContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  margin: '5rem',
  marginBottom: '0.75rem',
  marginTop: '0.75rem',
  gap: theme.spacing(50), // Adjust the gap between sliders
}));

export default VerticalSliderContainer;