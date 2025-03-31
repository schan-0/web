const styles = {
    wrapper: {
        margin: "auto",
        marginTop: "20px",
        padding: "2em",
        display: "flex",
        flexDirection: "row",
        borderRadius: 16,
        width: "44%",
        boxShadow : "1px 1px 5px 1px rgb(81, 82, 91) inset"
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }, contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        color: "black",
        fontSize: "1.6em",
        fontWeight: "bold",
        margin: "10px",
        alignItem: "center"
    },
    metadata: {
        color: "black",
        fontSize: "1em",
        fontWeight: "light",
        color: "#a5a5a5",
        textAlign: "right",
    },
    commentText: {
        color: "black",
        fontSize: 16,
        margin: "10px",
        marginTop: "2em",
        paddingRight: "3em"
    },
};

export default styles;