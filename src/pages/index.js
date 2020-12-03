import Link from 'umi/link';
import styles from './index.scss';

import imgPBanner from '../assets/p-banner.png';
import imgP1Banner from '../assets/p1-banner.png';
import imgIconGooglePlay from '../assets/icon-google-play.png';
import imgIcon1 from '../assets/home-icon1.png';
import imgIcon2 from '../assets/home-icon2.png';
import imgIcon3 from '../assets/home-icon3.png';
import imgStep from '../assets/home-step.png';

export default function() {
  const promotions = [
    {
      icon: imgIcon1,
      title: [
        <h6 style={{ color: '#E54CAD' }}>Persetujuan</h6>,
        <h6 style={{ color: '#681AC2' }}>Pinjaman cepat</h6>,
      ],
      abs: 'Persetujuan 10 menit dan kartu Anda akan dikirim.',
    },
    {
      icon: imgIcon2,
      title: [
        <h6 style={{ color: '#681AC2' }}>Proses</h6>,
        <h6 style={{ color: '#E54CAD' }}>digital sepenuhnya</h6>,
      ],
      abs: 'Proses aplikasi sepenuhnya berbasis Aplikasi di ponsel pintar Anda.',
    },
    {
      icon: imgIcon3,
      title: [
        <h6 style={{ color: '#681AC2' }}>Gesek</h6>,
        <h6 style={{ color: '#E54CAD' }}>dimana saja</h6>,
      ],
      abs: 'Gunakan kartu Anda untuk pembayaran dan pembelian di mana saja.',
    },
  ];
  const loanSteps = [
    {
      step: (
        <h6>
          Daftarkan
          <br />
          dirimu
        </h6>
      ),
      abs:
        'Unduh aplikasi Credinex dari google play dan buat akun untuk mendaftar. Mulai dari mengisi informasi dasar, lalu upload KTP dan selfie.',
    },
    {
      step: (
        <h6>
          Tunggu penilaian
          <br />
          batas kreditmu
        </h6>
      ),
      abs:
        'Hanya dengan beberapa menit, sistem kami dapat menentukan nilai batas pinjamanmu. Setelahnya, akan kami beritahu persetujuannya langsung dari aplikasi.',
    },
    {
      step: (
        <h6>
          Terima kartu
          <br />
          hingga
          <br />
          depan pintu
        </h6>
      ),
      abs:
        'Segera setelah batas pinjamanmu disetujui, kartu akan langsung meluncur hingga ke depan pintu rumahmu.',
    },
    {
      step: (
        <h6>
          Mengaktifkan
          <br />
          kartu
        </h6>
      ),
      abs:
        'Setelah mendapatkan kartu, ikuti instruksi pengaktifan kartu dan buat PIN langsung dari aplikasi kami.',
    },
    {
      step: (
        <h6>
          Mulai
          <br />
          menggunakan
          <br />
          Credinex
        </h6>
      ),
      abs:
        'Setelah kartu  Credinex mu aktif, kamu akan dapat langsung menggunakannya untuk membayar tagihan dan segala pembelanjaan. Pantau transaksi dan catat pembayaran dengan mudah.',
    },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <div>
            <h2>Credinex – Satu kartu untuk semua!</h2>
            <h2 style={{ color: '#fff' }}>gesek tanpa khawatir</h2>
            <p>
              Lupakan persyaratan bank yang rumit, dapatkan kartumu hanya dengan 4 langkah mudah.
              Pantau seluruh aktivitas transaksimu dari aplikasi kami. Daftar dan miliki kartu
              Credinex sekarang!
            </p>
            <a
              href={
                'https://play.google.com/store/apps/details?id=rupiah.dana.cash.uang.pinjam.kredit.tunai.cepat.kilat.kartu.online.loan&hl=es_PA'
              }
              className={styles.download}
            >
              <img src={imgIconGooglePlay} alt="" width="235" />
            </a>
          </div>
          <img src={imgPBanner} alt="" className={styles.pic} />
        </div>
        <div className={styles.msg}>
          <h4>Memperkenalkan</h4>
          <h4>
            Kartu <span> Pembayaran berbasis aplikasi digital</span>
          </h4>
          <p>
            Dengan menggabungkan fasilitas pinjaman pada kartu debit, kami menghilangkan persyaratan
            rumit dari bank, membuat akses pinjaman menjadi lebih mudah dan menjangkau lebih luas.
            Yuk buat kartumu hanya dengan beberapa langkah mudah dan bersiaplah mendapatkan kartu
            debit prabayar pertamamu yang akan kami antar sampai depan pagar rumah.
          </p>
          <Link to="/Contactus">
            Pelajari Lebih Lanjut<span>&gt;</span>
          </Link>
          <img src={imgP1Banner} alt="" className={styles.pic1} />
        </div>
      </div>
      <article>
        <section className={styles.promotion}>
          <div className={styles.left}>
            <h1>Apa yang membuat</h1>
            <h1>
              <span>Credinex sebuah</span>
            </h1>
            <h1>
              <span>terobosan?</span>
            </h1>
            <p>
              Memiliki kartu pembayaran tidak pernah semudah ini. CrediNex menciptakan ekosistem
              antara bank dan perusahaan teknologi finansial yang melibatkan integrasi teknologi
              agar proses pinjaman lebih efisien dan cepat. Mau bayar tagihan atau belanja barang
              idaman ngga usah pusing. Gesek dan pinjam dana langsung dari kartu-mu, kapanpun kamu
              butuh
            </p>
          </div>
          <div className={styles.right}>
            <ul>
              {promotions.map((item, index) => (
                <li key={index}>
                  <img src={item.icon} alt="" width="52" />
                  {item.title.map((t, idx) => (
                    <div key={idx}>{t}</div>
                  ))}
                  <p>{item.abs}</p>
                </li>
              ))}
            </ul>
            <div className={styles['right-center']}>
              <div className={styles.content}>
                <h1>Cara Pakai </h1>
                <h1>
                  <span>CrediNex </span>
                </h1>
                <p>Ikuti 5 langkah mudah untuk dapatkan kartu Credinex mu sekarang!</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.loanSteps}>
          <img src={imgStep} alt="" width="75%" />
          <ul>
            <li></li>
            {loanSteps.map((item, index) => (
              <li key={index}>
                <h1>0{index + 1}.</h1>
                <div className={styles.step}>
                  <div>{item.step}</div>
                  <p>{item.abs}</p>
                </div>
                <div className={styles.tag}></div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
