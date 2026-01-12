import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Proficiencies from './Proficiencies';
import Spline from '@splinetool/react-spline';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';

export default function Resume() {
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
        height: 'calc(2000px + 100vh)',
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
        <Proficiencies />
      </Box>
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          width: '100%',
        }}
      >
        <Box id="developer"
          sx={{
            position: 'sticky',
            top: 0,
            alignSelf: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <Spline scene="https://prod.spline.design/PQNkpOVTiiBehOAz/scene.splinecode" />
        </Box>
      </Box>
      <Button variant="outlined" component="a" href="/Colton Osterlund Resume.pdf" download startIcon={<Download />}>
        Download PDF
      </Button>
    </Container>
  );
}
