const orderString = (a,b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;
    if (titleA > titleB) {
        comparison = 1;
    } else if (titleA < titleB) {
        comparison = -1;
    }
    return comparison;
};

const formatDate = (value) => {
    const optionsFormat = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    const inputDate = new Date(value);
    const newDate = inputDate.toLocaleDateString("en-US", optionsFormat);
    return newDate;
}

export { orderString, formatDate }