import AboutInfo from '@/widgets/AboutInfo'
import HomeJoin from '@/widgets/HomeJoin'

export default function Page() {
  return (
    <main>
      <AboutInfo data={aboutData}/>
      <HomeJoin />
    </main>
  )
}

const aboutData = {
  title: "About Us",
  title_sub: "Welcome to EducationTechPlus",
  content:"<p>At EducationTechPlus, we are dedicated to reshaping the landscape of education through cutting-edge technology. Our mission is simple yet ambitious: to revolutionize the way students learn, educators teach, and parents engage in the educational journey.</p><p>Through innovative digital solutions and interactive resources, we aim to empower learners of all ages and backgrounds to unlock their full potential and achieve academic excellence. With EducationTechPlus, education transcends the confines of traditional classrooms, enabling seamless access to high-quality learning experiences anytime, anywhere.</p><p>Step into the future of education with EducationTechPlus, where every click opens a world of endless possibilities. Join us as we embark on this transformative journey together, shaping the minds of tomorrow and paving the way for a brighter future through the power of technology.</p><p>Witness the magic of learning come to life with EducationTechPlus. Experience the thrill of discovery, the joy of mastery, and the satisfaction of growth as students actively engage with our interactive tools and resources. From dynamic virtual labs to immersive simulations and personalized learning paths, EducationTechPlus offers a diverse array of educational experiences tailored to suit every learner's unique needs and preferences.</p><p>Through captivating visuals and inspiring videos, we invite you to witness firsthand the transformative impact of EducationTechPlus on students' lives. See how our interactive tools ignite curiosity, foster creativity, and instill a lifelong love for learning in students across the globe.</p><p>Join us in revolutionizing education through technology. Together, we can redefine the future of learning and empower generations to thrive in an ever-evolving world. Welcome to EducationTechPlus - where innovation meets education, and limitless possibilities await.</p>",
}



