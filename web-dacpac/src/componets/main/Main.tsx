import Form from '../form/Form'
import ImagesCarousel from '../images_carousel/ImagesCarousel'
import './Main.css'

const images = [
  '/image_01.jpg',
  '/image_02.jpg',
  '/image_03.jpg',
  '/image_04.jpg',
];

export default function Main() {
    return <main>
      <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center py-4">
        <Form />
        <ImagesCarousel images={images} />
      </div>
      <div>FAQ</div>
    </main>
}