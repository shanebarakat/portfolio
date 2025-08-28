import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Intouch from './Intouch';
import PillThought from './PillThought';
import Palkia from './Palkia';

/**
 * Definition for a single route used by the application's router.
 */
type RouteDefinition = {
  path: string;
  element: JSX.Element;
};

/**
 * Validate that a required imported route component is present.
 * Throws a descriptive error to aid debugging if a required component is missing.
 *
 * @param componentName - The name of the component being validated.
 * @param componentValue - The imported component value to validate.
 */
function validateImportedComponent(componentName: string, componentValue: unknown): void {
  if (componentValue === null || componentValue === undefined) {
    throw new Error(`Routing initialization failed: required component "${componentName}" is undefined or null.`);
  }
}

/**
 * Build the list of route definitions for the application.
 * Extracted from the component to allow unit testing of route initialization logic.
 *
 * @returns An array of RouteDefinition objects that describe app routes.
 */
function buildRouteDefinitions(): RouteDefinition[] {
  // Defensive checks: ensure imported components are present before usage.
  validateImportedComponent('Home', Home);
  validateImportedComponent('Intouch', Intouch);
  validateImportedComponent('PillThought', PillThought);
  validateImportedComponent('Palkia', Palkia);

  // Return route definitions in the same order and with the same paths/elements
  // as the original implementation to preserve runtime behavior.
  return [
    { path: '', element: <Home /> },
    { path: '/intouchcx', element: <Intouch /> },
    { path: '/pillthought', element: <PillThought /> },
    { path: '/palkia', element: <Palkia /> },
  ];
}

/**
 * Render Routes from a set of RouteDefinition objects.
 * Extracted to separate concerns and make mapping logic unit-testable.
 *
 * @param routeDefinitions - Array of route definitions to render.
 * @returns A JSX.Element containing the Routes for the Router.
 */
function renderRoutesFromDefinitions(routeDefinitions: RouteDefinition[]): JSX.Element {
  return (
    <Routes>
      {routeDefinitions.map((routeDefinition) => (
        <Route
          key={routeDefinition.path}
          path={routeDefinition.path}
          element={routeDefinition.element}
        />
      ))}
    </Routes>
  );
}

/**
 * App - root application component that sets up client-side routing.
 *
 * This component is intentionally small: it orchestrates router initialization
 * and delegates route rendering to helper functions so the initialization logic
 * can be unit tested independently.
 *
 * The runtime behavior is preserved exactly: the same paths and components are used.
 *
 * @returns The Router-wrapped application routes as a React functional component.
 */
const App: React.FC = () => {
  // Initialize route definitions with defensive checks in a separate function
  // so any initialization errors are thrown with clear messages.
  const routeDefinitions = buildRouteDefinitions();

  // Render the BrowserRouter and its Routes.
  return (
    <Router>
      {renderRoutesFromDefinitions(routeDefinitions)}
    </Router>
  );
};

export default App;