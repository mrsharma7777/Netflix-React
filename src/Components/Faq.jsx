import { useState } from "react"

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const faqs = [
        {
            q: "What is Netflix?",
            a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more."
        },
        {
            q: "How much does Netflix cost?",
            a: "Plans range from affordable monthly pricing depending on your region."
        },
        {
            q: "Where can I watch?",
            a: "You can watch anywhere on mobile, tablet, laptop, and TV."
        },
        {
            q: "How do I cancel?",
            a: "You can cancel anytime from your account settings."
        }
    ]

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
                <div
                    className={`faq-box ${activeIndex === index ? "active" : ""}`}
                    key={index}
                >
                    <div className="question" onClick={() => toggleFAQ(index)}>
                        {faq.q}
                        <span>+</span>
                    </div>

                    <div className="answer">
                        {faq.a}
                    </div>
                </div>
            ))}
        </section>
    )
}