import users from './data.mjs';

const updateTable = () => {
    const tbody = document.getElementById("tabelPengguna");

    tbody.innerHTML = users.map(({ nama, umur, alamat, Email }, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${nama}</td>
            <td>${umur}</td>
            <td>${alamat}</td>
            <td>${Email}</td>
            <td><button class="btn btn-danger btn-sm hapus-btn" data-index="${index}">Hapus</button></td>
        </tr>
    `).join("");

    document.querySelectorAll(".hapus-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            destroy(parseInt(index));
        });
    });
};

const index = () => {
    console.log("Daftar pengguna:");
    users.forEach(({ nama, umur, alamat, Email }) => {
        console.log(`Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${Email}`);
    });
    updateTable();
};

const store = (newDataUser) => {
    users.push(newDataUser);
    console.log("Pengguna berhasil ditambahkan");
    updateTable(); 
};

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        console.log("Pengguna berhasil dihapus");
        updateTable(); 
    } else {
        console.log("Data tidak ditemukan");
    }
};

export { index, store, destroy, updateTable };
