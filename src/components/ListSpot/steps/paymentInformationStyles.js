const paymentInformationStyles = {
    root: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 0px",
    },
    inputElement: {
      margin: "1%"
    },
    cardInfor: {
      width: "60%"
    },
    cardExpired: {
        width: "10%",
        "margin-right": "10px"
    },
    button: {
        width: "100%"
    },
    formControl: {
        width: "60%"
    },
    sectionTitle: {
        "text-align": "left",
        "padding-left": "10%",
        color: "#ffa38b !important"
    },
    title: {
        color: "#ffa38b !important"
    },
    subheader: {
        width: "80%"
    },
    group: {
        "margin-left" : "50%",
        width: "150px"
    },
    gridList: {
        flexWrap: 'wrap',
        "flex-direction": "column",
        display: "flex",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
    instructions: {
        width:"60%",
        "margin-top": "20px",
        "margin-bottom": "20px",
    }
      
  };
  
  export default paymentInformationStyles;