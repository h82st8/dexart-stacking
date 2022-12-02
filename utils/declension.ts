/**
 * Склонение существительных
 * Правильная форма cуществительного рядом с числом (счетная форма).
 *
 * @example declension("файл", "файлов", "файла", 0);//returns "файлов"
 * @example declension("файл", "файлов", "файла", 1);//returns "файл"
 * @example declension("файл", "файлов", "файла", 2);//returns "файла"
 *
 * @param {string} oneNominative единственное число (именительный падеж)
 * @param {string} severalGenitive множественное число (родительный падеж)
 * @param {string} severalNominative множественное число (именительный падеж)
 * @param {(string|number)} number количество
 * @returns {string}
 */
export default (oneNominative: string, severalGenitive: string, severalNominative: string, number: number) => {
  let part = number % 100;

  if (part <= 14 && part >= 11) {
    return severalGenitive;
  }

  const lessFive = (part %= 10) < 5;

  if (lessFive && part > 2) {
    return severalNominative;
  }

  if (lessFive && part === 1) {
    return oneNominative;
  }

  if (lessFive) {
    return part === 0 ? severalGenitive : severalNominative;
  }

  return severalGenitive;
};
