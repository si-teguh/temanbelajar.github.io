<?php
session_start();

// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "db_user");

// Cek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Jika form dikirim
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Cek apakah email ada di database
    $query = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($koneksi, $query);

    if (mysqli_num_rows($result) === 1) {

        $user = mysqli_fetch_assoc($result);

        // Verifikasi password
        if (password_verify($password, $user['password'])) {

            // Buat session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['nama'] = $user['nama'];
            $_SESSION['email'] = $user['email'];

            // Redirect ke halaman home
            header("Location: home.php");
            exit;
        } else {
            echo "<script>alert('Password salah!'); window.location='login.html';</script>";
        }

    } else {
        echo "<script>alert('Email tidak ditemukan!'); window.location='login.html';</script>";
    }
}
?>
