async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json');
    return response.data;
}