/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    API_URL: string;
  }
}