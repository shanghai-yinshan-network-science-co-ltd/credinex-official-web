import styles from './index.scss';
import { useState } from 'react';

import icon1 from '../../assets/icon-contact1.png';
import icon2 from '../../assets/icon-contact2.png';
import icon3 from '../../assets/icon-contact3.png';
import icon4 from '../../assets/icon-contact4.png';
import icon5 from '../../assets/icon-contact5.png';
import icon6 from '../../assets/icon-contact6.png';
import icon7 from '../../assets/icon-contact7.png';

export default function (props) {
  const contacts = [
    { name: <h6>About<br />CrediNex</h6>, icon: icon1, to: 'contact1' },
    { name: <h6>CrediNex <br />Account</h6>, icon: icon2, to: 'contact3' },
    { name: <h6>Repayment<br />method</h6>, icon: icon3, to: 'contact5' },
    { name: <h6>Sign Up<br />& Activation</h6>, icon: icon4, to: 'contact2' },
    { name: <h6>Using Your<br />CrediNex<br />card</h6>, icon: icon5, to: 'contact4' },
    { name: <h6>Fees<br />& Charges</h6>, icon: icon6, to: 'contact6' },
    { name: <h6>Contact<br />Us</h6>, icon: icon7, to: 'contact7' },
    { name: <h6>Pengaduan <br />Pelanggan</h6>, icon: icon1, to: 'contact8' },
  ];
  const [active, setActive] = useState(0);

  function scrollToAnchor(index, id) {
    let anchorElement = document.getElementById(id);
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      setActive(index);
    }
  }
  return (
    <div className={styles.contactus}>
      <div className={styles.banner}>
        <ul>
          {contacts.map((item, index) => (
            index < 4 && <li key={index} onClick={() => scrollToAnchor(index, item.to)} className={active === index ? styles.active : ''}>
              <div>{item.name}</div>
              <img src={item.icon} alt="" width="56" />
            </li>
          ))}
        </ul>
        <ul>
          {contacts.map((item, index) => (
            index >= 4 && <li key={index} onClick={() => scrollToAnchor(index, item.to)} className={active === index ? styles.active : ''}>
              <div>{item.name}</div>
              <img src={item.icon} alt="" width="56" />
            </li>
          ))}
        </ul>
        <div className={styles.msg}>
          <h5 id="contact1">1.About CrediNex</h5>
          <p>Credinex adalah platform finansial teknologi berbasis seluler yang mencipatkan kembali pemberian kredit pada generasi selanjutnya. Kami menawarkan kartu virtual yang didukung oleh sistem eco bank mitra kami dan juga mekanisme kredit kami.Kami akan memeberikan Anda Kartu fisik Bank yang akan diisi ulang setelah kredit limit dialokasikan oleh credinex dan Anda dapat menggesek dan melakukan pembayaran menggukanan kartu kami dimana saja diseluruh dunia. </p>
          <p>Dengan menggunakan Credinex, Anda tidak perlu mengkhawatirkan persyaratan perbankan tradisional untuk pengajuan kartu kredit melalui proses yang rumit. Kami telah membuatnya lebih mudah dengan hanya mengajukan pinjaman melalui aplikasi kami. Anda bisa mendaftarkan akun Credinex Anda cukup dengan tiga langkah sederhana dan Anda akan mendapakatkan kartu mastercard Anda dengan mudah, satu-satunya  persyaratan yang dibutuhkan hanya KTP yang valid dan Anda siap merasakan perjalanan pelanggan dengan kami yang menakjubkan di Credinex. </p>
          <h5 id="contact2">2.Sign Up and Activation</h5>
          <p>Proses pendaftaran sangatlah mudah, hanya dengan dokumen KTP terbaru dan menjawab beberapa pertanyaan terkait data diri, pekerjaan dan kontak maka kalian sudah dapat memiliki kartu Credinex beserta PIN transaksi yang akan kami kirimkan langsung ke alamat kalian dalam 3 hari (maksimal).</p>
          <p>Untuk melakukan aktivasi kartu pun sama mudahnya, kalian tidak perlu menelepon ataupun mengirimkan SMS, cukup dengan mengisi 4 (empat) digit terakhir dari kartu Credinex yang kalian terima di App Credinex maka kartu sudah aktif dan bisa digunakan di merchant/toko favorit kalian yang memiliki logo GPN dan MasterCard.</p>
          <h5 id="contact3">3.Managing Your CrediNex account</h5>
          <p>Takut tagihan mendadak muncul padahal kalian tidak melalukan pembelanjaan? Jangan khawatir karena kalian bisa monitor semua transaksi yang kalian lakukan melalui Aplikasi Credinex. Setiap transaksi akan langsung terlihat di aplikasi begitu kalian menyelesaikan transaksi kalian!</p>
          <p>Dikarenakan perhitungan bunga belanja dihitung per hari sejak kalian melakukan pembelanjaan maka kalian juga bisa melihat detail nominal tagihan beserta bunga yang harus dibayar pada aplikasi. Dengan demikian akan lebih mudah bagi kalian untuk mengatur keuangan kalian sesuai dengan dana yang kalian miliki.</p>
          <h5 id="contact4">4.Using Your CrediNex card</h5>
          <p>Cara pemakaian kartu Credinex sangatlah mudah, untuk setiap pembelanjaan di merchant/toko yang memiliki logo GPN dan MasterCard maka setelah kasir menginformasikan jumlah nominal yang harus dibayarkan maka cukup berikan kartu kalian ke kasir untuk digesek di mesin EDC dan kemudian tekan PIN transaksi kalian maka proses transaksi sudah selesai. Pastikan dana kredit kalian cukup sebelum melakukan pembayaran untuk menghindari gagal transaksi!</p>
          <h5 id="contact5">5.Repayment Method</h5>
          <p>Untuk proses pembayaran tagihan kartu Credinex dapat dilakukan melalui Mobile Banking, Internet Banking atau ATM bank manapun. Hanya dengan memilih transfer ke bank BNI dan mengisi nomor Virtual Account yang kami berikan beserta nominal yang hendak dibayar maka tagihan Anda otomatis akan terbayar!</p>
          <p>Tagihan akan kami kirimkan melalui aplikasi pada tanggal 8 (delapan) di setiap bulannya, namun kalian dapat melakukan pembayaran kapanpun bahkan sebelum tagihan kami kirimkan sesuai dengan nominal yang muncul di aplikasi. Untuk diperhatikan apabila tagihan bulan berjalan tidak dibayar sampai tanggal 18 (delapan belas) pada bulan yang sama maka akan mulai kami kenakan denda pinalti keterlambatan dan apabila masih belum dibayarkan sampai dengan tanggal 18 (delapan belas) bulan berikutnya maka akun dan kartu kalian akan kami bekukan. Untuk mengaktifkan kembali akun dan kartu kalian maka kalian cukup melunasi tagihan pada bulan sebelumnya.</p>
          <h5 id="contact6">6.Fees/Charges</h5>
          <p>Bunga harian : 0,3% per hari<br />Biaya kartu : IDR 25,000 (muncul di tagihan bulan pertama)<br />Biaya tahunan : IDR 180,000 (muncul di tagihan bulan pertama)<br />Bunga keterlambatan : 0,4% per hari<br />Biaya denda keterlambatan : 2% dikali outstanding (minimal IDR 20,000)</p>
          <h5 id="contact7">7.Contact details </h5>
          <p>BD@Credinex.id   CS@Credinex.id<br />Customer care Number - 021 39506666</p>
          <h5 id="contact8">8.Pengaduan Layanan Pengguna Credinex </h5>
          <p>PENGADUAN LAYANAN PENGGUNA CREDINEX

            Layanan Pengaduan CrediNex ini dibentuk dan disusun berdasarkan Peraturan Otoritas Jasa Keuangan No.18/POJK.07/2018 tentang Layanan Pengaduan Konsumen di Sektor Jasa Keuangan dan Surat Edaran Otoritas Jasa Keuangan No. 2/SEOJK.07/2014 tentang Pelayanan dan Penyelesaian Pengaduan Konsumen pada Pelaku Usaha Jasa Keuangan.
            <br/>
            <br/>
            CrediNex berkomitmen untuk menjalin hubungan baik dengan Pengguna layanan Kami dan juga memberikan layanan pengaduan terbaik dengan menerapkan prinsip transparansi dan terbuka dalam memberikan informasi kepada Konsumen.
            <br/>
            <br/>
            <h6>1. Penerima Pengaduan</h6>
            <br/>
            Setiap Konsumen CrediNex dapat menyampaikan pengaduan melalui beberapa sarana yang telah kami sediakan baik secara lisan seperti telepon ke hotline kami di (021) – 39506666 atau mendatangi langsung kantor operasional CrediNex yang tertera pada halaman Website. Selain itu pengguna CrediNex juga dapat menyampaikan pengaduannya secara lisan melalui Live Chat Aplikasi, E-mail ke csofficial@credinex.id, maupun social media Kami yaitu Facebook: CrediNex, Instagram: CrediNex.Id, Twitter: @CrediNex
            <br/>
            <br/>
            <h6>2. Penanganan Pengaduan</h6>
            <br/>
            Setelah pengaduan Konsumen Kami terima, tim Customer Service Kami akan memberikan respon dan nomor laporan aduan (jika melibatkan divisi internal lainnya) yaitu:

            <br/>
            <br/>
            Hari Kerja : Senin s/d Jum’at pukul 08.00 WIB hingga 20.00 WIB
            <br/>
            Hari Libur : Sabtu dan Minggu pukul 08.00 WIB hingga 17.00 WIB
            <br/>
            <br/>

            Tim Customer Service Kami akan memberikan respon selambat-lambatnya 5 (lima) Hari Kerja setelah aduan diterima.
            <br/>
            <br/>

            <h6> 3. Penyelesaian Pengaduan</h6>
            <br/>

            Tim Customer Service CrediNex dapat secara langsung melakukan penyelesaian terhadap aduan Konsumen apabila data dan informasi yang diterima telah akurat dan benar. Terhadap aduan tersebut dapat diberikan solusi secara langsung tanpa melibatkan divisi internal lainnya sejak pengaduan diterima. Jika pengaduan melibatkan divisi internal lainnya atau pihak ketiga, CrediNex membutuhkan waktu penyelesaian pengaduan Konsumen selambat-lambatnya dalam jangka waktu 20 (dua puluh) Hari Kerja atau lebih tergantung pada tingkat kompleksitas pengaduan Konsumen.
            <br/>
            <br/>

            <h6>4. Pelaporan Pengaduan ke OJK</h6>
            <br/>

            CrediNex secara berkala melakukan Pelaporan Pengaduan Konsumen ke Otoritas Jasa Keuangan sebagai bentuk pertanggungjawaban penyedia layanan pengaduan konsumen disertai dengan status pengaduan, jenis pengaduan dan penyebab pengaduan untuk periode bulanan dan triwulan yang formatnya sudah ditentukan oleh Otoritas Jasa Keuangan.</p>
        </div>
      </div>
    </div>
  );
}

