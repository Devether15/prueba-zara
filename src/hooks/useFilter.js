const useFilter = (feed, searchTerm) => {

    const filteredEntries = feed && feed.entry.filter((val) => {
        if(searchTerm === ""){
            return val;
        }else if (val['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }else if (val['im:artist'].label.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
    })

    return filteredEntries;
}

export default useFilter