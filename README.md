# Student Success Predictor - Frontend

Interface web moderne pour prédire la réussite académique des étudiants à l'aide d'un modèle de Machine Learning.

## 🚀 Fonctionnalités

- ✨ Interface utilisateur moderne avec Tailwind CSS et shadcn/ui
- 🎨 Mode Dark/Light avec basculement automatique
- 🌍 Support multilingue (Français, Anglais, Arabe avec RTL)
- 📱 Design responsive (mobile et desktop)
- 🎭 Animations fluides avec Framer Motion
- ⚡ Particules animées en arrière-plan
- 📊 Affichage des résultats avec probabilités
- 🔔 Notifications toast pour les erreurs et succès

## 🛠️ Stack Technique

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Particles**: tsparticles
- **i18n**: react-i18next
- **HTTP Client**: Axios
- **Icons**: Lucide React

## 📋 Prérequis

- Node.js >= 18.x
- npm ou yarn

## 🔧 Installation

1. **Naviguer vers le dossier frontend**
   ```bash
   cd front
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   ```
   
   Modifier `.env` si nécessaire pour pointer vers votre backend:
   ```env
   VITE_API_BASE_URL=http://127.0.0.1:8000
   ```

## 🚀 Développement

**Lancer le serveur de développement**
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## 🏗️ Build pour Production

**Compiler le projet**
```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`

**Prévisualiser le build de production**
```bash
npm run preview
```

## 📁 Structure du Projet

```
front/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── ui/          # Composants shadcn/ui
│   │   ├── layout/      # Composants de layout (Header, AppShell)
│   │   ├── forms/       # Formulaires (StudentForm)
│   │   ├── results/     # Affichage résultats (ResultCard)
│   │   └── background/  # Arrière-plan animé (Particles)
│   ├── hooks/           # Hooks personnalisés (useTheme, useLocale)
│   ├── lib/             # Utilitaires (API client, i18n, utils)
│   ├── locales/         # Fichiers de traduction (fr, en, ar)
│   ├── styles/          # Styles globaux
│   ├── types/           # Types TypeScript
│   ├── App.tsx          # Composant principal
│   └── main.tsx         # Point d'entrée
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🌐 Langues Supportées

- **Français** (fr) - Par défaut
- **English** (en)
- **العربية** (ar) - Avec support RTL automatique

Le changement de langue se fait via le sélecteur dans l'en-tête.

## 🎨 Thèmes

- **Light Mode**: Fond clair avec texte sombre
- **Dark Mode**: Fond sombre avec texte clair
- **System**: Suit les préférences système

Le basculement se fait via l'icône soleil/lune dans l'en-tête.

## 🔌 API Backend

Le frontend communique avec le backend FastAPI via:

**Endpoint**: `POST /predict`

**Payload**:
```json
{
  "data": {
    "school": "GP",
    "sex": "F",
    "age": 17,
    ...
  }
}
```

**Réponse**:
```json
{
  "passed": 1,
  "proba_passed": 0.87
}
```

Assurez-vous que le backend est démarré avant d'utiliser l'application.

## 🐛 Débogage

Si vous rencontrez des problèmes:

1. **Vérifier que le backend est démarré**
   ```bash
   # Dans le dossier racine
   uvicorn app:app --reload
   ```

2. **Vérifier les CORS**
   Le backend doit autoriser les requêtes depuis `http://localhost:5173`

3. **Vérifier les dépendances**
   ```bash
   npm install
   ```

4. **Nettoyer le cache**
   ```bash
   rm -rf node_modules dist
   npm install
   ```

## 📝 License

MIT

## 👥 Auteurs

Projet ML - M1 2025-2026
# Predict_student-s_academic_frontend
