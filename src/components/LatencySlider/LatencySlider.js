import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import VerticalSlider from './VerticalSlider'
import VerticalSliderContainer from './VerticalSliderContainer'
import '@site/src/css/latencySlider.css'

export default function LatencySlider() {
  const [mainSliderValue, setMainSliderValue] = useState(0)
  const [secondSliderlatency, setSecondSliderLatency] = useState(50)

  const handleMainSliderChange = (_e, value) => {
    setMainSliderValue(value)
  }

  const handleLatencyChange = e => {
    setSecondSliderLatency(e.target.value)
  }

  return (
    <>
      <FormControl sx={{ display: 'inline-block' }}>
        <FormHelperText sx={{ fontSize: '17px' }}>Latency</FormHelperText>
        <Select
          sx={{ width: '120px', height: '30px' }}
          value={secondSliderlatency}
          onChange={handleLatencyChange}
        >
          <MenuItem value={50}> 50 ms</MenuItem>
          <MenuItem value={150}>150 ms</MenuItem>
          <MenuItem value={300}>300 ms</MenuItem>
          <MenuItem value={500}>500 ms</MenuItem>
          <MenuItem value={1000}>1000 ms</MenuItem>
        </Select>
      </FormControl>
      <VerticalSliderContainer>
        <VerticalSlider
          orientation="vertical"
          value={mainSliderValue}
          delay={0}
          handleMainSliderChange={handleMainSliderChange}
        />
      </VerticalSliderContainer>
      <VerticalSliderContainer>
        <VerticalSlider
          orientation="vertical"
          value={mainSliderValue}
          delay={secondSliderlatency}
          handleMainSliderChange={handleMainSliderChange}
        />
      </VerticalSliderContainer>
    </>
  )
}
