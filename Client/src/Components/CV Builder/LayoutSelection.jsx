


import { Link } from "react-router-dom"


const LayoutSelection = () => {

    const DesignLayout = [
        {
            name: "Normal Layout",
            img: "professional.png",
            Link: '/normalDesign'
        },
        {
            name: "Professional",
            img: "professional.png",
            Link: '/design'
        },
        {
            name: "Comming soon",
            img: "comming soon",
            Link: '#'
        },

    ]


    return (
        <>
            
            <div className="body h-dvh w-full flex justify-center items-center bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">

                {DesignLayout.map((layout, index) => (

                    <div key={index} className="cards w-fit bg-gray-800 p-4 h-fit m-2 rounded-xl shadow-2xl transition-transform transform hover:scale-105">
                        <img src={layout.img} alt={layout.name} className="w-55 h-90 object-fill  rounded-md" />
                        <h1 className="font-semibold text-center mt-2 text-white text-lg">{layout.name}</h1>
                        <Link to={layout.Link}> <button className="w-full bg-green-500 mt-4 p-2 text-white rounded hover:bg-indigo-600 transition duration-300">Select</button>
                        </Link>
                    </div>
                ))}
            </div>
          



        </>

    )
}

export default LayoutSelection

