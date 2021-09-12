const storeSelector = (state) => {
    return state.store.stores
};
const loadingSelector = (state) => {
    return state.store.loading
}

const errorSelector = (state) => {
    return state.store.error
}

export {
    storeSelector,
    loadingSelector,
    errorSelector
}