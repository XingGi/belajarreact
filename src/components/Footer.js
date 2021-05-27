import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        We Believe Every Person Deserve To Have Education Everytime and Everywhere
        </p>
        <p className='footer-subscription-text'>
          Sertifikasiku.com
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sertifikasiku</h2>
            <Link to='/sign-up'>Mulai Belajar</Link>
            <Link to='/'>Tentang Kami</Link>
            <Link to='/'>Kontak Kami</Link>
            <Link to='/'>Kebijakan Privasi</Link>
            <Link to='/'>Bantuan</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Program</h2>
            <Link to='/'>Sertifikasi BNSP</Link>
            <Link to='/'>Sertifikasi Non BNSP</Link>
            <Link to='/'>Hiring Partner</Link>
            <Link to='/'>Beasiswa Sertifikasiku</Link>
            <Link to='/'>Sertifikasiku Ambassador</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Media Sosial</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fab fa-typo3' />
              SERTIFIKASIKU
            </Link>
          </div>
          <small class='website-rights'>© Copyright 2021 SertifikasiKu | All Rights Reserved | PT Reksa Madani Candradimuka.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
