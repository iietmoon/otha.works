interface Item {
    [key: string]: string | string[];
}

interface Filter {
    filter: string;
    value: string;
}

const db = {
    filter(array: Item[], filter: Filter): Item[] {
        return array.filter((item: Item) => {
            if (item[filter.filter]) {
                if (Array.isArray(item[filter.filter])) {
                    return (item[filter.filter] as string[]).includes(filter.value);
                } else {
                    return item[filter.filter] === filter.value;
                }
            }
            return false;
        });
    },
    find(array: Item[], slug: string): Item | undefined {
        const foundItem = array.find((item: Item) => item.slug === slug);
        return foundItem;
    }
};

export default db;
