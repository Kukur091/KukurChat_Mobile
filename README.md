# KukurChat Mobile

## 📱 Description

KukurChat Mobile est une application de messagerie privée développée avec **Expo** et **React Native** en TypeScript. Cette application simule un mini réseau social privé spécialisé dans les messages privés, offrant une expérience de messages privés dans un format simplifié.

## ✨ Fonctionnalités

- 💬 **Messagerie instantanée** : Envoi et réception de messages en temps réel
- 🔐 **Messages privés** : Communications sécurisées entre utilisateurs
- 👥 **Interface simplifiée** : Design épuré et intuitif
- 📱 **Multi-plateforme** : Compatible iOS et Android
- ⚡ **Performance optimisée** : Développé avec TypeScript pour une meilleure robustesse

## 🛠️ Technologies utilisées

- **Expo** - Plateforme de développement React Native
- **React Native** - Framework de développement mobile
- **TypeScript** - Langage de programmation typé
- **React Navigation** - Navigation entre écrans
- **Ionicons** - Bibliothèque d'icônes

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Expo CLI
  ```bash
  npm install -g @expo/cli
  ```
- Expo Go sur votre téléphone (pour les tests sur appareil physique)

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Kukur091/KukurChat_Mobile.git
   cd KukurChat_Mobile
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

## 📱 Lancement de l'application

### Démarrer le serveur de développement
```bash
npx expo start
# ou
yarn expo start
```

### Options de lancement
- **Expo Go** : Scannez le QR code avec l'app Expo Go sur votre téléphone
- **Simulateur iOS** : Appuyez sur `i` dans le terminal
- **Émulateur Android** : Appuyez sur `a` dans le terminal
- **Web** : Appuyez sur `w` dans le terminal

## 🎯 Fonctionnalités principales

### Messagerie
- Envoi de messages texte
- Historique des conversations
- Interface de chat intuitive

### Interface utilisateur
- Design moderne et épuré
- Navigation fluide entre les écrans
- Thème cohérent inspiré des applications de messagerie populaires

### Gestion des utilisateurs
- Profils utilisateurs simplifiés
- Liste de contacts
- Statut en ligne/hors ligne

## 🔧 Configuration

### Configuration du Backend
L'application nécessite un serveur backend pour fonctionner. Pour le démarrer :

1. **Naviguer vers le dossier backend**
   ```bash
   cd BackEnd
   ```

2. **Installer les dépendances du backend**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env` dans le dossier `BackEnd` avec :
   ```env
   DB_HOST=localhost
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_NAME=kukurchat_db
   SESSION_SECRET=your_super_secret_session_key
   PORT=3000
   ```

4. **Démarrer le serveur backend**
   ```bash
   npm start
   ```

### Configuration de l'API côté mobile
L'application se connecte au backend via l'URL configurée dans le code. Assurez-vous que l'URL correspond à votre serveur backend (par défaut: `http://localhost:3000`).

## 🧪 Tests

Lancer les tests :
```bash
npm test
# ou
yarn test
```

## 📦 Build de production

### EAS Build (recommandé)
```bash
# Installer EAS CLI
npm install -g @expo/eas-cli

# Configurer EAS
eas build:configure

# Build Android
eas build --platform android

# Build iOS
eas build --platform ios
```

### Build local (après eject)
Si vous avez éjecté de Expo :

#### Android
```bash
cd android
./gradlew assembleRelease
```

#### iOS
Utilisez Xcode pour créer un build de production :
1. Ouvrir `ios/KukurChat_Mobile.xcworkspace` dans Xcode
2. Sélectionner "Generic iOS Device"
3. Product → Archive

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Kukur091**
- GitHub: [@Kukur091](https://github.com/Kukur091)

## 🐛 Signaler un bug

Si vous trouvez un bug, veuillez ouvrir une [issue](https://github.com/Kukur091/KukurChat_Mobile/issues) avec :
- Une description détaillée du problème
- Les étapes pour reproduire le bug
- Votre environnement (OS, version de Node.js, etc.)

## 📞 Support

Pour toute question ou support, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Consulter la documentation React Native
- Vérifier les discussions existantes

⭐ N'oubliez pas de donner une étoile au projet si vous l'appréciez !
