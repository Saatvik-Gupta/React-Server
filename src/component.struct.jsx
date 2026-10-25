function Home() {
    return <h1>Welcome to Home</h1>;
}

function About() {
    return <h1>About Us</h1>;
}

function Contact() {
    return <h1>Contact Us</h1>;
}

function Feedback() {
    return <h1>Give Your Feedback</h1>;
}

function Header() {
    return (
        <div
            className="Container"
            style={{
                backgroundColor: "orange",
                fontFamily: "-apple-system",
                display: "flex",
                gap: "20px",
                padding: "10px"
            }}
        >
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Feedback</div>
        </div>
    );
}

function Footer() {
    return (
        <>
            <h1>For More Details Visit the Contact Section</h1>
            <p>Otherwise, visit the site below:</p>
            <a href="https://www.google.com/">
                www.google.com
            </a>
        </>
    );
}

function Error() {
    return (
        <>
            <h1>Oops! Unable to load the Page</h1>
            <p>Page not Found! Error 404</p>
        </>
    );
}

function MiddleSection() {
    let middlepart = "About";

    let Select = null;

    if (middlepart === "Home") {
        Select = Home;
    } 
    else if (middlepart === "About") {
        Select = About;
    } 
    else if (middlepart === "Contact") {
        Select = Contact;
    } 
    else if (middlepart === "Feedback") {
        Select = Feedback;
    } 
    else {
        Select = Error;
    }

    return <Select />;
}

function Homepage() {
    return (
        <>
            <Header/>
            <MiddleSection/>
            <Footer/>
        </>
    );
}

export default Homepage;
