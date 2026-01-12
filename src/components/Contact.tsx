import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Spline from '@splinetool/react-spline';
import { Stack } from '@mui/material';

export default function Resume() {
  return (
    <Container
      id="contact"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Contact
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent="space-around"
        sx={{ width: '100%' }}
      >
        <Box sx={{ flex: 1, minWidth: 0, aspectRatio: '1 / 1' }}>
          <Spline scene="https://prod.spline.design/BAgIShmpoznthvpY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, aspectRatio: '1 / 1' }}>
          <Spline scene="https://prod.spline.design/5Ze-9Hh6NsqieCAj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, aspectRatio: '1 / 1' }}>
          <Spline scene="https://prod.spline.design/oBmSEIZZhIRYFmuT/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Box>
      </Stack>
    </Container>
  );
}
