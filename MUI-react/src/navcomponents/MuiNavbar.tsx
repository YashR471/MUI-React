import { AppBar,Toolbar, IconButton,Typography,Stack, Button } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MuiNavbar() {
  return (
    <>
    <AppBar position="static" color="success" sx={{my:0}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow:1}}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Help</Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default MuiNavbar
