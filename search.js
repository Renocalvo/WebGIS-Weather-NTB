document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    let searchInput = document.getElementById('searchInput').value;
    getDataAndSearch(searchInput); // Memanggil fungsi search dengan input dari pengguna
});
