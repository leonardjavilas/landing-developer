import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main>
      <div class="wrapper">
        <section className="d-flex align-items-center  hero hero--scotch hero--scotch gradient--sunset">
          <div className="container">
            <div className="row align-items-center d-flex justify-content-center">
              <div class="content">
                <div class="planet">
                  <div class="ring"></div>
                  <div class="cover-ring"></div>
                  <div class="spots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <h1 className="text-end m-3 mt-0 mb-0">Leonard J. Ávila S.</h1>
                <h2 className="text-end m-3 mt-0 mb-0">Front-end Engineer</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
