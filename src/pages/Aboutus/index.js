import styles from './index.scss';

import imgPercent from '../../assets/percent.png';
import imgP1 from '../../assets/about-p1.png';
import imgP2 from '../../assets/about-p2.png';

export default function () {
  return (
    <div className={styles.aboutus}>
      <h1 style={{color: "#9A00CE"}}>Cerita di balik</h1>
      <h1 style={{color: "#E54CAD"}}>Munculnya CrediNex</h1>
      <section className={styles.content1}>
        <div className={styles.left}>
          <img src={imgPercent} alt="" width="300" />
          <p>Orang Indonesia<br />tidak memiliki akses<br />kartu kredit</p>
        </div>
        <div className={styles.right}>
          <p>Berawal dari sulitnya akses kredit di Asia tenggara, 66% populasi di Indonesia tidak memiliki akses terhadap kartu kredit dengan tingkat penetrasi kartu perkapita mencapai 0,66.</p>
          <p className={styles.question}>Apa tantangan utamanya? Aksesibilitas.</p>
          <p>Credinex berupaya menyelesaikan masalah ini dengan memperkenalkan teknologi kredit generasi selanjutnya yang menggabungkan sinergi antara bank dan fintech (teknologi finansial) untuk menyingkirkan persyaratan kompleks dan berbelit-belit dalam memperoleh kredit oleh bank dan Lembaga keuangan lainnya.</p>
          <p>Dengan teknologi manajemen resiko mutakhir bekerjasama dengan ekosistem bank, Credinex mampu memberikan kredit yang terjangkau dengan persyaratan minimum kepada semua orang yang membutuhkannya. </p>
        </div>
      </section>
      <section className={styles.content2}>
        <div className={styles.left}>
          <h1 style={{color: "#fff"}}>Kartu<br />Credinex<br />adalah<br /></h1>
          <h1 style={{color: "#FF7793"}}>Solusi kredit<br />masyarakat<br />Indonesia</h1>
        </div>
        <div className={styles.right}>
          <img src={imgP1} alt="" width="737" />
          <p>Tujuan kami adalah mempermudah akses kredit yang dapat menjangkau seluruh lapisan masyarakat dengan kartu CrediNex. Apa itu kartu CrediNex? Kartu CrediNex berfungsi sebagai kartu debit pre-paid dengan batas kredit yang disesuaikan setelah pelanggan menerima penilaian kelayakan oleh sistem teknologi keuangan mutakhir kami.</p>
          <p>Lupakan gundukan kertas saat mengumpulkan laporan pendapatan dan kepahitan ditolak hanya karena belum punya riwayat kartu kredit sebelumnya. CrediNex mempermudah jalanmu dalam mengakses kredit dengan kartu debit khusus yang didukung sepenuhnya oleh partner perbankan kami. Dengan teknologi mutakhir, aplikasi CrediNex pun dibuat sesederhana dan semudah mungkin untuk diakses, dilengkapi dengan layanan super lengkap dimana anda dapat memantau transaksi, pembayaran dan tagihan dalam satu aplikasi. Sekarang anda dapat berfokus ke hal yang penting dan membayar tanpa khawatir.</p>
        </div>
      </section>
      <section className={styles.content3}>
        <div className={styles.left}>
          <h1>Teknologi kami<br />BERBEDA</h1>
          <p>Kami adalah Perusahaan Start-up yang berfokus untuk menyediakan 100% solusi keuangan digital yang sederhana dan aman, agar anda memiliki kemudahan mendapatkan kartu kapan saja dimana saja tanpa kertas bertumpuk. CrediNex dikembangkan oleh perusahaan yang memiliki infrastruktur setara bank yang sangat aman dan terukur, serta didesain oleh perancang platform Cloud profesional dan Arsitek perangkat lunak yang telah memiliki pengalaman puluhan tahun di industri perbankan dan teknologi. </p>
          <p>Kami menentang birokrasi, kantor cabang dan pelayanan pelanggan yang mahal dan tidak efisien.</p>
        </div>
        <div className={styles.right}>
          <img src={imgP2} alt="" width="798" />
        </div>
      </section>
    </div>
  );
}
