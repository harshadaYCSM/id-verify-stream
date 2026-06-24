import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {
  AppBar,
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { APP_NAME, GATEWAY_URL } from '@/constants';

export function AppShell() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} color="primary">
        <Toolbar>
          <VerifiedUserIcon sx={{ mr: 1.5 }} />
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <Chip
            label="Phase 1 — Bootstrap"
            size="small"
            sx={{
              bgcolor: 'rgba(255,255,255,0.15)',
              color: 'common.white',
            }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Real-time ID Verification
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Frontend scaffold is ready. Upcoming phases will add the webcam
              preview, Socket.IO client, and live validation UI.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="React 18" color="primary" variant="outlined" />
              <Chip label="TypeScript" color="primary" variant="outlined" />
              <Chip label="Vite" color="primary" variant="outlined" />
              <Chip label="Material UI" color="primary" variant="outlined" />
            </Stack>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Configuration
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gateway URL (from <code>VITE_GATEWAY_URL</code>):
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'monospace', mt: 1 }}
            >
              {GATEWAY_URL}
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 3,
              borderStyle: 'dashed',
              borderWidth: 2,
              borderColor: 'divider',
              bgcolor: 'grey.50',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Webcam preview area — Phase 3
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
