const Section = ({ sectionId, children }) => {
    return (
        <section id={sectionId} className="px-4 md:px-8 lg:px-16 pt-8">
            {children}
        </section>
    );
};

export default Section;
