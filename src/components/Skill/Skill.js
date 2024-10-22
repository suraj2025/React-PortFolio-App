
import { Html, Css, Js, React, Node, Mongo, Postman, Java, Bootstrap, Redux, Tailwind, Ts } from "../../assets/skills/index"


const Work = () => {
  const skills = [
    {
      title: "HTML",
      imageSrc: Html,
    },
    {
      title: "CSS",
      imageSrc: Css,
    },
    {
      title: "JavaScript",
      imageSrc: Js,
    },
    {
      title: "React",
      imageSrc: React,
    },
    {
      title: "Node",
      imageSrc: Node,
    },
    {
      title: "MongoDB",
      imageSrc: Mongo,
    },
    {
      title: "Java",
      imageSrc: Java,
    },
    {
      title: "Bootstrap",
      imageSrc: Bootstrap,
    },
    {
      title: "Postman",
      imageSrc: Postman,
    },
    {
      title: "Redux",
      imageSrc: Redux,
    },
    {
      title: "Tailwind CSS",
      imageSrc: Tailwind,
    },
    {
      title: "TypeScript",
      imageSrc: Ts,
    },
  ];


  return (
    <section id='skill' className="flex flex-col items-center justify-center py-16 bg-black text-white">
  <h2 className='text-4xl font-semibold mb-8 text-blue-600 border-b-4 border-green-400'>Skills</h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
    {skills.map((skill, id) => (
      <div key={id} className="flex flex-col items-center bg-gray-800 p-8 rounded-full h-36 w-36 justify-center">
        <img src={skill.imageSrc} alt={skill.title} className="w-22 h-22 mb-4 " />
        <p className="text-sm font-semibold">{skill.title}</p>
      </div>
    ))}
  </div>
</section>



  );
}

export default Work;
