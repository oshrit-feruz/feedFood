export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DATABASE_URL_2: string;
    }
  }
}
