/**
 * Returns true if app is in production or false if in development.
 */
export const __prod__: boolean = process.env.NODE_ENV === 'production';

/**
 * Returns the port used on production
 */
export const __port__ = process.env.PORT;
