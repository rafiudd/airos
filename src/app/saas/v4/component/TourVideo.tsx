'use client'
import { BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { Col, Container, Row } from 'react-bootstrap'
import Jarallax from '@/components/Jarallax'
import 'swiper/css'
import { clients } from '../data'
import Link from 'next/link'
import Image from 'next/image'

const TourVideo = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    autoplay: { delay: 2000 },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      576: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <section className="bg-light">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-7">
          <h2 className="mb-4">Build with a deep focus and data analytics</h2>
          <p className="mb-0">
            The chatbot can be personalized to match the brand voice and tone, making it feel like an extension of the company&apos;s customer support
            team.
          </p>
        </div>

        <Row className="mt-7">
          <Col md={10} className="mx-auto">
            <h6 className="mb-4 text-center">Join the 1500+ companies committed to fighting climate change</h6>

            <Swiper className="mb-7" {...swiperOptions}>
              {clients.map((client, idx) => (
                <SwiperSlide key={idx}>{client.image && <Image src={client.image} className="px-3" alt="client-img" />}</SwiperSlide>
              ))}
            </Swiper>

            <div className="mac_container position-relative">
              <figure className="position-absolute top-0 start-0 mt-n7 z-index-2">
                <svg className="fill-primary" width="177" height="187" viewBox="0 0 177 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M145.997 54.7907C146.303 55.9483 147.111 56.7781 148.142 57.4275C148.71 57.7851 148.555 58.3776 148.482 58.842C148.419 59.2452 148.287 59.5844 148.46 60.0065C148.532 60.1801 148.397 60.5706 148.231 60.6875C147.703 61.0627 147.243 61.5096 146.628 61.801C144.465 62.8271 142.147 63.2656 139.827 63.6105C137.458 63.9623 135.087 64.3768 132.677 64.3899C131.927 64.3937 131.928 64.407 131.735 63.5032C133.049 63.4002 134.363 63.3426 135.664 63.1811C136.697 63.0532 137.712 62.7983 138.828 62.5815C138.54 62.2938 138.316 62.2013 137.914 62.2829C135.722 62.7261 133.518 63.0936 131.162 63.1237C131.131 62.9437 131.093 62.7258 131.055 62.5095C131.106 62.4847 131.219 62.4301 131.412 62.3365L130.707 62.0338C130.804 61.5801 130.891 61.1692 131.005 60.6343C131.35 60.3272 132.108 60.4369 132.465 59.8406C133.144 60.1569 133.745 59.7031 134.378 59.6166C135.162 59.5101 135.923 59.235 136.538 59.0732C136.659 58.644 136.732 58.316 136.843 57.9997C137.23 56.8911 137.253 56.9328 138.132 56.5166C139.109 56.0533 140.247 55.939 141.077 55.158C141.13 55.1076 141.254 55.0794 141.321 55.1043C142.025 55.371 142.442 55.0921 142.889 54.5154C143.264 54.0318 143.905 54.1232 144.48 54.34C144.921 54.5069 145.385 54.6119 145.997 54.7907Z" />
                  <path d="M24.428 116.334C25.1448 115.73 25.1448 115.73 24.5158 114.968C24.5615 114.364 25.1989 113.883 24.9199 113.199C25.284 112.72 25.6931 112.269 26.002 111.757C26.5002 110.931 27.3748 110.769 28.1599 110.519C28.6932 110.349 29.2345 110.164 29.7889 110.038C30.4375 109.89 31.0639 109.649 31.7116 109.499C32.2986 109.364 32.901 109.291 33.4982 109.203C33.6642 109.179 33.8684 109.145 34.0013 109.216C34.3549 109.405 34.657 109.384 35.0322 109.236C35.7537 108.952 36.4793 109.31 37.1858 109.407C37.844 109.499 38.4753 109.88 39.0822 110.203C39.3141 110.325 39.8134 110.578 39.2077 110.944C39.1647 110.97 39.2822 111.239 39.3021 111.399C39.3227 111.566 39.3736 111.86 39.3118 111.89C38.5819 112.237 38.8737 112.524 39.2484 112.987C39.8001 113.669 39.649 113.875 39.0359 114.806C38.6624 115.372 38.3638 116.014 37.677 116.145C35.8203 116.497 33.9632 116.877 32.0655 116.221C31.3051 115.958 30.4472 115.833 29.6556 116.213C28.9735 116.541 28.1709 116.608 27.6086 117.214C27.4389 117.397 27.114 117.444 26.8523 117.53C26.2949 117.713 25.7631 117.711 25.1905 117.476C24.5955 117.232 24.6639 116.708 24.428 116.334Z" />
                  <path d="M107.925 54.6811C107.026 55.0396 106.183 55.3027 105.408 55.6985C103.185 56.8338 100.753 56.7813 98.3713 57.0078C97.3016 57.1097 96.3873 56.5562 95.4595 56.133C95.2986 56.0594 95.2371 55.767 95.123 55.5624C95.5551 55.5356 95.9599 55.5105 96.5508 55.4736L94.8167 54.7282C94.7925 54.2801 94.8495 53.8726 94.7301 53.5265C94.5819 53.097 94.7873 52.772 94.9803 52.5195C95.2049 52.2253 95.6012 52.0623 95.9543 51.8212C96.7809 52.4066 97.6969 52.376 98.6818 52.2735C98.7451 51.83 99.2289 51.4823 98.9919 50.909C98.9415 50.7875 99.0535 50.5078 99.1765 50.4194C100.182 49.6971 101.007 48.6351 102.422 48.6597C102.677 48.6645 103 48.6868 103.173 48.5503C103.434 48.3445 103.784 48.7803 103.999 48.3272C104.177 47.9543 104.459 48.3627 104.699 48.3852C104.996 48.413 105.301 48.4077 105.588 48.477C105.851 48.5403 106.095 48.6843 106.349 48.7937C106.766 50.1287 107.562 51.2137 108.543 52.2046C108.334 53.0393 108.123 53.8866 107.925 54.6811Z" />
                  <path d="M3.22725 135.018C3.01142 134.651 2.82621 134.358 2.6643 134.052C2.60584 133.94 2.59095 133.8 2.57731 133.67C2.53843 133.299 3.1029 133.289 3.04058 132.867C2.99194 132.536 2.97883 132.167 3.07829 131.856C3.16105 131.598 3.61758 131.359 3.57889 131.185C3.49264 130.796 3.50464 130.591 3.90481 130.457C3.97853 130.432 4.01395 130.239 4.03446 130.118C4.18727 129.225 4.18475 129.224 5.15765 129.129C5.0126 128.997 4.88744 128.882 4.65873 128.674C5.06032 128.695 5.36079 128.675 5.64444 128.734C5.99106 128.805 6.32811 128.932 6.66056 129.057C6.99508 129.182 7.31918 129.336 7.73596 129.297L6.56754 128.649C6.58429 128.605 6.60126 128.561 6.61867 128.516C6.845 128.585 7.07915 128.636 7.29634 128.728C8.39764 129.193 9.47652 129.718 10.5979 130.126C11.5873 130.486 12.3905 131.027 12.9544 131.916C12.6709 132.036 12.2909 132.102 12.664 132.539C13.0715 133.016 12.857 133.407 12.3933 133.832C12.9178 134.161 13.5636 134.486 12.9514 135.326L11.5434 134.721C11.5047 134.777 11.4652 134.834 11.426 134.891C11.8428 135.245 12.2597 135.599 12.6887 135.963C12.2313 136.259 11.7885 136.473 11.2316 136.153C11.0752 136.064 10.8129 136.179 10.6028 136.162C9.68931 136.086 9.68926 136.081 9.38524 136.736C9.32706 136.861 9.27587 136.989 9.22141 137.116L9.07184 137.464C8.61231 137.647 8.17897 137.804 7.7589 137.99C6.86549 138.388 5.968 138.251 5.08368 137.997C4.64531 137.87 4.24938 137.593 3.80988 137.474C3.32539 137.343 3.08927 136.963 2.85718 136.617C2.39472 135.928 2.4732 135.694 3.22725 135.018Z" />
                  <path d="M45.1232 65.2617C45.2584 65.9616 45.403 66.6418 45.5014 67.3281C45.5109 67.3946 45.2383 67.5014 45.0079 67.6442C45.1784 67.8653 45.3473 68.0383 45.4581 68.2427C45.5893 68.4833 45.6663 68.7532 45.7726 69.0081C45.9873 69.5241 46.2494 70.0452 45.4624 70.3332C45.4026 70.3556 45.3917 70.4965 45.3469 70.5761C45.0273 71.1423 44.9322 71.7719 44.1975 72.164C43.6059 72.4798 43.0766 72.978 42.4099 73.2273C41.7843 73.4605 41.1793 73.7203 40.4896 73.7742C39.4305 73.8564 38.3836 73.9374 37.4391 73.3399C37.2022 73.19 37.0439 72.915 36.7713 72.6108C37.1705 72.4037 37.4404 72.2637 37.7561 72.1004C37.159 71.5986 36.3433 71.2982 36.012 70.4027C36.3054 70.2335 36.5888 70.07 36.9424 69.8661L36.0159 69.4679C36.2322 68.5719 36.2712 67.6903 36.6811 66.8754C36.9162 66.4081 37.2463 66.0587 37.6679 65.8802C38.2092 65.6505 38.682 65.2875 39.2978 65.1747C39.8547 65.073 40.3863 64.8352 40.9624 64.7248C41.9093 64.5441 42.8389 64.7449 43.7755 64.7177C44.2221 64.7044 44.6802 65.0713 45.1232 65.2617Z" />
                  <path d="M46.2804 129.498L49.0061 130.67C48.426 130.121 47.7113 129.866 47.0284 129.547C46.7534 129.419 46.3502 129.401 46.3291 128.992C46.3067 128.569 46.2946 128.127 46.4009 127.727C46.4376 127.59 46.8499 127.475 47.0823 127.488C47.332 127.501 47.5726 127.677 47.8446 127.794C47.8471 127.546 47.799 127.376 47.8598 127.269C47.9856 127.049 48.3374 126.822 48.3017 126.666C48.0996 125.798 48.7296 125.211 48.9848 124.513C49.1002 124.196 49.5073 123.818 49.8217 123.777C50.595 123.68 51.0987 123.027 51.9901 122.955C52.3057 123.076 52.7066 123.2 53.2579 123.055C53.9802 122.865 54.8069 122.793 55.5419 123.264C55.8837 123.483 56.2915 123.599 56.74 123.792C56.8815 124.879 56.9937 125.994 57.1795 127.097C57.3743 128.251 56.6292 128.905 55.8957 129.501C55.36 129.936 54.8984 130.629 54.033 130.482C52.9291 131.494 51.5109 131.149 50.2239 131.389C49.3586 131.551 48.583 131.201 47.8174 131.023C47.1848 130.876 46.6825 130.169 46.1228 129.71C46.1753 129.639 46.2282 129.568 46.2804 129.498Z" />
                  <path d="M70.5926 110.828C69.8281 111.133 69.0176 111.456 68.1052 111.82C67.6827 111.638 67.1604 111.466 66.7002 111.189C66.5294 111.086 66.4586 110.745 66.4359 110.504C66.4267 110.412 66.6809 110.296 66.8165 110.19C66.5305 109.848 66.0829 109.528 66.471 108.956C66.5438 108.85 66.6214 108.688 66.5917 108.582C66.4737 108.163 66.3624 107.714 66.6436 107.365C67.1481 106.738 67.6053 105.994 68.3353 105.65C69.7792 104.97 71.284 104.381 72.9227 104.438C73.8997 104.472 74.8905 104.55 75.8376 104.771C76.2517 104.868 76.7353 105.198 76.8534 105.769C77.0486 106.707 77.2959 107.636 77.4597 108.58C77.5152 108.902 77.4763 109.304 77.3247 109.586C76.3715 111.363 74.9375 112.305 72.6182 111.955C72.2802 111.904 71.8821 111.958 71.6155 111.795C71.2299 111.559 70.9384 111.168 70.5926 110.828Z" />
                  <path d="M117.847 127.388C117.571 127.329 117.295 127.27 117.018 127.211C118.028 127.648 117.947 128.878 118.706 129.48C118.978 129.695 118.92 130.208 118.668 130.323C118.258 130.511 118.371 130.807 118.409 131.029C118.511 131.618 118.314 131.997 117.837 132.349C116.462 133.364 115.132 134.45 113.335 134.625C112.4 135.364 111.22 135.191 110.158 135.443C109.642 135.566 109.063 135.427 108.45 135.404C108.087 134.829 108.444 134.373 109.022 133.885C108.703 133.819 108.44 133.687 108.221 133.738C107.919 133.81 107.907 133.589 107.908 133.476C107.913 132.959 107.974 132.449 107.783 131.94C107.736 131.815 107.877 131.58 107.99 131.446C108.193 131.206 108.471 131.045 108.353 130.631C108.32 130.513 108.583 130.291 108.737 130.146C110.066 128.906 111.503 127.884 113.383 127.619C113.637 127.584 113.968 127.401 114.248 127.277C115.048 126.923 115.893 127.156 116.679 126.953C117.202 126.82 117.519 127.034 117.847 127.388Z" />
                  <path d="M91.7672 24.8247C91.547 24.6914 91.3267 24.5567 91.0847 24.4087C91.1914 24.3453 91.2532 24.2747 91.3141 24.2755C92.2508 24.2918 93.1886 24.214 94.1227 24.389C94.7102 24.499 95.2887 24.5664 95.4832 25.2642C95.6155 25.7395 96.5858 25.7315 96.1984 26.507C96.6387 27.1399 96.321 27.7134 96.0335 28.2693C96.3799 28.5727 96.7377 28.8211 97.0145 29.1413C97.3269 29.5007 97.1767 30.157 96.7095 30.7302C96.6033 30.8604 96.3966 30.9421 96.3498 31.0845C95.9876 32.1812 95.9964 32.1824 94.9713 32.2693C94.4601 32.312 93.9473 32.41 93.4379 32.3949C92.8165 32.3769 92.3452 32.5594 91.8854 32.9972C91.2027 33.647 90.29 33.8676 89.4099 33.6518C88.6128 33.4571 88.0808 32.8153 87.8304 31.9216C88.401 31.7779 88.9702 31.6335 89.7678 31.4315C89.1539 31.1676 88.7378 30.9967 88.3291 30.8104C87.922 30.6261 88.0252 30.6171 88.0117 29.8426C88.0021 29.2882 88.5441 28.7258 88.0154 28.1815C88.1945 27.7162 88.3745 27.2513 88.554 26.7849C88.8844 25.9237 89.299 25.2133 90.4096 25.223C90.8495 25.2269 91.2921 24.9722 91.7672 24.8247Z" />
                  <path d="M44.107 152.712C43.459 153.621 42.5969 153.667 41.933 153.49C41.084 153.264 40.1846 153.198 39.3681 152.77C38.3108 152.216 37.1992 151.745 36.0708 151.357C35.5233 151.169 35.277 150.66 34.7775 150.454C34.6477 150.401 34.4752 150.114 34.5167 150.032C34.8351 149.394 34.2607 148.779 34.5511 148.091C34.7441 147.636 34.5125 147.001 34.4652 146.377C35.1831 146.091 35.0212 144.756 36.3034 144.825C36.9667 145.426 37.9354 145.056 38.829 145.173C38.9537 145.19 39.1033 145.116 39.2089 145.16C40.4687 145.689 41.7218 146.232 43.0851 146.818C42.8176 146.944 42.7019 146.999 42.4138 147.134C42.7381 147.192 42.9584 147.302 43.078 147.234C43.206 147.162 43.2123 146.897 43.3284 146.767C43.3808 146.708 43.5787 146.75 43.6947 146.791C43.7479 146.809 43.8138 146.971 43.7879 147.008C43.5956 147.289 43.3815 147.557 43.1557 147.853C43.5492 148.291 43.9691 148.758 44.2831 149.108C44.1087 149.443 44.004 149.643 43.8999 149.842C44.4206 149.637 44.3732 150.11 44.5331 150.357C44.6949 150.608 44.9019 150.83 45.0765 151.049C44.6463 151.811 44.0031 151.888 43.2288 151.808C43.5289 152.116 43.7977 152.394 44.107 152.712Z" />
                  <path d="M142.716 84.3152C142.415 84.9644 141.971 85.5099 142.563 86.1407C141.625 86.3733 141.096 86.221 140.769 85.4333C140.544 84.8894 140.167 84.4326 140.038 83.808C139.926 83.2613 139.343 82.8277 139.086 82.2877C138.888 81.8727 138.872 81.3703 138.776 80.9068C138.933 80.8421 139.103 80.7729 139.37 80.6632C139.426 80.9259 139.482 81.1839 139.537 81.442C139.598 81.442 139.658 81.4414 139.718 81.4414C139.797 81.132 139.876 80.8232 139.964 80.4756C140.132 80.4449 140.508 80.4876 140.713 80.3201C141.944 79.3147 143.426 78.9719 144.92 78.6814C145.41 78.5859 145.939 78.7078 146.448 78.6805C147.705 78.6135 147.954 78.5635 148.829 79.1248C149.462 79.5304 150.135 79.9671 150.461 80.741C150.589 81.0465 150.808 81.4079 151.083 81.5396C151.779 81.8718 151.726 82.3095 151.443 82.8658C151.364 83.0212 151.312 83.1991 151.287 83.3727C151.127 84.4857 151.054 84.5767 150.076 84.7453C148.627 84.9954 147.181 84.791 145.738 84.6785C144.719 84.599 143.705 84.4371 142.716 84.3152Z" />
                  <path d="M121.835 94.4787C121.131 95.0122 120.474 95.576 119.647 95.9019C118.103 96.5084 116.595 97.223 115.016 97.716C113.357 98.2345 111.689 98.8214 109.998 98.8377C109.465 98.5303 110.375 98.0553 109.719 97.7567C109.532 97.6711 109.548 97.1292 109.479 96.7951C109.308 95.9655 109.387 95.5771 110.082 95.3249C110.767 95.0762 111.171 94.6209 111.556 94.0752C112.151 93.2323 113.138 92.8985 113.918 92.2932C114.751 91.6455 115.766 91.3648 116.718 90.9566C117.21 90.7452 117.662 90.4132 118.169 90.2677C118.679 90.1213 119.256 90.0328 119.767 90.1229C120.078 90.1783 120.414 90.5741 120.573 90.8986C120.769 91.2989 121.163 91.618 121.113 92.1498C121.083 92.4573 121.401 92.5488 121.627 92.7083C121.887 92.8917 122.2 93.1206 121.628 93.4621C121.229 93.7011 121.459 94.1453 121.835 94.4787Z" />
                  <path d="M136.472 40.1805C135.254 41.3715 133.878 41.518 132.535 41.6733C131.354 41.8095 130.155 41.8815 128.967 41.8493C127.781 41.8178 126.52 42.1082 125.38 41.2466C126.412 40.6056 127.599 41.2053 128.793 40.6764C127.433 40.2827 126.149 40.5244 124.646 40.2742C125.098 39.9209 125.262 39.7928 125.462 39.6353C125.258 39.5008 125.044 39.3595 124.83 39.2197C124.923 38.805 125.013 38.3963 125.12 37.9146C125.36 37.8766 125.706 37.8427 126.045 37.7685C127.361 37.483 127.358 37.4765 128.384 36.3706C128.499 36.2468 128.642 36.1471 128.783 36.0505C129.857 35.3143 130.973 34.7028 132.323 34.6237C132.822 34.5945 133.697 34.6377 134.13 34.8381C134.231 34.8855 134.388 34.8517 134.506 34.8136C134.808 34.7182 134.959 34.8855 134.986 35.129C135.063 35.8387 135.59 36.3584 135.751 37.0273C135.82 37.3139 136.018 37.4446 136.268 37.5987C136.608 37.8088 136.773 38.7242 136.554 39.022C136.418 39.2073 135.984 39.1778 136.142 39.5774C136.225 39.7875 136.359 39.977 136.472 40.1805Z" />
                  <path d="M89.1868 68.5912C89.1283 68.8288 89.0665 69.0775 88.9818 69.4213C89.2737 69.3968 89.4812 69.3789 89.6988 69.3603C90.0427 70.2228 90.4007 71.1207 90.7703 72.0465C90.7254 72.1509 90.6515 72.2704 90.6217 72.3998C90.2729 73.9381 89.0565 74.5392 87.7415 74.9115C86.7142 75.2023 85.6469 75.3732 84.5538 75.3933C83.8714 75.4058 83.2459 75.41 82.5487 74.8918C83.6848 74.868 84.6962 74.8464 85.7081 74.825C85.7152 74.7469 85.7228 74.669 85.73 74.5905C85.5555 74.5525 85.3806 74.4828 85.2057 74.4815C84.4829 74.4761 83.7589 74.5119 83.0375 74.4893C82.7178 74.4794 82.2782 74.5636 82.4035 73.9216C82.4423 73.7236 82.0972 73.4494 81.9251 73.2115C81.7741 73.0031 81.6191 72.7975 81.4964 72.631C81.6972 72.0138 82.2189 72.2314 82.5924 71.9533C82.2284 71.8989 81.8643 71.8444 81.3851 71.7731C81.3163 71.5184 81.2243 71.178 81.1317 70.8375C81.3599 70.7457 81.705 70.6424 81.3216 70.2442C80.9076 69.813 80.8464 69.4125 81.3985 69.0434C81.4488 69.0099 81.5136 68.9234 81.5016 68.8819C81.2679 68.0789 81.9048 67.9389 82.3962 67.825C83.5707 67.5539 84.7755 67.7065 85.9641 67.7529C86.2432 67.7636 86.8916 67.8044 86.6283 68.4913C86.6133 68.5302 86.8108 68.6498 86.9092 68.7313C87.0037 68.6053 87.2057 68.436 87.1746 68.3592C86.9577 67.8173 87.5411 67.8264 87.6121 67.9011C88.0494 68.3589 88.7933 68.0534 89.1868 68.5912Z" />
                  <path d="M60.1016 61.539C60.3147 61.4539 60.5285 61.3688 60.8524 61.2392C60.5112 61.0434 60.2297 60.8815 59.9227 60.7049C60.0379 60.1352 60.1316 59.537 60.2859 58.9549C60.3792 58.6032 60.5307 58.2545 60.7233 57.9465C60.8705 57.7119 61.2541 58.1107 61.4967 57.6593C61.6536 57.3676 62.2689 57.356 62.7202 57.2946C63.0866 57.2445 63.6041 57.7777 63.8523 57.0964C64.2742 57.2508 64.6967 57.4053 65.1192 57.5587C65.16 57.5741 65.2036 57.5818 65.2463 57.5929L67.9449 56.5169C68.0318 56.3148 68.0978 56.0893 68.2179 55.8986C68.4042 55.6051 68.8627 55.4 68.987 55.6448C69.2632 56.1896 69.838 55.6729 70.0797 56.0798C69.9519 57.1887 69.8514 57.5124 69.368 58.2516C69.8868 58.2374 70.339 58.2252 70.9073 58.2103C70.9749 58.3905 71.2012 58.687 71.129 58.8524C70.6711 59.8956 70.4631 61.1112 69.3192 61.7249C69.0088 61.8911 68.7195 62.1288 68.3887 62.2194C67.6341 62.4266 66.8621 62.5703 66.0936 62.7251C65.7148 62.8013 65.3278 62.839 64.9464 62.9046C64.3558 63.0062 63.7289 62.6314 63.1623 63.0394C62.6383 62.7154 62.0791 62.8492 61.5094 62.8433C60.7353 62.8355 60.1804 62.3956 60.1016 61.539Z" />
                  <path d="M24.4201 92.6484C24.6329 92.1533 24.778 91.8144 24.9238 91.4764C25.1196 91.0237 25.2545 90.5005 25.954 90.6782C26.0315 90.6982 26.2157 90.5766 26.2389 90.4905C26.3899 89.9196 26.957 89.9985 27.3212 89.766C28.3098 89.1352 29.3635 89.4325 30.3814 89.6063C30.9619 89.7052 31.2661 90.0374 31.367 90.7899C31.4803 91.6344 31.3685 92.5824 31.9007 93.3574C31.7336 93.768 32.2272 94.3747 31.5132 94.6312C31.41 94.6685 31.3196 94.8107 31.2728 94.9246C30.6145 96.5411 29.2628 97.1487 27.6753 97.459C26.8702 97.6168 26.0852 97.9101 25.2473 97.7475C24.9035 97.6809 24.5639 97.5824 24.2334 97.4668C24.1247 97.4295 23.9688 97.2891 23.9739 97.204C24.0206 96.4599 23.6721 95.7544 23.717 95.0325C23.7728 94.1427 24.0445 93.2821 24.4201 92.6484Z" />
                  <path d="M85.1622 121.171C85.5341 121.11 85.8079 121.066 86.3399 120.98C85.923 120.73 85.7815 120.643 85.6369 120.56C85.1575 120.288 85.158 120.289 85.3668 119.625C85.3927 119.542 85.456 119.424 85.423 119.376C85.0904 118.889 85.1571 118.381 85.4916 117.983C85.8704 117.531 86.3053 117.059 86.8188 116.802C88.8218 115.798 90.9977 115.636 93.1932 115.728C93.5675 115.744 93.9306 116.025 94.2939 116.181C94.1918 116.36 94.1118 116.501 94.0312 116.643C94.5005 116.807 94.794 117.055 94.6726 117.634C94.6365 117.807 94.781 118.128 94.9349 118.213C95.4606 118.503 94.9509 118.951 95.152 119.271C94.5173 119.37 94.89 120.17 94.381 120.37C93.8938 120.561 93.4312 120.911 92.9335 120.962C91.8375 121.074 90.7144 121.149 89.6272 121.024C89.0712 120.959 88.6498 121.037 88.2631 121.32C87.6363 121.781 86.9717 122.063 86.1902 122.083C85.5378 122.1 85.5384 122.113 85.1622 121.171Z" />
                  <path d="M80.624 91.0137C80.4978 90.9595 80.3092 90.9142 80.1693 90.8056C80.0759 90.7328 80.0816 90.5217 79.9874 90.4624C79.8844 90.3978 79.702 90.4728 79.5812 90.4225C79.4742 90.3776 79.4078 90.1714 79.3165 90.1668C79.1486 90.1582 78.9628 90.2206 78.8091 90.3009C78.7068 90.354 78.6473 90.4902 78.5292 90.6391C78.8385 90.6783 79.0875 90.7098 79.3374 90.741C78.8711 91.072 78.4389 91.4767 77.8741 90.974C78.033 90.8226 78.19 90.6744 78.384 90.4901C77.622 90.0765 77.7186 90.9893 77.2214 91.1111C77.4485 90.7176 77.2817 90.3187 77.5163 89.9257C77.625 89.7434 77.3224 89.3152 77.1692 88.8985C77.6818 88.6315 78.256 88.332 78.928 87.9818C78.6288 87.7908 78.4158 87.6546 78.1564 87.489C78.3006 86.8287 78.4488 86.1517 78.5983 85.4672C79.1525 85.3208 79.6398 85.2295 80.0983 85.0602C80.495 84.9128 80.8412 84.6246 81.2407 84.49C82.3684 84.1105 83.5386 84.2218 84.6843 84.3589C85.0944 84.4076 85.7209 84.5368 85.5193 85.274C86.1887 85.5579 85.9856 86.305 86.2724 86.8047C86.6314 87.4307 86.4199 88.1743 85.7862 88.8025C84.8371 89.7432 83.6269 90.1093 82.4489 90.4644C81.859 90.6417 81.2743 90.8744 80.624 91.0137Z" />
                  <path d="M106.096 77.1603C106.254 76.9853 106.406 76.8162 106.581 76.6227C105.532 76.1173 104.758 77.0928 103.708 76.8237C103.903 76.6426 104.023 76.4785 104.184 76.3917C104.444 76.2527 104.73 76.1649 105.107 76.0146C104.533 75.8743 104.384 75.881 103.886 76.029C103.366 75.0139 103.366 75.0139 103.702 74.2241C104.377 74.0006 105.18 73.9069 105.758 73.497C106.396 73.0447 107.114 73.1391 107.767 72.884C108.392 72.6407 109.114 72.6108 109.798 72.5656C110.173 72.5403 110.623 72.5754 110.924 72.7656C111.305 73.0064 111.83 73.4387 111.822 73.7773C111.809 74.3347 112.191 74.3728 112.415 74.6465C112.722 75.021 112.985 75.4664 112.849 76.0171C112.769 76.3387 112.844 76.7949 112.651 76.9726C112.178 77.4048 111.632 77.8263 111.04 78.0411C109.921 78.4463 108.756 78.7382 107.592 78.9962C107.301 79.0612 106.941 78.8189 106.48 78.6772C106.745 78.538 106.849 78.4825 107.071 78.3649C106.383 78.1795 106.405 77.5177 106.096 77.1603Z" />
                  <path d="M149.811 103.865C149.471 104.129 149.308 104.257 149.148 104.381C150.058 105.11 150.08 105.204 149.346 105.888C149.96 105.888 150.451 105.887 150.985 105.887C151.019 106.162 151.052 106.444 151.087 106.729C150.499 106.964 149.902 107.202 149.249 107.462C149.749 108.003 150.36 107.369 150.926 107.701C150.729 108.42 150.098 108.615 149.506 108.824C149.181 108.937 148.808 108.913 148.491 109.037C147.074 109.59 145.621 110.008 144.14 110.344C144.008 110.374 143.883 110.441 143.756 110.495C143.071 110.787 142.393 111.109 141.608 110.815C141.518 110.192 142.096 110.13 142.529 109.918C142.111 109.333 141.696 110.091 141.294 109.876C140.805 109.63 141.856 108.95 140.931 108.84L141.523 107.465C141.969 107.19 142.415 106.909 142.868 106.64C143.322 106.37 143.844 106.287 144.283 105.906C144.71 105.537 145.377 105.457 145.915 105.202C146.266 105.036 146.664 105.005 146.954 104.622C147.163 104.346 147.704 104.382 147.846 103.886C147.885 103.748 148.224 103.613 148.42 103.619C148.796 103.63 149.167 103.743 149.811 103.865Z" />
                  <path d="M61.1012 76.0729C61.3179 75.6484 61.2217 75.2495 61.6818 74.9738C61.6643 75.2069 61.6519 75.3759 61.6382 75.5603C62.2118 75.6293 62.7893 75.6799 63.358 75.7793C63.5038 75.8049 63.7352 75.9866 63.7344 76.095C63.7306 76.6971 64.2125 77.087 64.3423 77.6129C64.4001 77.8457 64.3303 78.1275 64.2577 78.3683C64.2208 78.4888 63.9888 78.5497 63.9515 78.67C63.9061 78.8166 63.9734 78.9978 63.9937 79.1815C63.1296 79.0682 63.1032 79.0437 62.4417 79.7764C62.0457 80.2148 61.4949 80.1045 61.0207 80.3322C61.1594 80.4884 61.2933 80.6392 61.4437 80.808C61.2544 80.8785 61.0397 81.0417 60.9188 80.9892C59.4082 80.3321 59.3736 80.319 58.1699 80.6199C58.6867 81.3034 59.4034 80.7273 60.0901 80.9746C59.9818 81.147 59.8845 81.4325 59.792 81.4307C58.8634 81.4162 57.9055 81.5906 57.177 80.6765C56.9508 80.3928 56.8089 80.2981 56.9548 79.9419C57.0452 79.7226 57.0179 79.4332 56.9783 79.1861C56.8766 78.5459 56.7386 77.9121 56.6032 77.2165C56.8396 77.1724 57.0585 77.1319 57.0052 77.1415C57.4833 76.8443 56.877 76.0595 57.738 76.3456C57.9825 76.4265 57.6467 75.658 58.2639 75.9232C58.5024 76.0258 58.9297 75.6902 59.2448 75.5645C59.4149 75.7309 59.5776 75.8892 59.74 76.0479C59.8102 76.0041 59.8803 75.9603 59.9507 75.9161C59.788 75.7153 59.6254 75.5146 59.4212 75.2619C59.9044 75.2009 60.1842 75.165 60.5514 75.1181C60.7213 75.4134 60.9114 75.743 61.1012 76.0729Z" />
                  <path d="M80.6889 135.08C80.1943 135.214 79.8028 135.32 79.3672 135.438C79.5787 135.684 79.7129 135.84 79.888 136.044C79.4488 136.434 78.9292 136.6 78.4143 136.711C77.276 136.954 76.1081 137.019 74.9648 137.27C74.262 137.425 73.5773 137.158 72.9441 136.705C73.0755 136.076 73.81 136.243 74.1893 135.834L72.9526 135.303C73.2161 134.335 73.47 133.403 73.7031 132.549C74.8258 132.03 75.8853 131.826 77.0023 131.838C77.6389 131.845 78.2438 131.555 78.9221 131.679C79.1903 131.728 79.3841 132.182 79.7313 131.875C79.7369 131.87 79.982 132.119 79.9789 132.122C79.4819 132.653 80.3029 133.257 79.8967 133.799C79.8701 133.834 80.0578 134.041 80.1601 134.157C80.2721 134.284 80.4204 134.383 80.5146 134.52C80.5855 134.623 80.5956 134.766 80.6889 135.08Z" />
                  <path d="M108.148 113.549C108.646 113.548 109.009 113.547 109.526 113.546C109.26 113.289 109.138 113.171 109.009 113.046C109.068 113.004 109.132 112.921 109.183 112.929C109.668 113.001 110.129 112.954 110.595 112.782C110.873 112.679 111.187 112.653 111.487 112.63C112.019 112.591 112.453 112.398 112.769 111.919C112.639 111.766 112.504 111.609 112.442 111.536C112.725 111.373 113.034 111.196 113.263 111.064C113.421 111.132 113.497 111.144 113.501 111.169C113.552 111.463 113.592 111.759 113.631 112.03C114.004 112.117 114.343 112.196 114.85 112.314C114.502 112.616 114.31 112.78 114.035 113.017C114.298 113.327 114.563 113.639 114.847 113.973C114.793 114.152 114.73 114.362 114.653 114.618L115.217 114.861C115.421 115.704 115.132 116.199 114.39 116.535C113.581 116.902 112.825 117.382 111.906 117.715C111.846 117.383 111.789 117.063 111.726 116.711C111.153 116.631 110.588 116.685 109.985 116.855C109.382 117.024 108.716 116.973 108.1 117.017C107.802 116.448 108.267 116.3 108.558 116.02C108.436 115.951 108.325 115.833 108.215 115.834C107.533 115.842 107.297 115.61 107.504 115.059C107.698 114.542 107.936 114.042 108.148 113.549Z" />
                  <path d="M97.6308 151.861C98.0372 151.784 98.3694 151.72 98.7836 151.641C98.6323 151.51 98.5523 151.384 98.4501 151.361C97.9542 151.25 97.4522 151.167 96.8842 151.062L97.2016 150.324C97.3618 150.317 97.558 150.309 97.9464 150.293L96.9086 149.846C96.9199 149.68 96.9573 149.551 96.9306 149.437C96.8685 149.177 96.6696 148.722 96.7095 148.701C97.1138 148.492 97.1249 148.025 97.3797 147.763C97.7592 147.373 98.2618 147.064 98.8544 147.326C99.0316 147.404 99.1283 147.725 99.293 147.754C99.4269 147.777 99.5942 147.463 99.7735 147.425C99.9199 147.393 100.224 147.516 100.254 147.626C100.375 148.069 100.746 148.142 101.075 148.257C101.485 148.399 101.651 148.677 101.6 149.074C101.545 149.497 101.749 149.689 102.076 149.923C102.537 150.255 102.726 150.75 102.447 151.331C102.35 151.532 102.264 151.746 102.222 151.963C102.115 152.515 101.721 153.099 101.283 153.098C100.214 153.093 99.1212 153.283 98.1023 152.722C97.7051 152.503 97.6946 152.203 97.6308 151.861Z" />
                  <path d="M92.2876 101.301C92.5161 101.026 92.7542 100.737 93.0472 100.383C92.7116 100.035 92.3404 99.8155 91.8189 100.021C91.6057 99.4014 92.3431 99.3675 92.4646 98.9026C92.2617 98.7673 92.0484 98.6243 91.839 98.4847C91.62 97.9855 92.4279 97.9674 92.2869 97.4173C92.1424 96.8547 92.8921 97.0506 93.127 96.7261C93.2588 96.5439 93.55 96.4455 93.7889 96.3776C94.5789 96.1522 95.4387 96.4334 96.2258 96.0107C96.4139 95.9095 96.7983 96.1718 97.1862 96.2978C96.5302 96.8596 97.6415 97.3886 97.0789 97.9596C97.3296 98.3174 98.0343 98.3841 97.7766 99.1877C97.6028 99.2096 97.3304 99.2437 96.9421 99.2919C97.1983 99.5854 97.3227 99.7276 97.4507 99.8738C97.3674 100.35 96.9097 100.388 96.6116 100.428C95.6193 100.56 94.7525 100.912 93.9404 101.499C93.4407 101.861 92.8523 101.924 92.2876 101.301Z" />
                  <path d="M55.8827 92.9763C56.0945 93.7776 56.251 94.3684 56.4534 95.1314L55.9946 96.1986C55.2153 96.3557 54.3668 96.151 53.6074 96.5503C52.7432 96.255 51.9761 96.6106 51.177 96.8626C50.9224 96.9425 50.5841 96.7563 50.2094 96.6756C50.237 96.4701 50.3187 96.2901 50.2706 96.1568C49.7781 94.7901 50.6854 94.0919 51.6411 93.5822C52.4568 93.147 53.3994 92.8889 54.3159 92.7261C54.8352 92.6335 55.4167 92.8919 55.8827 92.9763Z" />
                </svg>
              </figure>

              <div className="mac_scaler">
                <div className="mac_holder">
                  <div className="mac_screen">
                    <div className="mac_camera"></div>
                    <Jarallax
                      className="mac_screen_content"
                      options={{
                        videoSrc: 'https://www.youtube.com/watch?v=OQQ4a4Os6cE',
                      }}></Jarallax>
                  </div>
                  <div className="mac_bottom">
                    <div className="mac_bottom_top_half">
                      <div className="mac_thumb_space"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-7">
              <p className="lead mx-md-7 mb-5">
                We provide digital transformation solutions, enabling companies to make their visions. Far shed each high read are men over day.
              </p>

              <div className="d-grid d-sm-flex justify-content-center gap-2 gap-sm-4 mb-1">
                <Link href="/auth/sign-up" className="btn btn-lg btn-dark mb-0">
                  Sign up and start design
                </Link>
                <Link href="/contact/v1" className="icon-link icon-link-hover heading-color text-primary-hover m-auto m-sm-0 mb-0">
                  Let&apos;s do this!
                  <BsArrowRight className="bi" />
                </Link>
              </div>
              <span className="small">Start a free trial. *No credit card required</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourVideo
