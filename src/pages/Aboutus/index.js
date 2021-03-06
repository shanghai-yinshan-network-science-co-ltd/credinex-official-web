import styles from './index.scss';

import imgPercent from '../../assets/percent.png';
import imgP1 from '../../assets/about-p1.png';
import imgP2 from '../../assets/about-p2.png';

export default function() {
  return (
    <div className={styles.aboutus}>
      <h1 style={{ color: '#9A00CE' }}>Cerita di balik</h1>
      <h1 style={{ color: '#E54CAD' }}>Munculnya CrediNex</h1>
      <section className={styles.content1}>
        <div className={styles.left}>
          <img src={imgPercent} alt="" width="300" />
          <p>
            Orang Indonesia
            <br />
            tidak memiliki akses
            <br />
            kartu kredit
          </p>
        </div>
        <div className={styles.right}>
          <p>
            Berawal dari sulitnya akses kredit di Asia tenggara, 66% populasi di Indonesia tidak
            memiliki akses terhadap kartu kredit dengan tingkat penetrasi kartu perkapita mencapai
            0,66.
          </p>
          <p className={styles.question}>Apa tantangan utamanya? Aksesibilitas.</p>
          <p>
            CrediNex berupaya menyelesaikan masalah ini dengan memperkenalkan teknologi pinjaman
            yang menggabungkan sinergi antara bank dan teknologi keuangan untuk menyingkirkan
            persyaratan kompleks dan berbelit-belit dalam memperoleh pinjaman dari bank dan Lembaga
            keuangan lainnya.
          </p>
          <p>
            Dengan teknologi manajemen resiko mutakhir bekerjasama dengan ekosistem bank, CrediNex
            mampu memberikan pinjaman yang terjangkau dengan persyaratan minimum kepada semua orang
            yang membutuhkannya.
          </p>
        </div>
      </section>
      <section className={styles.content2}>
        <div className={styles.left}>
          <h1 style={{ color: '#fff' }}>
            Kartu
            <br />
            Credinex
            <br />
            adalah
            <br />
          </h1>
          <h1 style={{ color: '#FF7793' }}>
            Solusi pembayaran berbasis aplikasi digital untuk
            <br />
            masyarakat
            <br />
            Indonesia
          </h1>
        </div>
        <div className={styles.right}>
          <img src={imgP1} alt="" width="737" />
          <p>
            Tujuan kami adalah mempermudah akses pemberian pinjaman yang dapat menjangkau seluruh
            lapisan masyarakat dengan kartu CrediNex. Apa itu kartu CrediNex? Kartu CrediNex
            berfungsi sebagai kartu pembayaran pada mesin EDC dengan batas pinjaman yang disesuaikan
            setelah pengguna menerima penilaian kelayakan oleh sistem teknologi keuangan kami.
          </p>
          <p>
            CrediNex mempermudah jalanmu dalam memperoleh pinjaman dengan kartu pembayaran khusus
            yang didukung sepenuhnya oleh mitra perbankan kami. Dengan teknologi mutakhir, aplikasi
            CrediNex pun dibuat sesederhana dan semudah mungkin untuk diakses dan dengan layanan
            lengkap dimana anda dapat memantau transaksi, pembayaran dan tagihan dalam satu aplikasi
            tanpa perlu khawatir!
          </p>
        </div>
      </section>
      <section className={styles.content3}>
        <div className={styles.left}>
          <h1>
            Teknologi kami
            <br />
            BERBEDA
          </h1>
          <p>
            Kami adalah Perusahaan Peer to Peer Lending yang menyediakan solusi keuangan digital
            yang sederhana dan aman. CrediNex dikembangkan oleh perusahaan yang memiliki
            infrastruktur yang sangat aman dan terukur, serta didesain oleh perancang platform Cloud
            profesional dan Arsitek perangkat lunak yang telah memiliki pengalaman puluhan tahun di
            industri perbankan dan teknologi.
          </p>
          <p>
            Kami meniadakan birokrasi, kantor cabang dan pelayanan pelanggan yang mahal dan tidak
            efisien.
          </p>
        </div>
        <div className={styles.right}>
          <img src={imgP2} alt="" width="798" />
        </div>
      </section>
    </div>
  );
}
