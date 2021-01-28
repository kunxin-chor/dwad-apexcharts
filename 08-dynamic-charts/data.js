async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json');
    return response.data;
}