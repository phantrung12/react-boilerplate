const PREFIX = `local::`;

function set<T = object>(key: string, value: T): void {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error('store serialization failed');
  }
}

function get<T = object>(key: string): T | undefined {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (!serializedValue) {
      return;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

function removeItem(key: string) {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

function removeAllItem() {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.clear();
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}

export const ACCESS_TOKEN = 'access_token';
export const SOCKET_TOKEN = 'socket_token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_INFO = 'user_info';
export const USER_ROLE = 'user_role';
export const LANGUAGE = 'language';

export default {
  get,
  set,
  removeItem,
  removeAllItem,
  ACCESS_TOKEN,
  SOCKET_TOKEN,
  REFRESH_TOKEN,
  USER_INFO,
  USER_ROLE,
  LANGUAGE,
};
