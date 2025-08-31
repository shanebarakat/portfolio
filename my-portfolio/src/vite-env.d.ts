/**
 * Ambient declarations entry for the Vite client and project-wide globals.
 *
 * Purpose:
 * This file provides ambient type information to the TypeScript compiler for
 * the Vite runtime and any project-level global types. The triple-slash
 * directive below ensures Vite's client types (e.g. import.meta) are available
 * throughout the project without importing them in each module.
 *
 * Guidelines for adding custom global types:
 * - Place additional ambient declarations in this file only when they must be
 *   available globally (avoid polluting the global scope unnecessarily).
 * - Document each custom type inline using a concise JSDoc comment that
 *   explains its purpose, primary properties, and intended usage.
 * - Follow the project's naming conventions for types:
 *     - Use PascalCase for type and interface names (e.g. MyAppConfig).
 *     - Prefix boolean or flag-like types with Is/Has only when it adds
 *       clarity (e.g. IsFeatureEnabled).
 *     - Keep names descriptive and searchable.
 * - Keep declarations minimal and non-breaking: adding optional properties is
 *   preferred over changing existing required shapes.
 *
 * Example (if you add a global type):
 * /**
 *  * Represents the application configuration available at runtime.
 *  * @property apiBaseUrl - Base URL for API requests.
 *  * @property enableTelemetry - Optional flag to enable telemetry.
 *  *\/
 * declare global {
 *   interface AppConfig {
 *     apiBaseUrl: string;
 *     enableTelemetry?: boolean;
 *   }
 * }
 *
 * Current status:
 * This file currently only references Vite client types and does not declare
 * any custom global types. If/when global types are added, follow the above
 * guidelines to keep changes readable and non-breaking.
 */

/// <reference types="vite/client" />