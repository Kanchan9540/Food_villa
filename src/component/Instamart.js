import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            
            {/* //condition rendering */}
            {(isVisible) ? (
            // If isVisible is true, render the "Hide" button
            <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button>
            ) : (
            // If isVisible is false, render the "Show" button
            <button onClick={() => setIsVisible(true)} className="cursor-pointer underline ">Show</button>
            )
            } 

            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState()  //with the help of one state variable we can handle the all the sections

    return(
        <div>
            <>
            <h1 className="text-3xl p-2 m-2 font-bold text-center underline">Instamart</h1>

            <Section title={"About Instamart"}  // this have a own state and own props
            description = {"This is the About section of Instamart.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}  //description  is passes as a props   
            isVisible = {isVisibleSection == "About"}  // isVisible controls its visible or not
            setIsVisible={() => setIsVisibleSection("About")} // setVisible control what is visible
            />

            <Section title={"Team Instamart"} // this have a own state and own props
            description = {"This is the Team  section of InstamartOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}  //description  is passes as a props
            isVisible = {isVisibleSection == "Team"}  
            setIsVisible={() => setIsVisibleSection("Team")}  
            />

            <Section title={"Career Instamart"} // this have a own state and own props
                description = {"This is the Career section of Instamart.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}  //description  is passes as a props
            isVisible = {isVisibleSection == "Career"}  
            setIsVisible={() => setIsVisibleSection("Career")}  
            />

            <Section title={"Product Instamart"} // this have a own state and own props
                description = {"This is the Product section of Instamart.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}  //description  is passes as a props
            isVisible = {isVisibleSection == "Product"}
            setIsVisible={() => setIsVisibleSection("Product")}
            />

            <Section title={"Details Instamart"} // this have a own state and own props
                description = {"This is the Details section of Instamart.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}  //description  is passes as a props
            isVisible = {isVisibleSection == "Details"}
            setIsVisible={() => setIsVisibleSection("Details")}
            />
                {/* <AboutInstaMart/>
                <DetailInstaMart/>
                <TeamsInstaMart/>
                <ProductInstaMart/>
                <CareerInstaMart/> */}

            </>
        </div>
    )
}
export default Instamart;