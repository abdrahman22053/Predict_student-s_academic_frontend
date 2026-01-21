/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    // Ajouter d'autres variables ici si nécessaire
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }