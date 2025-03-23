import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={basename}>
          <Suspense fallback={<p>Loading...</p>}>
            <>
              <Routes>
                <Route path="/*" element={<Home />} />
                {import.meta.env.VITE_TEMPO === "true" && (
                  <Route path="/tempobook/*" />
                )}
                {import.meta.env.VITE_TEMPO === "true" &&
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
              </Routes>
            </>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
