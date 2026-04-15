import { useState } from "react"

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("tab-1")

    return (
        <>

            <section className="tabs">
                <div className="container">

                    <div
                        id="tab-1"
                        className={`tab-item ${activeTab === "tab-1" ? "tab-border" : ""}`}
                        onClick={() => setActiveTab("tab-1")}
                    >
                        <i className="fas fa-door-open fa-3x"></i>
                        <p className="hide-sm">Cancel Anytime</p>
                    </div>

                    <div
                        id="tab-2"
                        className={`tab-item ${activeTab === "tab-2" ? "tab-border" : ""}`}
                        onClick={() => setActiveTab("tab-2")}
                    >
                        <i className="fas fa-tablet-alt fa-3x"></i>
                        <p className="hide-sm">Watch anywhere</p>
                    </div>

                    <div
                        id="tab-3"
                        className={`tab-item ${activeTab === "tab-3" ? "tab-border" : ""}`}
                        onClick={() => setActiveTab("tab-3")}
                    >
                        <i className="fas fa-tags fa-3x"></i>
                        <p className="hide-sm">Pick your price</p>
                    </div>

                </div>
            </section>


            <section className="tab-content">
                <div className="container">


                    {activeTab === "tab-1" && (
                        <div id="tab-1-content" className="tab-content-item show">
                            <div className="tab-1-content-inner">
                                <div>
                                    <p className="text-lg">
                                        If you decide Netflix isn't for you - no problem. No commitment.
                                        Cancel online anytime.
                                    </p>
                                    <a href="#" className="btn btn-lg">Watch Free for 30 days</a>
                                </div>
                                <img src="/tab-content-1.png" alt="" />
                            </div>
                        </div>
                    )}


                    {activeTab === "tab-2" && (
                        <div id="tab-2-content" className="tab-content-item show">

                            <div className="tab-2-content-top">
                                <p className="text-lg">
                                    Watch TV shows and movies anytime, anywhere - personalized for you.
                                </p>
                                <a href="#" className="btn btn-lg">Watch Free for 30 days</a>
                            </div>

                            <div className="tab-2-content-bottom">

                                <div>
                                    <img src="/tab-content-2-1.png" alt="" />
                                    <p className="text-md">Watch on your TV</p>
                                    <p className="text-dark">
                                        Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                                        Blu-ray players and more.
                                    </p>
                                </div>

                                <div>
                                    <img src="/tab-content-2-2.png" alt="" />
                                    <p className="text-md">Watch instantly or download for later</p>
                                    <p className="text-dark">
                                        Available on phone and tablet, wherever you go
                                    </p>
                                </div>

                                <div>
                                    <img src="/tab-content-2-3.png" alt="" />
                                    <p className="text-md">Use any computer</p>
                                    <p className="text-dark">
                                        Watch right on Netflix.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    )}


                    {activeTab === "tab-3" && (
                        <div id="tab-3-content" className="tab-content-item show">

                            <div className="text-center">
                                <p className="text-lg">
                                    Choose one plan and watch everything on Netflix
                                </p>
                                <a href="#" className="btn btn-lg">Watch Free For 30 days</a>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Basic</th>
                                        <th>Standard</th>
                                        <th>Premium</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Monthly price</td>
                                        <td>$8.99</td>
                                        <td>$12.99</td>
                                        <td>$15.99</td>
                                    </tr>

                                    <tr>
                                        <td>HD Available</td>
                                        <td>❌</td>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>

                                    <tr>
                                        <td>Ultra HD Available</td>
                                        <td>❌</td>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>

                                    <tr>
                                        <td>Cancel anytime</td>
                                        <td>✔</td>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}