export default {
  '*': ['prettier . --write'],
  '*.{js,jsx}': ['prettier --list-different', 'eslint'],
};
