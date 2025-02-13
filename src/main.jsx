// acorn-new/src/main.jsx
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';

// Redux & Persist
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store, persistedStore } from './store.jsx';

// React Helmet (for <head> management)
import { Helmet } from 'react-helmet';
import { REACT_HELMET_PROPS } from './config';

// Multi-language support
import LangProvider from './lang/LangProvider.jsx';

// Routing
import { BrowserRouter } from 'react-router-dom';
import RouteIdentifier from './routing/components/RouteIdentifier.jsx';
import Loading from './components/loading/Loading';
import { getLayoutlessRoutes } from './routing/helper';
import defaultRoutes from './routing/default-routes';
import routesAndMenuItems from './routes';

// Toast notifications
import { Slide, ToastContainer } from 'react-toastify';

// Mock API (if you want the fake data from Acorn)
import './mock-api/index.jsx';

// If you have global CSS or SCSS for Vite, you can import it here
import './index.css';

function Main() {
  // Merge "layoutless" routes with default routes
  const layoutlessRoutes = useMemo(
    () => getLayoutlessRoutes({ data: routesAndMenuItems }),
    []
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Helmet {...REACT_HELMET_PROPS} />
        <ToastContainer transition={Slide} newestOnTop />
        {/* If you need a basename, we can reintroduce that. For now, we omit it. */}
        <BrowserRouter>
          <LangProvider>
            <RouteIdentifier
              routes={[...layoutlessRoutes, ...defaultRoutes]}
              fallback={<Loading />}
            />
          </LangProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
