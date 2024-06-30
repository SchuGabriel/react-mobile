Comandos necessários para o funcinamento:

npx expo start
y

npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-native-firebase/app @react-native-firebase/auth
npm install @react-native-async-storage/async-storage

npx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start

json-server --watch db.json --port 3000