export const filter_array = (inputSearch, array) => {
    return !inputSearch ? array : array.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()));
}