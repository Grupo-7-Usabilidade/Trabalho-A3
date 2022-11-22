export const filter_array = (inputSearch, array) => {
    return !inputSearch ? array : array.filter(e => e.name.toLowerCase().includes(inputSearch.toLowerCase()));
}