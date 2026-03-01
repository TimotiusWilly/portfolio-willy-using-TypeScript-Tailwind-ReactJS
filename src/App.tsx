import DataImage from "./data";
import {listTools, listProyek} from "./data";


function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>I'm not the best Coder, but I keep learning.👌</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hi, Saya Timotius Willy Narendra</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya adalah mahasiswa program studi Informatika di Universitas Jenderal Soedirman. Saya memiliki ketertarikan mendalam pada bidang pemrograman, dengan fokus utama pada pengembangan dan perancangan situs web, serta mempunyai ketertarikan dalam bidang Artificial Intelligence atau biasa disingkat AI. </p>
          <div className="flex items-center sm:gap-4 gap-2">
           <a
          href="https://drive.google.com/drive/folders/1yS4CGE--nEc8AEdNrcHF2StW6Y_LcNFN?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
          Lihat CV <i className="ri-eye-line"></i>
          </a>
           <a href="#proyek"className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-eye-line"></i></a>  
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[450px] rounded-md md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>

     <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p className="text-base/loose mb-10"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Hi, perkenalkan Saya Timotius Willy Narendra, seorang mahasiswa aktif di Universitas Jendral Soedirman pada program studi Informatika. Saya mempunyai ketertarikan pada bidang Web Development dan juga Product Digital. Saya percaya bahwa semua orang bisa berhasil ketika mereka mau berusaha untuk belajar, saat ini saya juga sedang tertarik mempelajari bidang AI Development.
          </p>
          <div className="flex items-center justify-between" data-aos-once="true">
            <img src={DataImage.HeroImage} alt="Image" className="w-15 rounded-md" loading="lazy" />
            <div>
              <h1 className="text-4xl mb-1">
                3<span className="text-violet-500">+</span>
              </h1>
            <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1/2<span className="text-violet-500">+</span>
                </h1>
            <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini adalah beberapa tools yang saya tekuni dan saya pakai dalam programming.</p>
        <div className="tools box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-mg cursor-pointer hover:bg-zinc-800 group" key={tool.id}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini adalah beberapa proyek yang sudah saya buat.</p>
        <div className="proyek box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) =>(
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>



      <div className="Kontak mt-32 sm:py-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/timotiuswillynarendra12@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols={45} rows={7} placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>


   
    </>
  );
}

export default App
