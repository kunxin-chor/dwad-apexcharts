async function loadData() {
    const response = await axios.get('data.json');
    return response.data;
}