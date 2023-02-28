// why slider is not workin 
import './review.scss';
import { Reviewcard } from './Reviewcard';
export function Review() {

    const data = [{
        name: "Mohit Sharma",
        img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        review: "I absolutely love the free generator tools! They make designing so much easier and more fun. The shapes and gradient textures are top-notch and really enhance my projects. I especially love the intuitive user interface, which makes creating new designs a breeze. I would definitely recommend this product to anyone looking to up their design game.",
        place: "Delhi, India"
    }, {
        name: "Shivani Jain",
        img: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
        review: "The courses offered are fantastic. I took the paid course and learned so much. The instructor was knowledgeable and the lessons were well-structured. I appreciated the hands-on approach, which allowed me to put my newfound skills into practice right away. The interactive quizzes and projects were also a great touch. I highly recommend this product to anyone looking to improve their design skills.",
        place: "Rajasthan, India"
    }, {
        name: "Jhon Doxy",
        img: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
        review: "The websites for sale are beautifully designed and very user-friendly. I was impressed by the attention to detail and the functionality of each site. The customization options made it easy for me to create a unique website that perfectly fit my brand. The customer support was also excellent, and they were very responsive to any questions I had. I would definitely recommend this product to anyone looking for a high-quality website.",
        place: "Austin, United States"
    }, {
        name: "Alex Tova",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        review: "I was pleasantly surprised by the quality of the free courses. They are packed with useful information and delivered in a way that is easy to understand. The interactive elements and real-world examples really helped to drive the lessons home. I was also impressed by the variety of courses offered, from basics to advanced topics. I will definitely be checking out more of them in the future.",
        place: "Plano ,United States"
    }, {
        name: "Mohit Doxy",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
        review: "The generator tools are a game-changer for me. I can now create unique designs in minutes that used to take me hours. I love the variety of options available, from shapes and textures to colors and patterns. The drag-and-drop interface is also very user-friendly, even for someone like me who is not very tech-savvy. I'm so glad I discovered this product.",
        place: "Austin, United States"
    }]

    const slides = document.querySelectorAll('.card');
    const parent = document.querySelector('.reviewSlider');
    var controller = -1;
    console.log(controller)
    slides.forEach((element, index) => {
        element.style.left = `${index * 50}%`;
    })
    setInterval(() => {
        controller++
        parent.style.transform = `translateX(-${controller * 50}%)`;

        if (controller === 3) {
            controller = -1
        }
    }, 3000)

    return (
        <div className="review">
            <h2>What Our Users Say</h2>
            <p>Here we build trust. we assure you your investment will become worth it.</p>
            
            <div className="reviewSlider">
                <Reviewcard data={data} />
            </div>
        </div>
    )
}