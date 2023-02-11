// тут мы получаем количество страниц в зависимости от общего количества постов и их максимального количества на странице
export const getPageCount = (totalCount: number, limit: number): number => {
	// вернём число страниц, округлённое в большую сторону
	return Math.ceil(totalCount / limit);
};

// тут мы создадим массив страниц, которые будут выводить посты
export const getPagesArray = (totalPages: number) => {
	let result: number[] = [];
	for (let i = 0; i < totalPages; i++) {
		result.push(i + 1);
	}
	return result;
};
