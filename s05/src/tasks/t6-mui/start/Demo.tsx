import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { CssVarsProvider, extendTheme, styled, useColorScheme } from '@mui/material/styles';

// TODO 1. createTheme: основной цвет #3b5bdb, borderRadius 10, шрифт system-ui,
//         светлая и тёмная схемы (colorSchemes).
// TODO 2. Через theme.components: у всех MuiButton — textTransform: 'none' и disableElevation.
// TODO 3. Собрать форму из Paper, Stack, TextField, Button, FormControlLabel + Checkbox.
// TODO 4. Отступы и ширину задать через проп sx, используя значения темы (p: 3, maxWidth: 420).
// TODO 5. Один кастомный компонент через styled() из '@mui/material/styles'.
// TODO 6. Переключатель светлой/тёмной схемы через useColorScheme().
const theme = extendTheme({
  colorSchemeSelector: 'data',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#3b5bdb',
        },
        background: {
          default: '#f4f6ff',
          paper: '#ffffff',
        },
        text: {
          primary: '#1c2430',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#3b5bdb',
        },
        background: {
          default: '#111827',
          paper: '#1f2937',
        },
        text: {
          primary: '#f3f4f6',
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'system-ui, sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 420,
  width: '100%',
}));

function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  const currentMode = mode ?? 'light';

  return (
    <Button
      type="button"
      variant="outlined"
      onClick={() => setMode(currentMode === 'light' ? 'dark' : 'light')}
    >
      {currentMode === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    </Button>
  );
}

export default function Demo() {
  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      <Stack
        sx={{
          minHeight: '100vh',
          p: 3,
          fontFamily: 'system-ui, sans-serif',
          bgcolor: 'background.default',
          color: 'text.primary',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s, color 0.2s',
        }}
      >
        <FormCard elevation={3} sx={{ bgcolor: 'background.paper' }}>
          <Stack component="form" spacing={2} onSubmit={(event) => event.preventDefault()}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0 }}>Регистрация</h2>
              <ThemeSwitch />
            </Stack>
            <TextField label="Имя" placeholder="Имя" fullWidth />
            <TextField label="Email" placeholder="Email" type="email" fullWidth />
            <FormControlLabel control={<Checkbox />} label="Получать новости" />
            <Button type="submit" variant="contained">
              Создать аккаунт
            </Button>
          </Stack>
        </FormCard>
      </Stack>
    </CssVarsProvider>
  );
}
