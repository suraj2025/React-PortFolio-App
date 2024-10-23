

import data from "./data"
const Projects = () => {



    return (
       <section id="project" className="px-4 md:px-16 flex flex-col items-center justify-center py-16 bg-black text-white">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-600 border-b-4 border-green-400">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data.map((d, id) => (
            <div key={id} className="w-full m-3 md:m-5 rounded-2xl overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-40 md:h-48 object-cover" src={d.imageSrc} alt={d.title} />
                <div className="px-4 py-3">
                    <div className="font-bold text-lg md:text-xl mb-2">{d.title}</div>
                    <p className="text-sm md:text-base">
                        {d.desc}
                    </p>
                </div>
                <div className="px-4 pt-3 pb-4">
                    <a href={d.demoUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded mr-2">
                            Demo
                        </button>
                    </a>
                    <a href={d.souceCodeUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-3 rounded">
                            Source Code
                        </button>
                    </a>
                </div>
            </div>
        ))}
    </div>
</section>




    );
}

export default Projects;
