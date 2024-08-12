export function getTranslation(key, replacements = {}) {
    const language = window.localStorage.getItem('language') || 'english';
    const translations = window.translations || {};
    const currentTranslations = translations[language] || {};
    let translation = currentTranslations[key] || key;

    for (const placeholder in replacements) {
        const value = replacements[placeholder];
        const regex = new RegExp(`{${placeholder}}`, 'g');
        translation = translation.replace(regex, value);
    }
    return translation;
}
 