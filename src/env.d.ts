/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLIZZARD_CLIENT_ID: string;
  readonly VITE_COGNITO_RAIDMATE_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
