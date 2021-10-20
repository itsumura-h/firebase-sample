## 環境構築
```
nodenv install 14.17.6
nodenv local 14.17.6
npm install -g yarn
yarn add global firebase-tools
```

## Emulator
### 構築
```
firebase logout
firebase login
firebase init emulators
# auth, functions, firestore, hostingを選択
```
### 開発
```
firebase emulators:start
```

## hosting
### 構築
```
yarn global add create-react-app
mkdir hosting
cd hosting
create-react-app . --template typescript
yarn add cross-env
cd ../
firebase init hosting
# public => ./hosting/build
```
package.jsonに追記
```
"scripts": {
  "start": "cross-env NODE_ENV=development react-scripts start",
  "build": "cross-env NODE_ENV=production react-scripts build",
},
```

### 開発
```
yarn start
```
http://localhost:3000

### 本番
https://{project}.web.app  
https://medy-firebase-sample.web.app

## functions
### 構築
```
mkdir functions
cd functions
yarn init
yarn add firebase-functions@latest firebase-admin@latest cross-env
firebase init functions
>> Do you want to install dependencies with npm now?でNoを選択
yarn install
```

package.jsonに追記
```
"scripts": {
  "dev": "cross-env NODE_ENV=development tsc",
  "build": "cross-env NODE_ENV=production tsc",
  "watch": "yarn build --watch",
},
```

### 開発
```
yarn watch
```
http://localhost:5001/{project}/{region}  
http://localhost:5001/medy-firebase-sample/us-central1

ログはローカルエミュレーターから確認

### 本番
https://{region}-{project}.cloudfunctions.net  
https://us-central1-medy-firebase-sample.cloudfunctions.net
