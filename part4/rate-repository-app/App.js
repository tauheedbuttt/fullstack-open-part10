import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <>
      <PaperProvider>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
        <StatusBar style="auto" />
      </PaperProvider>
    </>
  );
};

export default App;
