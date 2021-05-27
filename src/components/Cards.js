import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Kursus Sertifikasi BNSP</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Sertifikasi Web Programmer Junior'
              label='Kursus BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Sertifikasi Training of Trainer (ToT) Level 3'
              label='Kursus BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Sertifikasi Human Resources Officer'
              label='Kursus BNSP'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Sertifikasi Junior Graphic Designer'
              label='Kursus BNSP'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Sertifikasi Analis Efek'
              label='Kursus BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Sertifikasi Manajemen Risiko'
              label='Kursus BNSP'
              path='/products'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Sertifikasi Teknikal Analis'
              label='Kursus BNSP'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sertifikasi Digital Marketing'
              label='Kursus BNSP'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Bundling RSA & RTA'
              label='Kursus BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Bundling CRA & RSA'
              label='Kursus BNSP'
              path='/products'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Sertifikasi Associate Wealth Planner (AWP)'
              label='Kursus BNSP'
              path='/sign-up'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Sertifikasi Qualified Wealth Planner (QWP)'
              label='Kursus BNSP'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <h1>Kursus Sertifikasi Non BNSP</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Kursus Bahasa Asing'
              label='Kursus Non BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Sukses Berjualan Online di Marketplace'
              label='Kursus Non BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Siasat Menyiapkan Dana Nikah Zaman Now'
              label='Kursus Non BNSP'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Cara Mengelola Keuangan untuk Millenial'
              label='Kursus Non BNSP'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Mahir Menjadi Agen Penjual Reksa Dana'
              label='Kursus Non BNSP'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Cara Menganalisa Laporan Keuangan untuk Berinvestasi'
              label='Kursus Non BNSP'
              path='/products'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Cara Mudah dan Terbukti Berhasil Menulis Konten Penjualan'
              label='Kursus Non BNSP'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Strategi Jitu dalam Membangun Identitas Brand'
              label='Kursus Non BNSP'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
