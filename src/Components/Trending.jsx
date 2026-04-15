export default function Trending() {
    const images = [
        "pic1.jpeg",
        "pic2.webp",
        "pic3.jpg",
        "pic4.jpg",
        "pic5.avif"
    ]

    return (
        <div className="trending">
            <h2>Trending Now</h2>

            <div className="slider">
                {images.map((img, index) => (
                    <div className="card" key={index}>
                        <span className="number">{index + 1}</span>
                        <img src={`/${img}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}