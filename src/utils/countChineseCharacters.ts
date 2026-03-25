/**
 * 统计字符串中的中文字符数量
 * @param str 待统计的字符串
 * @returns 中文字符数量
 */
export function countChineseCharacters(str: string) {
	const pattern = /[\u4e00-\u9fa5]/g;
	const matches = str.match(pattern);
	return matches ? matches.length : 0;
}
