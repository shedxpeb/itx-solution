export interface AppConfig {
  port: number;
  databaseUrl: string;
  nodeEnv: string;
}

export function validateConfig(): AppConfig {
  const port = process.env.API_PORT || process.env.PORT || '4000';
  const databaseUrl = process.env.DATABASE_URL;
  const nodeEnv = process.env.NODE_ENV || 'development';

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required');
  }

  if (nodeEnv === 'production' && !process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set in production');
  }

  return {
    port: parseInt(port, 10),
    databaseUrl,
    nodeEnv,
  };
}
