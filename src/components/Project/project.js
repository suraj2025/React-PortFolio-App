

import data from "./data"
const Projects = () => {



    return (
        <section id='project' className="px-16 flex flex-col items-center justify-center py-16 bg-black text-white">
            <h2 className='text-4xl font-semibold mb-8 text-blue-600 border-b-4 border-green-400'>Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((d, id) => (
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 m-4">
                        <img className="w-full h-48 object-cover" src={d.imageSrc} alt={d.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{d.title}</div>
                            <p className=" text-base">
                                {d.desc}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href={d.demoUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Demo
                                </button>
                            </a>
                            <a href={d.souceCodeUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
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
