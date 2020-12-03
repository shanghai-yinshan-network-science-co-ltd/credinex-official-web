import styles from './index.scss';
import { useState } from 'react';

import icon1 from '../../assets/icon-contact1.png';
import icon2 from '../../assets/icon-contact2.png';
import icon3 from '../../assets/icon-contact3.png';
import icon4 from '../../assets/icon-contact4.png';
import icon5 from '../../assets/icon-contact5.png';
import icon6 from '../../assets/icon-contact6.png';
import icon7 from '../../assets/icon-contact7.png';
import icon8 from '../../assets/icon-contact8.png';

export default function(props) {
  const contacts = [
    {
      name: (
        <h6>
          Tentang
          <br />
          CrediNex
        </h6>
      ),
      icon: icon1,
      to: 'contact1',
    },
    {
      name: (
        <h6>
          Pengaturan <br />
          Akun CrediNex
        </h6>
      ),
      icon: icon2,
      to: 'contact3',
    },
    {
      name: (
        <h6>
          Tata Cara
          <br />
          Pembayaran
        </h6>
      ),
      icon: icon3,
      to: 'contact5',
    },
    {
      name: (
        <h6>
          Peringatan
          <br />
          Risiko
        </h6>
      ),
      icon: icon7,
      to: 'contact7',
    },
    {
      name: (
        <h6>
          Pendaftaran
          <br />
          dan Aktivasi
        </h6>
      ),
      icon: icon4,
      to: 'contact2',
    },
    {
      name: (
        <h6>
          Penggunaan
          <br />
          Kartu CrediNex
        </h6>
      ),
      icon: icon5,
      to: 'contact4',
    },
    { name: <h6>Biaya-biaya</h6>, icon: icon6, to: 'contact6' },
    {
      name: (
        <h6>
          Informasi
          <br />
          Kontak
        </h6>
      ),
      icon: icon8,
      to: 'contact8',
    },
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
          {contacts.map(
            (item, index) =>
              index < 4 && (
                <li
                  key={index}
                  onClick={() => scrollToAnchor(index, item.to)}
                  className={active === index ? styles.active : ''}
                >
                  <div>{item.name}</div>
                  <img src={item.icon} alt="" width="56" />
                </li>
              ),
          )}
        </ul>
        <ul>
          {contacts.map(
            (item, index) =>
              index >= 4 && (
                <li
                  key={index}
                  onClick={() => scrollToAnchor(index, item.to)}
                  className={active === index ? styles.active : ''}
                >
                  <div>{item.name}</div>
                  <img src={item.icon} alt="" width="56" />
                </li>
              ),
          )}
        </ul>
        <div className={styles.msg}>
          <h5 id="contact1">1.Tentang CrediNex</h5>
          <p>
            CrediNex adalah platform/aplikasi teknologi keuangan digital berjenis Peer-to-Peer (P2P)
            Lending yang menggunakan kartu sebagai media penyaluran pinjaman. Anda akan mendapat
            kartu fisik CrediNex yang telah diisi dengan limit pinjaman yang Anda dapatkan. Kartu
            CrediNex Anda dapat digunakan pada toko atau merchant dengan logo MasterCard atau GPN..
            Kami telah menyederhanakan seluruh proses mengakses kartu dengan mengintegrasikan Bank
            dengan teknologi keuangan Kami. CrediNex secara resmi telah terdaftar dan diawasi oleh
            Otoritas Jasa Keuangan (“OJK”).
          </p>
          <p>
            Dengan CrediNex, Anda tidak perlu lagi khawatir dengan persyaratan dan prosedur
            perbankan tradisional yang rumit. Kami telah membuatnya lebih mudah dengan hanya
            mengajukan pinjaman melalui aplikasi Kami. Cukup dengan tiga langkah sederhana dan KTP,
            setelah mendapatkan persetujuan dari analis pinjaman kami, maka Anda dapat sepenuhnya
            menikmati fitur & kemudahan CrediNex. Melalui aplikasi CrediNex di telepon genggam, Anda
            dapat selalu memonitor transaksi dan biaya-biaya lain yang ada. Sangat transparan,
            detil, dan aman bagi Pengguna.
          </p>
          <p>
            Pembayaran tagihan pun sangat mudah. Anda dapat memilih tanggal cetak tagihan sesuai
            dengan keinginan Anda, kemudian Anda diberikan waktu selama 3 hari untuk membayar
            tagihan CrediNex tanpa bunga berjalan lho! Juga Anda dapat melakukan pembayaran melalui
            Mobile Banking, Internet Banking, atau ATM bank mana saja. Cukup dengan melakukan
            transfer ke nomor akun virtual CrediNex yang diberikan oleh sistem, masukkan nominal
            pembayaran, dan selesai! Mudah kan?
          </p>
          <h5 id="contact2">2.Pendaftaran dan Aktivasi</h5>
          <p>
            Proses pendaftaran sangatlah mudah, hanya dengan KTP yang masih berlaku, NPWP, Slip Gaji
            dan menjawab beberapa pertanyaan terkait data diri, pekerjaan dan kontak maka kalian
            sudah dapat memiliki kartu CrediNex beserta PIN transaksi yang akan kami kirimkan
            langsung ke alamat kalian dalam waktu maksimal 3 (tiga) hari.
          </p>
          <p>
            Untuk melakukan aktivasi kartu pun sama mudahnya, kalian tidak perlu menelepon ataupun
            mengirimkan SMS, cukup dengan mengisi 4 (empat) digit terakhir dari kartu CrediNex yang
            kalian terima di aplikasi CrediNex maka Kartu sudah aktif dan bisa digunakan di
            merchant/toko favorit kalian yang memiliki logo GPN dan MasterCard.
          </p>
          <h5 id="contact3">3.Pengaturan Akun CrediNex</h5>
          <p>
            Takut tagihan mendadak muncul padahal kalian tidak melakukan pembelanjaan? Jangan
            khawatir karena kalian bisa me-monitor semua transaksi yang kalian lakukan melalui
            Aplikasi CrediNex. Setiap transaksi akan langsung terlihat di aplikasi begitu kalian
            menyelesaikan transaksi kalian!
          </p>
          <p>
            Sejak kalian melakukan pembelanjaan, maka kalian juga bisa melihat detil nominal tagihan
            beserta biaya layanan yang harus dibayar pada Aplikasi CrediNex. Dengan demikian akan
            lebih mudah bagi kalian untuk mengatur keuangan kalian sesuai dengan dana yang kalian
            miliki.
          </p>
          <h5 id="contact4">4.Penggunaan Kartu CrediNex</h5>
          <p>
            Cara pemakaian kartu CrediNex sangatlah mudah, untuk setiap pembelanjaan di
            merchant/toko yang memiliki logo GPN dan MasterCard maka setelah kasir menginformasikan
            jumlah yang harus dibayarkan maka cukup berikan kartu kalian ke kasir untuk digesek di
            mesin EDC dan kemudian tekan PIN transaksi kalian maka proses transaksi sudah selesai.
            Pastikan dana pinjaman kalian cukup sebelum melakukan pembayaran untuk menghindari gagal
            transaksi!
          </p>
          <h5 id="contact5">5.Tata Cara Pembayaran</h5>
          <p>
            Untuk proses pembayaran tagihan kartu CrediNex dapat dilakukan melalui Mobile Banking,
            Internet Banking atau ATM bank manapun. Hanya dengan memilih transfer ke bank BNI dan
            mengisi nomor Virtual Account yang kami berikan beserta nominal yang hendak dibayar maka
            tagihan Kalian otomatis akan terbayar!
          </p>
          <p>
            Tagihan akan Kami kirimkan melalui Aplikasi pada tanggal cetak Lembar Tagihan (Billing
            Statement) sesuai tanggal yang kalian pilih setiap bulannya, namun kalian dapat
            melakukan pembayaran kapanpun bahkan sebelum tagihan dikirimkan sesuai dengan nominal
            yang muncul di aplikasi CrediNex. Untuk diperhatikan kami memberikan waktu selama 3
            (tiga) hari setelah tanggal cetak Lembar Tagihan, apabila tagihan bulan berjalan tidak
            dibayar pada jatuh tempo, maka akan mulai kami kenakan Penalti Keterlambatan dan apabila
            masih belum dibayarkan sampai dengan tanggal cetak tagihan bulan berikutnya maka akun
            dan kartu kalian akan kami bekukan. Untuk mengaktifkan kembali akun dan kartu kalian
            maka kalian cukup melunasi tagihan pada bulan sebelumnya.
          </p>
          <h5 id="contact6">6.Biaya-biaya</h5>
          <p>
            Biaya Layanan transaksi : 3% s/d 6% per transaksi
            <br />
            Biaya Bunga : Bebas biaya bunga (free)
            <br />
            Biaya Kartu : Gratis (free)
            <br />
            Biaya Tahunan : Gratis (free)
            <br />
            Biaya Pergantian Kartu : IDR 25,000
            <br />
            Biaya pengelolaan Penagihan : 4% x outstanding (minimal IDR 40.000,-)
            <br />
            Bunga Keterlambatan : 0.2% - 0.4% per hari
          </p>
          <h5 id="contact7">7.Peringatan Risiko</h5>
          <p>
            1. Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan kesepakatan perdata
            antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga segala risiko yang timbul
            dari kesepakatan tersebut ditanggung sepenuhnya oleh masing-masing pihak.
          </p>
          <p>
            2. Risiko pinjaman atau gagal bayar ditanggung sepenuhnya oleh Pemberi Pinjaman. Tidak
            ada lembaga atau otoritas negara yang bertanggung jawab atas risiko gagal bayar ini.
          </p>
          <p>
            3. Penyelenggara dengan persetujuan dari masing-masing Pengguna (Pemberi Pinjaman
            dan/atau Penerima Pinjaman) mengakses, memperoleh, mengelola dan/atau menggunakan data
            pribadi Pengguna (“Pemanfaatan Data”) pada atau di dalam benda, perangkat elektronik
            (termasuk smartphone atau telepon seluler), perangkat keras (hardware) maupun lunak
            (software), dokumen elektronik, aplikasi atau system elektronik milik Pengguna atau yang
            dikuasai Pengguna, dengan memberitahukan tujuan, batasan dan mekanisme Pemanfaatan Data
            tersebut kepada Pengguna yang bersangkutan sebelum memperoleh persetujuan yang dimaksud.
          </p>
          <p>
            4. Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman pinjam meminjam,
            disarankan untuk tidak menggunakan layanan ini.
          </p>
          <p>
            5. Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman dan biaya lainnya
            sesuai dengan kemampuan dalam melunasi pinjaman.
          </p>
          <p>
            6. Setiap kecurangan tercatat secara digital di dunia maya dan dapat diketahui
            masyarakat luas di media sosial.
          </p>
          <p>
            7. Pengguna harus membaca dan memahami informasi ini sebelum membuat keputusan menjadi
            Pemberi Pinjaman atau Penerima Pinjaman
          </p>
          <p>
            8. Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak bertanggung jawab atas
            setiap pelanggaran atau ketidakpatuhan oleh Pengguna, baik Pemberi Pinjaman maupun
            Penerima Pinjaman (baik karena kesengajaan atau kelalaian Pengguna) terhadap ketentuan
            peraturan perundang-undangan maupun kesepakatan atau perikatan antara Penyelenggara
            dengan Pemberi Pinjaman dan/atau Penerima Pinjaman.
          </p>
          <p>
            9. Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan kesepakatan mengenai
            pinjam meminjam antara atau yang melibatkan Penyelenggara, Pemberi Pinjaman dan/atau
            Penerima Pinjaman wajib dilakukan melalui escrow account dan virtual account sebagaimana
            yang diwajibkan berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 77/POJK.01/2016
            tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi dan pelanggaran atau
            ketidakpatuhan terhadap ketentuan tersebut merupakan bukti telah terjadinya pelanggaran
            hukum oleh Penyelenggara sehingga Penyelenggara wajib menanggung ganti rugi yang
            diderita oleh masingmasing Pengguna sebagai akibat langsung dari pelanggaran hukum
            tersebut di atas tanpa mengurangi hak Pengguna yang menderita kerugian menurut Kitab
            Undang-Undang Hukum Perdata.
          </p>

          <h5 id="contact8">8.Informasi Kontak</h5>
          <p>
            Untuk kerjasama: <a href={'mailto:bd@credinex.id'}>bd@credinex.id</a>
            <br />
            <br />
            Layanan Customer Service
            <br />
            Email : <a href={'mailto:csofficial@credinex.id'}>csofficial@credinex.id</a>
            <br />
            Hotline : 021-39506666
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
