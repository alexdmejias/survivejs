export default {
  get(k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (err) {
      return null;
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}