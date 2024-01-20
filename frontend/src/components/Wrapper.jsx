const Wrapper = ({ name, style = "", children }) => {
    return (
        <div className={`${name ? name : "wrapper"} ${style}`}>{children}</div>
    );
};

export default Wrapper;
