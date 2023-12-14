import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Events() {
    const events = [
        "Event 1",
        "Event 2",
        "Event 3",
        "Event 4",
        "Event 5",
        "Event 6",
        "Event 7",
        "Event 8",
        "Event 9",
        "Event 10",
    ];

    return (
        <>
            <h1 className="font-extrabold text-center text-2xl uppercase py-3 tracking-[.25em]">
                Raja Jalur Knights
            </h1>
            <Navbar />
            <div className="content flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 mx-20 px-10 py-12 rounded-lg my-6">
                <Sidebar />
                <div className="main-content pl-4">
                    <h3 className="text-2xl font-bold pb-2">
                        Event dan Aktivitas
                    </h3>
                    <p className="text-md pb-4">
                        Berikut adalah beberapa event dan aktivitas yang kami
                        selenggarakan.
                    </p>
                    {events.map((event, index) => (
                        <div
                            className="w-full py-2"
                            key={index}
                        >
                            <p className="text-xl font-bold pb-2">{event}</p>
                            <p className="text-md">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore, aperiam eius, tenetur
                                delectus voluptatum, numquam excepturi facere
                                voluptate porro nihil quisquam nam blanditiis.
                                Animi nihil suscipit fugiat quod cupiditate id
                                autem. Architecto velit mollitia id sint officia
                                quos cumque nisi aspernatur nobis minus,
                                reiciendis illum repudiandae nostrum vero!
                                Laboriosam earum ullam incidunt, aliquid quae
                                quasi animi velit odio est illum, repudiandae a
                                placeat ratione sequi corrupti sit nostrum error
                                reiciendis ipsam quos soluta nemo accusantium?
                                Delectus praesentium velit ipsa explicabo
                                perferendis tenetur quaerat officiis sequi sed
                                itaque? Explicabo sapiente perferendis
                                veritatis! Iusto nulla labore incidunt
                                consectetur, iste, dolore commodi temporibus,
                                dicta tempora quia laudantium ab! Ipsam,
                                temporibus? Magnam odit quaerat ipsam ratione
                                qui optio iste cum nobis quas modi? Nihil
                                consequatur doloribus neque voluptate facilis
                                odio dolorum pariatur nulla eligendi molestias
                                debitis, eveniet cupiditate aut ad deleniti?
                                Ipsum architecto inventore mollitia totam sequi
                                deleniti rem incidunt ipsam accusantium earum
                                dolores error maxime, facere culpa, distinctio
                                optio sint quia iusto nobis natus. Autem enim
                                cum at iusto sunt voluptas eos maxime,
                                necessitatibus dolor voluptate quas tempora nisi
                                dicta incidunt temporibus. Ab, animi molestias
                                vitae cum nemo, est id, maiores quia dolores
                                sunt cupiditate quibusdam placeat neque dolore
                                sapiente perspiciatis labore. Earum.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;
