const tamanhoFonte = (prarameterSize) => {

    if( prarameterSize === "small"){
      document.body.style.fontSize="14px";
      localStorage.setItem("Fontsize", "14px")
    }
    
    if( prarameterSize === "medium"){
      document.body.style.fontSize="16px";
      localStorage.setItem("Fontsize", "16px")
    }
  
    if( prarameterSize === "big"){
      document.body.style.fontSize="20px";
      localStorage.setItem("Fontsize", "20px")
    }
    
    console.log(prarameterSize)
    
  }
  
export default tamanhoFonte;