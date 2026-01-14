import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Spline from '@splinetool/react-spline';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useState } from 'react';

export default function Resume() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Container
      id="resume"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Resume
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1249/833'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: activePage === 1 ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: activePage === 1 ? 'auto' : 'none',
          }}
        >
          <Spline scene="https://prod.spline.design/PQNkpOVTiiBehOAz/scene.splinecode" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: activePage === 2 ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: activePage === 2 ? 'auto' : 'none',
          }}
        >
          <Spline scene="https://prod.spline.design/qWc2OYsIAA4MkK8G/scene.splinecode" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, pt: 4, justifyContent: 'center' }}>
        <Button
          variant={activePage === 1 ? 'contained' : 'outlined'}
          onClick={() => setActivePage(1)}
        >
          Page 1
        </Button>

        <Button
          variant={activePage === 2 ? 'contained' : 'outlined'}
          onClick={() => setActivePage(2)}
        >
          Page 2
        </Button>
        <Button variant="outlined" component="a" href="/Colton Osterlund Resume.pdf" download startIcon={<Download />}>
        Download PDF
      </Button>
      </Box>
    </Container>
  );
}
