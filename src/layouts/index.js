import Link from 'umi/link';

import imgLogo from '../assets/logo.png';
import imgName from '../assets/name.png';
import ojk from '../assets/ojk.png';
import imgIphone from '../assets/iphone.png';
import imgIconGooglePlay from '../assets/icon-google-play.png';
import qrCode from '../assets/qrcode.png';

import styles from './index.scss';
import ReactZmage from 'react-zmage';

function BasicLayout(props) {
  const navs = [
    { name: 'Home', to: '/' },
    { name: 'Tentang Kami', to: '/Aboutus' },
    { name: 'Support', to: '/Contactus' },
  ];
  const { location } = props;
  return (
    <div className={styles.normal}>
      <nav>
        <div className={styles.logo}>
          <img src={imgLogo} alt="" width="40" />
          <img src={imgName} alt="" width="120" />
        </div>
        <ul className={styles.nav}>
          {navs.map((nav, index) => (
            <li key={index}
                className={location.pathname === nav.to ? styles.active : ''}>
              {nav.to && <Link to={`${nav.to}`}>{nav.name}</Link>}
              {!nav.to && <span className={styles.nav_tel}>{nav.name}</span>}
            </li>
          ))}
        </ul>
      </nav>
      {props.children}
      <section className={styles['downlod-tips']}>
        <div><img src={imgIphone} alt="" width="212" /></div>
        <div>
          <h4>Tunggu apalagi, Ayo<br />Buruan Download dan mulai Belanja!</h4>
          <p>Gunakan kartumu secara bijak dan bayarlah tagihan tepat waktu untuk
            tambahan manfaat lainnya</p>
          <a
            href={'https://play.google.com/store/apps/details?id=rupiah.dana.cash.uang.pinjam.kredit.tunai.cepat.kilat.kartu.online.loan&hl=es_PA'}><img
            src={imgIconGooglePlay} alt="" width="235" /></a>
        </div>
      </section>
      <footer>
        <div className={styles.logo}>
          <img src={imgLogo} alt="" width="40" />
          <img src={imgName} alt="" width="120" />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.flex}>
              <div>
                <div>
                  <strong>Hotline Layanan Pelanggan</strong>
                  <span>021 39506666</span>
                </div>
                <div>
                  <strong>E-mail</strong>
                  <span>csofficial@credinex.id</span>
                </div>
                <div>
                  <strong>PT DIGITAL YINSHAN TECHNOLOGY</strong>
                  <span className={styles.address}>Capital Place Building, Lantai 47, Suite A, Jl. Jend.
                    <br />Gatot Subroto No. Kav. 18, RT 6 RW 1,
                    <br />Kelurahan Kuningan Barat, Kecamatan Mampang Prapatan,
                    <br />Jakarta 12710, DKI Jakarta</span>
                </div>
              </div>
              <ul className={styles.nav}>
                {navs.map((nav, index) => (
                  <li key={index} className={location.pathname === nav.to ?
                    styles.active :
                    ''}>
                    {nav.to && <Link to={`${nav.to}`}>{nav.name}</Link>}
                    {!nav.to &&
                    <span className={styles.nav_tel}>{nav.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.imgs}>
              <a href="https://www.instagram.com/credinex.id/">
                <div className={styles.ins} />
              </a>
              <a href="https://www.facebook.com/CrediNex-105894897846485/">
                <div className={styles.fb} />
              </a>
              <a href="https://twitter.com/CrediNex">
                <div className={styles.twitter} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCscaK5LncxYkkMyuVOlc-mg">
                <div className={styles.yutube} />
              </a>
            </div>
            <p>Copyright © 2020 PT Digital Yinshan Technology All Rights
              Reserved</p>
            <div className={styles.ojkContainer}>
              <img src={ojk} className={styles.ojk}/>
              <ReactZmage backdrop={"#000000"} src={qrCode} className={styles.qr}/>
            </div>
          </div>
          <div className={styles.right}>
            <p>1.Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
              kesepakatan perdata antara Pemberi Pinjaman dengan Penerima
              Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
              tersebut ditanggung sepenuhnya oleh masing-masing pihak.</p>
            <p>2.Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh
              Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang
              bertanggung jawab atas risiko gagal bayar ini.</p>
            <p>3.Penyelenggara dengan persetujuan dari masing-masing Pengguna
              (Pemberi Pinjaman dan/atau Penerima Pinjaman) mengakses,
              memperoleh, menyimpan, mengelola dan/atau menggunakan data pribadi
              Pengguna ("Pemanfaatan Data") pada atau di dalam benda, perangkat
              elektronik (termasuk smartphone atau telepon seluler), perangkat
              keras (hardware) maupun lunak (software), dokumen elektronik,
              aplikasi atau system elektronik milik Pengguna atau yang dikuasai
              Pengguna, dengan memberitahukan tujuan, batasan dan mekanisme
              Pemanfaatan Data tersebut kepada Pengguna yang bersangkutan
              sebelum memperoleh persetujuan yang dimaksud.</p>
            <p>4.Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman
              pinjam meminjam, disarankan untuk tidak menggunakan layanan
              ini.</p>
            <p>5.Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman
              dan biaya lainnya sesuai dengan kemampuan dalam melunasi
              pinjaman.</p>
            <p>6.Setiap kecurangan tercatat secara digital di dunia maya dan
              dapat diketahui masyarakat luas di media sosial.</p>
            <p>7.Pengguna harus membaca dan memahami informasi ini sebelum
              membuat keputusan menjadi Pemberi Pinjaman atau Penerima
              Pinjaman.</p>
            <p>8.Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
              bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan oleh
              Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman (baik
              karena kesengajaan atau kelalaian Pengguna) terhadap ketentuan
              peraturan perundang-undangan maupun kesepakatan atau perikatan
              antara Penyelenggara dengan Pemberi Pinjaman dan/atau Penerima
              Pinjaman.</p>
            <p>9.Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan
              kesepakatan mengenai pinjam meminjam antara atau yang melibatkan
              Penyelenggara, Pemberi Pinjaman dan/atau Penerima Pinjaman wajib
              dilakukan melalui escrow account dan virtual account sebagaimana
              yang diwajibkan berdasarkan Peraturan Otoritas Jasa Keuangan Nomor
              77/POJK.01/2016 tentang Layanan Pinjam Meminjam Uang Berbasis
              Teknologi Informasi dan pelanggaran atau ketidakpatuhan terhadap
              ketentuan tersebut merupakan bukti telah terjadinya pelanggaran
              hukum oleh Penyelenggara sehingga Penyelenggara wajib menanggung
              ganti rugi yang diderita oleh masingmasing Pengguna sebagai akibat
              langsung dari pelanggaran hukum tersebut di atas tanpa mengurangi
              hak Pengguna yang menderita kerugian menurut Kitab Undang-Undang
              Hukum Perdata.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
