import LayoutContainer from "./layout/LayoutContainer";
import Navbar from "./layout/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "./store/Hooks";
import { lightTheme, darkTheme } from "./utils/Theme";
import { Box, Paper } from "@mui/material";

function App() {
  const { Theme } = useAppSelector((state) => state);
  return (
    <>
      <ThemeProvider theme={Theme.darkTheme ? darkTheme : lightTheme}>
        <Box
          sx={{
            backgroundColor: "background.default",
            height: "100vh",
            width: "100%",
          }}
        >
          <Navbar />
          <LayoutContainer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
