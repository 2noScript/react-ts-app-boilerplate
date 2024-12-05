import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routers from "app/routers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";

import "styles/app.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
