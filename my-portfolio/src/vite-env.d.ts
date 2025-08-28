/**
 * Ambient type declarations for Vite's client environment.
 *
 * Purpose:
 * - Provide minimal, human-friendly documentation for the ambient declarations in this file.
 * - Supply typed ambient interfaces for Vite's import.meta.env so editors and type-checkers
 *   can offer better autocomplete and diagnostics.
 *
 * Notes:
 * - Keep this file minimal. Add project-specific VITE_* keys to ImportMetaEnv as needed.
 * - Properties are optional because certain env values may be absent in some environments.
 */

/// <reference types="vite/client" />

/**
 * Environment variables exposed by Vite via import.meta.env.
 *
 * Add project-specific readonly properties (typically VITE_ prefixed) here so they are
 * strongly typed throughout the codebase. Properties are optional to reflect that a given
 * variable may be undefined in some environments (for example, during tests).
 */
interface ImportMetaEnv {
  /**
   * Example: base URL for API requests. Replace or extend with actual VITE_* keys used by the app.
   */
  readonly VITE_API_BASE_URL?: string;

  /**
   * Example feature flag stored as string values 'true'|'false'.
   * Prefer boolean semantics in your application code by normalizing this value at runtime.
   */
  readonly VITE_ENABLE_FEATURE_X?: 'true' | 'false';

  /**
   * Catch-all for other VITE_* keys. Keys will map to string values or undefined.
   * This preserves the common Vite behavior that env values are strings when present.
   */
  readonly [key: `VITE_${string}`]: string | undefined;
}

/**
 * Extends the global ImportMeta to include the typed env object from Vite.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}