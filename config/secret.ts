import * as SecureStore from 'expo-secure-store';

// Save credentials securely
export const saveCredential = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

// Retrieve stored credentials
export const getCredential = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

// Initialize credentials (run this once during app setup or initialization)
export const initMoMoCredentials = async () => {
  await saveCredential('consumerKey', '2OBnXaw9BAj8KfREjtMCFRrrTGmHfTck');
  await saveCredential('consumerSecret', 'RPzfi43JNSQMnxFv');
};
