const fs = require('fs');
const path = require('path');

const localesPath = path.resolve(__dirname, '../../../../public/locales');
const outputPath = path.resolve(__dirname, './model/types/translations.d.ts');
const keysOutputPath = path.resolve(__dirname, './model/types/Tkeys.ts');

const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const getDirectories = (source) =>
  fs
    .readdirSync(source)
    .map((name) => path.join(source, name))
    .filter(isDirectory);

const generateI18nTypes = () => {
  const localeDirs = getDirectories(localesPath);
  const localeFiles = localeDirs.reduce((acc, localeDir) => {
    const files = fs
      .readdirSync(localeDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => ({
        locale: path.basename(localeDir),
        namespace: path.basename(file, '.json'),
        path: path.join(localeDir, file),
      }));
    return acc.concat(files);
  }, []);

  const namespaces = {};
  const keys = {};
  localeFiles.forEach(({ path: filePath, namespace }) => {
    const translations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    namespaces[namespace] = namespaces[namespace] || {};
    keys[namespace] = keys[namespace] || {};

    Object.keys(translations).forEach((key) => {
      namespaces[namespace][key] = 'string';
      keys[namespace][key] = `${namespace}.${key}`;
    });
  });

  const typeDefinition = `declare module 'translations' {
    interface Translations {
      ${Object.entries(namespaces)
        .map(([namespace, keys]) => {
          return `${namespace}: {
            ${Object.entries(keys)
              .map(([key, type]) => `${key}: ${type};`)
              .join('\n')}
          };`;
        })
        .join('\n')}
    }
  }`;

  const keysDefinition = `export const Tkeys = {
    ${Object.entries(keys)
      .map(([namespace, keys]) => {
        return `${namespace}: {
          ${Object.entries(keys)
            .map(([key, value]) => `${key}: '${value}'`)
            .join(',\n')}
        }`;
      })
      .join(',\n')}
  }`;

  fs.writeFileSync(outputPath, typeDefinition);
  fs.writeFileSync(keysOutputPath, keysDefinition);
};

generateI18nTypes();
