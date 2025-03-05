import type { BlogType } from './types'
import blog3 from '@/assets/images/blog/03.jpg'

import blogImg1 from '@/assets/images/blog/blog-1.jpg'
import blogImg2 from '@/assets/images/blog/blog-2.png'
import blogImg3 from '@/assets/images/blog/blog-3.webp'
import blogImg4 from '@/assets/images/blog/blog-4.jpg'
import blogImg5 from '@/assets/images/blog/blog-5.jpg'

export const blogSlides: BlogType[] = [
  {
    title: 'Hijau dan Bersih: Komitmen AiROS Terhadap Produksi Ramah Lingkungan',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    category: 'Marketing',
    image: blogImg1,
    date: 'Jan 5, 2025',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    title: 'Hidrasi dan Kesehatan: Mengapa Kualitas Air Penting',
    category: 'Lifestyle',
    image: blogImg2,
    date: 'Jan 5, 2025',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    title: 'Bagaimana AiROS Menjamin Kemurnian di Setiap Tetes',
    category: 'Design',
    image: blog3,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
]

export const blogs: BlogType[] = [
  {
    title: 'Hijau dan Bersih: Komitmen AiROS Terhadap Produksi Ramah Lingkungan',
    description: 'Di balik setiap botol dan galon AiROS yang Anda nikmati, ada komitmen kuat terhadap kelestarian..',
    category: 'Technology',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    image: blogImg1,
  },
  {
    title: 'Hidrasi dan Kesehatan: Mengapa Kualitas Air Penting',
    description: 'Hidrasi yang baik adalah kunci untuk menjaga kesehatan tubuh kita.',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    image: blogImg2,
  },
  {
    title: 'Bagaimana AiROS Menjamin Kemurnian di Setiap Tetes',
    description: "Reverse osmosis (RO) adalah salah satu teknologi penyaringan air paling.",
    category: 'Marketing',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    image: blogImg3,
  },
  {
    title: 'Manfaat Utama Minum Air Demineral',
    description: 'Minum air demineral seperti AiROS memiliki berbagai manfaat.',
    category: 'Research',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    image: blogImg4,
  },
  {
    title: 'Ilmu di Balik Air Demineral: Apakah Ini Tepat untuk Anda?',
    description: 'Air demineral adalah air yang telah melalui proses penghilangan mineral.',
    category: 'Design',
    publishedBy: {
      firstName: 'Yoga',
      lastName: 'Chandra',
    },
    image: blogImg5,
  },
]
